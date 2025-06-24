import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Merge, 
  Cog, 
  Clock, 
  RotateCcw, 
  Map, 
  BarChart3 
} from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const features = [
    {
      icon: Merge,
      title: "Hybrid Crop Modeling & ML Integration",
      description: "Seamlessly combines traditional DSSAT-Pythia crop modeling with advanced machine learning algorithms for superior prediction accuracy."
    },
    {
      icon: Cog,
      title: "Automated Calibration System",
      description: "Intelligent automation of calibration and validation processes, reducing manual intervention and improving consistency."
    },
    {
      icon: Clock,
      title: "Weekly Weather Input Processing",
      description: "Real-time processing of weekly weather data for dynamic and responsive yield predictions throughout the growing season."
    },
    {
      icon: RotateCcw,
      title: "Multi-Year Feedback Predictions",
      description: "Iterative prediction system that learns from previous years' data to continuously improve forecasting accuracy."
    },
    {
      icon: Map,
      title: "Spatially Distributed Yield Mapping",
      description: "Comprehensive spatial analysis providing yield predictions across different geographical locations in Bundelkhand."
    },
    {
      icon: BarChart3,
      title: "Comparative Performance Insights",
      description: "Detailed comparison between DSSAT-Pythia and ML model results with comprehensive performance metrics."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Advanced capabilities that make our soybean yield prediction system truly innovative
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl mb-6 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-green-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;