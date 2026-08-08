'use client';

import { Home, Flame, BookOpen, Trophy, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Flame, label: 'Dashboard', href: '/dashboard' },
  { icon: BookOpen, label: 'Challenges', href: '/challenges' },
  { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto bg-slate-900/95 backdrop-blur-md border-t border-slate-800 z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-orange-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`relative ${isActive ? 'scale-110' : ''}`}>
                <Icon className="w-6 h-6" />
                {isActive && (
                  <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-md -z-10" />
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}