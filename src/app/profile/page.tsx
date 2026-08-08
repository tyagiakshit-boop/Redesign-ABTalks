'use client';

import { Flame, Trophy, Calendar, Target, Settings, LogOut, Award, BookOpen, Clock } from 'lucide-react';

export default function Profile() {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@college.edu',
    college: 'Delhi University',
    year: '3rd Year',
    branch: 'Computer Science',
    streak: 12,
    totalPoints: 2450,
    challengesCompleted: 18,
    rank: 42,
    badges: ['Early Bird', 'Streak Master', 'Problem Solver'],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-slate-400">Your coding journey</p>
      </div>

      {/* Profile Card */}
      <div className="px-6 mb-6">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-2xl font-bold shadow-lg">
              AJ
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-sm text-slate-400">{user.college}</p>
              <p className="text-xs text-slate-500">{user.year} • {user.branch}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-800/50 rounded-xl p-3 text-center">
              <Flame className="w-5 h-5 mx-auto mb-1 text-orange-400" />
              <div className="text-lg font-bold">{user.streak}</div>
              <div className="text-xs text-slate-400">Streak</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-3 text-center">
              <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-400" />
              <div className="text-lg font-bold">{user.totalPoints}</div>
              <div className="text-xs text-slate-400">Points</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-3 text-center">
              <Target className="w-5 h-5 mx-auto mb-1 text-purple-400" />
              <div className="text-lg font-bold">#{user.rank}</div>
              <div className="text-xs text-slate-400">Rank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-bold mb-4">Achievements</h3>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-yellow-400" />
            <div>
              <div className="font-semibold">Badges Earned</div>
              <div className="text-sm text-slate-400">{user.badges.length} badges</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-bold mb-4">Activity</h3>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="font-medium text-sm">Challenges Completed</div>
                <div className="text-xs text-slate-400">Total problems solved</div>
              </div>
            </div>
            <div className="text-lg font-bold text-orange-400">{user.challengesCompleted}</div>
          </div>

          <div className="h-px bg-slate-800" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-medium text-sm">Time Coded</div>
                <div className="text-xs text-slate-400">Total hours spent</div>
              </div>
            </div>
            <div className="text-lg font-bold text-orange-400">48h</div>
          </div>

          <div className="h-px bg-slate-800" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="font-medium text-sm">Days Active</div>
                <div className="text-xs text-slate-400">Out of 60 days</div>
              </div>
            </div>
            <div className="text-lg font-bold text-orange-400">23/60</div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="px-6">
        <h3 className="text-lg font-bold mb-4">Settings</h3>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden">
          <button className="w-full flex items-center gap-4 p-4 hover:bg-slate-800/50 transition-colors">
            <Settings className="w-5 h-5 text-slate-400" />
            <span className="flex-1 text-left font-medium">Account Settings</span>
          </button>
          <div className="h-px bg-slate-800" />
          <button className="w-full flex items-center gap-4 p-4 hover:bg-slate-800/50 transition-colors">
            <BookOpen className="w-5 h-5 text-slate-400" />
            <span className="flex-1 text-left font-medium">Learning Preferences</span>
          </button>
          <div className="h-px bg-slate-800" />
          <button className="w-full flex items-center gap-4 p-4 hover:bg-slate-800/50 transition-colors text-red-400">
            <LogOut className="w-5 h-5" />
            <span className="flex-1 text-left font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}