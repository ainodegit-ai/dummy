import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import HomeHeroSection from "./HomeHeroSection";
import HomeAboutUsSection from "./HomeAboutUsSection";
import AdmissionEnquirySection from "./AdmissionEnquirySection";
import ActivitySkillSection from "./ActivitySkillSection";
import AcademicTimelineSection from "./AcademicTimelineSection";
import TestimonialsAndStandoutSection from "./TestimonialsAndStandoutSection";
import HomeNewsSection from "./HomeNewsSection";
import HomeGallerySection from "./HomeGallerySection";
import HomeWelcomeSection from "./HomeWelcomeSection";
import CallToActionSection from "./CallToActionSection";
function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="slider slider2">
        <div
          id="rankridgeHeroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#rankridgeHeroCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#rankridgeHeroCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#rankridgeHeroCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slider2}
                className="d-block w-100"
                alt="Rankridge School"
              />
            </div>

            <div className="carousel-item">
              <img
                src={slider1}
                className="d-block w-100"
                alt="Rankridge School"
              />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#rankridgeHeroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#rankridgeHeroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <HomeHeroSection />
      <section className="pt80 pb80 background-img">
        <div className="container">
          <HomeAboutUsSection />
        </div>
      </section>

      <AdmissionEnquirySection />
      <ActivitySkillSection />
      <AcademicTimelineSection />
      <TestimonialsAndStandoutSection />
      <HomeNewsSection />
      <HomeGallerySection />
      <HomeWelcomeSection />
      <CallToActionSection />
    </main>
  );
}

export default Home;
