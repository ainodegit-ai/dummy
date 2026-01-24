import { Link } from "react-router-dom";
import schoolvisit from "../assets/img/schoolvisit.jpg";
import gallery1 from "../assets/img/gallery-1.jpg";
import gallery2 from "../assets/img/gallery-2.jpg";
import gallery3 from "../assets/img/gallery-3.jpg";
import gallery4 from "../assets/img/gallery-4.jpg";
export default function Events() {
  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Events</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>Events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== HERO TITLE ===== */}
      <section className="admissions-hero pt60 pb60">
        <div className="container">
          <div className="section-title">
            <h2 className="fw-bold mb-3 text-center">
              Rankridge Schools Events: Where Learning Meets Celebration
            </h2>
            <p className="text-center">
              Specialized Skill-Building at Rankridge empowers students with
              essential academic, creative, and life skills through structured
              programs designed for real-world readiness.
            </p>
          </div>
          <div className="row align-items-center mt-5">
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
              <h2 className="fw-bold mb-3">
                Celebrations That Last a Life Time
              </h2>

              <p className="mb-4">
                School life is made special by the memories children create
                outside the classroom, and at Rankridge Schools, our events play
                a big part in that journey. These moments give students
                opportunities to express themselves, connect with peers, and
                experience the joy of shared achievements.
              </p>

              <p className="mb-4">
                From cultural festivals and annual days to sports meets, science
                fairs, leadership programs, and community celebrations, every
                event is thoughtfully planned to help children shine in their
                own way. Students are encouraged to participate actively, take
                initiative, and explore their talents—whether on stage, on the
                field, or behind the scenes.
              </p>
              <p className="mb-4">
                Our events also promote teamwork, responsibility, and respect
                for diversity, allowing students to learn valuable life lessons
                beyond academics. Parents and teachers come together to
                celebrate these occasions, strengthening the sense of community
                and belonging within the school.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery background-img pt80 pb80">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <h2 className="fw-bold mt-2 mb-3">Events and Gallery</h2>
            <p>
              Explore our latest events and memorable moments. A glimpse into
              life, learning, and celebrations on campus.
            </p>
          </div>
          <div className="row g-4 mt-4 gallery-carousel">
            {/* Item 1 */}
            <div className="col-sm-6 col-md-4 item">
              <img src={gallery1} alt="Learning Beyond Classrooms" />
              <div className="gallery-carousel-content">
                <a href={gallery1} data-fancybox>
                  <i className="bi bi-image"></i>
                </a>
                <h3>Learning Beyond Classrooms</h3>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-sm-6 col-md-4 item">
              <img src={gallery2} alt="Interactive Learning Session" />
              <div className="gallery-carousel-content">
                <a
                  href="https://www.youtube.com/watch?v=YrTKQ9tKPoQ"
                  data-fancybox
                >
                  <i className="fas fa-play"></i>
                </a>
                <h3>Interactive Learning Session</h3>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-sm-6 col-md-4 item">
              <img src={gallery3} alt="Creative Classroom Activities" />
              <div className="gallery-carousel-content">
                <a href={gallery3} data-fancybox>
                  <i className="bi bi-image"></i>
                </a>
                <h3>Creative Classroom Activities</h3>
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-sm-6 col-md-4 item">
              <img src={gallery4} alt="Student Life & Campus Moments" />
              <div className="gallery-carousel-content">
                <a
                  href="https://www.youtube.com/watch?v=YrTKQ9tKPoQ"
                  data-fancybox
                >
                  <i className="fas fa-play"></i>
                </a>
                <h3>Student Life &amp; Campus Moments</h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <img src={gallery1} alt="Learning Beyond Classrooms" />
              <div className="gallery-carousel-content">
                <a href={gallery1} data-fancybox>
                  <i className="bi bi-image"></i>
                </a>
                <h3>Learning Beyond Classrooms</h3>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-sm-6 col-md-4 item">
              <img src={gallery2} alt="Interactive Learning Session" />
              <div className="gallery-carousel-content">
                <a
                  href="https://www.youtube.com/watch?v=YrTKQ9tKPoQ"
                  data-fancybox
                >
                  <i className="fas fa-play"></i>
                </a>
                <h3>Interactive Learning Session</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===== EVENT IMAGE CARD ===== */
function EventCard({ img }) {
  return (
    <div className="event-card">
      <img src={img} alt="Rankridge Event" />
    </div>
  );
}
