import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!name || !email || !password) {
      setMessage("Please provide all required fields.");
      setTimeout(() => {
        setMessage(""); // Clear the message after 2 seconds
      }, 1500);
      return;
    }

    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((res) => {
        setMessage("Registered successfully");
        setTimeout(() => {
          setMessage("");
          navigate("/login");
        }, 1500);
      })
      .catch((err) => {
        // Check for specific error messages from the server
        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          console.log(err);
          setMessage("An error occurred during registration.");
        }
        setTimeout(() => {
          setMessage(""); // Clear the message after 2 seconds
        }, 1500);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="fs-3 my-2">Register</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button className="btn btn-success w-100 rounded-0">Register</button>
        </form>
        <p>Already Have an Account?</p>
        <Link
          to="/login"
          className="btn btn-dark border w-100 rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
