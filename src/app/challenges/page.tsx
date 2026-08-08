'use client';

import { Flame, BookOpen, Clock, Star, Filter } from 'lucide-react';

const challenges = [
  { id: 1, day: 1, title: 'Hello World', difficulty: 'Easy', points: 10, completed: true, category: 'Basics' },
  { id: 2, day: 2, title: 'Two Sum', difficulty: 'Medium', points: 30, completed: true, category: 'DSA' },
  { id: 3, day: 3, title: 'Palindrome Check', difficulty: 'Easy', points: 20, completed: true, category: 'DSA' },
  { id: 4, day: 4, title: 'FizzBuzz', difficulty: 'Easy', points: 15, completed: true, category: 'Basics' },
  { id: 5, day: 5, title: 'Array Rotation', difficulty: 'Medium', points: 35, completed: true, category: 'DSA' },
  { id: 6, day: 6, title: 'Valid Parentheses', difficulty: 'Easy', points: 20, completed: false, category: 'DSA' },
  { id: 7, day: 7, title: 'Merge Sorted Arrays', difficulty: 'Medium', points: 40, completed: false, category: 'DSA' },
  { id: 8, day: 8, title: 'Binary Search', difficulty: 'Easy', points: 25, completed: false, category: 'Algorithms' },
  { id: 9, day: 9, title: 'Linked List Cycle', difficulty: 'Medium', points: 35, completed: false, category: 'DSA' },
  { id: 10, day: 10, title: 'LRU Cache', difficulty: 'Hard', points: 60, completed: false, category: 'System Design' },
];

export default function Challenges() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard': return 'text-red-400 bg-red-500/20';
      default: return 'text-slate-400 bg-slate-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-bold mb-2">Challenges</h1>
        <p className="text-slate-400">60 days of coding challenges</p>
      </div>

      {/* Progress Bar */}
      <div className="px-6 mb-6">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Your Progress</span>
            <span className="text-sm text-orange-400 font-semibold">5/60 Days</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full" style={{ width: '8.33%' }} />
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="px-6 mb-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl text-sm hover:bg-slate-800 transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Challenges List */}
      <div className="px-6 space-y-3">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-5 transition-all hover:scale-[1.02] ${
              challenge.completed ? 'border-orange-500/30' : 'border-slate-800'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                challenge.completed
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {challenge.completed ? <Flame className="w-6 h-6" /> : challenge.day}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-base truncate">{challenge.title}</h3>
                  {challenge.completed && <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 ml-2" />}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                  <span className="text-xs text-slate-400">{challenge.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>~30 min</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-orange-400">
                    <Star className="w-4 h-4" />
                    <span>{challenge.points} pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}