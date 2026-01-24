// import React from "react";

// /* Import image */
// import welcomeImage from "../assets/img/Welcome to Rankridge School Hyderabad, KPHB.webp";

// export default function HomeWelcomeSection() {
//   return (
//     <section className="distance-hero pt60 pb60">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* LEFT CONTENT */}
//           <div className="col-lg-6">
//             <h2 className="hero-title mt-3">
//               Welcome to Rankridge School, Hyderabad
//             </h2>

//             <p className="hero-text mt-3">
//               Empowering students to achieve excellence, Rankridge School offers
//               a nurturing environment and a strong academic foundation. With
//               expert faculty and modern learning systems, we help every child
//               discover their true potential.
//             </p>

//             <p className="hero-text mt-3">
//               Empowering students to achieve excellence, Rankridge School offers
//               a nurturing environment and a strong academic foundation. With
//               expert faculty and modern learning systems, we help every child
//               discover their true potential.
//             </p>

//             <a href="#" className="btn cta-btn mt-3">
//               <i className="bi bi-play-circle me-2"></i>
//               View Courses
//             </a>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="col-lg-6 text-center mt-4 mt-lg-0">
//             <img
//               src={welcomeImage}
//               alt="Welcome to Rankridge School"
//               className="img-fluid hero-image"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeWelcomeSection() {
  const [welcomeData, setWelcomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  // API URL Configuration
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const cleanBaseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

  useEffect(() => {
    const fetchWelcomeData = async () => {
      try {
        // Fetching from your public GET /api/home/welcome route
        const response = await axios.get(`${cleanBaseUrl}/api/home/welcome`);
        setWelcomeData(response.data);
      } catch (error) {
        console.error("Error fetching welcome data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWelcomeData();
  }, [cleanBaseUrl]);

  if (loading) return <div className="py-5 text-center">Loading...</div>;
  if (!welcomeData) return null;

  return (
    <section className="distance-hero pt60 pb60">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <h2 className="hero-title mt-3">
              {welcomeData.title}
            </h2>

            {/* Paragraph 1 */}
            <p className="hero-text mt-3">
              {welcomeData.text1}
            </p>

            {/* Paragraph 2 */}
            <p className="hero-text mt-3">
              {welcomeData.text2}
            </p>

            {/* Dynamic Button */}
            {welcomeData.button_text && (
              <a href="#academicprogram" className="btn cta-btn mt-4 d-inline-flex align-items-center">
                <i className="bi bi-play-circle me-2"></i>
                {welcomeData.button_text}
              </a>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            {welcomeData.image ? (
              <img
                src={`${cleanBaseUrl}${welcomeData.image}`}
                alt={welcomeData.title || "Welcome to Rankridge School"}
                className="img-fluid hero-image rounded shadow"
                style={{ maxHeight: '450px', width: 'auto', objectFit: 'cover' }}
              />
            ) : (
               <div className="bg-light rounded p-5">Image Placeholder</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}