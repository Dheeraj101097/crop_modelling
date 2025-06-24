import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Thermometer, Droplets, Wind } from "lucide-react";
import Map from "./Map";
import studymap from "../assets/Bundelkhand_Study_Points.png";

const StudyAreaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const districts = [
    "Jhansi",
    "Lalitpur",
    "Jalaun",
    "Hamirpur",
    "Banda",
    "Chitrakoot",
    "Mahoba",
    "Tikamgarh",
    "Chhatarpur",
    "Panna",
    "Damoh",
    "Sagar",
    "Datia",
    "Shivpuri",
  ];

  const climateFeatures = [
    {
      icon: Thermometer,
      title: "Semi-Arid Climate",
      description: "Average temperature: 25-35°C during growing season",
    },
    {
      icon: Droplets,
      title: "Variable Rainfall",
      description: "Annual rainfall: 800-1200mm, monsoon dependent",
    },
    {
      icon: Wind,
      title: "Seasonal Patterns",
      description: "Distinct kharif and rabi seasons affecting crop cycles",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-green-50 to-yellow-50"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Study Area: Bundelkhand Region
          </h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Semi-arid region spanning across Uttar Pradesh and Madhya Pradesh,
            presenting unique agricultural challenges and opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">
                Study Area (Bundelkhand, INDIA)
              </h3>
              <div className="h-fit bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-green-300">
                <div className="text-center text-green-600">
                  {/* <MapPin size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Bundelkhand Map</p>
                  <p className="text-sm opacity-75">
                    628 locations across 14 districts
                  </p> */}
                  <img src={studymap} className="rounded-2xl" />
                </div>
                {/* <Map /> */}
              </div>
            </div>
          </motion.div>

          {/* Districts and Climate Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Districts */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-6">
                Districts Covered
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {districts.map((district, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-green-100 to-yellow-100 px-4 py-2 rounded-xl text-center text-green-700 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    {district}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Climate Features */}
            <div className="space-y-4">
              {climateFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800">
                      {feature.title}
                    </h4>
                    <p className="text-green-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudyAreaSection;
