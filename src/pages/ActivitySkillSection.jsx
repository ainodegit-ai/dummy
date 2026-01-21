import React from "react";

/* Import images */
import vedicMaths from "../assets/img/vedic_maths.png";
import abacusMaths from "../assets/img/abacus_maths.png";
import creativeArts from "../assets/img/creative_arts.png";
import sports from "../assets/img/sports.png";
import community from "../assets/img/community.png";
import activities from "../assets/img/activities.png";

export default function ActivitySkillSection() {
  return (
    <section className="pt80 pb80 background-img">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center">
          <h2 className="fw-bold mt-2 mb-3">
            Activity & Skill-Based Learning at Rankridge
          </h2>
          <p>
            At Rankridge, learning goes beyond the classroom. Through sports,
            arts, clubs, and hands-on activities, students build confidence,
            creativity, and essential life skills while discovering their
            individual strengths.
          </p>
        </div>

        {/* Features */}
        <div className="row mt-5">
          {/* Item 1 */}
          <div className="col-md-4">
            <div className="feature-item bxw">
              <img src={vedicMaths} alt="Vedic Maths" />
              <h3>Vedic Maths</h3>
              <p>
                Helps children enjoy maths with confidence through faster,
                smarter calculation techniques.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-md-4">
            <div className="feature-item bxw">
              <img src={abacusMaths} alt="Abacus Maths" />
              <h3>Abacus Maths</h3>
              <p>
                Sharpens focus and memory while boosting mental arithmetic and
                concentration.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-md-4">
            <div className="feature-item bxw">
              <img src={creativeArts} alt="Creative Arts" />
              <h3>Creative Arts</h3>
              <p>
                Lets children express themselves freely through colours, music
                and imagination.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="col-md-4">
            <div className="feature-item bxw">
              <img src={sports} alt="Sports & Fitness" />
              <h3>Sports & Fitness</h3>
              <p>
                Builds strength, discipline and teamwork while keeping children
                active and confident.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="col-md-4">
            <div className="feature-item bxw">
              <img src={community} alt="Community Service" />
              <h3>Community Service</h3>
              <p>
                Builds empathy and gratitude while inspiring children to make a
                positive difference around them.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="col-md-4">
            <div className="feature-item bxw">
              <img src={activities} alt="Clubs & Activities" />
              <h3>Clubs & Activities</h3>
              <p>
                Helps children discover their strengths, make friends and grow
                in communication and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
