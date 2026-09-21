"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

type ParallaxImageProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** How far the image drifts vertically as the section scrolls, in px. */
  strength?: number;
  /** Overlay a soft gradient scrim for text legibility. */
  scrim?: "none" | "bottom" | "top" | "radial" | "full";
  quality?: number;
};

const scrimClass: Record<NonNullable<ParallaxImageProps["scrim"]>, string> = {
  none: "",
  bottom: "bg-gradient-to-t from-brown/70 via-brown/15 to-transparent",
  top: "bg-gradient-to-b from-brown/60 via-brown/10 to-transparent",
  radial:
    "bg-[radial-gradient(ellipse_at_center,rgba(58,42,31,0.05),rgba(58,42,31,0.55))]",
  full: "bg-brown/35",
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "100vw",
  strength = 40,
  scrim = "none",
  quality = 88,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength / 2, strength / 2]);

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder="blur"
      className={`object-cover ${imgClassName}`}
      style={{ transform: "scale(1.08)" }}
    />
  );

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      {prefersReducedMotion ? (
        <div className="absolute inset-0">{image}</div>
      ) : (
        <motion.div style={{ y }} className="absolute inset-0">
          {image}
        </motion.div>
      )}
      {scrim !== "none" && (
        <div className={`absolute inset-0 ${scrimClass[scrim]}`} aria-hidden="true" />
      )}
    </div>
  );
}
