import "../assets/css/Events.css";

export default function Events() {
  return (
    <>
      {/* ===== HERO TITLE ===== */}
      <section className="events-hero">
        <h1>Rankridge Schools Events: Where Learning Meets Celebration</h1>
        <h2>Specialized Skill-Building at Rankridge</h2>

        <div className="events-hero-card">
          <div className="events-hero-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxofQbB3kzUIBfYSDUiTdk_cliQO_6orb1QQ&s" alt="Rankridge Events" />
          </div>

          <div className="events-hero-content">
            <h3>Celebrations That Last a Life Time</h3>
            <p>
              School life is made special by the memories children create
              outside the classroom, and at Rankridge Schools our events play
              a big part in that journey.
            </p>
            <p>
              From cultural festivals and annual days to sports meets, science
              fairs, and community celebrations, every event is designed to
              help children shine in their own way.
            </p>
            <p>
              At Rankridge, events are more than activities — they are joyful
              milestones that build character, creativity, and confidence.
            </p>
          </div>
        </div>

        <p className="events-tagline">
          Empowering Empathy, Igniting Innovation, Celebrating Creativity.
        </p>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="events-cta">
        <p>
          Learn. Lead. Achieve. Enroll At Rankridge Schools And Give Your Child A
          World-Class Future
        </p>
        <button>ENQUIRE NOW</button>
      </section>

      {/* ===== EVENTS GALLERY ===== */}
      <section className="events-gallery">
        <div className="gallery-grid">
          <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2urkgPnO1cqgYWyND2atd3FbXfo8nTzoWw&s" />
          <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBIvTEdAyDggxApRUymPeTIJsp-TfcCgQFw&s" />
          <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehoJ8utReyz3pzahEJ0mILjCWF-6ZJosu3g&s" />
          <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2urkgPnO1cqgYWyND2atd3FbXfo8nTzoWw&s" />
          <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBIvTEdAyDggxApRUymPeTIJsp-TfcCgQFw&s" />
          <EventCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehoJ8utReyz3pzahEJ0mILjCWF-6ZJosu3g&s" />
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
