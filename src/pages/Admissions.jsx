import { Link } from "react-router-dom";
import AdmissionEnquiryForm from "./AdmissionEnquiryForm";
import CallToActionSection from "./CallToActionSection";
import HomeWelcomeLeft from "./HomeWelcomeLeft";
import admissions from "../assets/img/admissions.avif";
import Procedure from "../assets/img/procedure.jpg";
import schoolvisit from "../assets/img/schoolvisit.jpg";
export default function Admissions() {
  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Admissions</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>Admissions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="admissions-hero pt60 pb60">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-bold mb-3 text-center">
              Admissions Now Open – Empower Your Child with Rankridge Education
            </h2>
            <p className="text-center">
              Rankridge Empowering Today’s Learners & Leading Tomorrow’s
              Leaders.
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
              <h2 className="fw-bold mb-3">Admissions with Care and Clarity</h2>

              <p className="mb-4">
                Becoming part of Rankridge Schools is simple, transparent, and
                welcoming. We open admissions for students from Pre-School up to
                Grade 12, offering CBSE, ICSE, State Board, and Cambridge (IGCSE
                & AS Levels).
              </p>

              <p className="mb-4">
                Our admission process values every child as an individual,
                ensuring clarity, excellence, and a supportive academic journey.
              </p>
              <p className="mb-4">
                Parents are guided at every step of the admission process, from
                initial enquiry to final enrollment, with clear communication
                and personalized support. Our team is always available to answer
                questions, explain curriculum options, and help families choose
                the best pathway suited to their child’s interests and
                abilities.
              </p>

              <p className="mb-4">
                Parents are guided at every step of the admission process, from
                initial enquiry to final enrollment, with clear communication
                and personalized support. Our team is always available to answer
                questions, explain curriculum options, and help families choose
                the best pathway suited to their child’s interests and
                abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt80 pb80 background-img admissions-new">
        <div className="container">
          <div className="row align-items-center pb40">
            {/* LEFT : Image */}

            {/* RIGHT : Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">
                Registration And Admission Procedure
              </h2>
              <p className="mb-4">
                Admissions are open for Classes LKG to X. The application form
                along with the prospectus can be collected from the school
                office during working hours. Parents may also contact the
                admissions team in advance to schedule a visit or seek guidance
                on the application process.
              </p>

              <h4 className="fw-bold mb-4">Submission of Application Forms</h4>
              <ul className="tick-list">
                <li>Two recent passport-size photographs of the student</li>
                <li>Original Transfer Certificate from previous school</li>
                <li>Photocopy of previous school progress report</li>
                <li>Photocopy of Aadhaar Card</li>
                <li>Photocopy of Birth Certificate</li>
              </ul>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="image-grid">
                <img
                  src={Procedure}
                  alt="About Rankridge"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row align-items-center pt40">
            {/* LEFT : Image */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="image-grid">
                <img
                  src={schoolvisit}
                  alt="About Rankridge"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            {/* RIGHT : Content */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">School Visit</h2>
              <p className="mb-4">
                Parents are welcome to visit the school premises for an
                interaction session, with or without the child. We recommend
                booking an appointment in advance. During the visit, parents can
                meet our academic team, explore the campus facilities, and
                understand our teaching approach in detail. This interaction
                helps families make an informed decision and feel confident
                about their child’s learning journey at Rankridge.
              </p>

              <h2 className="fw-bold mt-3 mb-3">Interaction & Assessment</h2>
              <p>
                The Principal and school counselor will interact with the
                student and parents to understand learning levels, communication
                skills, and overall development. This interaction helps assess
                the child’s academic readiness, emotional well-being, and
                individual strengths. It also allows parents to discuss
                expectations, concerns, and learning goals in a supportive
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

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
