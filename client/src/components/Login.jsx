import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please enter both email and password.");
      setTimeout(() => {
        setMessage(""); // Clear the message after 2 seconds
      }, 1500);
      return;
    }
    try {
      const result = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (result.data === "Success") {
        setMessage("Logged in successfully");
        setTimeout(() => {
          navigate("/login/user");
        }, 1500);
      } else {
        setMessage(result.data);
      }
      setTimeout(() => {
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while processing your request");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="fs-3 my-2">Login</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Login</button>
        </form>
        <p>Don't Have an Account?</p>
        <Link
          to="/register"
          className="btn btn-dark border w-100 rounded-0 text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
