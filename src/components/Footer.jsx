import React from "react";

/* Social Icons */
import instagramIcon from "../assets/img/instagram.png";
import facebookIcon from "../assets/img/facebook.png";
import linkedinIcon from "../assets/img/linkedin.png";
import twitterIcon from "../assets/img/twitter.png";
import youtubeIcon from "../assets/img/youtube.png";

export default function Footer() {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="contact-footer py-5">
        <div className="container">
          <div className="row g-4">
            {/* Quick Links 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/academics">Academic Program</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="quick-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="/testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/terms">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Address & Phone */}
            <div className="col-md-6 col-lg-3 quick-links">
              <h4>Address Info</h4>

              <div className="contact-item mb-3">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <strong>Address</strong>
                  <p>
                    CO Branch :: KPHB Kukatpally,
                    <br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <div>
                  <strong>Phone</strong>
                  <p>+91 99 59 303 873</p>
                </div>
              </div>
            </div>

            {/* Email & Office Time */}
            <div className="col-md-6 col-lg-3 quick-links">
              <h4>Contact Info</h4>

              <div className="contact-item mb-3">
                <i className="bi bi-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p>admissions@rankridgeschools.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="bi bi-clock"></i>
                <div>
                  <strong>Office Hours</strong>
                  <p>Open All 7 Days • 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* SMALL FOOTER */}
      <footer className="footer-small">
        <div className="footer-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-start">
                <p>
                  All rights reserved - 2026 © Rankridge Educational
                  Institutions Pvt Ltd.
                </p>
              </div>

              <div className="col-md-6">
                <div className="social-icon">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/rankridgeschools/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={instagramIcon} alt="Instagram" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/RankridgeSchools/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={facebookIcon} alt="Facebook" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://linkedin.com/company/rankridgeschools"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={linkedinIcon} alt="LinkedIn" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://x.com/RankridgeSchool"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={twitterIcon} alt="Twitter" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/@RankridgeSchools"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={youtubeIcon} alt="YouTube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* CALL BUTTON */}
      <a href="tel:+919959303873" className="call-now-btn">
        <i className="fa fa-phone"></i>
      </a>

      {/* BACK TO TOP */}
      <div id="toTop">
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
}
