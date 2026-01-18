// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLogin.css";
import logo_dark from "/assets/logo-dark.png";
export default function AdminLogin() {
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await axios.post(
      `${BASE_URL}/auth/login`,
      form
    );

    localStorage.setItem("adminToken", res.data.token);
    localStorage.setItem("adminData", JSON.stringify(res.data.admin));

    navigate("/dashboard");
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
};

  //   e.preventDefault();
  //   setError("");

  //   try {
  //     const res = await axios.post(`${BASE_URL}admin/login`, form);

  //     localStorage.setItem("adminToken", res.data.token);
  //     localStorage.setItem("adminData", JSON.stringify(res.data.admin));

  //     navigate("/dashboard");
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Login failed");
  //   }
  // };

  return (
    <div className="container-fluid login-bg vh-100">
      <div className="row h-100 justify-content-center align-items-center">
        {/* RIGHT LOGIN FORM */}
        <div className="col-lg-4 d-flex align-items-center justify-content-center">
          <div className="card p-5 login-card" style={{ width: "100%" }}>
            <div className="text-center mb-2">
              <img
                src={logo_dark}
                alt="Logo"
                className="mb-4"
                style={{ width: "250px" }}
              />
              <h5 className="mb-1">Welcome Back!</h5>
              <p className="text-muted mb-4">
                Sign in to continue to Admin Dashboard
              </p>
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label">Email / Username</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter your login"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
