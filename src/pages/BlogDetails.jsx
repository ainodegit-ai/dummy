import React from "react";
import { useParams } from "react-router-dom";
import blogImg from "../assets/img/slider1.jpg"; // example image
import { Link } from "react-router-dom";
import news1 from "../assets/img/news1.jpg";
import news2 from "../assets/img/news2.jpg";
import news3 from "../assets/img/news3.jpg";
const recentPosts = [
  {
    id: 1,
    title: "How Schools Shape Future Leaders",
    date: "July 21, 2025",
    image: news1,
    slug: "how-schools-shape-future-leaders",
  },
  {
    id: 2,
    title: "The Importance of Skill-Based Learning",
    date: "July 02, 2025",
    image: news2,
    slug: "importance-of-skill-based-learning",
  },
  {
    id: 3,
    title: "Why Emotional Intelligence Matters",
    date: "June 10, 2025",
    image: news3,
    slug: "why-emotional-intelligence-matters",
  },
  {
    id: 4,
    title: "How Schools Shape Future Leaders",
    date: "July 21, 2025",
    image: news1,
    slug: "how-schools-shape-future-leaders",
  },
  {
    id: 5,
    title: "The Importance of Skill-Based Learning",
    date: "July 02, 2025",
    image: news2,
    slug: "importance-of-skill-based-learning",
  },
  {
    id: 6,
    title: "Why Emotional Intelligence Matters",
    date: "June 10, 2025",
    image: news3,
    slug: "why-emotional-intelligence-matters",
  },
];
export default function BlogDetails() {
  const { slug } = useParams();

  // TEMP: replace with API call later
  const blog = {
    title: "Peer Pressure Changes How Teens Tackle Inequality",
    date: "April 28, 2026",
    author: "Rankridge Editorial Team",
    category: "Education",
    image: blogImg,
    content: `
      Peer pressure plays a powerful role in shaping how teenagers think,
      behave, and respond to social challenges. In school environments,
      it can influence confidence, decision-making, and even academic performance.
      At Rankridge Schools, we encourage healthy peer interactions through
      collaborative learning, leadership programs, and guided discussions.
      Our educators focus on helping students build independent thinking
      while respecting diverse perspectives. By nurturing emotional intelligence
      and resilience, students learn to navigate social pressures positively and develop lifelong skills.

      Peer pressure plays a powerful role in shaping how teenagers think,
      behave, and respond to social challenges. In school environments,
      it can influence confidence, decision-making, and even academic performance.
      At Rankridge Schools, we encourage healthy peer interactions through
      collaborative learning, leadership programs, and guided discussions.
      Our educators focus on helping students build independent thinking
      while respecting diverse perspectives. By nurturing emotional intelligence
      and resilience, students learn to navigate social pressures positively and develop lifelong skills.
    `,
  };

  return (
    <>
      <section className="breadcrumb breadcrumb-img">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Blog Details</h1>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="blog-details pt80 pb80">
        <div className="container">
          <div className="blog-hero text-center">
            <span className="blog-category">{blog.category}</span>
            <h1 className="blog-title">{blog.title}</h1>
            <p className="blog-meta">
              <i className="bi bi-calendar-check"></i>&nbsp;
              {blog.date} &nbsp;&nbsp;&nbsp;• <i className="bi bi-person"></i>
              &nbsp;By {blog.author}
            </p>
          </div>

          <div className="row mt-5">
            {/* MAIN CONTENT */}
            <div className="col-lg-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="img-fluid rounded mb-4"
              />

              {blog.content.split("\n\n").map((para, i) => (
                <p key={i} className="blog-text">
                  {para}
                </p>
              ))}
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="sidebar-card">
                  <h4 className="sidebar-title">Latest Articles</h4>

                  <div className="recent-post-list">
                    {recentPosts.map((post) => (
                      <Link
                        to={`/blog/${post.slug}`}
                        className="recent-post-item"
                        key={post.id}
                      >
                        <img src={post.image} alt={post.title} />

                        <div className="recent-post-content">
                          <h6>{post.title}</h6>
                          <span>{post.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
