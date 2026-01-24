// import React from "react";

// /* Import images */
// import preSchoolImg from "../assets/img/Pre-School Program – Alpha Edge.webp";
// import primarySchoolImg from "../assets/img/Primary School – Excel Edge (Grades 1–5).webp";
// import middleSchoolImg from "../assets/img/Middle to Secondary – Pinnacle Edge (Grades 6–10).webp";
// import seniorSchoolImg from "../assets/img/Quantum Elite – Grades 11 & 12.webp";

// export default function AcademicTimelineSection() {
//   return (
//     <section
//       className="academic-timeline-section pt80 pb80"
//       id="academicprogram"
//     >
//       <div className="container">
//         {/* Section Title */}
//         <div className="section-title">
//           <h2 className="fw-bold mt-2 mb-3 text-center">
//             Rankridge Outstanding Academic Programs
//           </h2>
//           <p className="text-center">
//             A clear learning pathway from Pre-School to Grade 10 &amp; 12 that
//             builds confidence, skill and academic excellence.
//           </p>
//         </div>

//         {/* Programs */}
//         <div className="row gy-3 mt-4">
//           {/* Pre-School */}
//           <div className="col-md-6">
//             <div className="timeline-text bxw">
//               <div className="row align-items-center">
//                 <div className="col-md-12">
//                   <div className="timeline-image">
//                     <img
//                       src={preSchoolImg}
//                       alt="Pre-School Program"
//                       className="img-fluid rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="time-content">
//                     <h3 className="fw-bold">Pre-School Program – Alpha Edge</h3>
//                     <p>
//                       A nurturing start for ages 2.5–5 with play-based learning
//                       that builds curiosity, confidence and emotional
//                       development.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Primary School */}
//           <div className="col-md-6">
//             <div className="timeline-text bxw">
//               <div className="row align-items-center">
//                 <div className="col-md-12">
//                   <div className="timeline-image">
//                     <img
//                       src={primarySchoolImg}
//                       alt="Primary School Program"
//                       className="img-fluid rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="time-content">
//                     <h3 className="fw-bold">
//                       Primary School – Excel Edge (Grades 1–5)
//                     </h3>
//                     <p>
//                       A strong academic foundation that nurtures curiosity,
//                       creativity and confidence through concept-based learning.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle to Secondary */}
//           <div className="col-md-6">
//             <div className="timeline-text bxw">
//               <div className="row align-items-center">
//                 <div className="col-md-12">
//                   <div className="timeline-image">
//                     <img
//                       src={middleSchoolImg}
//                       alt="Middle to Secondary Program"
//                       className="img-fluid rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="time-content">
//                     <h3 className="fw-bold">
//                       Middle to Secondary – Pinnacle Edge (Grades 6–10)
//                     </h3>
//                     <p>
//                       Integrated IIT-JEE &amp; NEET Foundation with critical
//                       thinking, application-oriented learning and real-world
//                       problem-solving abilities.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Senior Secondary */}
//           <div className="col-md-6">
//             <div className="timeline-text bxw">
//               <div className="row align-items-center">
//                 <div className="col-md-12">
//                   <div className="timeline-image">
//                     <img
//                       src={seniorSchoolImg}
//                       alt="Grades 11 & 12 Program"
//                       className="img-fluid rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="time-content">
//                     <h3 className="fw-bold">
//                       Quantum Elite – Grades 11 &amp; 12
//                     </h3>
//                     <p>
//                       Focused preparation for IIT-JEE, NEET, SAT and global
//                       pathways with personalized mentoring for top-tier academic
//                       success.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AcademicTimelineSection() {
  const [academicsData, setAcademicsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Use the env variable for the backend URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const cleanBaseUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;

  useEffect(() => {
    const fetchAcademics = async () => {
      try {
        // Fetching from your public GET /api/academics route
        const response = await axios.get(`${cleanBaseUrl}/api/academics`);
        setAcademicsData(response.data);
      } catch (error) {
        console.error("Error fetching academics data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAcademics();
  }, [cleanBaseUrl]);

  if (loading) return <div className="py-5 text-center">Loading Programs...</div>;
  if (!academicsData) return null;

  return (
    <section className="academic-timeline-section pt80 pb80" id="academicprogram">
      <div className="container">
        {/* Dynamic Section Title */}
        <div className="section-title text-center">
          <h2 className="fw-bold mt-2 mb-3">
            {academicsData.heading}
          </h2>
          <p className="mx-auto" style={{ maxWidth: "800px" }}>
            {academicsData.subHeading}
          </p>
        </div>

        {/* Dynamic Programs Mapping */}
        <div className="row gy-4 mt-4">
          {academicsData.programs && academicsData.programs.map((program, index) => (
            <div className="col-md-6" key={program.id || index}>
              <div className="timeline-text bxw h-100 p-3 border rounded bg-white shadow-sm">
                <div className="row align-items-center">
                  {/* Image Column */}
                  <div className="col-md-12 mb-3">
                    <div className="timeline-image">
                      {program.image ? (
                        <img
                          src={`${cleanBaseUrl}${program.image}`}
                          alt={program.title}
                          className="img-fluid rounded w-100"
                          style={{ height: "250px", objectFit: "cover" }}
                        />
                      ) : (
                        <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{ height: "250px" }}>
                           <span className="text-muted">No Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="col-md-12">
                    <div className="time-content">
                      <h3 className="fw-bold h4">{program.title}</h3>
                      <p className="text-muted">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}