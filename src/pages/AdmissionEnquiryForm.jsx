import React from "react";

export default function AdmissionEnquiryForm() {
  return (
    <div className="course-req-form bxw wow fadeInUp">
      <div className="text-center">
        <h2>Admissions Open for 2026-2027</h2>
        <p className="mb0">Begin the path to confidence and learning</p>
      </div>

      <form>
        <div className="row mt20">
          <div className="col-md-6">
            <input type="text" placeholder="Student name" required />
          </div>

          <div className="col-md-6">
            <input type="text" placeholder="Parent name" required />
          </div>

          <div className="col-md-6">
            <input type="date" required />
          </div>

          <div className="col-md-6">
            <select required>
              <option value="">Select Class</option>
              <option>DayCare</option>
              <option>Play School</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
            </select>
          </div>

          <div className="col-md-6">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="col-md-6">
            <input type="tel" placeholder="Phone" required />
          </div>

          <div className="col-md-12">
            <select required>
              <option value="">Select Campus</option>
              <option>KPHB, Hyderabad</option>
            </select>
          </div>

          {/* CAPTCHA PLACEHOLDER */}
          <div className="col-md-12">
            <label className="mb-1 fw-bold">
              Captcha <span className="text-danger">*</span>
            </label>

            <div className="row align-items-center">
              <div className="col-8 col-xl-6 mb-2">
                <div id="captchaBox1" className="captcha-box w-100"></div>
              </div>

              <div className="col-4 col-xl-1 mb-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  ⟳
                </button>
              </div>

              <div className="col-12 col-xl-5 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Captcha"
                  required
                />
              </div>
            </div>
          </div>

          {/* CONSENT */}
          <div className="col-md-12 mt-3">
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" required style={{ width: 20 }} />
              <label className="mb-0">
                I agree to receive information regarding my enquiry on
                <strong> Rankridge Schools</strong>
                <span className="text-danger">*</span>
              </label>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="col-md-12 mt-3 text-center">
            <button type="submit" className="btn cta-btn">
              Submit Enquiry
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
