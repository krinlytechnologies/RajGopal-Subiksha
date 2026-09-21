"use client";

import { useBackgroundMusic } from "./BackgroundMusic";
import { SoundOffIcon, SoundOnIcon } from "../ui/Icon";

type MusicControlProps = {
  className?: string;
  tone?: "light" | "dark";
};

const toneClass: Record<NonNullable<MusicControlProps["tone"]>, string> = {
  light: "border-ivory/30 text-ivory/90 hover:border-ivory/60 hover:text-ivory",
  dark: "border-brown/15 text-brown/80 hover:border-brown/35 hover:text-brown",
};

export function MusicControl({ className = "", tone = "dark" }: MusicControlProps) {
  const { isMuted, isPlaying, toggleMute } = useBackgroundMusic();

  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-pressed={!isMuted}
      aria-label={isMuted ? "Turn on background music" : "Turn off background music"}
      className={`focus-ring group relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${toneClass[tone]} ${className}`}
    >
      {isMuted ? (
        <SoundOffIcon className="h-4 w-4" />
      ) : (
        <SoundOnIcon className="h-4 w-4" />
      )}
      {isPlaying && (
        <span
          className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-terracotta"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
