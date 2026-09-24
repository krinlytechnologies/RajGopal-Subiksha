"use client";

import { createElement, type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

const TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
} as const;

type Tag = keyof typeof TAGS;

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.8,
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  // Skip Framer Motion entirely for reduced-motion viewers rather than just
  // neutralizing the animation values — no scroll observers, no transforms,
  // no GPU layer promotion.
  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const MotionTag = TAGS[as];
  const variants: Variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay, ease: EASE },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4, margin: "-12% 0px -8% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  stagger?: number;
  once?: boolean;
};

export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.12,
  once = true,
}: RevealGroupProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const MotionTag = TAGS[as];
  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  y?: number;
  duration?: number;
};

export function RevealItem({
  children,
  className,
  as = "div",
  y = 20,
  duration = 0.7,
}: RevealItemProps) {
  const prefersReducedMotion = useReducedMotionSafe();

  if (prefersReducedMotion) {
    return createElement(as, { className }, children);
  }

  const MotionTag = TAGS[as];
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
  };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
