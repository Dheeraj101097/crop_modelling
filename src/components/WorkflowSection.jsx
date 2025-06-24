import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Database, Vibrate as Calibrate, Calendar, RefreshCw, TrendingUp } from 'lucide-react';

const WorkflowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const steps = [
    {
      icon: Settings,
      title: "DSSAT-Pythia Setup",
      description: "Setting up DSSAT-Pythia for traditional crop modeling with comprehensive agricultural parameters."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Integrating weather, yield, and soil data for comprehensive analysis and model training."
    },
    {
      icon: Calibrate,
      title: "Automated Calibration",
      description: "Implementing automated calibration and validation workflows for optimal model performance."
    },
    {
      icon: Calendar,
      title: "Weekly Weather Processing",
      description: "Developing machine learning pipeline with weekly weather-based input processing system."
    },
    {
      icon: RefreshCw,
      title: "Feedback Loop Prediction",
      description: "Multi-year iterative prediction system with continuous feedback loop for improved accuracy."
    },
    {
      icon: TrendingUp,
      title: "Performance Comparison",
      description: "Comparing DSSAT-Pythia results with ML model outcomes for comprehensive validation."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="workflow" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Project Workflow
          </h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Our comprehensive approach combines traditional crop modeling with cutting-edge machine learning
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-6 mx-auto group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                <step.icon className="text-white" size={28} />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-green-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;