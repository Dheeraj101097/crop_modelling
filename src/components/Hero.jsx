import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Leaf } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Hero = () => {
  const scrollToWorkflow = () => {
    document.getElementById("workflow").scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <>
    //   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    //     {/* Animated Background */}
    //     <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-green-50">
    //       {/* Floating Leaves Animation */}
    //       {[...Array(12)].map((_, i) => (
    //         <motion.div
    //           key={i}
    //           className="absolute text-green-400 opacity-20"
    //           initial={{
    //             x: Math.random() * window.innerWidth,
    //             y: window.innerHeight + 100,
    //             rotate: 0,
    //           }}
    //           animate={{
    //             y: -100,
    //             rotate: 360,
    //             x: Math.random() * window.innerWidth,
    //           }}
    //           transition={{
    //             duration: Math.random() * 10 + 15,
    //             repeat: Infinity,
    //             ease: "linear",
    //             delay: Math.random() * 5,
    //           }}
    //         >
    //           <Leaf size={Math.random() * 20 + 15} />
    //         </motion.div>
    //       ))}
    //     </div>

    //     {/* Hero Content */}
    //     <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    //       <motion.div
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         <motion.h1
    //           className="text-4xl sm:text-5xl lg:text-7xl font-bold text-green-800 mb-6 leading-tight"
    //           initial={{ opacity: 0, scale: 0.9 }}
    //           animate={{ opacity: 1, scale: 1 }}
    //           transition={{ duration: 1, delay: 0.2 }}
    //         >
    //           Machine Learning Powered
    //           <span className="block text-yellow-600">
    //             Soybean Yield Prediction
    //           </span>
    //         </motion.h1>

    //         <motion.p
    //           className="text-xl sm:text-2xl text-green-700 mb-12 max-w-4xl mx-auto leading-relaxed"
    //           initial={{ opacity: 0, y: 30 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.8, delay: 0.4 }}
    //         >
    //           A Hybrid Approach Combining DSSAT-Pythia and Machine Learning for
    //           Spatially Distributed Yield Estimation in Bundelkhand, India
    //         </motion.p>

    //         <motion.button
    //           onClick={scrollToWorkflow}
    //           className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 0.6 }}
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //         >
    //           Explore Results
    //           <ChevronDown
    //             className="inline-block ml-2 group-hover:animate-bounce"
    //             size={20}
    //           />
    //         </motion.button>
    //       </motion.div>
    //     </div>

    //     {/* Scroll Indicator */}
    //     <motion.div
    //       className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1.2 }}
    //     >
    //       <motion.div
    //         animate={{ y: [0, 10, 0] }}
    //         transition={{ duration: 2, repeat: Infinity }}
    //         className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center"
    //       >
    //         <motion.div
    //           animate={{ y: [0, 12, 0] }}
    //           transition={{ duration: 2, repeat: Infinity }}
    //           className="w-1 h-3 bg-green-600 rounded-full mt-2 "
    //         />
    //       </motion.div>
    //     </motion.div>
    //   </section>
    //   {/* for gallery */}
    //   <div className="absolute bottom-0 w-full px-4 sm:px-6 lg:px-8 mb-6">
    //     <div className="bg-white rounded-3xl shadow-xl p-4 overflow-hidden relative max-w-5xl mx-auto">
    //       {/* Image Track */}
    //       <motion.div
    //         className="flex gap-4"
    //         animate={{ x: [`0%`, `-100%`] }}
    //         transition={{
    //           duration: 8, // total cycle
    //           repeat: Infinity,
    //           ease: "linear",
    //         }}
    //       >
    //         {[img1, img2, img3, img1, img2, img3].map((src, idx) => (
    //           <img
    //             key={idx}
    //             src={src}
    //             alt={`Gallery ${idx}`}
    //             className="w-1/3 h-56 object-cover rounded-2xl flex-shrink-0"
    //           />
    //         ))}
    //       </motion.div>

    //       {/* Optional navigation arrows */}
    //       <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2 shadow-md hover:bg-green-700">
    //         ‹
    //       </button>
    //       <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2 shadow-md hover:bg-green-700">
    //         ›
    //       </button>
    //     </div>
    //   </div>
    // </>
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-green-50">
          {/* Floating Leaves Animation */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                rotate: 0,
              }}
              animate={{
                y: -100,
                rotate: 360,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              <Leaf size={Math.random() * 20 + 15} />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-green-800 mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Machine Learning Powered
              <span className="block text-yellow-600">
                Soybean Yield Prediction
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-green-700 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A Hybrid Approach Combining DSSAT-Pythia and Machine Learning for
              Spatially Distributed Yield Estimation in Bundelkhand, India
            </motion.p>

            <motion.button
              onClick={scrollToWorkflow}
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Results
              <ChevronDown
                className="inline-block ml-2 group-hover:animate-bounce"
                size={20}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-green-600 rounded-full mt-2 "
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ✅ Gallery Below Hero */}
      <div className="w-full px-4 sm:px-6 lg:px-8 my-12">
        <div className="bg-white rounded-3xl shadow-xl p-4 overflow-hidden relative max-w-5xl mx-auto">
          {/* Image Track */}
          <motion.div
            className="flex gap-4"
            animate={{ x: [`0%`, `-100%`] }}
            transition={{
              duration: 16, // total cycle
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              img1,
              img2,
              img3,
              img4,
              img1,
              img2,
              img3,
              img4,
              img1,
              img2,
              img3,
              img4,
              img1,
              img2,
              img3,
              img4,
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Gallery ${idx}`}
                className="w-1/3 h-56 object-cover rounded-2xl flex-shrink-0"
              />
            ))}
          </motion.div>

          {/* Optional navigation arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2 shadow-md hover:bg-green-700">
            ‹
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-2 shadow-md hover:bg-green-700">
            ›
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
