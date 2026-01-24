// import React from "react";

// /* Import images */
// import vedicMaths from "../assets/img/vedic_maths.png";
// import abacusMaths from "../assets/img/abacus_maths.png";
// import creativeArts from "../assets/img/creative_arts.png";
// import sports from "../assets/img/sports.png";
// import community from "../assets/img/community.png";
// import activities from "../assets/img/activities.png";

// export default function ActivitySkillSection() {
//   return (
//     <section className="pt80 pb80 background-img">
//       <div className="container">
//         {/* Section Title */}
//         <div className="section-title text-center">
//           <h2 className="fw-bold mt-2 mb-3">
//             Activity & Skill-Based Learning at Rankridge
//           </h2>
//           <p>
//             At Rankridge, learning goes beyond the classroom. Through sports,
//             arts, clubs, and hands-on activities, students build confidence,
//             creativity, and essential life skills while discovering their
//             individual strengths.
//           </p>
//         </div>

//         {/* Features */}
//         <div className="row mt-5">
//           {/* Item 1 */}
//           <div className="col-md-4">
//             <div className="feature-item bxw">
//               <img src={vedicMaths} alt="Vedic Maths" />
//               <h3>Vedic Maths</h3>
//               <p>
//                 Helps children enjoy maths with confidence through faster,
//                 smarter calculation techniques.
//               </p>
//             </div>
//           </div>

//           {/* Item 2 */}
//           <div className="col-md-4">
//             <div className="feature-item bxw">
//               <img src={abacusMaths} alt="Abacus Maths" />
//               <h3>Abacus Maths</h3>
//               <p>
//                 Sharpens focus and memory while boosting mental arithmetic and
//                 concentration.
//               </p>
//             </div>
//           </div>

//           {/* Item 3 */}
//           <div className="col-md-4">
//             <div className="feature-item bxw">
//               <img src={creativeArts} alt="Creative Arts" />
//               <h3>Creative Arts</h3>
//               <p>
//                 Lets children express themselves freely through colours, music
//                 and imagination.
//               </p>
//             </div>
//           </div>

//           {/* Item 4 */}
//           <div className="col-md-4">
//             <div className="feature-item bxw">
//               <img src={sports} alt="Sports & Fitness" />
//               <h3>Sports & Fitness</h3>
//               <p>
//                 Builds strength, discipline and teamwork while keeping children
//                 active and confident.
//               </p>
//             </div>
//           </div>

//           {/* Item 5 */}
//           <div className="col-md-4">
//             <div className="feature-item bxw">
//               <img src={community} alt="Community Service" />
//               <h3>Community Service</h3>
//               <p>
//                 Builds empathy and gratitude while inspiring children to make a
//                 positive difference around them.
//               </p>
//             </div>
//           </div>

//           {/* Item 6 */}
//           <div className="col-md-4">
//             <div className="feature-item bxw">
//               <img src={activities} alt="Clubs & Activities" />
//               <h3>Clubs & Activities</h3>
//               <p>
//                 Helps children discover their strengths, make friends and grow
//                 in communication and leadership.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ActivitySkillSection() {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const cleanBaseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await axios.get(`${cleanBaseUrl}/api/home/activity`);
        setActivityData(response.data);
      } catch (error) {
        console.error("Error fetching activity data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivityData();
  }, [cleanBaseUrl]);

  if (loading) return <div className="py-5 text-center">Loading Activities...</div>;
  if (!activityData) return null;

  return (
    <section className="pt80 pb80 background-img">
      <div className="container">
        {/* Dynamic Section Title */}
        <div className="section-title text-center">
          <h2 className="fw-bold mt-2 mb-3">
            {activityData.heading}
          </h2>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            {activityData.description}
          </p>
        </div>

        {/* Dynamic Features Mapping */}
        <div className="row mt-5 g-4">
          {activityData.items && activityData.items.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-item bxw h-100 p-4 border rounded bg-white text-center shadow-sm">
                {/* Dynamic Icon/Image from Backend */}
                {item.icon ? (
                  <img 
                    src={`${cleanBaseUrl}${item.icon}`} 
                    alt={item.title} 
                    style={{ width: "64px", height: "64px", objectFit: "contain" }}
                    className="mb-3"
                  />
                ) : (
                  <div style={{ height: "64px" }} className="mb-3"></div>
                )}
                
                <h3 className="fw-bold h5">{item.title}</h3>
                <p className="text-muted small mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}