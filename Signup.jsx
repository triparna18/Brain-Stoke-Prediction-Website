import "./Signup.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./Connection";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function Signup({ setSignupOpen, setLoginOpen, setUserName }) {
  const [fullname, setFullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    if (!fullname.trim() || !email.trim() || !password.trim()) {
      alert("All fields are required!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUserName(fullname);
        alert("Welcome " + fullname);
        setFullname("");
        setemail("");
        setPassword("");
        setSignupOpen(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const createUserWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("Welcome " + result.user.displayName);
        setUserName(result.user.displayName);
        setSignupOpen(false);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="sign-up">
      <div className="signup-container">
        <span className="close-btn" onClick={() => setSignupOpen(false)}>&times;</span>

        <h2>Create Your Account</h2>

        <form onSubmit={createUser}>
          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-user"></i></span>
            <input
              type="text"
              id="name"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              required
            />
            <label htmlFor="name">Full Name</label>
          </div>

          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-envelope"></i></span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-box">
            <span className="icon"><i className="fa-solid fa-lock"></i></span>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="signup-with-google">
            <span className="or">OR</span>
            <button type="button" onClick={createUserWithGoogle}>
              <i className="fa-brands fa-google"></i>&nbsp; Sign Up with Google
            </button>
          </div>

          <div className="login">
          <p>
  Already have an account?{" "}
  <span
    onClick={() => {
      setSignupOpen(false);
      setLoginOpen(true);
    }}
    style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
  >
    Log in
  </span>
</p>

          </div>

          <div className="register">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
