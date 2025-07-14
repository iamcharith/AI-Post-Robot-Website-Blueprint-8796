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
        .insert([
          {
            name: formData.name,
            email: formData.email,
            plan_type: formData.planType,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus({ loading: false, error: null, success: true });
      setFormData({
        name: '',
        email: '',
        planType: '',
        subject: '',
        message: ''
      });

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

  // Rest of your component code remains the same until the form...

  return (
    <div className="pt-16">
      {/* Previous sections remain unchanged */}

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

      {/* Rest of your component remains unchanged */}
    </div>
  );
};

export default Contact;