import React from "react";
import "../assets/css/Blogs.css";
import { Link } from "react-router-dom";
import HomeNewsSection from "./HomeNewsSection";
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
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Blog</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <HomeNewsSection />
    </>
  );
}

export default Blogs;
