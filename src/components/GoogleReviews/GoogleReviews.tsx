'use client'

import { useEffect } from 'react';
import { motion } from 'framer-motion';
const GoogleReviews = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script if necessary - though Elfsight usually manages itself
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="google-reviews section" id="avis">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Nos Avis Google</h2>
          <p>
            Découvrez ce que nos clients pensent de nos services directement depuis Google Maps.
          </p>
        </motion.div>
        
        <div className="elfsight-app-064ec52e-a322-4cde-bad0-8a28f695e369" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default GoogleReviews;
