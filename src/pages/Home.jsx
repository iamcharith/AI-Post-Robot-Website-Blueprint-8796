import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiPlay,FiCalendar,FiImage,FiEdit,FiUsers,FiTrendingUp,FiZap,FiStar,FiArrowRight,FiSearch,FiCpu,FiBolt,FiClock,FiBarChart3,FiTarget,FiRefreshCw,FiActivity} = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiCalendar,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that finds the perfect time to post for maximum engagement.'
    },
    {
      icon: FiImage,
      title: 'AI Image Generator',
      description: 'Create stunning visuals with our Google Gemini-powered AI image generation.'
    },
    {
      icon: FiEdit,
      title: 'Content Capture',
      description: 'Right-click any content online and turn it into a scheduled social media post.'
    },
    {
      icon: FiUsers,
      title: 'Team Management',
      description: 'Collaborate with your team with roles, approvals, and content libraries.'
    },
    {
      icon: FiTrendingUp,
      title: 'Analytics & Insights',
      description: 'Track performance across all platforms with detailed analytics and insights.'
    },
    {
      icon: FiZap,
      title: 'Automation',
      description: 'Automate repetitive tasks and focus on creating amazing content.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      handle: '@MemeLord2024',
      content: 'Ai Post Robot helped me grow from 10K to 500K followers in just 6 months. The AI scheduling is incredible!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Sarah Johnson',
      handle: '@TechNewsDaily',
      content: 'The browser extension is a game-changer. I can capture trending content and schedule posts in seconds.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    },
    {
      name: 'Mike Rodriguez',
      handle: '@CreativeDesigns',
      content: 'The AI image generator saves me hours every day. My engagement has never been higher!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face'
    }
  ];

  const platforms = [
    'Twitter','Instagram','Facebook','LinkedIn','TikTok','YouTube',
    'Pinterest','Snapchat','Reddit','Discord','Telegram','WhatsApp'
  ];

  const workflowSteps = [
    {
      icon: FiSearch,
      title: 'Content Discovery',
      description: 'AI scans trending topics, competitor content, and user preferences to identify viral opportunities',
      metrics: {value1: '1,247', label1: 'Sources', value2: '89%', label2: 'Accuracy'},
      gradient: 'from-ai-blue to-blue-600'
    },
    {
      icon: FiCpu,
      title: 'AI Generation',
      description: 'Advanced AI creates optimized content including captions, hashtags, and visual elements',
      metrics: {value1: '2.3s', label1: 'Avg Time', value2: '94%', label2: 'Quality'},
      gradient: 'from-electric-purple to-purple-600'
    },
    {
      icon: FiBolt,
      title: 'Platform Optimization',
      description: 'Content automatically adapted for each platform\'s unique requirements and audience',
      metrics: {value1: '12', label1: 'Platforms', value2: '+247%', label2: 'Reach'},
      gradient: 'from-neon-green to-green-600'
    },
    {
      icon: FiClock,
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on audience activity and engagement patterns',
      metrics: {value1: '24/7', label1: 'Active', value2: '+156%', label2: 'Engagement'},
      gradient: 'from-warning-orange to-orange-600'
    },
    {
      icon: FiBarChart3,
      title: 'Analytics & Learning',
      description: 'Real-time performance tracking with AI learning to continuously improve future content',
      metrics: {value1: 'Real-time', label1: 'Updates', value2: '+89%', label2: 'ROI'},
      gradient: 'from-red-500 to-red-600'
    }
  ];

  const aiFeatures = [
    {icon: FiTarget, name: 'Trend Detection', desc: 'Real-time identification of viral opportunities', color: 'bg-ai-blue'},
    {icon: FiZap, name: 'Content Generation', desc: 'AI creates captions, hashtags, and visuals', color: 'bg-electric-purple'},
    {icon: FiRefreshCw, name: 'Auto-Optimization', desc: 'Continuous learning and improvement', color: 'bg-neon-green'},
    {icon: FiClock, name: 'Smart Timing', desc: 'Optimal posting schedule prediction', color: 'bg-warning-orange'},
    {icon: FiActivity, name: 'Performance Tracking', desc: 'Real-time analytics and insights', color: 'bg-red-500'}
  ];

  const performanceStats = [
    {value: '10X', label: 'Faster Creation'},
    {value: '247%', label: 'More Engagement'},
    {value: '89%', label: 'Time Saved'},
    {value: '12', label: 'Platforms'},
    {value: '24/7', label: 'Automation'},
    {value: '1M+', label: 'Posts Created'},
    {value: '98%', label: 'Client Retention'},
    {value: '5★', label: 'Average Rating'}
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg text-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              One-Click AI-Powered <br /> Social Media Management
            </motion.h1>
            <motion.p
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
            >
              Create, schedule, and post directly from your browser. The ultimate tool for content creators who want to dominate across platforms without the hassle.
            </motion.p>
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                to="/signup"
                className="btn-primary px-8 py-4 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center"
              >
                Start Free Trial
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-secondary px-8 py-4 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center">
                <SafeIcon icon={FiPlay} className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.6}}
              className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto"
            >
              {platforms.map((platform, index) => (
                <div key={platform} className="glass-effect rounded-lg p-3 text-center">
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Creation Pipeline */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
            >
              🚀 Content Creation Pipeline
            </motion.h2>
            <motion.p
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: true}}
              className="text-xl text-slate-gray"
            >
              AI-Powered Multi-Platform Content Generation & Distribution System
            </motion.p>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-white rounded-2xl p-6 text-center hover-lift shadow-lg border-t-4 border-transparent hover:border-ai-blue transition-all duration-300"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                  <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-sm text-slate-gray mb-4 leading-relaxed">{step.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-ai-blue">{step.metrics.value1}</div>
                    <div className="text-xs text-slate-gray uppercase tracking-wide">{step.metrics.label1}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-ai-blue">{step.metrics.value2}</div>
                    <div className="text-xs text-slate-gray uppercase tracking-wide">{step.metrics.label2}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Workflow Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Features */}
            <motion.div
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
                🧠 AI-Powered Features
              </h3>
              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.6, delay: index * 0.1}}
                    viewport={{once: true}}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-light-gray transition-colors"
                  >
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">{feature.name}</h4>
                      <p className="text-sm text-slate-gray">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Performance Stats */}
            <motion.div
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
                📊 Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {performanceStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6, delay: index * 0.1}}
                    viewport={{once: true}}
                    className="bg-light-gray rounded-xl p-4 text-center hover-lift"
                  >
                    <div className="text-2xl font-bold text-ai-blue mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-gray uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Powerful Tools for Modern Content Creators
            </h2>
            <p className="text-xl text-slate-gray max-w-3xl mx-auto">
              Everything you need to create, schedule, and manage your social media presence across all platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-white rounded-xl p-6 hover-lift"
              >
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Why Creators Choose Ai Post Robot
            </h2>
            <p className="text-xl text-slate-gray">
              Join thousands of content creators who are already dominating their niche.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.handle}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className="bg-white rounded-xl p-6 hover-lift border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                    <p className="text-ai-blue text-sm">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-slate-gray italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Level Up?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop wasting time on manual posting. Let Ai Post Robot handle the heavy lifting while you focus on creating amazing content.
            </p>
            <Link
              to="/signup"
              className="btn-primary px-12 py-4 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center"
            >
              Get Started Now - Free Trial
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;