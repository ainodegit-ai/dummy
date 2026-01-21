import React from "react";

/* Import images */
import trophyIcon from "../assets/img/trophy.png";
import certificateIcon from "../assets/img/certificate.png";
import mouseIcon from "../assets/img/mouse-1.png";
import classroomIcon from "../assets/img/classroom.png";

export default function HomeHeroSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        {/* Heading */}
        <h1 className="fw-bold">
          Best Schools In KPHB, Hyderabad with IIT-JEE & NEET Foundation
        </h1>

        <h2>Educating Minds That will Lead the World</h2>

        {/* Description */}
        <p className="text-muted mb-4">
          Finding your own space and utilize better learning options can result
          in faster than
          <br className="d-none d-md-block" />
          the traditional ways. Enjoy the beauty of eLearning!
        </p>

        {/* Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card h-100 text-center">
              <img src={trophyIcon} alt="Strong Academics" />
              <h3 className="fw-bold mt-3">Strong Academics</h3>
              <p className="text-muted">
                CBSE, State & Cambridge curriculum with expert teaching
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card h-100 text-center">
              <img src={certificateIcon} alt="Learn at Your Pace" />
              <h3 className="fw-bold mt-3">Learn in Your Own Pace</h3>
              <p className="text-muted">
                Everyone prefers to enjoy learning at their own pace & that
                gives a great result.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card h-100 text-center">
              <img src={mouseIcon} alt="Global Exposure" />
              <h3 className="fw-bold mt-3">Global Exposure</h3>
              <p className="text-muted">
                Olympiads, international assessments & STEM programs
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="feature-card h-100 text-center">
              <img src={classroomIcon} alt="Modern Facilities" />
              <h3 className="fw-bold mt-3">Modern Facilities</h3>
              <p className="text-muted">
                Smart classrooms, labs & activity spaces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
