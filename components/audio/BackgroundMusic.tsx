"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { audio as audioConfig } from "@/data/invitation";

type BackgroundMusicContextValue = {
  isMuted: boolean;
  isPlaying: boolean;
  toggleMute: () => void;
};

const BackgroundMusicContext = createContext<BackgroundMusicContextValue | null>(null);

const STORAGE_KEY = "bgm-muted";

/**
 * Mounts the single, app-wide <audio> element and manages autoplay /
 * mute state. Mount once at the layout level — never per page or section.
 */
export function BackgroundMusic({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const pendingStart = useRef(false);
  const userMutedExplicitly = useRef(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    let storedMuted: string | null = null;
    try {
      storedMuted = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable — fall back to attempting autoplay.
    }

    if (storedMuted === "true") {
      userMutedExplicitly.current = true;
      setIsMuted(true);
      return;
    }

    el.muted = false;
    el.play().then(
      () => {
        setIsMuted(false);
        setIsPlaying(true);
      },
      () => {
        // Autoplay blocked — wait quietly for the first user interaction.
        pendingStart.current = true;
        setIsMuted(false);
      }
    );
  }, []);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const tryStart = () => {
      if (!pendingStart.current || userMutedExplicitly.current) return;
      el.play()
        .then(() => {
          pendingStart.current = false;
          setIsPlaying(true);
        })
        .catch(() => {
          // Still no playable source (or blocked again) — stay in the
          // "available" state and wait for the next interaction.
        });
    };

    window.addEventListener("pointerdown", tryStart, { once: true });
    window.addEventListener("keydown", tryStart, { once: true });
    return () => {
      window.removeEventListener("pointerdown", tryStart);
      window.removeEventListener("keydown", tryStart);
    };
  }, []);

  const toggleMute = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;

    setIsMuted((prev) => {
      const next = !prev;
      if (next) {
        userMutedExplicitly.current = true;
        el.muted = true;
        setIsPlaying(false);
      } else {
        userMutedExplicitly.current = false;
        el.muted = false;
        pendingStart.current = false;
        el.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            pendingStart.current = true;
          });
      }
      try {
        localStorage.setItem(STORAGE_KEY, String(next));
      } catch {
        // ignore persistence failures
      }
      return next;
    });
  }, []);

  return (
    <BackgroundMusicContext.Provider value={{ isMuted, isPlaying, toggleMute }}>
      <audio ref={audioRef} src={audioConfig.src} loop preload="none" />
      {children}
    </BackgroundMusicContext.Provider>
  );
}

export function useBackgroundMusic() {
  const ctx = useContext(BackgroundMusicContext);
  if (!ctx) {
    throw new Error("useBackgroundMusic must be used within a BackgroundMusic provider");
  }
  return ctx;
}
