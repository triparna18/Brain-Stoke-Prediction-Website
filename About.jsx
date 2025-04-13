import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

const AboutUs = () => {
  return (
    <motion.div
      className="container main min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center p-6 border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl bg-white shadow-2xl rounded-2xl p-8 text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About NeuoScanX
        </motion.h1>
        
        <motion.p
          className="text-gray-700 text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          NeuoScanX is an innovative AI-powered solution designed to transform neurological diagnostics. 
          Our goal is to make medical imaging and diagnosis faster, more accurate, and easily accessible 
          by leveraging state-of-the-art artificial intelligence technology.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-gray-800 mt-8"
        >
          Our Vision
        </motion.h2>
        
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          We strive to bridge the gap between advanced technology and healthcare by providing a 
          seamless, AI-based scanning system that assists medical professionals in delivering superior patient care.
        </p>

        <motion.h2
          className="text-2xl font-semibold  mt-8">
          Why Choose Us?
        </motion.h2>

        <div className="text-gray-700 text-lg mb-6 space-y-2">
          <motion.p whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>✨ AI-powered precision ensures highly accurate diagnostics.</motion.p>
          <motion.p whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>⚡ Rapid and reliable results for quicker decision-making.</motion.p>
          <motion.p whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>🔗 Seamless integration with existing medical systems.</motion.p>
          <motion.p whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>🔒 Secure and fully compliant with medical standards.</motion.p>
        </div>

        <motion.h2
          className="text-2xl font-semibold  mt-8"
        >
          Meet Our Team
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          NeuoScanX is developed by a dedicated team of AI experts, healthcare professionals,
          and researchers passionate about advancing medical diagnostics.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;