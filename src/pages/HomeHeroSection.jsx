// import React from "react";

// /* Import images */
// import trophyIcon from "../assets/img/trophy.png";
// import certificateIcon from "../assets/img/certificate.png";
// import mouseIcon from "../assets/img/mouse-1.png";
// import classroomIcon from "../assets/img/classroom.png";

// export default function HomeHeroSection() {
//   return (
//     <section className="py-5 bg-white">
//       <div className="container text-center">
//         {/* Heading */}
//         <h1 className="fw-bold">
//           Best Schools In KPHB, Hyderabad with IIT-JEE & NEET Foundation
//         </h1>

//         <h2>Educating Minds That will Lead the World</h2>

//         {/* Description */}
//         <p className="text-muted mb-4">
//           Finding your own space and utilize better learning options can result
//           in faster than
//           <br className="d-none d-md-block" />
//           the traditional ways. Enjoy the beauty of eLearning!
//         </p>

//         {/* Cards */}
//         <div className="row g-4">
//           {/* Card 1 */}
//           <div className="col-md-6 col-lg-3">
//             <div className="feature-card h-100 text-center">
//               <img src={trophyIcon} alt="Strong Academics" />
//               <h3 className="fw-bold mt-3">Strong Academics</h3>
//               <p className="text-muted">
//                 CBSE, State & Cambridge curriculum with expert teaching
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="col-md-6 col-lg-3">
//             <div className="feature-card h-100 text-center">
//               <img src={certificateIcon} alt="Learn at Your Pace" />
//               <h3 className="fw-bold mt-3">Learn in Your Own Pace</h3>
//               <p className="text-muted">
//                 Everyone prefers to enjoy learning at their own pace & that
//                 gives a great result.
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="col-md-6 col-lg-3">
//             <div className="feature-card h-100 text-center">
//               <img src={mouseIcon} alt="Global Exposure" />
//               <h3 className="fw-bold mt-3">Global Exposure</h3>
//               <p className="text-muted">
//                 Olympiads, international assessments & STEM programs
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="col-md-6 col-lg-3">
//             <div className="feature-card h-100 text-center">
//               <img src={classroomIcon} alt="Modern Facilities" />
//               <h3 className="fw-bold mt-3">Modern Facilities</h3>
//               <p className="text-muted">
//                 Smart classrooms, labs & activity spaces
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

export default function HomeHeroSection() {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use the env variable for the backend URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const cleanBaseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Calling your public GET route
        const response = await axios.get(`${cleanBaseUrl}/api/home/hero`);
        setHeroData(response.data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, [cleanBaseUrl]);

  if (loading) return <div className="py-5 text-center">Loading...</div>;
  if (!heroData) return null;

  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        {/* Dynamic Heading & Sub-heading */}
        <h1 className="fw-bold">
          {heroData.heading}
        </h1>

        <h2 className="text-primary">{heroData.sub_heading}</h2>

        {/* Dynamic Description */}
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "800px" }}>
          {heroData.description}
        </p>

        {/* Dynamic Cards Mapping */}
        <div className="row g-4">
          {heroData.cards && heroData.cards.map((card, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="feature-card h-100 text-center p-4 border rounded shadow-sm bg-white">
                {/* Dynamic Image from Backend */}
                {card.image ? (
                  <img 
                    src={`${cleanBaseUrl}/${card.image}`} 
                    alt={card.title} 
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                ) : (
                  <div style={{ height: "60px" }}></div> // Placeholder if no image
                )}
                
                <h3 className="fw-bold mt-3 h5">{card.title}</h3>
                <p className="text-muted small mb-0">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}