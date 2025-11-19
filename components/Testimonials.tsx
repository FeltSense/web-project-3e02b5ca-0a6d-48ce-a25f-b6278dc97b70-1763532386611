'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      company: 'Style Maven',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'RetailHub has completely transformed how I discover new products. The community ratings are incredibly helpful and I love seeing what\'s trending in real-time!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Tech Reviewer',
      company: 'Gadget Guide',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'The voting system is genius. I can quickly see what products the community loves and trust their recommendations. It\'s become my go-to shopping companion.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Beauty Blogger',
      company: 'Glow Up',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'I love the social discovery features! Following other shoppers with similar tastes has helped me find amazing products I would have never discovered on my own.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Home Décor Expert',
      company: 'Interior Insights',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'The trending content feature keeps me ahead of the curve. I can spot emerging trends before they hit mainstream, which is invaluable for my business.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Fitness Coach',
      company: 'Active Life',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      quote: 'The quality verification gives me confidence in every purchase. Knowing that ratings come from real users makes all the difference in my shopping decisions.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Food Critic',
      company: 'Taste Matters',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      quote: 'Being able to share my finds and earn rewards is fantastic. RetailHub has turned my passion for discovering great products into something rewarding!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Loved by Shoppers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust RetailHub for their shopping decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}