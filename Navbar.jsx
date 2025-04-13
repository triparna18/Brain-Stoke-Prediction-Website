import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Signup from "./Signup";
import Login from "./Login";

const Navbar = ({ userName, setUserName }) => {
  const [hovered, setHovered] = useState({ login: false, signup: false });
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const clickSignupBtn = () => {
    setSignupOpen(true);
    setLoginOpen(false);
  };

  const clickLoginBtn = () => {
    setLoginOpen(true);
    setSignupOpen(false);
  };

  const handleLogout = () => {
    setUserName("");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">NeuroScanX</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/how-it-works">How it works</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-light" to="/contact">Contact</Link>
              </li> */}

              <li className="nav-item d-flex justify-content-center">
                {userName ? (
                  <>
                    <span className="text-light me-2">Welcome, {userName}</span>
                    <button className="btn btn-light" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={clickLoginBtn}
                      className="btn me-2"
                      style={{
                        backgroundColor: hovered.login ? "#004085" : "white",
                        color: hovered.login ? "white" : "black",
                        border: "1px solid white"
                      }}
                      onMouseEnter={() => setHovered({ ...hovered, login: true })}
                      onMouseLeave={() => setHovered({ ...hovered, login: false })}
                    >
                      Log in
                    </button>

                    <button
                      onClick={clickSignupBtn}
                      className="btn"
                      style={{
                        backgroundColor: hovered.signup ? "#004085" : "white",
                        color: hovered.signup ? "white" : "black",
                        border: "1px solid white"
                      }}
                      onMouseEnter={() => setHovered({ ...hovered, signup: true })}
                      onMouseLeave={() => setHovered({ ...hovered, signup: false })}
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isSignupOpen && (
        <Signup setSignupOpen={setSignupOpen} setLoginOpen={setLoginOpen} setUserName={setUserName} />
      )}

      {isLoginOpen && (
        <Login setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} setUserName={setUserName} />
      )}
    </>
  );
};

export default Navbar;
