import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDark]);

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
