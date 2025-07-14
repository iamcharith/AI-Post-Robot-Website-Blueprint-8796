import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTwitter, FiInstagram, FiLinkedin, FiFacebook } = FiIcons;

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
              <a href="https://www.facebook.com/wcharithharshana" target="_blank" rel="noopener noreferrer" className="text-slate-gray hover:text-white transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wcharithharshana" target="_blank" rel="noopener noreferrer" className="text-slate-gray hover:text-white transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/charith-harshana" target="_blank" rel="noopener noreferrer" className="text-slate-gray hover:text-white transition-colors">
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
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-slate-gray hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://aipostrobot.tawk.help" target="_blank" rel="noopener noreferrer" className="text-slate-gray hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-slate-gray hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-slate-gray hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/dmca" className="text-slate-gray hover:text-white transition-colors">DMCA & Copyright</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-slate-gray">
            © {currentYear} AIPostRobot by <a href="https://charithharshana.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Charith Harshana</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;