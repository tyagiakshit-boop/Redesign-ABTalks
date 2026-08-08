'use client';

import { Flame, Calendar, Trophy, Target, TrendingUp, Clock, Moon, User, Award, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mock data with fallback
const mockDashboardData = {
  user: {
    name: "Alex Johnson",
    avatar: "AJ",
    currentStreak: 12,
    totalDaysCompleted: 23,
    challengesCompleted: 18,
    rank: 42,
    totalTimeCoded: "48h",
    progressPercentage: 38,
    todayTask: {
      day: 12,
      title: "Two Sum Problem",
      description: "Given an array of integers, return indices of two numbers that add up to a target",
      difficulty: "Medium",
      points: 50
    }
  }
};

export default function Dashboard() {
  const [data, setData] = useState(mockDashboardData);
  const [loading, setLoading] = useState(true);
  const [isNightOwl, setIsNightOwl] = useState(false);

  useEffect(() => {
    // Simulate API call with fallback to mock data
    const fetchDashboardData = async () => {
      try {
        // Try to fetch from backend
        const response = await fetch('http://localhost:8080/api/dashboard');
        if (!response.ok) throw new Error('Backend not available');
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        // Use mock data as fallback
        console.log('Using mock data - backend not available');
        setData(mockDashboardData);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();

    // Check if current time is between 00:00 - 04:00 AM
    const checkNightOwl = () => {
      const hour = new Date().getHours();
      setIsNightOwl(hour >= 0 && hour < 4);
    };

    checkNightOwl();
    const interval = setInterval(checkNightOwl, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading your progress...</p>
        </div>
      </div>
    );
  }

  const { user } = data;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      {/* Header with User Greeting */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-lg font-bold shadow-lg shadow-orange-500/50">
            {user.avatar}
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-slate-400 text-sm">Let's continue your journey</p>
          </div>
        </div>
      </div>

      {/* Night Owl Banner */}
      {isNightOwl && (
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center">
              <Moon className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-indigo-400">Night Owl</span>
                <Award className="w-4 h-4 text-yellow-400" />
              </div>
              <p className="text-xs text-slate-400">Coding at {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} - Keep grinding! 🌙</p>
            </div>
          </div>
        </div>
      )}

      {/* First Day Motivational Banner (shown when streak is 0) */}
      {user.currentStreak === 0 && (
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-bold mb-2 text-green-400">First Day - Let's Go!</h3>
            <p className="text-sm text-slate-300 mb-4">Every expert was once a beginner. Start your journey today!</p>
            <a
              href="/day/1"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full font-semibold shadow-lg shadow-green-500/50 hover:shadow-xl transition-all hover:scale-105"
            >
              Start Your First Challenge
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* Streak Card */}
      {user.currentStreak > 0 && (
        <div className="px-6 mb-6">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Flame className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400">{user.currentStreak}</div>
                  <div className="text-sm text-slate-300">Day Streak</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>Keep it up! You're on fire 🔥</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="px-6 mb-6">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-orange-400 font-semibold">{user.progressPercentage}% Complete</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${user.progressPercentage}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-slate-400">
            {user.totalDaysCompleted} of 60 days completed
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5">
            <Calendar className="w-6 h-6 text-blue-400 mb-3" />
            <div className="text-2xl font-bold mb-1">{user.totalDaysCompleted}</div>
            <div className="text-xs text-slate-400">Days Completed</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5">
            <Trophy className="w-6 h-6 text-yellow-400 mb-3" />
            <div className="text-2xl font-bold mb-1">{user.challengesCompleted}</div>
            <div className="text-xs text-slate-400">Challenges Done</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5">
            <Target className="w-6 h-6 text-purple-400 mb-3" />
            <div className="text-2xl font-bold mb-1">#{user.rank}</div>
            <div className="text-xs text-slate-400">Global Rank</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5">
            <Clock className="w-6 h-6 text-green-400 mb-3" />
            <div className="text-2xl font-bold mb-1">{user.totalTimeCoded}</div>
            <div className="text-xs text-slate-400">Time Coded</div>
          </div>
        </div>
      </div>

      {/* Today's Challenge - Highlighted Card */}
      <div className="px-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Today's Challenge</h2>
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-3">
                  Day {user.todayTask.day}
                </div>
                <h3 className="text-lg font-semibold mb-2">{user.todayTask.title}</h3>
                <p className="text-sm text-slate-400 mb-4">
                  {user.todayTask.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-400">Difficulty: <span className="text-yellow-400 font-medium">{user.todayTask.difficulty}</span></span>
                  <span className="text-slate-400">Points: <span className="text-orange-400 font-medium">{user.todayTask.points}</span></span>
                </div>
              </div>
            </div>
            
            <a
              href={`/day/${user.todayTask.day}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 transition-all"
            >
              Start Day {user.todayTask.day}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="px-6">
        <h2 className="text-xl font-bold mb-4">This Week</h2>
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  index < 5 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-slate-800 text-slate-500'
                }`}>
                  {day}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">5/7 days completed</span>
            <span className="text-orange-400 font-medium">71%</span>
          </div>
        </div>
      </div>
    </div>
  );
}