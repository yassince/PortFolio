"use client";

import { motion, useReducedMotion } from "framer-motion";

export const revealEase = [0.22, 1, 0.36, 1];

const VIEW = { once: true, amount: 0.18 };

export default function Reveal({ children, className, delay = 0, y = 16, ...props }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.35, ease: revealEase, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealList({ children, className, stagger = 0.05 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduce ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: revealEase },
  },
};
