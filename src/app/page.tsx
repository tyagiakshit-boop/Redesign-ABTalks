'use client';

import { Flame, Github, Linkedin, Rocket, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative px-6 pt-16 pb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50 animate-pulse">
              <Flame className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent leading-tight">
              60 Days. 60 Projects.<br />Get Noticed.
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto leading-relaxed">
              Transform your coding journey with daily challenges designed for Indian college students
            </p>
            
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold text-lg shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 transition-all hover:scale-105"
            >
              Start Day 1
              <ArrowRight className="w-5 h-5" />
            </a>
            
            {/* Social Proof */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full">
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-slate-300">Join <span className="font-bold text-orange-400">2,000+</span> CSE Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-5 h-5 text-orange-400" />
                  <h3 className="font-semibold text-lg">Build</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Complete daily coding challenges from DSA to full-stack projects
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Github className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-lg">Push to GitHub</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Upload your code and build your portfolio with every commit
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-lg">Post on LinkedIn</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Share your progress and showcase your work to potential employers
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-green-500/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                4
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-lg">Maintain Streak</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Code daily, build consistency, and watch your streak grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Join?</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              Build Real Projects
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Not just theory - build 60 real projects that matter for your career
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Stand Out to Recruiters
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A visible track record of 60 days of consistent coding shows dedication
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-400" />
              Level Up Skills
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              From basics to advanced - master DSA, system design, and full-stack development
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-6 py-8 mb-8">
        <div className="bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-blue-500/20 border border-orange-500/30 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Career?</h3>
            <p className="text-slate-300 mb-6 text-sm max-w-sm mx-auto">
              Start your 60-day journey today and join thousands of students already coding their way to success
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full font-semibold shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 transition-all hover:scale-105"
            >
              Start Day 1 Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}