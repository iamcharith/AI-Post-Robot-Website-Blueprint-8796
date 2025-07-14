import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiMail, FiStar, FiSend, FiClock, FiMapPin, FiTwitter, FiInstagram, FiLinkedin, FiPhone } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    planType: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const supportChannels = [
    {
      icon: FiMessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      cta: 'Start Chat',
      onClick: () => {
        if (window.Tawk_API) {
          window.Tawk_API.toggle();
        }
      }
    },
    {
      icon: FiMail,
      title: 'Email Support',
      description: 'Send us detailed questions and feedback',
      availability: 'Response within 24 hours',
      cta: 'Send Email',
      onClick: () => {
        window.open('mailto:contact@aipostrobot.com', '_blank');
      }
    },
    {
      icon: FiStar,
      title: 'Priority Support',
      description: 'Premium support for Pro plan users',
      availability: 'Response within 2 hours',
      cta: 'Contact Priority',
      onClick: () => {
        window.location.href = '#contact-form';
      }
    }
  ];

  const inquiryTypes = [
    {
      title: 'Business Inquiries',
      items: ['Sales Questions', 'Press & Media', 'Partnership Opportunities']
    },
    {
      title: 'Feedback & Features',
      items: ['Feature Requests', 'Bug Reports', 'Product Feedback']
    },
    {
      title: 'Partnerships',
      items: ['Affiliate Program', 'API Integrations', 'White-label Solutions']
    },
    {
      title: 'Legal & Security',
      items: ['Privacy Questions', 'Security Concerns', 'Compliance']
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-gray mb-8"
          >
            We're here to help you succeed. Most questions can be answered instantly in our Help Center or via Live Chat.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => {
                if (window.Tawk_API) {
                  window.Tawk_API.toggle();
                }
              }}
              className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center"
            >
              <SafeIcon icon={FiMessageCircle} className="mr-2 w-5 h-5" />
              Start Live Chat
            </button>
            <a
              href="https://aipostrobot.tawk.help/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3 text-lg font-semibold text-ai-blue rounded-lg inline-flex items-center justify-center"
            >
              Visit Help Center
            </a>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Choose Your Support Channel
            </h2>
            <p className="text-xl text-slate-gray">
              We're here to help you in the way that works best for you.
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
                <p className="text-sm text-neon-green font-medium mb-6">{channel.availability}</p>
                <button
                  onClick={channel.onClick}
                  className="btn-primary px-6 py-2 text-sm font-semibold text-white rounded-lg"
                >
                  {channel.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-slate-gray">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="planType" className="block text-sm font-medium text-charcoal mb-2">
                    Plan Type
                  </label>
                  <select
                    id="planType"
                    name="planType"
                    value={formData.planType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue focus:border-transparent"
                  >
                    <option value="">Select your plan</option>
                    <option value="early">Early Plan</option>
                    <option value="monthly">Monthly Plan</option>
                    <option value="lifetime">Lifetime</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Other Inquiries */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-slate-gray">
              Find the right contact for your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inquiryTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 hover-lift shadow-lg"
              >
                <h3 className="text-lg font-semibold text-charcoal mb-4">{type.title}</h3>
                <ul className="space-y-2">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-gray text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <SafeIcon icon={FiClock} className="w-12 h-12 mx-auto mb-4 text-electric-purple" />
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-slate-gray">Monday - Friday: 9AM - 6PM PST</p>
              <p className="text-slate-gray">Weekend: Limited support</p>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiMapPin} className="w-12 h-12 mx-auto mb-4 text-electric-purple" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-slate-gray">#10/D, Gamunupura 1st Ln</p>
              <p className="text-slate-gray">Kaduwela, Sri Lanka</p>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiPhone} className="w-12 h-12 mx-auto mb-4 text-electric-purple" />
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p className="text-slate-gray">Phone: +94 77 726 8985</p>
              <p className="text-slate-gray">WhatsApp: +94 723456726</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-4">
                <SafeIcon icon={FiTwitter} className="w-8 h-8 text-electric-purple" />
                <SafeIcon icon={FiInstagram} className="w-8 h-8 text-electric-purple" />
                <SafeIcon icon={FiLinkedin} className="w-8 h-8 text-electric-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-slate-gray">Stay updated with our latest news</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;