"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function applyThemeMode(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", mode);
}

function readStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("octopus-theme") as ThemeMode | null;
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => readStoredMode());

  useEffect(() => {
    applyThemeMode(mode);
  }, [mode]);

  function cycleMode() {
    const next: ThemeMode = mode === "dark" ? "light" : "dark";
    setMode(next);
    window.localStorage.setItem("octopus-theme", next);
    applyThemeMode(next);
  }

  const title = mode === "dark" ? "主题：暗黑" : "主题：明亮";

  return (
    <button
      type="button"
      onClick={cycleMode}
      className="glass inline-flex h-11 w-11 items-center justify-center rounded-full text-[color:var(--foreground)] transition hover:brightness-105 active:brightness-95"
      aria-label="切换主题"
      title={title}
    >
      {mode === "dark" ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : mode === "light" ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7 17 17M7 7 5.3 5.3" strokeLinecap="round" />
        </svg>
      ) : null}
    </button>
  );
}
