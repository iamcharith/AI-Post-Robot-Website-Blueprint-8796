import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { supabase } from '../lib/supabase';

const { FiMessageCircle, FiMail, FiStar, FiSend, FiClock, FiMapPin, FiTwitter, FiInstagram, FiLinkedin, FiPhone } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    planType: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });

    try {
      const { data, error } = await supabase
        .from('contact_submissions_xyz123')
        .insert([{
          name: formData.name,
          email: formData.email,
          plan_type: formData.planType,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) throw error;

      setSubmitStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', planType: '', subject: '', message: '' });
      
      // Show success message for 3 seconds
      setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        loading: false,
        error: 'Failed to submit form. Please try again.',
        success: false
      });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Ready to transform your social media presence? Let's talk about how Ai Post Robot can help you dominate your niche.
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-slate-gray">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 hover-lift shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Live Chat</h3>
              <p className="text-slate-gray mb-4">Get instant help from our support team</p>
              <p className="text-sm text-ai-blue font-medium mb-4">Available 24/7</p>
              <button 
                onClick={() => {
                  if (window.Tawk_API) {
                    window.Tawk_API.toggle();
                  }
                }}
                className="btn-primary px-6 py-2 text-sm font-semibold text-white rounded-lg"
              >
                Start Chat
              </button>
            </motion.div>

            {/* WhatsApp/Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 hover-lift shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">WhatsApp/Call</h3>
              <p className="text-slate-gray mb-4">Direct contact for immediate assistance</p>
              <p className="text-sm text-ai-blue font-medium mb-4">+94 723456726</p>
              <a 
                href="https://wa.me/94723456726"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-2 text-sm font-semibold text-white rounded-lg"
              >
                Contact Now
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 hover-lift shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Email Support</h3>
              <p className="text-slate-gray mb-4">Send detailed questions and purchase requests</p>
              <p className="text-sm text-ai-blue font-medium mb-4">contact@aipostrobot.com</p>
              <a 
                href="mailto:contact@aipostrobot.com"
                className="btn-primary px-6 py-2 text-sm font-semibold text-white rounded-lg"
              >
                Send Email
              </a>
            </motion.div>
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
            {submitStatus.success && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus.error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                {submitStatus.error}
              </div>
            )}

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
                    disabled={submitStatus.loading}
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
                    disabled={submitStatus.loading}
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
                    disabled={submitStatus.loading}
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
                    disabled={submitStatus.loading}
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
                  disabled={submitStatus.loading}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-lg font-semibold text-white rounded-lg inline-flex items-center justify-center"
                  disabled={submitStatus.loading}
                >
                  {submitStatus.loading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiClock} className="w-8 h-8 text-ai-blue mr-3" />
                <h3 className="text-2xl font-bold text-charcoal">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-gray">Monday - Friday</span>
                  <span className="text-charcoal font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-gray">Saturday</span>
                  <span className="text-charcoal font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-gray">Sunday</span>
                  <span className="text-charcoal font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-ai-blue/10 rounded-lg">
                <p className="text-sm text-ai-blue">
                  <strong>Note:</strong> Live chat support is available 24/7 for urgent matters.
                </p>
              </div>
            </motion.div>

            {/* Location & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-ai-blue mr-3" />
                <h3 className="text-2xl font-bold text-charcoal">Location & Social</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-gray mb-2">Based in Sri Lanka</p>
                  <p className="text-charcoal">Serving clients worldwide</p>
                </div>
                <div>
                  <p className="text-slate-gray mb-3">Follow us on social media:</p>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/wcharithharshana" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-electric-purple transition-colors">
                      <SafeIcon icon={FiTwitter} className="w-6 h-6" />
                    </a>
                    <a href="https://www.instagram.com/wcharithharshana" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-electric-purple transition-colors">
                      <SafeIcon icon={FiInstagram} className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/charith-harshana" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:text-electric-purple transition-colors">
                      <SafeIcon icon={FiLinkedin} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-gray mb-8">
            Quick answers to common questions about Ai Post Robot
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-left"
            >
              <h4 className="font-semibold text-charcoal mb-2">How does the browser extension work?</h4>
              <p className="text-slate-gray text-sm">Our extension captures content from any website and automatically schedules it across your connected social media platforms.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-left"
            >
              <h4 className="font-semibold text-charcoal mb-2">Which platforms are supported?</h4>
              <p className="text-slate-gray text-sm">We support 12+ platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube, and more.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-left"
            >
              <h4 className="font-semibold text-charcoal mb-2">Is there a free trial?</h4>
              <p className="text-slate-gray text-sm">Yes! We offer a free trial so you can experience the full power of Ai Post Robot before committing.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 text-left"
            >
              <h4 className="font-semibold text-charcoal mb-2">How secure is my data?</h4>
              <p className="text-slate-gray text-sm">We use enterprise-grade security measures to protect your data and never store your social media passwords.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;