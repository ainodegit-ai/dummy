import React from "react";
import "../assets/css/Blogs.css";

const blogs = [
  {
    id: 1,
    title: "Why Holistic Education Matters in Modern Schools",
    date: "March 10, 2025",
    excerpt:
      "Holistic education focuses on developing a child academically, emotionally, socially, and ethically. At Rankridge, we believe learning goes beyond textbooks.",
  },
  {
    id: 2,
    title: "How Activity-Based Learning Boosts Student Confidence",
    date: "March 5, 2025",
    excerpt:
      "Activity-based learning encourages curiosity, teamwork, and critical thinking. Discover how this approach shapes confident learners.",
  },
  {
    id: 3,
    title: "Preparing Students for Future Careers from an Early Age",
    date: "February 25, 2025",
    excerpt:
      "Future-ready education focuses on communication, creativity, and problem-solving skills that help students succeed in a fast-changing world.",
  },
  {
    id: 4,
    title: "The Role of Sports and Arts in Student Development",
    date: "February 18, 2025",
    excerpt:
      "Sports and arts play a crucial role in nurturing discipline, creativity, and emotional well-being in students.",
  },
];

function Blogs() {
  return (
    <section className="blogs-page">
      <div className="container">
        <h1 className="blogs-title">Our Blogs</h1>
        <p className="blogs-subtitle">
          Insights, updates, and stories from Rankridge Schools
        </p>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
