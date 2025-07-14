import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiStar, FiArrowRight, FiMessageCircle, FiMail, FiPhone, FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiGlobe, FiEdit3, FiMusic, FiCamera, FiMapPin, FiMessageSquare } = FiIcons;

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Early Plan',
      price: { monthly: 500, yearly: 6000 },
      description: 'Perfect for getting started with AI-powered social media',
      features: [
        '1 social media account',
        'All 12+ social media channels',
        'Post scheduling',
        'Monthly post limit',
        'Bulk upload',
        'Recurring posting',
        'Automations',
        'Drafts & post preview',
        'URL link shortener',
        'Media gallery',
        'AI assistant',
        'AI post ideas',
        'AI powered browser extension',
        '1 click API scheduling',
        'Team members',
        'Access control',
        'Brands management'
      ],
      cta: 'Start Early Plan',
      popular: true,
      badge: 'Limited Time Only'
    },
    {
      name: 'Monthly Plan',
      price: { monthly: 1000, yearly: 12000 },
      description: 'Full-featured plan for serious content creators',
      features: [
        '1 social media account',
        'All 12+ social media channels',
        'Post scheduling',
        'Monthly post limit',
        'Bulk upload',
        'Recurring posting',
        'Automations',
        'Drafts & post preview',
        'URL link shortener',
        'Media gallery',
        'AI assistant',
        'AI post ideas',
        'AI powered browser extension',
        '1 click API scheduling',
        'Team members',
        'Access control',
        'Brands management'
      ],
      cta: 'Start Monthly Plan',
      popular: false
    },
    {
      name: 'Lifetime',
      price: { monthly: 15000, yearly: 15000 },
      description: 'One-time payment for lifetime access',
      features: [
        '1 social media account',
        'All 12+ social media channels',
        'Post scheduling',
        'Monthly post limit',
        'Bulk upload',
        'Recurring posting',
        'Automations',
        'Drafts & post preview',
        'URL link shortener',
        'Media gallery',
        'AI assistant',
        'AI post ideas',
        'AI powered browser extension',
        '1 click API scheduling',
        'Team members',
        'Access control',
        'Brands management',
        'Lifetime updates',
        'Priority support'
      ],
      cta: 'Get Lifetime Access',
      popular: false,
      badge: 'Best Value'
    }
  ];

  const supportChannels = [
    {
      icon: FiMessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      note: 'Mention code LAUNCH50 for 50% off your first month',
      onClick: () => {
        if (window.Tawk_API) {
          window.Tawk_API.toggle();
        }
      }
    },
    {
      icon: FiPhone,
      title: 'WhatsApp/Call',
      description: 'Direct contact for immediate assistance',
      availability: '+94 723456726',
      action: 'Contact Now',
      note: 'Mention code LAUNCH50 for 50% off your first month',
      onClick: () => {
        window.open('https://wa.me/94723456726', '_blank');
      }
    },
    {
      icon: FiMail,
      title: 'Email Support',
      description: 'Send detailed questions and purchase requests',
      availability: 'contact@aipostrobot.com',
      action: 'Send Email',
      note: 'Mention code LAUNCH50 for 50% off your first month',
      onClick: () => {
        window.open('mailto:contact@aipostrobot.com', '_blank');
      }
    }
  ];

  const socialMediaChannels = [
    { name: 'Facebook', icon: FiFacebook, color: '#1877F2' },
    { name: 'Instagram', icon: FiInstagram, color: '#E4405F' },
    { name: 'Threads', icon: FiMessageSquare, color: '#000000' },
    { name: 'X (Twitter)', icon: FiTwitter, color: '#1DA1F2' },
    { name: 'TikTok', icon: FiMusic, color: '#000000' },
    { name: 'Youtube', icon: FiYoutube, color: '#FF0000' },
    { name: 'Google Business', icon: FiGlobe, color: '#4285F4' },
    { name: 'LinkedIn', icon: FiLinkedin, color: '#0077B5' },
    { name: 'Pinterest', icon: FiMapPin, color: '#BD081C' },
    { name: 'WordPress', icon: FiEdit3, color: '#21759B' },
    { name: 'Telegram', icon: FiMessageCircle, color: '#0088CC' },
    { name: 'Bluesky', icon: FiCamera, color: '#00A8E8' }
  ];

  const allFeatures = [
    'Channel Connections',
    'Post Scheduling', 
    'Monthly Post Limit',
    'Bulk Upload',
    'Recurring Posting',
    'Automations',
    'Drafts',
    'Post Preview',
    'URL Link Shortener',
    'Media Gallery',
    'AI Assistant',
    'AI Post Ideas',
    'AI powered browser extension',
    '1 click API scheduling',
    'Team Members',
    'Access Control',
    'Brands Management'
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
            Simple Pricing Per Account
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-gray mb-8"
          >
            Choose the perfect plan for your social media needs. All plans include access to 12+ platforms.
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
          </motion.div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="bg-neon-green text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold">
            🎉 Get 50% off your first month! Use code: <span className="font-bold">LAUNCH50</span>
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
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className={`${plan.popular ? 'bg-electric-purple' : 'bg-neon-green'} text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center`}>
                      <SafeIcon icon={FiStar} className="w-4 h-4 mr-1" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <p className="text-slate-gray mb-4">{plan.description}</p>
                  <div className="mb-4">
                    {plan.name === 'Lifetime' ? (
                      <div>
                        <span className="text-4xl font-bold text-charcoal">LKR {plan.price.monthly}</span>
                        <span className="text-slate-gray"> one-time</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-charcoal">
                          LKR {isYearly ? plan.price.yearly : plan.price.monthly}
                        </span>
                        <span className="text-slate-gray">/{isYearly ? 'year' : 'month'}</span>
                      </div>
                    )}
                  </div>
                  {isYearly && plan.name !== 'Lifetime' && (
                    <p className="text-sm text-neon-green font-medium">
                      Save LKR {(plan.price.monthly * 12) - plan.price.yearly} per year
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

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
                    plan.popular
                      ? 'btn-primary text-white'
                      : 'btn-secondary text-ai-blue hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              How to Buy & Activate Your Account
            </h2>
            <p className="text-xl text-slate-gray">
              Choose your preferred method to purchase and activate your AI Post Robot account
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 hover-lift shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={channel.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">{channel.title}</h3>
                <p className="text-slate-gray mb-4">{channel.description}</p>
                <p className="text-sm text-ai-blue font-medium mb-4">{channel.availability}</p>
                <div className="bg-neon-green/10 rounded-lg p-3 mb-6">
                  <p className="text-sm text-neon-green font-medium">{channel.note}</p>
                </div>
                <button 
                  onClick={channel.onClick}
                  className="btn-primary px-6 py-2 text-sm font-semibold text-white rounded-lg"
                >
                  {channel.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Channels */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Supported Social Media Channels
            </h2>
            <p className="text-xl text-slate-gray">
              Connect and manage all your social media accounts from one dashboard
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {socialMediaChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center hover-lift"
              >
                <div className="flex justify-center mb-2">
                  <SafeIcon 
                    icon={channel.icon} 
                    className="w-8 h-8" 
                    style={{ color: channel.color }}
                  />
                </div>
                <div className="text-sm font-medium text-charcoal">{channel.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              What's Included in All Plans
            </h2>
            <p className="text-xl text-slate-gray">
              Every plan includes these powerful features to supercharge your social media presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-charcoal font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Social Media Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of content creators who are already dominating their social media presence with AI Post Robot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center"
            >
              <SafeIcon icon={FiMessageCircle} className="mr-2 w-5 h-5" />
              Contact Us to Get Started
            </Link>
            <Link
              to="/features"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Learn More About Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;