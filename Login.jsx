import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./Connection";
import { Link } from "react-router-dom"; // ✅ You missed this import
import './Login.css';

const auth = getAuth(app);

export default function Login({ setLoginOpen, setSignupOpen, setUserName }){
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const email = userCredential.user.email;
        const name = email.split("@")[0];
        setUserName(name);
        alert("Successfully logged in");
        setLoginOpen(false);
      })
      .catch(() => {
        alert("Wrong input");
      });

    setMail("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <span className="close-btn" onClick={() => setLoginOpen(false)}>&times;</span>

        <h2>Log In</h2>

        <form onSubmit={signinUser}>
          <div className="input-box">
            <span className='icon'><i className="fa-solid fa-envelope"></i></span>
            <input
              type="email"
              id='email'
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-box">
            <span className='icon'><i className="fa-solid fa-lock"></i></span>
            <input
              type="password"
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="login">
          <p>
  Don't have an account?{" "}
  <span
    onClick={() => {
      setLoginOpen(false);
      setSignupOpen(true);
    }}
    style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
  >
    Register
  </span>
</p>


          </div>

          <div className="login-btn">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
