'use client';

import { Check, Star, TrendingUp, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for casual shoppers',
      features: [
        'Basic product ratings',
        'View trending products',
        'Limited community access',
        'Mobile app access',
        'Standard support',
      ],
      icon: Star,
      color: 'border-gray-200',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800 text-white',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For serious shoppers and influencers',
      features: [
        'Unlimited ratings & reviews',
        'Advanced trending analytics',
        'Full social discovery features',
        'Priority support',
        'Exclusive product previews',
        'Share & earn rewards',
        'Custom profile badge',
        'Ad-free experience',
      ],
      icon: TrendingUp,
      color: 'border-blue-500 ring-4 ring-blue-100',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For brands and retailers',
      features: [
        'Everything in Pro',
        'Brand analytics dashboard',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'Advanced reporting',
      ],
      icon: Zap,
      color: 'border-gray-200',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800 text-white',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your shopping needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'transform scale-105' : 'hover:-translate-y-1'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === 'Pro' ? (
                  <a
                    href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 px-6 rounded-lg text-center font-semibold transition-all duration-300 hover:shadow-lg ${plan.buttonStyle}`}
                  >
                    Get Started Now
                  </a>
                ) : (
                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg ${plan.buttonStyle}`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30 Days</div>
              <div className="text-gray-600">Money Back Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">SSL</div>
              <div className="text-gray-600">Secure Payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}