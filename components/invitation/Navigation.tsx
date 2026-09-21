"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation } from "@/data/invitation";
import { MusicControl } from "../audio/MusicControl";
import { CloseIcon, HeartIcon, MenuIcon } from "../ui/Icon";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // While the nav sits transparent over the (typically dark) hero photo, its
  // text needs to be light to stay legible; once a solid ivory backdrop
  // appears behind it, it switches to dark text for contrast the other way.
  const isLight = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-md shadow-[0_1px_0_rgba(58,42,31,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between px-5 transition-[color,text-shadow] duration-500 sm:px-8 ${
          isLight ? "text-shadow-soft text-ivory" : "text-brown"
        }`}
      >
        <a
          href="#home"
          className="focus-ring flex items-center gap-1.5 font-display text-lg tracking-wide"
        >
          {navigation.logo}
          <HeartIcon className="h-3.5 w-3.5 text-terracotta" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`focus-ring text-sm uppercase tracking-[0.18em] transition-colors ${
                isLight ? "text-ivory/85 hover:text-ivory" : "text-brown-soft hover:text-brown"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <MusicControl tone={isLight ? "light" : "dark"} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`focus-ring flex h-9 w-9 items-center justify-center rounded-full border transition-colors md:hidden ${
              isLight
                ? "border-ivory/30 text-ivory/90 hover:border-ivory/60 hover:text-ivory"
                : "border-brown/15 text-brown/80 hover:border-brown/35 hover:text-brown"
            }`}
          >
            {menuOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ivory/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring rounded-md px-2 py-3 text-sm uppercase tracking-[0.18em] text-brown-soft transition-colors hover:text-brown"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
