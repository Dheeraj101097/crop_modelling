import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, MapPin, Calendar, Target } from "lucide-react";
import predvsact from "../assets/Ml_val_plot.png";
import correl from "../assets/correlation_readable.jpg";
import boxplot from "../assets/boxplotweb.png";
import alyr from "../assets/alyr.png";
import table from "../assets/table.png";
const ResultsSection = () => {
  const data = [
    {
      model: "DSSAT-Pythia",
      phase: "Calibration",
      rmse: "146.45",
      nrmse: "0.19",
    },
    {
      model: "DSSAT-Pythia",
      phase: "Validation",
      rmse: "142.16",
      nrmse: "0.20",
    },
    { model: "ML Model", phase: "Calibration", rmse: "146.09", nrmse: "0.186" },
    { model: "ML Model", phase: "Validation", rmse: "143.76", nrmse: "0.201" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [animatedStats, setAnimatedStats] = useState({
    locations: 0,
    years: 0,
    accuracy: 0,
    predictions: 0,
  });

  const finalStats = {
    locations: 628,
    years: 34,
    accuracy: 92.5,
    predictions: 21000,
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setAnimatedStats((prev) => ({
          locations: Math.min(
            prev.locations + finalStats.locations / steps,
            finalStats.locations
          ),
          years: Math.min(
            prev.years + finalStats.years / steps,
            finalStats.years
          ),
          accuracy: Math.min(
            prev.accuracy + finalStats.accuracy / steps,
            finalStats.accuracy
          ),
          predictions: Math.min(
            prev.predictions + finalStats.predictions / steps,
            finalStats.predictions
          ),
        }));
      }, interval);

      setTimeout(() => {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }, duration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    {
      icon: MapPin,
      value: Math.round(animatedStats.locations),
      label: "Locations Analyzed",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      value: Math.round(animatedStats.years),
      label: "Years Predicted",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Target,
      value: `${animatedStats.accuracy.toFixed(1)}%`,
      label: "Model Accuracy",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      value: Math.round(animatedStats.predictions),
      suffix: "+",
      label: "Total Predictions",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Research Results
          </h2>
          {/* <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Comprehensive analysis and validation across multiple years and
            locations in Bundelkhand
          </p> */}
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Click below button to explore the interactive soybean yield map
            (1990–2023) with district-level markers and yield details.
          </p>
          <a
            href="https://dheeraj101097.github.io/map/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-4 px-4 py-2 bg-gradient-to-br from-green-400 to-yellow-300 text-white rounded hover:bg-green-700">
              View Map
            </button>
          </a>
        </motion.div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4`}
              >
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-green-800 mb-2">
                {stat.value}
                {stat.suffix || ""}
              </div>
              <div className="text-green-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Plot of yield from 1990 - 2023
            </h3>
            <div className="h-64 bg-white rounded-2xl flex flex-col align-middle items-center justify-evenly border-2 border-dashed border-green-300">
              <img src={alyr} className="h-60 w-fit" />
              <div className="text-center text-green-600 ">
                {/* <TrendingUp size={48} className="mx-auto mb-4 opacity-50" /> */}
                {/* <p className="text-lg">Chart Integration Area</p> */}
                {/* <p className="text-sm opacity-75 ">
                  Highest-yielding (wet) year - 2018 & Lowest-yielding (dry)
                  year - 2020
                </p> */}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Box Plot over Calibration & Validation Period
            </h3>
            <div className="h-64 bg-white rounded-2xl flex flex-col align-middle items-center justify-evenly border-2 border-dashed border-green-300">
              <img src={boxplot} className="h-48 w-fit" />
              <div className="text-center text-green-600 ">
                {/* <TrendingUp size={48} className="mx-auto mb-4 opacity-50" /> */}
                {/* <p className="text-lg">Chart Integration Area</p> */}
                <p className="text-sm opacity-75 ">
                  Highest-yielding (wet) year - 2018 & Lowest-yielding (dry)
                  year - 2020
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Correlation between Weather parameters and Yield (kg/ha)
            </h3>
            <div className="h-64 bg-white rounded-2xl flex flex-col align-middle items-center justify-evenly border-2 border-dashed border-green-300">
              <img src={correl} className="h-56 w-fit" />
              <div className="text-center text-green-600 ">
                {/* <TrendingUp size={48} className="mx-auto mb-4 opacity-50" /> */}
                {/* <p className="text-lg">Chart Integration Area</p> */}
                <p className="text-sm opacity-75">
                  Rainfall and minimum temperature were the most influential
                  factors
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Predicted vs. Actual Yield
            </h3>
            <div className="h-64 bg-white rounded-2xl flex flex-col align-middle items-center justify-evenly border-2 border-dashed border-green-300">
              <img src={predvsact} className="h-56 w-fit" />
              <div className="text-center text-green-600 ">
                {/* <TrendingUp size={48} className="mx-auto mb-4 opacity-50" /> */}
                {/* <p className="text-lg">Chart Integration Area</p> */}
                <p className="text-sm opacity-75">
                  R² = 0.98, RMSE = 0.146 t/ha, NRMSE = 0.20
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              DSSAT vs. ML Performance
            </h3>
            <div className="h-64 bg-white rounded-2xl flex items-center justify-center border-2 border-dashed border-green-300">
              <div className="text-center text-green-600">
                <img src={table} className="h-56 w-fit" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
