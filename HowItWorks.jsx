import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import './HowItWorks.css';

const steps = [
  {
    title: "Create an Account",
    description: "Sign up and log in.",
  },
  {
    title: "Enter Your Details",
    description: "Fill in basic health-related information.",
  },
  {
    title: "Upload Medical Data (Optional)",
    description: "Provide test reports for better accuracy.",
  },
  {
    title: "Get Prediction",
    description: "AI analyzes your risk and gives results.",
  },
];

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="step-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="step-content">
              <CheckCircle className="step-icon" size={28} />
              <div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}