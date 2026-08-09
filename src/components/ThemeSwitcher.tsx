"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "oled";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark", "oled");
    root.classList.add(theme);
  }, [theme]);

  const themes = [
    {
      value: "light" as Theme,
      label: "Light",
      icon: Sun,
      description: "Light mode",
    },
    {
      value: "dark" as Theme,
      label: "Dark",
      icon: Moon,
      description: "Dark mode",
    },
    {
      value: "oled" as Theme,
      label: "OLED Midnight",
      icon: Monitor,
      description: "OLED dark mode",
    },
  ];

  const currentTheme = themes.find((t) => t.value === theme);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-slate-600 transition-all duration-200"
        aria-label="Toggle theme"
      >
        {currentTheme?.icon && <currentTheme.icon className="w-5 h-5" />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Popover Content - Centered on screen */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-64 max-w-[calc(100vw-2rem)] sm:w-64 rounded-lg border border-slate-700 bg-slate-900 p-1.5 shadow-lg">
            {/* Header */}
            <div className="px-2 py-1.5">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Appearance
              </span>
            </div>

            {/* Theme Options */}
            <div className="mt-1.5 space-y-0.5">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isSelected = theme === themeOption.value;

                return (
                  <button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-2 py-2 rounded-md
                      transition-all duration-200 group
                      ${
                        isSelected
                          ? "bg-slate-800 text-white"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        flex items-center justify-center w-8 h-8 rounded-md
                        transition-colors duration-200
                        ${
                          isSelected
                            ? "bg-slate-700 text-emerald-400"
                            : "bg-slate-800/50 text-slate-400 group-hover:text-slate-300"
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Label and Description */}
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium">{themeOption.label}</div>
                      <div className="text-xs text-slate-500">
                        {themeOption.description}
                      </div>
                    </div>

                    {/* Checkmark for Selected Theme */}
                    {isSelected && (
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}