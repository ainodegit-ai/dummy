import React from "react";
import { Link } from "react-router-dom";
import CallToActionSection from "./CallToActionSection";
import AdmissionEnquiryForm from "./AdmissionEnquiryForm";
import HomeWelcomeLeft from "./HomeWelcomeLeft";
import HomeAboutUsSection from "./HomeAboutUsSection";
import aboutImage from "../assets/img/image-01.png";
import icon1 from "../assets/img/success.png";
import icon3 from "../assets/img/RRadvantage.png";
import icon2 from "../assets/img/eye.png";
export default function About() {
  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>About Us</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt60 pb60">
        <div className="container">
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

              <p className="mb-4">
                Rankridge Schools are the leading State & CBSE schools in
                Kukatpally and KPHB, Hyderabad, dedicated to strong academics,
                values, and a safe learning environment where every child grows
                with confidence. Our integrated State, CBSE and Cambridge
                approach ensures a solid foundation that blends international
                academic standards with real-world skills. With concept-based
                learning, robotics and coding, smart classrooms, digital labs,
                STEM activities, sports and life-skills programs, children
                discover their strengths while developing curiosity, discipline
                and character.
              </p>

              <p className="mb-4">
                Parents appreciate Rankridge for our caring and highly-qualified
                teachers, individual attention, transparent communication and
                student-first approach that makes learning joyful and
                meaningful. The school prioritizes emotional well-being,
                personal safety and confidence-building, creating an environment
                where children feel supported, respected and motivated to excel.
              </p>
              <p>
                Parents appreciate Rankridge for our caring and highly-qualified
                teachers, individual attention, transparent communication and
                student-first approach that makes learning joyful and
                meaningful. The school prioritizes emotional well-being,
                personal safety and confidence-building, creating an environment
                where children feel supported, respected and motivated to excel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="background-img pt60 pb60">
        <div className="container">
          {/* Section Title */}
          <div className="section-title">
            <h2 className="fw-bold mt-2 mb-3 text-center">
              Why Choose Rankridge International Schools?
            </h2>
            <p className="text-center">
              Rankridge Empowering Today’s Learners & Leading Tomorrow’s
              Leaders.
            </p>
          </div>
          <div className="feature-grid mt-5">
            <Feature
              icon="bi-emoji-smile"
              title="Stress-Free, Joyful Learning"
              items={[
                "Mindful Curriculum",
                "Safe & Supportive Environment",
                "Celebration of Success",
              ]}
            />

            <Feature
              icon="bi-lightbulb"
              title="Creative & Experiential Learning"
              items={[
                "Maker Studios & Innovation Labs",
                "Hands-on Projects",
                "Arts Integration",
              ]}
            />

            <Feature
              icon="bi-megaphone"
              title="Communication Mastery"
              items={[
                "Debates & Public Speaking",
                "Media & Digital Literacy",
                "Multilingual Exposure",
              ]}
            />

            <Feature
              icon="bi-diagram-3"
              title="Activity-Based Learning"
              items={[
                "Self-paced Learning Paths",
                "Collaborative Group Learning",
                "Project Portfolios",
              ]}
            />

            <Feature
              icon="bi-mortarboard"
              title="IIT-JEE & NEET Excellence"
              items={[
                "Expert Mentorship",
                "Targeted Practice",
                "Concept-based Learning",
              ]}
            />

            <Feature
              icon="bi-globe"
              title="Global University Pathways"
              items={[
                "Profile Building",
                "Admissions Guidance",
                "Strong Alumni Network",
              ]}
            />

            <Feature
              icon="bi-award"
              title="Leadership & Life Skills"
              items={[
                "Public Speaking Workshops",
                "Decision Making Skills",
                "Entrepreneurial Mindset",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="pt60 pb60">
        <div className="container">
          <div className="row g-4 text-center">
            {/* MISSION */}
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 p-5">
                <div className="mb-3 text-primary fs-1">
                  <img src={icon1} alt="mission icon" style={{ width: 64 }} />
                </div>
                <h3 className="fw-bold mb-2">What We Stand For</h3>
                <p className="text-muted mb-0">
                  To provide a world-class, holistic education that prepares
                  children for both national and international success.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 p-5">
                <div className="mb-3 text-primary fs-1">
                  <img src={icon2} alt="mission icon" style={{ width: 64 }} />
                </div>
                <h3 className="fw-bold mb-2">Where We’re Headed</h3>
                <p className="text-muted mb-0">
                  To be among the most trusted international schools in
                  Hyderabad, shaping students into future-ready global citizens.
                </p>
              </div>
            </div>

            {/* ADVANTAGE */}
            <div className="col-md-4">
              <div className="card h-100 shadow border-0 p-5">
                <div className="mb-3 text-primary fs-1">
                  <img src={icon3} alt="mission icon" style={{ width: 64 }} />
                </div>
                <h3 className="fw-bold mb-2">The Rankridge Advantage</h3>
                <p className="text-muted mb-0">
                  At Rankridge International School, education is not just about
                  marks. We prepare students to face real-world challenges with
                  confidence, integrity, and responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="distance-hero pt60 pb60">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              <HomeWelcomeLeft />
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <AdmissionEnquiryForm />
            </div>
          </div>
        </div>
      </section>
      <CallToActionSection />
    </>
  );
}

/* ===== Feature Card Component ===== */
function Feature({ title, items, icon }) {
  return (
    <div className="feature-card-modern">
      <div className="feature-icon">
        <i className={`bi ${icon}`}></i>
      </div>

      <h4 className="fw-bold mb-3">{title}</h4>

      <ul className="feature-list-items">
        {items.map((item, i) => (
          <li key={i}>
            <i className="bi bi-check-circle-fill"></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
