// components/ScrollToTopAnimate.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopAnimate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };
  toggleVisibility(); 
  window.addEventListener('scroll', toggleVisibility);
  return () => window.removeEventListener('scroll', toggleVisibility);
}, []);

  const handleScrollToTop = () => {
    setIsRotating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-orange text-white shadow-lg "
          aria-label="Scroll to top"
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: isRotating ? 720 : 0,
          }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img src="/images/scrollToTop/scrollToTop.svg" className='w-6'/>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopAnimate;
