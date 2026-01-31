// AcademicsTemplate.jsx

import FaqItem from "../../components/ui/FaqItem";
import { Link } from "react-router-dom";
import admissions from "../../assets/img/admissions.avif";

function AcademicsTemplate({ data }) {
  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Academics</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Academics</Link>
                </li>
                <li>Pre-primary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="admissions-hero pt60 pb60">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-bold mb-3 text-center">{data.hero.title}</h2>
            <p className="text-center">
              At Rankridge, every activity is designed to inspire curiosity,
              creativity, and a lifelong love for learning, helping students
              grow into confident, compassionate, and capable individuals.
            </p>
          </div>
          <div className="row align-items-center mt-5">
            {/* LEFT : Image */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="image-grid">
                <img
                  src={admissions}
                  alt="About Rankridge"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* RIGHT : Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">{data.hero.heading}</h2>

              {data.hero.paragraphs.map((p, i) => (
                <p key={i} className="mb-4">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="admissions-hero pt60 pb60 background-img">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-bold mb-3 text-center">{data.intro.title}</h2>
            <p className="text-center">{data.intro.text}</p>
          </div>
          <div className="row g-4 mt-3">
            {data.features.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="feature-modern-card h-100">
                  <div className="feature-header">
                    <span className="feature-badge">{index + 1}</span>
                    <h4>{item.title}</h4>
                  </div>

                  <ul className="feature-points">
                    {item.points.map((p, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="course pt80 pb80" id="faq">
        <div className="container course-padding">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-4">
                <h2 className="fw-bold">FAQ’s</h2>
                <p>
                  Rankridge ensures every child succeeds through adaptive
                  learning, personalized attention, and inclusive teaching
                  methods.
                </p>
              </div>

              <div className="accordion" id="faqAccordion">
                {data.faqs.map((faq, i) => (
                  <FaqItem key={i} index={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certification-cta text-center pt40 pb40 background-img">
        <div className="container position-relative">
          {/* Badge */}
          <span className="cta-badge">QUALITY SCHOOL EDUCATION</span>

          {/* Title */}
          <h2 className="cta-title mt-3">{data.admissions.title}</h2>

          {/* Description */}
          <p className="cta-text mt-3">{data.admissions.text}</p>

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
    </>
  );
}

export default AcademicsTemplate;
