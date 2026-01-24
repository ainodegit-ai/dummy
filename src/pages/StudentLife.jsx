import ActivitySkillSection from "./ActivitySkillSection";
import CallToActionSection from "./CallToActionSection";
import { Link } from "react-router-dom";
import admissions from "../assets/img/admissions.avif";
export default function StudentLife() {
  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Student Life</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>Student Life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="admissions-hero pt60 pb60">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-bold mb-3 text-center">
              Empowering Students for Success at <br />
              Rankridge Schools
            </h2>
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
              <h2 className="fw-bold mb-3">School Life That Inspires</h2>

              <p className="mb-4">
                At Rankridge Schools, students are at the heart of every
                decision we make. We believe each child is unique, with their
                own talents and dreams, and our role is to provide the right
                environment for them to grow with confidence.
              </p>

              <p className="mb-4">
                From early years to Grade 12, students experience learning
                beyond books, with opportunities in arts, sports, science,
                technology, and leadership.
              </p>
              <p className="mb-4">
                At Rankridge, education goes far beyond textbooks and
                classrooms. We believe in nurturing well-rounded individuals by
                encouraging students to explore their interests, express
                creativity, and develop essential life skills through a wide
                range of co-curricular and extracurricular activities.
              </p>
              <p className="mb-4">
                From sports, arts, and cultural programs to clubs, leadership
                initiatives, and hands-on learning experiences, students are
                given opportunities to discover their passions and build
                confidence. These experiences foster teamwork, communication,
                problem-solving, and resilience—skills that prepare students to
                succeed not only academically, but also in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ActivitySkillSection />
    </>
  );
}

/* ===== ACTIVITY CARD COMPONENT ===== */
function ActivityCard({ img, title, desc }) {
  return (
    <div className="activity-card">
      <img src={img} alt={title} />
      <div className="activity-content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
