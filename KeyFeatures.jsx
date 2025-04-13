import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FaBrain, FaLock, FaThumbsUp, FaNotesMedical, FaHeartbeat, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import "./KeyFeatures.css";

const features = [
  { id: 1, icon: <FaBrain size={40} />, title: "AI-Powered Predictions", description: "Get instant results with high accuracy." },
  { id: 2, icon: <FaLock size={40} />, title: "Secure Data Storage", description: "Your health data remains private and protected." },
  { id: 3, icon: <FaThumbsUp size={40} />, title: "Easy to Use", description: "Simple steps to check your health risk." },
  { id: 4, icon: <FaNotesMedical size={40} />, title: "Medical Insights", description: "Understand your risk factors and next steps." },
  { id: 5, icon: <FaHeartbeat size={40} />, title: "Real-Time Monitoring", description: "Track your health status instantly." },
  { id: 6, icon: <FaUserShield size={40} />, title: "Data Privacy Assurance", description: "We ensure top-notch security for your data." }
];

const KeyFeatures = () => {
  return (
    <motion.div
      className="d-flex flex-column align-items-center mt-5"
      style={{ minHeight: "85vh", textAlign: "center", padding: "2rem" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="mb-4 mt-4 mb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Key Features
      </motion.h2>
      
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="col-md-4 col-sm-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="card text-center p-5 shadow-sm feature-card"
                style={{
                  backgroundColor: "#004085",
                  borderRadius: "12px",
                  minHeight: "200px",
                  width: "100%",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="mb-3 text-white"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h5 className="card-title text-white">{feature.title}</h5>
                <p className="card-text text-white">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default KeyFeatures;