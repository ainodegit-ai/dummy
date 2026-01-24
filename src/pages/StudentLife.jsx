import "../assets/css/StudentLife.css";

export default function StudentLife() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="studentlife-hero">
        <h1>Empowering Students for Success at Rankridge Schools</h1>
        <p>Life Beyond Books: Learn, Create & Inspire at Rankridge.</p>

        <div className="hero-card">
          <div className="hero-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aVVYuYC1f-QGV8bbpqWx2OZvSU-IM6Y9nw&s" alt="Student Life" />
          </div>

          <div className="hero-content">
            <h2>School Life That Inspires</h2>
            <p>
              At Rankridge Schools, students are at the heart of every decision
              we make. We believe each child is unique, with their own talents
              and dreams, and our role is to provide the right environment for
              them to grow with confidence.
            </p>
            <p>
              From early years to Grade 12, students experience learning beyond
              books, with opportunities in arts, sports, science, technology,
              and leadership.
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <a href="tel:+919959308373" className="call-btn">
            Call Now +91 99 59 303 873
          </a>
          <button className="enquire-btn">ENQUIRE NOW</button>
        </div>
      </section>

      {/* ===== GROWING SECTION ===== */}
      <section className="studentlife-growth">
        <h2>Growing, Exploring & Leading at Rankridge</h2>
        <p>
          We believe learning happens everywhere. Our vibrant student life
          includes extracurriculars, sports, and leadership opportunities that
          empower every learner.
        </p>

        <div className="activity-grid">
          <ActivityCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDgczz7EiAF-a3FXE0bpuZOHk0zW9-o4nZQ&s"
            title="Vedic Maths"
            desc="Strengthening mental math skills through ancient techniques."
          />

          <ActivityCard
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCOywUzEs4J6udj9NZvH6ajP6QMx8ROfVhw&s"
            title="Abacus Maths"
            desc="Enhancing focus, speed, and numerical confidence."
          />

          <ActivityCard
            img="data:image/jpeg;base64,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"
            title="Creative Arts"
            desc="Visual arts, music, and drama to foster creativity."
          />

          <ActivityCard
            img="/images/sports.jpg"
            title="Sports & Fitness"
            desc="Encouraging teamwork, fitness, and sportsmanship."
          />

          <ActivityCard
            img="/images/community.jpg"
            title="Community Service"
            desc="Instilling social responsibility and empathy."
          />

          <ActivityCard
            img="/images/clubs.jpg"
            title="Clubs & Activities"
            desc="Science, literature, robotics, and interest-based clubs."
          />

          <ActivityCard
            img="/images/tech-club.jpg"
            title="Technology Club"
            desc="Hands-on exposure to coding, robotics, and innovation."
          />

          <ActivityCard
            img="/images/dance.jpg"
            title="Dance & Culture"
            desc="Celebrating diversity through cultural expressions."
          />

          <ActivityCard
            img="/images/science.jpg"
            title="Science Exploration"
            desc="Experiments, fairs, and inquiry-based learning."
          />
        </div>
      </section>
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
