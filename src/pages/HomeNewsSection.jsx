import React from "react";

/* Import images */
import news1 from "../assets/img/news1.jpg";
import news2 from "../assets/img/news2.jpg";
import news3 from "../assets/img/news3.jpg";

export default function HomeNewsSection() {
  return (
    <section className="news mtb80">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <h2 className="fw-bold mt-2 mb-3">Blog &amp; News</h2>
          <p>
            Stay updated with our latest blogs, insights, and industry news.
            Discover trends, tips, and updates that matter to you.
          </p>
        </div>

        {/* News Cards */}
        <div className="row gy-3 mt-4">
          {/* News 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="news-item bxw">
              <div className="news-item-img position-relative">
                <img src={news1} alt="Blog video post" className="img-fluid" />
                <i
                  className="fas fa-play"
                  style={{ cursor: "pointer" }}
                  title="Play Video"
                ></i>
              </div>

              <div className="news-item-content">
                <span>April 28, 2021</span>
                <a href="/news/peer-pressure">
                  <h3>Peer pressure changes how teens tackle inequality</h3>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard text.
                </p>
              </div>
            </div>
          </div>

          {/* News 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="news-item bxw">
              <div className="news-item-img">
                <img
                  src={news2}
                  alt="Publishing diversity"
                  className="img-fluid"
                />
              </div>

              <div className="news-item-content">
                <span>April 28, 2021</span>
                <a href="/news/publishing-diversity">
                  <h3>New project digs deep into publishing diversity</h3>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard text.
                </p>
              </div>
            </div>
          </div>

          {/* News 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="news-item bxw">
              <div className="news-item-img">
                <img
                  src={news3}
                  alt="Industry insights"
                  className="img-fluid"
                />
              </div>

              <div className="news-item-content">
                <span>April 28, 2021</span>
                <a href="/news/industry-insights">
                  <h3>New project digs deep into publishing diversity</h3>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
