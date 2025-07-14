import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiCalendar, FiImage, FiCpu, FiEdit3, FiFolder, FiArrowRight, FiZap, FiStar, FiTrendingUp, FiUsers, FiRefreshCw } = FiIcons;

const mainFeatures = [
  {
    icon: FiTarget,
    title: 'Smart Content Capture',
    description: 'Intelligent content detection and capture across all major platforms.',
    features: [
      'Auto-detection: Automatically captures captions from Facebook and Pinterest',
      'Manual selection: Select any text or right-click images to save content',
      'Multi-platform support: Works across supported social media platforms',
      'Smart processing: Automatic caption cleaning and optimization'
    ],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
  },
  {
    icon: FiCalendar,
    title: 'Advanced Scheduling System',
    description: 'Professional-grade scheduling with AI-powered optimization.',
    features: [
      'AI Post Robot Integration: Direct API integration for automated posting',
      'Professional Interface: Visual post management with bulk operations',
      'Smart scheduling: Fixed, random, and optimal timing algorithms',
      'Album support: Create and schedule photo albums',
      'Instant publishing: Immediate posting capabilities'
    ],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
  },
  {
    icon: FiImage,
    title: 'AI Image+ Generator & Editor',
    description: 'Revolutionary AI-powered image creation with Google Gemini.',
    features: [
      'Revolutionary AI Creation: Generate stunning images using Google Gemini\'s native image model',
      'Multi-Image Generation: Create unlimited variations with single prompts',
      'Interactive Chatbox: Conversational AI interface for natural image creation',
      '25+ Predefined Prompts: Categorized prompts for various image types and styles',
      'Custom Prompt Library: Create and save personalized AI prompts',
      'Context-Aware Generation: Use post titles/captions for relevant image creation'
    ],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop'
  },
  {
    icon: FiCpu,
    title: 'AI-Powered Text Features',
    description: 'Advanced AI text generation and optimization powered by Google Gemini.',
    features: [
      'Google Gemini Integration: Advanced AI text generation and rewriting',
      'Multiple AI Models: Support for various Gemini models with favorites system',
      'API Key Rotation: Automatic rotation for rate limit management',
      'Custom Prompts: 4 default rewrite prompts (Engaging, Shorten, Professional, Casual)',
      'Image Analysis: AI-powered image understanding and caption generation'
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop'
  },
  {
    icon: FiEdit3,
    title: 'Professional Image Editor',
    description: 'Complete image editing suite with AI-powered enhancements.',
    features: [
      'Advanced Editing: Professional image editing with AI-powered enhancements',
      'Crop Presets: Social media optimized ratios (1:1, 16:9, 9:16)',
      'Watermark Support: Drag-and-drop watermark positioning',
      'Text Overlays: Custom text elements with font management',
      'Custom Fonts: Upload and use custom fonts (.ttf, .otf, .woff, .woff2)',
      'Visual Tools: Interactive selection and editing with real-time feedback'
    ],
    image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=400&fit=crop'
  },
  {
    icon: FiFolder,
    title: 'Content Management',
    description: 'Comprehensive content organization and analytics system.',
    features: [
      'Category Organization: Organize content by custom categories',
      'Bulk Operations: Select and manage multiple posts simultaneously',
      'Export/Import: CSV export and import capabilities',
      'Statistics: Monitor performance and capture analytics',
      'Media Library: Efficient storage and retrieval system'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
  }
];

const Features = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Powerful Features for Modern Content Creators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
            >
              Everything you need to create, schedule, and manage your social media presence
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-white/10 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">{feature.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    ))}
                  </div>
                  <a
                    href={`#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-medium flex items-center"
                  >
                    Learn more
                    <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          >
            {[
              { value: '12+', label: 'Social Platforms' },
              { value: '10X', label: 'Faster Workflow' },
              { value: '24/7', label: 'AI Automation' },
              { value: '100K+', label: 'Happy Users' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-ai-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Get Started Free
            </Link>
            <Link
              to="/pricing"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View Pricing Plans
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-12 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Feature Highlights
            </h2>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto">
              Discover how our powerful tools can transform your social media workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FiZap,
                title: "AI-Powered",
                color: "bg-electric-purple",
                description: "Leverage advanced AI models to create better content in less time"
              },
              {
                icon: FiStar,
                title: "Premium Quality",
                color: "bg-ai-blue",
                description: "Professional-grade tools for creating stunning visuals and engaging text"
              },
              {
                icon: FiTrendingUp,
                title: "Growth Focused",
                color: "bg-neon-green",
                description: "Optimize your content strategy to maximize engagement and reach"
              },
              {
                icon: FiUsers,
                title: "Team Collaboration",
                color: "bg-warning-orange",
                description: "Seamless workflows for teams with role-based permissions"
              },
              {
                icon: FiRefreshCw,
                title: "Automated Workflows",
                color: "bg-ai-blue",
                description: "Set it and forget it with intelligent automation"
              },
              {
                icon: FiCalendar,
                title: "Smart Scheduling",
                color: "bg-electric-purple",
                description: "AI determines the optimal posting times for maximum engagement"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-slate-gray">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Complete Feature Breakdown
            </h2>
            <p className="text-xl text-slate-gray">
              Explore every powerful capability of the Ai Post Robot browser extension.
            </p>
          </div>
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12`}
                id={feature.title.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mb-6">
                    <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-slate-gray leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;