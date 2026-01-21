import React from "react";

/* Import local images */
import personalMentoring from "../assets/img/personal_mentoring.png";
import smartClassroom from "../assets/img/smartclassroom.png";
import iitImg from "../assets/img/iit.png";
import lifeSkills from "../assets/img/smartclassromm.png";
import robotics from "../assets/img/roboticcoding.png";

/* External avatar images can stay as URLs */
const testimonials = [
  {
    text: `As a parent, I am truly impressed with how Rankridge School focuses on
    academic excellence and overall development. The caring teachers,
    coordinators, and school team have helped my child become more confident,
    curious, and responsible. We are extremely happy with the progress and the
    nurturing environment.`,
    name: "John Smith",
    role: "Parent of Grade 5 Student",
    avatar: "https://i.pravatar.cc/60?img=12",
  },
  {
    text: `Rankridge School has truly transformed my child’s learning journey.
    The structured teaching methods, supportive faculty and academic mentors,
    and the school’s focus on discipline and values have helped my child develop
    strong study habits and a positive attitude.`,
    name: "David Warner",
    role: "Parent of Grade 10 Student",
    avatar: "https://i.pravatar.cc/60?img=15",
  },
];

export default function TestimonialsAndStandoutSection() {
  return (
    <section className="distance-learning background-img pt80 pb80">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT : TESTIMONIALS */}
          <div className="col-lg-6">
            <h2 className="fw-bold mt-2 mb-3">
              What Parents Say About Rankridge?
            </h2>

            <p className="text-muted mb-4">
              Rankridge parents share their experiences about academic
              excellence, caring faculty, and a supportive learning environment
              that nurtures confidence and success.
            </p>

            <div className="owl-carousel testimonial">
              {testimonials.map((item, index) => (
                <div className="item active">
                  <div className="testimonial-box mb-4" key={index}>
                    <p className="mt-2">“{item.text}”</p>

                    <div className="d-flex align-items-center mt-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="avatar"
                      />
                      <div className="ms-3">
                        <strong className="text-danger">{item.name}</strong>
                        <br />
                        <small>{item.role}</small>
                        <p className="testimonial-stars mb-0">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </p>
                      </div>
                    </div>

                    <span className="quote-mark">”</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT : STAND OUT FEATURES */}
          <div className="col-lg-6">
            <h2 className="fw-bold mt-2 mb-3 text-center">
              What Makes Rankridge Stand Out
            </h2>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="stat-box text-center">
                  <img src={personalMentoring} alt="Personal Mentoring" />
                  <p>
                    Small Batch Sizes <br /> &amp; Personal Mentoring
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-box text-center">
                  <img src={smartClassroom} alt="Safe Campus" />
                  <p>
                    Safe &amp; Secure <br /> Campus
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-box text-center">
                  <img src={iitImg} alt="Stress-Free Learning" />
                  <p>
                    Stress-Free <br /> Learning Culture
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-box text-center">
                  <img src={lifeSkills} alt="Life Skills" />
                  <p>
                    Leadership &amp; <br /> Life Skills Programs
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-box text-center">
                  <img src={robotics} alt="Robotics & AI" />
                  <p>
                    Robotics, Coding <br /> &amp; AI Labs
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="stat-box text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                    alt="Clubs"
                  />
                  <p>
                    Clubs &amp; Co-Curricular <br /> Activities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
