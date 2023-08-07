// pages/about.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      controls.start({ opacity: 0, y: 20 });
    } else {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 pl-6 md:pl-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 md:h-1/2 md:order-2"
          >
            <Image src="/link-to-your-profile-picture.jpg" alt="Profile" height={280} width={480} className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 rounded-full border-solid border-4 border-indigo-600 shadow-md" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:pl-8 md:w-1/2 md:order-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl mb-6"
            >
              I'm a self-taught full-stack developer passionate about creating innovative web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, and React.js, and skilled in back-end development using Node.js and Express.js. Experienced in databases and RESTful API development. Open to collaborations and eager to learn. Let's connect and bring your project to life!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-all"
            >
              Connect With Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
