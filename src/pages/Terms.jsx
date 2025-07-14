import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-charcoal mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">1. Terms</h2>
              <p className="text-slate-gray mb-4">
                By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">2. Use License</h2>
              <p className="text-slate-gray mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on AI Post Robot's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-slate-gray mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained on AI Post Robot's Website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">3. Disclaimer</h2>
              <p className="text-slate-gray mb-4">
                All the materials on AI Post Robot's Website are provided "as is". AI Post Robot makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, AI Post Robot does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">4. Limitations</h2>
              <p className="text-slate-gray mb-4">
                AI Post Robot or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on AI Post Robot's Website, even if AI Post Robot or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">5. Revisions and Errata</h2>
              <p className="text-slate-gray mb-4">
                The materials appearing on AI Post Robot's Website may include technical, typographical, or photographic errors. AI Post Robot will not promise that any of the materials in this Website are accurate, complete, or current. AI Post Robot may change the materials contained on its Website at any time without notice.
              </p>

              <h2 className="text-2xl font-semibold text-charcoal mt-8 mb-4">6. Contact Information</h2>
              <p className="text-slate-gray mb-4">
                If you have any questions about these Terms of Service, please contact us at contact@aipostrobot.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;