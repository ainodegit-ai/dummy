import React from "react";
import "../assets/css/About.css";
export default function About() {
  return (
    <>
      {/* ===== ABOUT INTRO ===== */}
      <section className="about-intro">
        <div className="container about-grid">
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWdCIc4Tgb0XL-g1zk0KTxKA6aaAxx7cnwA&s" alt="Rankridge Classroom" />
          </div>

          <div className="about-content">
            <h2>About Rankridge Schools</h2>
            <p>
              Rankridge Schools is among the best schools in Hyderabad, offering
              a world-class education from Pre-School to Grade 12 with IIT-JEE
              & NEET foundation programs. Our holistic approach focuses on
              academic excellence, leadership, and life skills.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="about-cta">
        <p>
          Learn. Lead. Achieve. Enroll at Rankridge Schools and give your child
          a world-class future.
        </p>
        <button>ENQUIRE NOW</button>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why-choose">
        <h2>Why Choose Rankridge International Schools?</h2>
        <p className="subtitle">
          Rankridge Empowering Today’s Learners & Leading Tomorrow’s Leaders.
        </p>

        <div className="feature-list">
          <Feature
            title="Stress-Free, Joyful Learning"
            items={[
              "Mindful Curriculum",
              "Safe & Supportive Environment",
              "Celebration of Success"
            ]}
          />

          <Feature
            title="Creative & Experiential Learning"
            items={[
              "Maker Studios & Innovation Labs",
              "Hands-on Projects",
              "Arts Integration"
            ]}
          />

          <Feature
            title="Communication Mastery"
            items={[
              "Debates & Public Speaking",
              "Media & Digital Literacy",
              "Multilingual Exposure"
            ]}
          />

          <Feature
            title="Activity-Based Learning"
            items={[
              "Self-paced Learning Paths",
              "Collaborative Group Learning",
              "Project Portfolios"
            ]}
          />

          <Feature
            title="IIT-JEE & NEET Excellence"
            items={[
              "Expert Mentorship",
              "Targeted Practice",
              "Concept-based Learning"
            ]}
          />

          <Feature
            title="Global University Pathways"
            items={[
              "Profile Building",
              "Admissions Guidance",
              "Strong Alumni Network"
            ]}
          />

          <Feature
            title="Leadership & Life Skills"
            items={[
              "Public Speaking Workshops",
              "Decision Making Skills",
              "Entrepreneurial Mindset"
            ]}
          />
        </div>
      </section>

      {/* ===== MISSION ===== */}
      <section className="stand-for">
        <h3>What We Stand For</h3>
        <p>
          To provide a world-class, holistic education that prepares children
          for both national and international success.
        </p>
      </section>

      {/* ===== VISION ===== */}
      <section className="vision">
        <h3>Where We’re Headed</h3>
        <p>
          To be among the most trusted international schools in Hyderabad,
          shaping students into future-ready global citizens.
        </p>
      </section>

      {/* ===== ADVANTAGE ===== */}
      <section className="advantage">
        <h3>The Rankridge Advantage</h3>
        <p>
          At Rankridge International School, education is not just about marks.
          We prepare students to face real-world challenges with confidence,
          integrity, and responsibility.
        </p>
      </section>
    </>
  );
}

/* ===== Feature Card Component ===== */
function Feature({ title, items }) {
  return (
    <div className="feature-card">
      <h4>{title}</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
