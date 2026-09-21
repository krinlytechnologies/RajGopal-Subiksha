"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Like framer-motion's useReducedMotion, but hydration-safe: framer-motion's
 * version reads window.matchMedia synchronously during the client's first
 * render, which differs from the window-less server render and trips a
 * hydration mismatch. useSyncExternalStore is the React-sanctioned way to
 * read this kind of external, browser-only state without that mismatch.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
