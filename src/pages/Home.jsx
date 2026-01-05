import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
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
          src="https://rankridgeschools.com/assets/img/slider%2001.webp"
          className="d-block w-100"
          alt="Rankridge School"
        />
      </div>

      <div className="carousel-item">
        <img
          src="https://rankridgeschools.com/assets/img/slider%2003.webp"
          className="d-block w-100"
          alt="Rankridge School"
        />
      </div>

      <div className="carousel-item">
        <img
          src="https://rankridgeschools.com/assets/img/slider%2002.webp"
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


      {/* ===== WELCOME TEXT ===== */}
      <div className="welcome-new pt30 pb50">
        <div className="container text-center">
          <h1 className="mt-4">
            Best Schools In <span>KPHB, Hyderabad</span> with{" "}
            <span>IIT-JEE & NEET</span> Foundation
          </h1>
          <h2>Educating Minds That Will Lead the World</h2>
        </div>
      </div>

    </main>
  );
}

export default Home;
