import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function ThemeDemoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Theme Switcher Demo
          </h1>
          <p className="text-slate-400 text-lg">
            Click the button in the top right to switch between themes
          </p>
        </div>

        {/* Theme Switcher */}
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>

        {/* Demo Content */}
        <div className="space-y-6 rounded-lg border border-slate-700 bg-slate-800/50 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Sample Content
          </h2>
          <p className="text-slate-300">
            This is a demonstration of the theme switcher component. The component
            supports three themes:
          </p>

          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">Light:</strong> Clean white
                background with dark text
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">Dark:</strong> Slate dark
                background (default)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">•</span>
              <span>
                <strong className="text-white">OLED Midnight:</strong> Pure
                black background for OLED displays
              </span>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-700">
            <h3 className="text-lg font-medium text-white mb-2">
              Features:
            </h3>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>✓ Smooth transitions between themes</li>
              <li>✓ Persistent theme selection (in-memory)</li>
              <li>✓ Sleek dropdown with hover effects</li>
              <li>✓ Green checkmark for active theme</li>
              <li>✓ Icon indicators for each theme</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-slate-500">
          Built with React, Tailwind CSS, and Lucide Icons
        </div>
      </div>
    </div>
  );
}