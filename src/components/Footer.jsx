import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTwitter, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🤖</span>
              </div>
              <span className="text-xl font-bold">Ai Post Robot</span>
            </div>
            <p className="text-slate-gray mb-4">
              Empowering content creators with AI-powered social media management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-gray hover:text-white transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-gray hover:text-white transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-gray hover:text-white transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-slate-gray hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-slate-gray hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/browser-extension" className="text-slate-gray hover:text-white transition-colors">Browser Extension</Link></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Team Management</a></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">AI Image+ Generator</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-slate-gray hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Blog & Updates</a></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-gray hover:text-white transition-colors">DMCA & Copyright</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-slate-gray">
            © {currentYear} AIPostRobot Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;