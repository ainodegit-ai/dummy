import React from "react";

export default function CallToActionSection() {
  return (
    <section className="certification-cta text-center pt40 pb40 background-img">
      <div className="container position-relative">
        {/* Badge */}
        <span className="cta-badge">QUALITY SCHOOL EDUCATION</span>

        {/* Title */}
        <h2 className="cta-title mt-3">
          Shaping Young Minds for a Brighter
          <br />
          Academic Future
        </h2>

        {/* Description */}
        <p className="cta-text mt-3">
          Our school provides a safe, nurturing, and student-focused learning
          environment that encourages curiosity, confidence, and academic
          excellence. With experienced educators and modern facilities, we help
          every child reach their full potential.
        </p>

        {/* CTA Button */}
        <a href="#" className="btn cta-btn mt-3">
          <i className="bi bi-mortarboard me-2"></i>
          Enquire Now
        </a>

        {/* Decorative Shapes */}
        <span className="shape circle-red"></span>
        <span className="shape circle-yellow"></span>
        <span className="shape ring-red"></span>
      </div>
    </section>
  );
}
