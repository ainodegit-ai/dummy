import React from "react";

/* Import image */
import welcomeImage from "../assets/img/Welcome to Rankridge School Hyderabad, KPHB.webp";
import HomeWelcomeLeft from "./HomeWelcomeLeft";

export default function HomeWelcomeSection() {
  return (
    <section className="distance-hero pt60 pb60">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <HomeWelcomeLeft />
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
