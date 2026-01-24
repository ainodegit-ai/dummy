import "../assets/css/Admissions.css";

export default function Admissions() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="admissions-hero">
        <h1>
          Admissions Now Open – Empower Your Child with Rankridge Education
        </h1>

        <div className="admissions-hero-card">
          <div className="hero-image">
            <img
              src="https://www.shutterstock.com/image-vector/admission-open-banner-poster-element-600nw-2543222313.jpg"
              alt="Rankridge Admissions"
            />
          </div>

          <div className="hero-content">
            <h2>Admissions with Care and Clarity</h2>
            <p>
              Becoming part of Rankridge Schools is simple, transparent, and
              welcoming. We open admissions for students from Pre-School up to
              Grade 12, offering CBSE, ICSE, State Board, and Cambridge (IGCSE &
              AS Levels).
            </p>
            <p>
              Our admission process values every child as an individual,
              ensuring clarity, excellence, and a supportive academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="admissions-cta">
        <p>
          Learn. Lead. Achieve. Enroll at Rankridge Schools and Give Your Child a
          World-Class Future
        </p>
        <button>ENQUIRE NOW</button>
      </section>

      {/* ===== PROCEDURE ===== */}
      <section className="admissions-procedure">
        <div className="procedure-grid">
          <div className="procedure-text">
            <h3>Registration And Admission Procedure</h3>
            <p>
              Admissions are open for Classes LKG to X. The application form
              along with the prospectus can be collected from the school office
              during working hours.
            </p>

            <h4>Submission of Application Forms</h4>
            <ul>
              <li>Two recent passport-size photographs of the student</li>
              <li>Original Transfer Certificate from previous school</li>
              <li>Photocopy of previous school progress report</li>
              <li>Photocopy of Aadhaar Card</li>
              <li>Photocopy of Birth Certificate</li>
            </ul>
          </div>

          <div className="procedure-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjS7vzheub-1YPeXgz7xiKhw6C3rv8OmiVMg&s"
              alt="Admission Registration"
            />
          </div>
        </div>
      </section>

      {/* ===== SCHOOL VISIT ===== */}
      <section className="admissions-visit">
        <div className="visit-grid">
          <div className="visit-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvmebQZhdambaQWoTx0v99i1M_5ebUZHIg&s" alt="School Visit" />
          </div>

          <div className="visit-content">
            <h3>School Visit</h3>
            <p>
              Parents are welcome to visit the school premises for an
              interaction session, with or without the child. We recommend
              booking an appointment in advance.
            </p>

            <h3>Interaction & Assessment</h3>
            <p>
              The Principal and school counselor will interact with the student
              and parents to understand learning levels, communication skills,
              and overall development.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY SECTION ===== */}
      <section className="admissions-enquiry">
        <div className="enquiry-grid">
          <div className="enquiry-text">
            <h2>Welcome to Rankridge School, Hyderabad</h2>
            <p>
              Admissions Open 2026–27 | A complete journey from Pre-School to
              Grade 12 with Academic Excellence, Leadership, Arts, Culture &
              Global Careers.
            </p>
          </div>

          <div className="enquiry-form">
            <h3>Admission Enquiry</h3>
            <form>
              <input type="text" placeholder="Student Name *" />
              <input type="text" placeholder="Parent Name" />
              <input type="date" />
              <select>
                <option>Select Class</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>Grade 1+</option>
              </select>
              <select>
                <option>Select Campus</option>
                <option>KPHB</option>
                <option>Miyapur</option>
              </select>
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Enter Mobile Number" />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
