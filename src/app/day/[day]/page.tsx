'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Github, Linkedin, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Mock data for different days
const mockChallengeData: Record<number, {
  day: number;
  title: string;
  description: string;
  difficulty: string;
  points: number;
  instructions: string[];
  example?: string;
}> = {
  12: {
    day: 12,
    title: "Two Sum Problem",
    description: "Given an array of integers, return indices of two numbers that add up to a specific target.",
    difficulty: "Medium",
    points: 50,
    instructions: [
      "Create a function that takes an array of integers and a target sum",
      "Return the indices of the two numbers that add up to the target",
      "You may assume that each input would have exactly one solution",
      "You may not use the same element twice"
    ],
    example: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: nums[0] + nums[1] = 2 + 7 = 9"
  },
  1: {
    day: 1,
    title: "Hello World",
    description: "Write your first program that prints 'Hello, World!' to the console.",
    difficulty: "Easy",
    points: 10,
    instructions: [
      "Create a new file in your preferred language",
      "Write code to print 'Hello, World!'",
      "Run the program to verify it works",
      "Push your code to GitHub"
    ]
  }
};

// Default challenge for days without specific data
const defaultChallenge = {
  day: 0,
  title: "Daily Coding Challenge",
  description: "Complete today's coding challenge and push your solution.",
  difficulty: "Medium",
  points: 50,
  instructions: [
    "Read the challenge requirements carefully",
    "Write clean, efficient code",
    "Test your solution with multiple test cases",
    "Push your code to GitHub and share on LinkedIn"
  ]
};

export default function ChallengeDay() {
  const params = useParams();
  const day = parseInt(params.day as string);
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [challenge, setChallenge] = useState(mockChallengeData[day] || { ...defaultChallenge, day });
  
  const [formData, setFormData] = useState({
    githubUrl: '',
    linkedinUrl: ''
  });

  useEffect(() => {
    // Simulate API call to fetch challenge details
    const fetchChallenge = async () => {
      try {
        // Try to fetch from backend
        const response = await fetch(`http://localhost:8080/api/challenges/${day}`);
        if (!response.ok) throw new Error('Backend not available');
        const data = await response.json();
        setChallenge(data);
      } catch (error) {
        // Use mock data as fallback
        console.log('Using mock data - backend not available');
        setChallenge(mockChallengeData[day] || { ...defaultChallenge, day });
      } finally {
        setLoading(false);
      }
    };

    fetchChallenge();
  }, [day]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.githubUrl || !formData.linkedinUrl) {
      alert('Please fill in both URLs');
      return;
    }

    setSubmitting(true);

    try {
      // Simulate API call to submit proof
      const response = await fetch('http://localhost:8080/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: challenge.day,
          githubUrl: formData.githubUrl,
          linkedinUrl: formData.linkedinUrl
        }),
      });

      if (!response.ok) throw new Error('Backend not available');
      
      // Success!
      setSubmitted(true);
    } catch (error) {
      // Simulate success even if backend is down
      console.log('Submission simulated - backend not available');
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading challenge...</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold mb-3 text-green-400">Challenge Complete!</h2>
          <p className="text-slate-300 mb-2">Amazing work! You've completed Day {challenge.day}</p>
          <p className="text-slate-400 text-sm mb-8">+{challenge.points} points added to your account</p>
          
          <div className="space-y-3">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold shadow-lg shadow-orange-500/50 hover:shadow-xl transition-all"
            >
              Back to Dashboard
            </Link>
            <Link
              href={`/day/${day + 1}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900/50 border border-slate-800 rounded-xl font-semibold hover:bg-slate-800 transition-all"
            >
              Next Challenge
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-50 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Dashboard</span>
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-3">
              Day {challenge.day} of 60
            </div>
            <h1 className="text-3xl font-bold mb-2">{challenge.title}</h1>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-400">Difficulty: <span className="text-yellow-400 font-medium">{challenge.difficulty}</span></span>
              <span className="text-slate-400">Points: <span className="text-orange-400 font-medium">{challenge.points}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Description */}
      <div className="px-6 mb-6">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-3">Description</h2>
          <p className="text-slate-300 mb-4 leading-relaxed">{challenge.description}</p>
          
          {challenge.example && (
            <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-slate-400 mb-2">Example</h3>
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{challenge.example}</pre>
            </div>
          )}

          <h3 className="text-sm font-semibold text-slate-400 mb-3">Instructions</h3>
          <ul className="space-y-2">
            {challenge.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="flex-shrink-0 w-5 h-5 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-xs font-semibold">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{instruction}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Submission Form */}
      <div className="px-6">
        <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-2 border-orange-500/30 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-1">Submit Your Work</h2>
          <p className="text-sm text-slate-400 mb-6">Share your GitHub repository and LinkedIn post to complete this challenge</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* GitHub URL Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Github className="w-4 h-4 inline-block mr-2" />
                GitHub Repository/Commit URL
              </label>
              <input
                type="url"
                required
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/username/repo"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-50 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
            </div>

            {/* LinkedIn URL Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Linkedin className="w-4 h-4 inline-block mr-2" />
                LinkedIn Post URL
              </label>
              <input
                type="url"
                required
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                placeholder="https://linkedin.com/posts/..."
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl text-slate-50 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-500/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Submit Challenge
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Tips Section */}
      <div className="px-6 mt-6">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-blue-400 mb-2">💡 Pro Tips</h3>
          <ul className="space-y-1 text-xs text-slate-400">
            <li>• Make sure your GitHub repo is public</li>
            <li>• Add a README.md explaining your solution</li>
            <li>• Tag #60DaysOfCode in your LinkedIn post</li>
            <li>• Share what you learned, not just the code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}