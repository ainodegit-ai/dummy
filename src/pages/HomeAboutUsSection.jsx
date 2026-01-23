import React from "react";

/* Import image */
import aboutImage from "../assets/img/image-01.png";

export default function HomeAboutUsSection() {
  return (
    <div className="row align-items-center">
      {/* LEFT : Image */}
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="image-grid">
          <img
            src={aboutImage}
            alt="About Rankridge"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* RIGHT : Content */}
      <div className="col-lg-6">
        <h2 className="fw-bold mt-3 mb-3">About Rankridge</h2>

        <p className="text-muted mb-4">
          Rankridge Schools are the leading State & CBSE schools in Kukatpally
          and KPHB, Hyderabad, dedicated to strong academics, values, and a safe
          learning environment where every child grows with confidence. Our
          integrated State, CBSE and Cambridge approach ensures a solid
          foundation that blends international academic standards with
          real-world skills. With concept-based learning, robotics and coding,
          smart classrooms, digital labs, STEM activities, sports and
          life-skills programs, children discover their strengths while
          developing curiosity, discipline and character.
        </p>

        <p>
          Parents appreciate Rankridge for our caring and highly-qualified
          teachers, individual attention, transparent communication and
          student-first approach that makes learning joyful and meaningful. The
          school prioritizes emotional well-being, personal safety and
          confidence-building, creating an environment where children feel
          supported, respected and motivated to excel.
        </p>
      </div>
    </div>
  );
}
