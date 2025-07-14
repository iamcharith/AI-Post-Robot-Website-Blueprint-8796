import React from 'react';
import { motion } from 'framer-motion';

const DMCA = () => {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-charcoal mb-8">DMCA & Copyright Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-slate-gray mb-4">
                AI Post Robot respects the intellectual property rights of others and expects its users to do the same.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Copyright Infringement</h2>
              <p className="text-slate-gray mb-4">
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on our service, please notify our copyright agent as set forth in the Digital Millennium Copyright Act of 1998 (DMCA).
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">DMCA Notice Requirements</h2>
              <p className="text-slate-gray mb-4">
                For your complaint to be valid under the DMCA, you must provide the following information:
              </p>
              <ul className="list-disc pl-6 text-slate-gray mb-4">
                <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing</li>
                <li>Information reasonably sufficient to permit us to contact you</li>
                <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
                <li>A statement that the information in the notification is accurate</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Counter-Notice</h2>
              <p className="text-slate-gray mb-4">
                If you believe your content was wrongly removed due to a mistake or misidentification, you can file a counter-notice by providing:
              </p>
              <ul className="list-disc pl-6 text-slate-gray mb-4">
                <li>Your physical or electronic signature</li>
                <li>Identification of the removed material and its location</li>
                <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                <li>Your name, address, and telephone number</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">Contact Information</h2>
              <p className="text-slate-gray mb-4">
                For copyright matters, please contact us at:
                <br />
                Email: contact@aipostrobot.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DMCA;