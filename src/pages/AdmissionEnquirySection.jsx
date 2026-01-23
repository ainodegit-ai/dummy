import React from "react";
import AdmissionEnquiryForm from "./AdmissionEnquiryForm";

export default function AdmissionEnquirySection() {
  return (
    <section className="course pt80 pb80" id="enquiryForm">
      <div className="container course-padding">
        <div className="row align-items-center">
          {/* LEFT : ENQUIRY FORM */}
          <div className="col-lg-6 sd-done">
            <AdmissionEnquiryForm />
          </div>

          {/* RIGHT : FAQ */}
          <div className="col-12 col-lg-6 rmt70">
            <div className="section-title">
              <h2 className="fw-bold mt-2 mb-2">FAQ's</h2>
              <p>
                Rankridge ensures every child succeeds by providing adaptive
                learning support, personalized attention, and inclusive teaching
                methods.
              </p>
            </div>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "Is there a way to apply for admission online?",
                  a: "We accept both online & offline admissions across all branches. Visit the admissions page or contact us for assistance.",
                },
                {
                  q: "What syllabus do you follow?",
                  a: "CBSE, ICSE, State and Cambridge (IGCSE / AS & A Levels) with integrated IIT-JEE & NEET foundation.",
                },
                {
                  q: "What is the age criteria for admission?",
                  a: "Age criteria vary by class. Please refer to the admissions section.",
                },
                {
                  q: "When does the admission process begin?",
                  a: "Admissions generally begin in September for the next academic year.",
                },
                {
                  q: "Which curriculum does Rankridge follow?",
                  a: "CBSE from Play Group to Grade 12 with IIT-JEE & NEET foundation from Grade 6.",
                },
                {
                  q: "Where is Rankridge School located?",
                  a: "KPHB, Kukatpally, Hyderabad — accessible from Miyapur and Nizampet.",
                },
              ].map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div
                    id={`faq${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
