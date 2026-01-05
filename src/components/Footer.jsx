import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row footer-top">

          {/* Contact Us */}
          <div className="col-lg-4 col-md-6 footer-box">
            <h5>Contact Us</h5>
            <p>📞 +91 99 59 303 873</p>
            <p>✉️ admissions@rankridgeschools.com</p>
            <p>
              📍 CO Branch - KPHB Kukatpally <br />
              Hyderabad, Telangana
            </p>
            <p>
              Vijayawada, Guntur, Vizag, Tirupati – Andhra Pradesh <br />
              Chennai, Bangalore, Pune, Mumbai & Delhi – India
            </p>

            <div className="social-icons">
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 footer-box">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/student-life">Student Life</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          {/* Find Us */}
          <div className="col-lg-4 col-md-12 footer-box">
            <h5>Find Us</h5>
            <div className="map-wrapper">
              <iframe
                title="Rankridge Location"
                src="https://www.google.com/maps?q=Rankridge%20Schools%20KPHB&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Rankridge International Schools. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
