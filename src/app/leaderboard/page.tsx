'use client';

import { Trophy, Medal, Award, TrendingUp, Users, Flame } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Rahul Sharma', college: 'IIT Bombay', streak: 45, points: 2850, avatar: 'RS' },
  { rank: 2, name: 'Priya Patel', college: 'BITS Pilani', streak: 38, points: 2720, avatar: 'PP' },
  { rank: 3, name: 'Arjun Kumar', college: 'NIT Trichy', streak: 42, points: 2650, avatar: 'AK' },
  { rank: 4, name: 'Sneha Reddy', college: 'IIIT Hyderabad', streak: 35, points: 2580, avatar: 'SR' },
  { rank: 5, name: 'Vikram Singh', college: 'IIT Delhi', streak: 40, points: 2510, avatar: 'VS' },
  { rank: 6, name: 'Ananya Gupta', college: 'IIT Madras', streak: 33, points: 2440, avatar: 'AG' },
  { rank: 7, name: 'Rohan Mehta', college: 'BITS Goa', streak: 37, points: 2370, avatar: 'RM' },
  { rank: 8, name: 'Kavya Nair', college: 'NIT Warangal', streak: 31, points: 2300, avatar: 'KN' },
  { rank: 9, name: 'Aditya Joshi', college: 'IIT Kanpur', streak: 29, points: 2230, avatar: 'AJ' },
  { rank: 10, name: 'Ishita Verma', college: 'IIIT Delhi', streak: 28, points: 2160, avatar: 'IV' },
];

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-300" />;
      case 3: return <Award className="w-6 h-6 text-orange-400" />;
      default: return <span className="text-lg font-bold text-slate-400">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-yellow-500/30';
      case 2: return 'bg-gradient-to-r from-gray-400/10 to-gray-500/5 border-gray-400/30';
      case 3: return 'bg-gradient-to-r from-orange-500/10 to-orange-600/5 border-orange-500/30';
      default: return 'bg-slate-900/50 border-slate-800';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-slate-400">Top performers this week</p>
      </div>

      {/* Top 3 Podium */}
      <div className="px-6 mb-8">
        <div className="flex items-end justify-center gap-3 mb-6">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xl font-bold text-slate-900 mb-2 shadow-lg">
              {leaderboardData[1].avatar}
            </div>
            <div className="text-sm font-medium mb-1">{leaderboardData[1].name.split(' ')[0]}</div>
            <div className="text-xs text-slate-400 mb-2">{leaderboardData[1].points} pts</div>
            <div className="w-20 h-24 bg-gradient-to-t from-gray-400/20 to-transparent border-2 border-gray-400/50 rounded-t-lg flex items-center justify-center">
              <Medal className="w-8 h-8 text-gray-300" />
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-2xl font-bold text-slate-900 mb-2 shadow-lg shadow-yellow-500/50">
              {leaderboardData[0].avatar}
            </div>
            <div className="text-sm font-semibold mb-1">{leaderboardData[0].name.split(' ')[0]}</div>
            <div className="text-xs text-yellow-400 mb-2">{leaderboardData[0].points} pts</div>
            <div className="w-24 h-32 bg-gradient-to-t from-yellow-500/20 to-transparent border-2 border-yellow-500/50 rounded-t-lg flex items-center justify-center">
              <Trophy className="w-10 h-10 text-yellow-400" />
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-xl font-bold text-slate-900 mb-2 shadow-lg">
              {leaderboardData[2].avatar}
            </div>
            <div className="text-sm font-medium mb-1">{leaderboardData[2].name.split(' ')[0]}</div>
            <div className="text-xs text-orange-400 mb-2">{leaderboardData[2].points} pts</div>
            <div className="w-20 h-20 bg-gradient-to-t from-orange-500/20 to-transparent border-2 border-orange-500/50 rounded-t-lg flex items-center justify-center">
              <Award className="w-8 h-8 text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of Leaderboard */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Rankings</h2>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <Users className="w-4 h-4" />
            <span>50K+ participants</span>
          </div>
        </div>

        <div className="space-y-2">
          {leaderboardData.slice(3).map((user) => (
            <div
              key={user.rank}
              className={`${getRankBg(user.rank)} border rounded-2xl p-4 flex items-center gap-4`}
            >
              <div className="flex-shrink-0 w-8 text-center">
                {getRankIcon(user.rank)}
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm mb-1 truncate">{user.name}</div>
                <div className="text-xs text-slate-400 truncate">{user.college}</div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-right">
                  <div className="text-sm font-semibold text-orange-400">{user.points}</div>
                  <div className="text-xs text-slate-400">points</div>
                </div>
                <div className="flex items-center gap-1 text-orange-400">
                  <Flame className="w-4 h-4" />
                  <span className="text-sm font-medium">{user.streak}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}