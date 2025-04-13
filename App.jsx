import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import HomePage from "./Pages/HomePage";
import KeyFeatures from "./Pages/KeyFeatures";
import UserReviews from "./Pages/UserReviews";
import About from "./Pages/About";
import CheckUp from "./Pages/CheckUp";
import HowItWorks from "./Pages/HowItWorks";

// Modals
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function App() {
  const [userName, setUserName] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);  

  return (
    <Router>
      {/* Navbar */}
      <Navbar
  userName={userName}
  setLoginOpen={setLoginOpen}
  setSignupOpen={setSignupOpen}
/>


      {/* Modal login/signup */}
      {loginOpen && (
        <Login
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen}
          setUserName={setUserName}
        />
      )}

      {signupOpen && (
        <Signup
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
          setUserName={setUserName}
        />
      )}

      {/* Main Routes */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage userName={userName} />} />
          <Route path="/features" element={<KeyFeatures />} />
          <Route path="/user-reviews" element={<UserReviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkup" element={<CheckUp />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}
