import React from "react";

/* Import image */
import welcomeImage from "../assets/img/Welcome to Rankridge School Hyderabad, KPHB.webp";

export default function HomeWelcomeSection() {
  return (
    <section className="distance-hero pt60 pb60">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="hero-title mt-3">
              Welcome to Rankridge School, Hyderabad
            </h2>

            <p className="hero-text mt-3">
              Empowering students to achieve excellence, Rankridge School offers
              a nurturing environment and a strong academic foundation. With
              expert faculty and modern learning systems, we help every child
              discover their true potential.
            </p>

            <p className="hero-text mt-3">
              Empowering students to achieve excellence, Rankridge School offers
              a nurturing environment and a strong academic foundation. With
              expert faculty and modern learning systems, we help every child
              discover their true potential.
            </p>

            <a href="#" className="btn cta-btn mt-3">
              <i className="bi bi-play-circle me-2"></i>
              View Courses
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={welcomeImage}
              alt="Welcome to Rankridge School"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
