import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-slate-gray mb-4">
                At AI Post Robot, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Information We Collect</h2>
              <p className="text-slate-gray mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-slate-gray mb-4">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Social media account information</li>
                <li>Content and media you upload</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-slate-gray mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-gray mb-4">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you important updates</li>
                <li>Improve our services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Data Security</h2>
              <p className="text-slate-gray mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Your Rights</h2>
              <p className="text-slate-gray mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-gray mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Contact Us</h2>
              <p className="text-slate-gray mb-4">
                If you have any questions about this Privacy Policy, please contact us at contact@aipostrobot.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;