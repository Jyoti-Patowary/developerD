import React from 'react';
import { motion } from 'framer-motion';

function Letstalk() {
  return (
    <div className="bg-black text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-20 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-4 md:mb-6 text-center"
        >
          Let's kick this up a notch.
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base lg:text-xl font-bold text-white mb-4 md:mb-6 text-center"
        >
          Should we do this? Let’s talk about the incredible things we can make together.
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-lg mt-4 md:mt-6 mx-auto block"
        >
          Let’s Talk
        </motion.button>
      </div>
    
    </div>
  );
}

export default Letstalk;
