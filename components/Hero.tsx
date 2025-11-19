'use client';

import { TrendingUp, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt="Retail Store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">Trending #1 Retail Platform</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover What's
            <span className="block text-blue-400">Trending Today</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of shoppers discovering and rating the best products. 
            Share your finds, vote on favorites, and stay ahead of retail trends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-3xl font-bold text-white">4.9</span>
              </div>
              <p className="text-sm text-gray-400">Average Rating</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-3xl font-bold text-white">50K+</span>
              </div>
              <p className="text-sm text-gray-400">Active Users</p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-3xl font-bold text-white">1M+</span>
              </div>
              <p className="text-sm text-gray-400">Product Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}