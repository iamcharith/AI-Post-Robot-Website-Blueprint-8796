import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiArrowRight, 
  FiRefreshCw, 
  FiEdit3, 
  FiTarget, 
  FiCalendar,
  FiImage, 
  FiCpu, 
  FiEdit, 
  FiFolder,
  FiClock,
  FiGlobe,
  FiLayers,
  FiStar
} = FiIcons;

const BrowserExtension = () => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => setIsPublishing(false), 3000);
  };
  
  // Key features data
  const keyFeatures = [
    {
      icon: FiTarget,
      title: "Smart Content Capture",
      description: "Intelligent content detection and capture from multiple sources",
      details: [
        "Auto-detection: Automatically captures captions from Facebook and Pinterest",
        "Manual selection: Select any text or right-click images to save content",
        "Multi-platform support: Works across supported social media platforms",
        "Smart processing: Automatic caption cleaning and optimization"
      ]
    },
    {
      icon: FiCalendar,
      title: "Advanced Scheduling System",
      description: "Professional-grade scheduling with AI-powered optimization",
      details: [
        "AI Post Robot Integration: Direct API integration for automated posting",
        "Professional Interface: Visual post management with bulk operations",
        "Smart scheduling: Fixed, random, and optimal timing algorithms",
        "Album support: Create and schedule photo albums",
        "Instant publishing: Immediate posting capabilities"
      ]
    },
    {
      icon: FiImage,
      title: "AI Image+ Generator & Editor",
      description: "Revolutionary AI-powered image creation with Google Gemini",
      details: [
        "Revolutionary AI Creation: Generate stunning images using Google Gemini's native image model",
        "Multi-Image Generation: Create unlimited variations with single prompts",
        "Interactive Chatbox: Conversational AI interface for natural image creation",
        "25+ Predefined Prompts: Categorized prompts for various image types and styles",
        "Custom Prompt Library: Create and save personalized AI prompts",
        "Context-Aware Generation: Use post titles/captions for relevant image creation"
      ]
    },
    {
      icon: FiCpu,
      title: "AI-Powered Text Features",
      description: "Advanced AI text generation and optimization powered by Google Gemini",
      details: [
        "Google Gemini Integration: Advanced AI text generation and rewriting",
        "Multiple AI Models: Support for various Gemini models with favorites system",
        "API Key Rotation: Automatic rotation for rate limit management",
        "Custom Prompts: 4 default rewrite prompts (Engaging, Shorten, Professional, Casual)",
        "Image Analysis: AI-powered image understanding and caption generation"
      ]
    },
    {
      icon: FiEdit,
      title: "Professional Image Editor",
      description: "Complete image editing suite with AI-powered enhancements",
      details: [
        "Advanced Editing: Professional image editing with AI-powered enhancements",
        "Crop Presets: Social media optimized ratios (1:1, 16:9, 9:16)",
        "Watermark Support: Drag-and-drop watermark positioning",
        "Text Overlays: Custom text elements with font management",
        "Custom Fonts: Upload and use custom fonts (.ttf, .otf, .woff, .woff2)",
        "Visual Tools: Interactive selection and editing with real-time feedback"
      ]
    },
    {
      icon: FiFolder,
      title: "Content Management",
      description: "Comprehensive content organization and analytics system",
      details: [
        "Category Organization: Organize content by custom categories",
        "Bulk Operations: Select and manage multiple posts simultaneously",
        "Export/Import: CSV export and import capabilities",
        "Statistics: Monitor performance and capture analytics",
        "Media Library: Efficient storage and retrieval system"
      ]
    }
  ];
  
  // Platforms data
  const platforms = [
    {
      name: 'Instagram',
      subtext: 'Stories & Reels',
      icon: '📷',
      status: 'Connected',
      followers: '456K',
      engagement: '8.9%',
      color: 'linear-gradient(135deg, #E4405F, #C13584)'
    },
    {
      name: 'Facebook',
      subtext: 'Stories & Reels',
      icon: '📘',
      status: 'Connected',
      followers: '345K',
      engagement: '4.2%',
      color: 'linear-gradient(135deg, #1877F2, #166fe5)'
    },
    {
      name: 'X (Twitter)',
      icon: '🐦',
      status: 'Connected',
      followers: '234K',
      engagement: '12.3%',
      color: 'linear-gradient(135deg, #1DA1F2, #0d8bd9)'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      status: 'Connected',
      followers: '789K',
      engagement: '15.7%',
      color: 'linear-gradient(135deg, #000000, #333333)'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      status: 'Connected',
      followers: '123K',
      engagement: '6.8%',
      color: 'linear-gradient(135deg, #0077B5, #005885)'
    },
    {
      name: 'YouTube',
      icon: '📺',
      status: 'Connected',
      followers: '567K',
      engagement: '7.9%',
      color: 'linear-gradient(135deg, #FF0000, #cc0000)'
    },
    {
      name: 'Pinterest',
      icon: '📌',
      status: 'Connected',
      followers: '89K',
      engagement: '11.2%',
      color: 'linear-gradient(135deg, #BD081C, #9a0615)'
    },
    {
      name: 'Threads',
      icon: '🧵',
      status: 'Connected',
      followers: '67K',
      engagement: '9.4%',
      color: 'linear-gradient(135deg, #000000, #333333)'
    },
    {
      name: 'WordPress',
      icon: '📝',
      status: 'Connected',
      followers: '23K',
      engagement: '5.8%',
      color: 'linear-gradient(135deg, #21759B, #1a5f7a)'
    },
    {
      name: 'Telegram',
      icon: '✈️',
      status: 'Connected',
      followers: '45K',
      engagement: '13.6%',
      color: 'linear-gradient(135deg, #0088cc, #006699)'
    },
    {
      name: 'Google Business',
      icon: '🏢',
      status: 'Connected',
      followers: '12K',
      engagement: '8.3%',
      color: 'linear-gradient(135deg, #4285F4, #3367d6)'
    },
    {
      name: 'Bluesky',
      icon: '🦋',
      status: 'Connected',
      followers: '8K',
      engagement: '14.2%',
      color: 'linear-gradient(135deg, #00A8E8, #0077b6)'
    }
  ];

  // Feature tabs
  const featureTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'capture', label: 'Content Capture' },
    { id: 'scheduling', label: 'Scheduling' },
    { id: 'ai-image', label: 'AI Image Generator' },
    { id: 'ai-text', label: 'AI Text' },
    { id: 'editor', label: 'Image Editor' },
    { id: 'management', label: 'Content Management' }
  ];

  // Core features for hero section
  const coreFeatures = [
    {
      icon: FiImage,
      title: "AI Image Generator",
      description: "Create stunning visuals with our Gemini-powered AI",
      features: ["Multi-image generation", "Interactive chatbox", "25+ predefined prompts"]
    },
    {
      icon: FiCalendar,
      title: "Smart Scheduling",
      description: "AI-powered timing for maximum engagement",
      features: ["Optimal posting times", "Multi-platform support", "Automated queue"]
    },
    {
      icon: FiCpu,
      title: "AI Content Creation",
      description: "Generate engaging content automatically",
      features: ["Platform optimization", "Brand voice consistency", "Trend analysis"]
    },
    {
      icon: FiEdit,
      title: "Professional Editor",
      description: "Complete image editing suite with AI enhancements",
      features: ["Advanced editing tools", "Custom templates", "Brand assets"]
    },
    {
      icon: FiTarget,
      title: "Content Capture",
      description: "Save and schedule content from anywhere",
      features: ["One-click save", "Auto categorization", "Smart tagging"]
    },
    {
      icon: FiFolder,
      title: "Content Management",
      description: "Organize and analyze your content strategy",
      features: ["Analytics dashboard", "Content calendar", "Performance metrics"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            >
              Browser Extension
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-gray mb-8"
            >
              Capture, create, and schedule content directly from your browser.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center">
                Install Extension <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary px-8 py-3 text-lg font-semibold text-ai-blue rounded-lg inline-flex items-center justify-center">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Features Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-electric-purple/10 to-ai-blue/10 rounded-2xl p-8 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-slate-gray mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-gray">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="btn-primary px-8 py-3 text-white font-semibold rounded-lg inline-flex items-center"
              >
                Explore All Features <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
          
          {/* Platform Management */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-ai-blue via-electric-purple to-neon-green bg-clip-text text-transparent">
                  🚀 Multi-Platform Publishing Hub
                </span>
              </h2>
              <p className="text-lg text-slate-gray">One Dashboard, 12+ Platforms, Unlimited Reach</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* AI Content Creator */}
              <div className="lg:col-span-2 bg-gradient-to-br from-light-gray to-gray-50 rounded-xl p-4 border border-gray-200 relative">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-bold text-charcoal flex items-center gap-2">
                    ✨ AI Content Creator
                  </h3>
                </div>
                
                <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                  <div className="w-full h-20 bg-hero-gradient rounded-lg mb-3 flex items-center justify-center text-2xl text-white relative overflow-hidden">
                    🎯
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="text-charcoal text-sm min-h-8 flex items-center">Boost your social media presence with AI-powered content creation that automatically adapts to each platform's unique requirements, leverages trending topics, and maintains your brand's distinctive voice across all channels<span className="inline-block w-0.5 h-4 bg-ai-blue ml-1 animate-pulse"></span></div>
                    <p className="text-slate-gray text-sm mt-2 mb-2"></p>
                    <div className="text-slate-gray text-xs mb-2">
                      ✓ Multi-platform optimization
                      <br />
                      ✓ Brand voice consistency
                      <br />
                      ✓ Engagement-focused content
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="bg-ai-blue text-white px-2 py-1 rounded-full text-xs">#AI</span>
                      <span className="bg-ai-blue text-white px-2 py-1 rounded-full text-xs">#Viral</span>
                      <span className="bg-ai-blue text-white px-2 py-1 rounded-full text-xs">#Content</span>
                      <span className="bg-ai-blue text-white px-2 py-1 rounded-full text-xs">#Social</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handlePublish}
                  className="w-full bg-gradient-to-r from-neon-green to-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all duration-300 text-sm flex items-center justify-center"
                >
                  {isPublishing ? (
                    <>
                      <span className="mr-2">Publishing...</span>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    </>
                  ) : (
                    <>
                      🚀 Publish to All Platforms
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
                
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-electric-purple to-purple-600 text-white px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  AI Processing...
                </div>
              </div>
              
              {/* Platforms Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={platform.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-3 shadow-sm border transition-all duration-300 relative overflow-hidden border-warning-orange bg-orange-50"
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-white mb-2 mx-auto"
                        style={{ background: platform.color }}
                      >
                        {platform.icon}
                      </div>
                      <h4 className="font-semibold text-charcoal text-xs mb-1 text-center truncate">
                        {platform.name}
                      </h4>
                      {platform.subtext && (
                        <p className="text-[10px] text-slate-gray leading-tight mb-1 text-center">
                          {platform.subtext}
                        </p>
                      )}
                      <p className="text-xs text-slate-gray mb-2 text-center">{platform.status}</p>
                      <div className="text-center">
                        <div className="text-xs font-bold text-ai-blue">{platform.followers}</div>
                        <div className="text-xs text-slate-gray">{platform.engagement}</div>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 bg-neon-green rounded-b-lg animate-pulse w-full"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Key Features Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-charcoal mb-4">Key Features</h2>
              <p className="text-lg text-slate-gray max-w-3xl mx-auto">
                Discover all the powerful capabilities that make our browser extension the ultimate tool for content creators
              </p>
            </div>
            
            {/* Feature Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2">
              {featureTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-ai-blue text-white'
                      : 'bg-light-gray text-slate-gray hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 hover-lift shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-slate-gray mb-4">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-neon-green rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-gray">{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Feature Spotlight Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-charcoal mb-4">Feature Spotlight</h2>
              <p className="text-lg text-slate-gray max-w-3xl mx-auto">
                Take a closer look at our most powerful features
              </p>
            </div>
            
            {/* AI Image Generator Feature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-purple to-ai-blue rounded-lg flex items-center justify-center mr-4">
                      <SafeIcon icon={FiImage} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">AI Image+ Generator</h3>
                  </div>
                  
                  <p className="text-slate-gray mb-6">
                    Our revolutionary AI image generator powered by Google Gemini creates stunning visuals for your content with just a few clicks.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-charcoal">Multi-Image Generation</h4>
                        <p className="text-sm text-slate-gray">Create unlimited variations with a single prompt</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-charcoal">Interactive Chatbox</h4>
                        <p className="text-sm text-slate-gray">Natural conversation interface for image creation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-charcoal">25+ Predefined Prompts</h4>
                        <p className="text-sm text-slate-gray">Categorized prompts for various image types and styles</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary px-6 py-3 text-white font-semibold rounded-lg inline-flex items-center">
                    Try AI Image Generator <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-electric-purple/10 to-ai-blue/10 rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-2 shadow-md">
                        <div className="bg-gray-100 rounded h-32 mb-2 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-electric-purple/30 to-ai-blue/30 animate-pulse"></div>
                        </div>
                        <div className="text-xs text-slate-gray">AI-generated social post</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-md">
                        <div className="bg-gray-100 rounded h-32 mb-2 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-neon-green/30 to-ai-blue/30 animate-pulse"></div>
                        </div>
                        <div className="text-xs text-slate-gray">Product showcase</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-md">
                        <div className="bg-gray-100 rounded h-32 mb-2 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-warning-orange/30 to-electric-purple/30 animate-pulse"></div>
                        </div>
                        <div className="text-xs text-slate-gray">Brand illustration</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-md">
                        <div className="bg-gray-100 rounded h-32 mb-2 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-ai-blue/30 to-neon-green/30 animate-pulse"></div>
                        </div>
                        <div className="text-xs text-slate-gray">Custom banner</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-white rounded-lg p-3 shadow-md">
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 bg-hero-gradient rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">🤖</span>
                        </div>
                        <div className="text-sm font-medium">AI Prompt Assistant</div>
                      </div>
                      <div className="bg-gray-50 rounded p-2 text-xs text-slate-gray">
                        Create a vibrant social media post about digital marketing with modern abstract elements
                        <span className="inline-block w-0.5 h-3 bg-ai-blue ml-1 animate-pulse"></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-electric-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Google Gemini Powered
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Advanced Scheduling System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="bg-gradient-to-br from-neon-green/10 to-ai-blue/10 rounded-xl p-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-hero-gradient px-4 py-2 text-white text-sm font-medium">
                        Advanced Scheduling Calendar
                      </div>
                      
                      <div className="p-4">
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                            <div key={i} className="text-center text-xs font-medium text-slate-gray">
                              {day}
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1">
                          {Array.from({ length: 35 }).map((_, i) => {
                            const day = i - 2;
                            const isToday = day === 15;
                            const hasPost = [3, 7, 12, 15, 19, 23, 27].includes(day);
                            const isOptimal = [7, 15, 23].includes(day);
                            
                            return (
                              <div 
                                key={i} 
                                className={`
                                  h-10 rounded-lg flex items-center justify-center text-xs relative
                                  ${day < 1 || day > 30 ? 'text-gray-300' : 'text-charcoal'}
                                  ${isToday ? 'bg-ai-blue text-white font-bold' : ''}
                                  ${hasPost && !isToday ? 'bg-light-gray' : ''}
                                `}
                              >
                                {day > 0 && day <= 30 ? day : ''}
                                {hasPost && (
                                  <div className={`absolute bottom-1 w-1 h-1 rounded-full ${isOptimal ? 'bg-neon-green' : 'bg-warning-orange'}`}></div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 p-3">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-warning-orange rounded-full mr-1"></div>
                            <span className="text-slate-gray">Scheduled (8)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-neon-green rounded-full mr-1"></div>
                            <span className="text-slate-gray">Optimal time (3)</span>
                          </div>
                          <div className="flex items-center">
                            <SafeIcon icon={FiClock} className="w-3 h-3 text-ai-blue mr-1" />
                            <span className="text-slate-gray">Auto-scheduled</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                        <div className="text-xs font-medium text-charcoal mb-1">Fixed Time</div>
                        <div className="text-xs text-slate-gray">9:00 AM Daily</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                        <div className="text-xs font-medium text-charcoal mb-1">Random Time</div>
                        <div className="text-xs text-slate-gray">9-11 AM Range</div>
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-sm border border-neon-green">
                        <div className="text-xs font-medium text-charcoal mb-1">AI Optimal</div>
                        <div className="text-xs text-neon-green">Best Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-ai-blue rounded-lg flex items-center justify-center mr-4">
                      <SafeIcon icon={FiCalendar} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal">Advanced Scheduling System</h3>
                  </div>
                  
                  <p className="text-slate-gray mb-6">
                    Our professional-grade scheduling system uses AI to find the perfect time to post for maximum engagement across all platforms.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <SafeIcon icon={FiGlobe} className="w-5 h-5 text-ai-blue mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">AI Post Robot Integration</h4>
                        <p className="text-sm text-slate-gray">Direct API integration for automated posting</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <SafeIcon icon={FiLayers} className="w-5 h-5 text-ai-blue mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Professional Interface</h4>
                        <p className="text-sm text-slate-gray">Visual post management with bulk operations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <SafeIcon icon={FiClock} className="w-5 h-5 text-ai-blue mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Smart Scheduling</h4>
                        <p className="text-sm text-slate-gray">Fixed, random, and optimal timing algorithms</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <SafeIcon icon={FiStar} className="w-5 h-5 text-ai-blue mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-charcoal">Album Support & Instant Publishing</h4>
                        <p className="text-sm text-slate-gray">Create and schedule photo albums or publish immediately</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary px-6 py-3 text-white font-semibold rounded-lg inline-flex items-center">
                    Explore Scheduling Features <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Features Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 hover-lift shadow-lg"
            >
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={FiEdit3} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Content Capture</h3>
              <p className="text-slate-gray">Right-click any content online and save it directly to your scheduling queue with one click.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 hover-lift shadow-lg"
            >
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={FiRefreshCw} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Auto-Optimization</h3>
              <p className="text-slate-gray">AI automatically optimizes your content for each platform's specific requirements and audience.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 hover-lift shadow-lg"
            >
              <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={FiArrowRight} className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">One-Click Publishing</h3>
              <p className="text-slate-gray">Schedule or publish your content across all platforms with a single click, saving hours of manual work.</p>
            </motion.div>
          </div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-hero-gradient rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media Workflow?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Install the Ai Post Robot browser extension today and start creating, scheduling, and publishing content like a pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-ai-blue px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                Install Extension
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BrowserExtension;