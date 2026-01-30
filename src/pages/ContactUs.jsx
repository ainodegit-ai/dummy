import { Link } from "react-router-dom";
import AdmissionEnquiryForm from "./AdmissionEnquiryForm";
function ContactUs() {
  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Contact Us</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-page py-5">
        <div className="container">
          <div className="row g-5">
            {/* LEFT : CONTACT INFO */}
            <div className="col-lg-5">
              <h2>Contact Info</h2>
              <p className="text-muted mb-4">
                We’re happy to help you with admissions, enquiries, or general
                information. Reach out to us anytime.
              </p>

              <div className="contact-info-item">
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                  <h6>Address</h6>
                  <p>KPHB Kukatpally, Hyderabad, Telangana</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-telephone-fill"></i>
                <div>
                  <h6>Phone</h6>
                  <p>+91 99 59 303 873</p>
                </div>
              </div>

              <div className="contact-info-item">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <h6>Email</h6>
                  <p>admissions@rankridgeschools.com</p>
                </div>
              </div>
            </div>

            {/* RIGHT : CONTACT FORM */}
            <div className="col-lg-7">
              <AdmissionEnquiryForm />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1902.6814572115077!2d78.394834!3d17.490181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915ba16b6a93%3A0x89777823a0ce54cf!2sRankridge%20Schools%20(%20Nursery%20-%2010th%20Class%20)%20-%20Best%20Schools%20in%20Hyderabad%20with%20IIT%20JEE%20%26%20NEET%20Foundation!5e0!3m2!1sen!2sin!4v1764653182758!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
