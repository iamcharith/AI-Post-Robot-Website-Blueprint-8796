import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiStar, FiArrowRight } = FiIcons;

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started',
      features: [
        '3 social media accounts',
        '10 posts per month',
        'Basic scheduling',
        'Content library',
        'Email support'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Creator',
      price: { monthly: 29, yearly: 24 },
      description: 'For serious content creators',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'AI-powered scheduling',
        'Browser extension',
        'AI image generator',
        'Content capture',
        'Analytics & insights',
        'Priority support'
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true
    },
    {
      name: 'Pro',
      price: { monthly: 79, yearly: 65 },
      description: 'For teams and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Team collaboration',
        'White-label options',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support'
      ],
      cta: 'Start 14-Day Free Trial',
      popular: false
    }
  ];

  const allFeatures = [
    {
      category: 'Content Management',
      features: [
        { name: 'Posts per month', starter: '10', creator: 'Unlimited', pro: 'Unlimited' },
        { name: 'Content library', starter: '✓', creator: '✓', pro: '✓' },
        { name: 'Bulk upload', starter: '✗', creator: '✓', pro: '✓' },
        { name: 'Content templates', starter: '✗', creator: '✓', pro: '✓' }
      ]
    },
    {
      category: 'AI Features',
      features: [
        { name: 'AI image generator', starter: '✗', creator: '✓', pro: '✓' },
        { name: 'AI text generation', starter: '✗', creator: '✓', pro: '✓' },
        { name: 'Smart scheduling', starter: '✗', creator: '✓', pro: '✓' },
        { name: 'Content optimization', starter: '✗', creator: '✗', pro: '✓' }
      ]
    },
    {
      category: 'Team & Collaboration',
      features: [
        { name: 'Team members', starter: '1', creator: '3', pro: 'Unlimited' },
        { name: 'Approval workflows', starter: '✗', creator: '✗', pro: '✓' },
        { name: 'Role management', starter: '✗', creator: '✗', pro: '✓' },
        { name: 'White-label options', starter: '✗', creator: '✗', pro: '✓' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll refund your payment.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export your content and analytics during this period.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees or hidden charges. You only pay for your chosen plan.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
          >
            Choose Your Plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-gray mb-8"
          >
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4"
          >
            <span className={`text-sm font-medium ${!isYearly ? 'text-charcoal' : 'text-slate-gray'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-ai-blue' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-charcoal' : 'text-slate-gray'}`}>
              Yearly
            </span>
            <span className="bg-neon-green text-white text-xs px-2 py-1 rounded-full font-medium">
              Save 17%
            </span>
          </motion.div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-warning-orange text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold">
            🎉 Get 50% off your first 3 months! Use code: <span className="font-bold">LAUNCH50</span>
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover-lift ${
                  plan.popular ? 'border-2 border-electric-purple' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-electric-purple text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <SafeIcon icon={FiStar} className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <p className="text-slate-gray mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-charcoal">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-slate-gray">/{isYearly ? 'month' : 'month'}</span>
                  </div>
                  {isYearly && plan.price.monthly > 0 && (
                    <p className="text-sm text-neon-green font-medium">
                      Save ${(plan.price.monthly - plan.price.yearly) * 12}/year
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-neon-green mr-3" />
                      <span className="text-slate-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'btn-primary text-white'
                      : 'btn-secondary text-ai-blue hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-slate-gray">
              See exactly what's included in each plan.
            </p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {allFeatures.map((category, categoryIndex) => (
              <div key={category.category} className={categoryIndex > 0 ? 'border-t border-gray-200' : ''}>
                <div className="bg-gray-50 px-6 py-4">
                  <h3 className="text-lg font-semibold text-charcoal">{category.category}</h3>
                </div>
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="grid grid-cols-4 gap-4 px-6 py-4 border-t border-gray-100">
                    <div className="text-slate-gray font-medium">{feature.name}</div>
                    <div className="text-center text-slate-gray">{feature.starter}</div>
                    <div className="text-center text-slate-gray">{feature.creator}</div>
                    <div className="text-center text-slate-gray">{feature.pro}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-2">{faq.question}</h3>
                <p className="text-slate-gray">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enterprise Solutions
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Need a custom solution for your large team or agency? We offer enterprise-grade features with dedicated support.
          </p>
          <button className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-lg inline-flex items-center">
            Contact Sales
            <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;