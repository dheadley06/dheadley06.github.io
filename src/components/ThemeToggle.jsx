import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((prev) => !prev);
  }

  return (
    <button
      type="button"
      className="nav__theme-toggle"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={handleClick}
    >
      {isDark ? "☾" : "☀"}
    </button>
  );
}
