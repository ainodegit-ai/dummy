import React from "react";

/* Import images */
import gallery1 from "../assets/img/gallery-1.jpg";
import gallery2 from "../assets/img/gallery-2.jpg";
import gallery3 from "../assets/img/gallery-3.jpg";
import gallery4 from "../assets/img/gallery-4.jpg";

export default function HomeGallerySection() {
  return (
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
      </div>

      {/* Gallery Carousel */}
      <div className="gallery-carousel gallery-carousel1 owl-carousel owl-theme mt-4">
        {/* Item 1 */}
        <div className="item">
          <img src={gallery1} alt="Learning Beyond Classrooms" />
          <div className="gallery-carousel-content">
            <a href={gallery1} data-fancybox>
              <i className="bi bi-image"></i>
            </a>
            <h3>Learning Beyond Classrooms</h3>
          </div>
        </div>

        {/* Item 2 */}
        <div className="item">
          <img src={gallery2} alt="Interactive Learning Session" />
          <div className="gallery-carousel-content">
            <a href="https://www.youtube.com/watch?v=YrTKQ9tKPoQ" data-fancybox>
              <i className="fas fa-play"></i>
            </a>
            <h3>Interactive Learning Session</h3>
          </div>
        </div>

        {/* Item 3 */}
        <div className="item">
          <img src={gallery3} alt="Creative Classroom Activities" />
          <div className="gallery-carousel-content">
            <a href={gallery3} data-fancybox>
              <i className="bi bi-image"></i>
            </a>
            <h3>Creative Classroom Activities</h3>
          </div>
        </div>

        {/* Item 4 */}
        <div className="item">
          <img src={gallery4} alt="Student Life & Campus Moments" />
          <div className="gallery-carousel-content">
            <a href="https://www.youtube.com/watch?v=YrTKQ9tKPoQ" data-fancybox>
              <i className="fas fa-play"></i>
            </a>
            <h3>Student Life &amp; Campus Moments</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
