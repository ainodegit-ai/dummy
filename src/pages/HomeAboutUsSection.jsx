// import React from "react";

// /* Import image */
// import aboutImage from "../assets/img/image-01.png";

// export default function HomeAboutUsSection() {
//   return (
//     <section className="pt80 pb80 background-img">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* LEFT : Image */}
//           <div className="col-lg-6 mb-5 mb-lg-0">
//             <div className="image-grid">
//               <img
//                 src={aboutImage}
//                 alt="About Rankridge"
//                 style={{ width: "100%" }}
//               />
//             </div>
//           </div>

//           {/* RIGHT : Content */}
//           <div className="col-lg-6">
//             <h2 className="fw-bold mt-3 mb-3">About Rankridge</h2>

//             <p className="text-muted mb-4">
//               Rankridge Schools are the leading State & CBSE schools in
//               Kukatpally and KPHB, Hyderabad, dedicated to strong academics,
//               values, and a safe learning environment where every child grows
//               with confidence. Our integrated State, CBSE and Cambridge approach
//               ensures a solid foundation that blends international academic
//               standards with real-world skills. With concept-based learning,
//               robotics and coding, smart classrooms, digital labs, STEM
//               activities, sports and life-skills programs, children discover
//               their strengths while developing curiosity, discipline and
//               character.
//             </p>

//             <p>
//               Parents appreciate Rankridge for our caring and highly-qualified
//               teachers, individual attention, transparent communication and
//               student-first approach that makes learning joyful and meaningful.
//               The school prioritizes emotional well-being, personal safety and
//               confidence-building, creating an environment where children feel
//               supported, respected and motivated to excel.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeAboutUsSection() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use the env variable for the backend URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  // Ensure we don't have double slashes if the API_URL ends with /
  const cleanBaseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // Fetching from your public GET /api/home/about route
        const response = await axios.get(`${cleanBaseUrl}/api/home/about`);
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, [cleanBaseUrl]);

  if (loading) return <div className="py-5 text-center">Loading About Section...</div>;
  if (!aboutData) return null;

  return (
    <section className="pt80 pb80 background-img">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT : Image */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="image-grid">
              {aboutData.image ? (
                <img
                  src={`${cleanBaseUrl}${aboutData.image}`}
                  alt={aboutData.title || "About Rankridge"}
                  style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
                />
              ) : (
                <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "400px", width: "100%" }}>
                   <p className="text-muted">No Image Available</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT : Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mt-3 mb-3">{aboutData.title}</h2>

            {/* Paragraph 1 */}
            <p className="text-muted mb-4">
              {aboutData.description1}
            </p>

            {/* Paragraph 2 */}
            <p className="text-muted mb-0">
              {aboutData.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}