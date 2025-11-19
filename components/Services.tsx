'use client';

import { Star, TrendingUp, Users, Download, Award, Share2 } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Star,
      title: 'Rating & Voting System',
      description: 'Rate products, vote on favorites, and see what the community loves. Your opinion shapes the trends.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: TrendingUp,
      title: 'Trending Content',
      description: 'Stay ahead with real-time trending products and categories. Never miss what\'s hot in retail.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Users,
      title: 'Social Discovery',
      description: 'Connect with fellow shoppers, follow trends, and discover products through community recommendations.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Download,
      title: 'Easy Access',
      description: 'Download our app or sign up instantly. Access your favorite products and reviews anywhere, anytime.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      title: 'Quality Verified',
      description: 'All ratings are verified by real users. Trust the community to guide your shopping decisions.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Share2,
      title: 'Share & Earn',
      description: 'Share your favorite finds with friends and earn rewards. Build your reputation as a trendsetter.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to enhance your shopping experience and keep you connected with the latest trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}