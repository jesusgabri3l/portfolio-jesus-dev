"use client";

import { motion, type MotionValue } from "framer-motion";

export function ProgressBar({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="fixed inset-x-0 top-[57px] z-30 h-[3px] bg-ink/12">
      <motion.div
        className="h-full origin-left bg-ink"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
