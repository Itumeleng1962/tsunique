import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      onClick={toggle}
      data-testid="theme-toggle"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface transition-colors duration-300 hover:border-gold ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
        >
          {dark ? <Sun className="h-4.5 w-4.5 text-gold" strokeWidth={1.75} style={{ width: 18, height: 18 }} /> : <Moon className="h-4.5 w-4.5 text-gold" strokeWidth={1.75} style={{ width: 18, height: 18 }} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
