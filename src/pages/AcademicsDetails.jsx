// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";

// export default function AcademicsDetails() {
//   const [detailsModal, setDetailsModal] = useState(false);
//   const [faqModal, setFaqModal] = useState(false);
//   const [academicDetails, setAcademicDetails] = useState({
//     heroTitle:
//       "Best IIT-JEE & NEET Foundation School in Hyderabad for Grades 6 to 10",
//     image: "/assets/Pre-School Program – Alpha Edge.webp",
//     sectionTitle: "IIT-JEE & NEET Foundation",
//     description:
//       "The middle and secondary years are where curiosity meets challenge — where students sharpen their understanding and begin preparing for big goals. At Rankridge School, our Middle & Secondary Education programme supports learners from Grade 6 through Grade 10 with care, purpose, and a push toward excellence. Recognized among the best middle schools in Hyderabad, we offer a curriculum that builds strong academics, life skills, and confidence. From Grade 6 onward, students get early exposure to IIT-JEE and NEET foundation courses alongside regular subjects like Science, Mathematics, Languages, and Social Studies. Teachers encourage critical thinking, collaboration, and personal growth through projects, debates, labs, and leadership roles. At Rankridge, this phase is not just about scoring well; it’s about equipping young minds with resilience, curiosity, and the ability to dream big.",
//   });
//   const [foundationModal, setFoundationModal] = useState(false);

//   const [foundationData, setFoundationData] = useState({
//     heroTitle:
//       "Rankridge School – Your Early Start to IIT-JEE & NEET Excellence",
//     heroDescription:
//       "Every great achievement starts with a strong foundation. Early preparation is the key to cracking India’s toughest competitive exams like IIT-JEE Mains & Advanced, NEET-UG, and Olympiads. Our integrated foundation course for Grades 6 to 10 nurtures young minds, sharpens skills, and sets students on the path to academic excellence.",

//     blocks: [
//       {
//         title: "Why Start Early? The Power of Foundation Learning",
//         points: [
//           "Lay a solid groundwork in Physics, Chemistry, Biology, and Mathematics",
//           "Develop analytical thinking, logical reasoning, and problem-solving skills",
//           "Gain early exposure to competitive exam patterns and time-tested strategies",
//           "Improve time management and exam confidence through regular mock tests",
//           "Ensure students reach Grade 11 confident, consistent, and conceptually strong",
//         ],
//       },
//       {
//         title: "Expert Faculty – Mentors Who Inspire & Guide",
//         points: [
//           "Highly qualified faculty from IITs, NITs, and AIIMS",
//           "Personalized guidance tailored to each student’s learning pace",
//           "Ongoing clarity sessions to ensure complete understanding",
//           "Mentorship that nurtures discipline, focus, and self-confidence",
//         ],
//       },
//       {
//         title: "World-Class Facilities for Competitive Excellence",
//         points: [
//           "Digital smart classrooms with interactive learning tools",
//           "Fully equipped science laboratories for hands-on experiments",
//           "Dedicated doubt-solving zones for one-on-one mentoring",
//           "A stress-free learning environment with activity-based concepts",
//         ],
//       },
//     ],
//   });
//   const [admissionCtaModal, setAdmissionCtaModal] = useState(false);

//   const [admissionCtaData, setAdmissionCtaData] = useState({
//     heading: "Admissions Open – Grades 6 to 10",
//     subHeading:
//       "Seats are limited — give your child the Rankridge advantage today!",

//     items: [
//       {
//         label: "Location",
//         value: "Hyderabad",
//       },
//       {
//         label: "Call Us",
//         value: "+91 99 59 303 873",
//       },
//       {
//         label: "Visit",
//         value: "www.rankridgeschools.com",
//       },
//     ],
//   });
//   const [faqData, setFaqData] = useState({
//     heading: "FAQ's",
//     description:
//       "Rankridge ensures every child succeeds by providing adaptive learning support and personalized attention.",
//     items: [
//       {
//         question: "Is there a way to apply for admission online?",
//         answer:
//           "We accept both online & offline admissions across all branches.",
//       },
//       {
//         question: "What syllabus do you follow?",
//         answer: "We follow CBSE, State & Cambridge curriculum.",
//       },
//     ],
//   });
//   return (
//     <>
//       <AdminLayout>
//         <h5 className="fw-semibold mb-4">Academics Details Page</h5>
//         <div className="border rounded p-4 bg-light mb-4">
//           <h4 className="fw-bold text-center mb-4">
//             {academicDetails.heroTitle}
//           </h4>

//           <div className="row">
//             <div className="col-md-4">
//               <img
//                 src={academicDetails.image}
//                 className="img-fluid rounded shadow-sm"
//                 alt="Academic Details"
//               />
//             </div>

//             <div className="col-md-8">
//               <h5 className="fw-semibold mb-2">
//                 {academicDetails.sectionTitle}
//               </h5>
//               <p>{academicDetails.description}</p>
//               <div className="mt-3">
//                 <Button size="sm" onClick={() => setDetailsModal(true)}>
//                   Edit Details Section
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <hr />
//           <div className="rounded p-4 mb-4">
//             <h4 className="fw-bold text-center mb-2">
//               {foundationData.heroTitle}
//             </h4>

//             <p className="text-center mb-4">{foundationData.heroDescription}</p>

//             {foundationData.blocks.map((block, index) => (
//               <div key={index} className="bg-white rounded p-4 mb-3 shadow-sm">
//                 <h6 className="fw-semibold mb-2">{block.title}</h6>
//                 <ul className="mb-0">
//                   {block.points.map((p, i) => (
//                     <li key={i}>{p}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//             <div className="text-center">
//               <Button size="sm" onClick={() => setFoundationModal(true)}>
//                 Edit Foundation Section
//               </Button>
//             </div>
//           </div>
//           <hr />
//           <div className="p-4 mb-4 bg-light">
//             <div className="text-center">
//               <h5 className="fw-bold mb-1">{admissionCtaData.heading}</h5>
//               <p className="text-muted mb-3">{admissionCtaData.subHeading}</p>
//               <div className="mt-3">
//                 <Button size="sm" onClick={() => setAdmissionCtaModal(true)}>
//                   Edit Admission CTA
//                 </Button>
//               </div>
//             </div>

//             <div className="row mt-3 align-items-center">
//               {admissionCtaData.items.map((item, index) => (
//                 <div key={index} className="col-md-4 mb-2">
//                   <div className="border bg-white  rounded p-3 h-100">
//                     <small className="fw-semibold d-block mb-1">
//                       {item.label}
//                     </small>
//                     <div>{item.value}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <hr />
//           <div className="mb-3">
//             <div className="text-center mb-3">
//               <h4 className="fw-bold text-center mb-2">{faqData.heading}</h4>

//               <p className="text-muted text-center mb-4">
//                 {faqData.description}
//               </p>
//               <Button size="sm" onClick={() => setFaqModal(true)}>
//                 Edit FAQ Section
//               </Button>
//             </div>
//             <table className="table table-bordered align-middle">
//               <thead className="table-light">
//                 <tr>
//                   <th width="80">S.No</th>
//                   <th>Question</th>
//                   <th>Answer</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {faqData.items.map((faq, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{faq.question}</td>
//                     <td>{faq.answer}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <Modal
//           show={detailsModal}
//           onHide={() => setDetailsModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Academic Details Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Hero Heading</Form.Label>
//               <Form.Control
//                 value={academicDetails.heroTitle}
//                 onChange={(e) =>
//                   setAcademicDetails({
//                     ...academicDetails,
//                     heroTitle: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Section Title</Form.Label>
//               <Form.Control
//                 value={academicDetails.sectionTitle}
//                 onChange={(e) =>
//                   setAcademicDetails({
//                     ...academicDetails,
//                     sectionTitle: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={6}
//                 value={academicDetails.description}
//                 onChange={(e) =>
//                   setAcademicDetails({
//                     ...academicDetails,
//                     description: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Section Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) =>
//                   setAcademicDetails({
//                     ...academicDetails,
//                     image: URL.createObjectURL(e.target.files[0]),
//                   })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setDetailsModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setDetailsModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={foundationModal}
//           onHide={() => setFoundationModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Foundation Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* HERO */}
//             <Form.Group className="mb-3">
//               <Form.Label>Hero Title</Form.Label>
//               <Form.Control
//                 value={foundationData.heroTitle}
//                 onChange={(e) =>
//                   setFoundationData({
//                     ...foundationData,
//                     heroTitle: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Label>Hero Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={foundationData.heroDescription}
//                 onChange={(e) =>
//                   setFoundationData({
//                     ...foundationData,
//                     heroDescription: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* BLOCKS */}
//             {foundationData.blocks.map((block, blockIndex) => (
//               <div
//                 key={blockIndex}
//                 className="border rounded bg-light p-3 mb-3 position-relative"
//               >
//                 <Button
//                   size="sm"
//                   variant="outline-danger"
//                   className="position-absolute"
//                   style={{ top: 8, right: 8 }}
//                   onClick={() =>
//                     setFoundationData({
//                       ...foundationData,
//                       blocks: foundationData.blocks.filter(
//                         (_, i) => i !== blockIndex
//                       ),
//                     })
//                   }
//                 >
//                   <i className="fas fa-trash"></i>
//                 </Button>

//                 <Form.Group className="mb-2">
//                   <Form.Label>Block Title</Form.Label>
//                   <Form.Control
//                     value={block.title}
//                     onChange={(e) => {
//                       const updated = [...foundationData.blocks];
//                       updated[blockIndex].title = e.target.value;
//                       setFoundationData({ ...foundationData, blocks: updated });
//                     }}
//                   />
//                 </Form.Group>

//                 {block.points.map((point, pointIndex) => (
//                   <div key={pointIndex} className="d-flex gap-2 mb-2">
//                     <Form.Control
//                       value={point}
//                       onChange={(e) => {
//                         const updated = [...foundationData.blocks];
//                         updated[blockIndex].points[pointIndex] = e.target.value;
//                         setFoundationData({
//                           ...foundationData,
//                           blocks: updated,
//                         });
//                       }}
//                     />
//                     <Button
//                       size="sm"
//                       variant="outline-danger"
//                       onClick={() => {
//                         const updated = [...foundationData.blocks];
//                         updated[blockIndex].points = updated[
//                           blockIndex
//                         ].points.filter((_, i) => i !== pointIndex);
//                         setFoundationData({
//                           ...foundationData,
//                           blocks: updated,
//                         });
//                       }}
//                     >
//                       <i className="fas fa-close"></i>
//                     </Button>
//                   </div>
//                 ))}

//                 <Button
//                   size="sm"
//                   variant="outline-primary"
//                   onClick={() => {
//                     const updated = [...foundationData.blocks];
//                     updated[blockIndex].points.push("");
//                     setFoundationData({ ...foundationData, blocks: updated });
//                   }}
//                 >
//                   + Add Point
//                 </Button>
//               </div>
//             ))}

//             <Button
//               size="sm"
//               onClick={() =>
//                 setFoundationData({
//                   ...foundationData,
//                   blocks: [
//                     ...foundationData.blocks,
//                     { title: "", points: [""] },
//                   ],
//                 })
//               }
//             >
//               + Add Block
//             </Button>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setFoundationModal(false)}
//             >
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setFoundationModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           size="lg"
//           show={admissionCtaModal}
//           onHide={() => setAdmissionCtaModal(false)}
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Admission CTA Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* Heading */}
//             <Form.Group className="mb-2">
//               <Form.Label>Heading</Form.Label>
//               <Form.Control
//                 value={admissionCtaData.heading}
//                 onChange={(e) =>
//                   setAdmissionCtaData({
//                     ...admissionCtaData,
//                     heading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             {/* Subheading */}
//             <Form.Group className="mb-3">
//               <Form.Label>Sub Heading</Form.Label>
//               <Form.Control
//                 value={admissionCtaData.subHeading}
//                 onChange={(e) =>
//                   setAdmissionCtaData({
//                     ...admissionCtaData,
//                     subHeading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* Cards */}
//             {admissionCtaData.items.map((item, index) => (
//               <div key={index} className="border rounded p-3 mb-3">
//                 <Form.Group className="mb-2">
//                   <Form.Label>Label</Form.Label>
//                   <Form.Control
//                     value={item.label}
//                     onChange={(e) => {
//                       const updated = [...admissionCtaData.items];
//                       updated[index].label = e.target.value;
//                       setAdmissionCtaData({
//                         ...admissionCtaData,
//                         items: updated,
//                       });
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group>
//                   <Form.Label>Value</Form.Label>
//                   <Form.Control
//                     value={item.value}
//                     onChange={(e) => {
//                       const updated = [...admissionCtaData.items];
//                       updated[index].value = e.target.value;
//                       setAdmissionCtaData({
//                         ...admissionCtaData,
//                         items: updated,
//                       });
//                     }}
//                   />
//                 </Form.Group>
//               </div>
//             ))}
//           </Modal.Body>

//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setAdmissionCtaModal(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="primary"
//               onClick={() => setAdmissionCtaModal(false)}
//             >
//               Save
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={faqModal}
//           onHide={() => setFaqModal(false)}
//           size="lg"
//           centered
//           container={document.body}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit FAQ Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* HEADING */}
//             <Form.Group className="mb-3">
//               <Form.Label>Heading</Form.Label>
//               <Form.Control
//                 value={faqData.heading}
//                 onChange={(e) =>
//                   setFaqData({ ...faqData, heading: e.target.value })
//                 }
//               />
//             </Form.Group>

//             {/* DESCRIPTION */}
//             <Form.Group className="mb-4">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 value={faqData.description}
//                 onChange={(e) =>
//                   setFaqData({ ...faqData, description: e.target.value })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* FAQ ITEMS */}
//             <h6 className="fw-semibold mb-3">Questions & Answers</h6>

//             {faqData.items.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border rounded bg-light p-3 mb-3 position-relative"
//               >
//                 {/* DELETE ICON */}
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-outline-danger position-absolute"
//                   style={{ top: 8, right: 8 }}
//                   onClick={() => {
//                     const updated = faqData.items.filter((_, i) => i !== index);
//                     setFaqData({ ...faqData, items: updated });
//                   }}
//                 >
//                   <i className="fas fa-trash"></i>
//                 </button>

//                 <Form.Group className="mb-2">
//                   <Form.Label>Question</Form.Label>
//                   <Form.Control
//                     value={faq.question}
//                     onChange={(e) => {
//                       const updated = [...faqData.items];
//                       updated[index].question = e.target.value;
//                       setFaqData({ ...faqData, items: updated });
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group>
//                   <Form.Label>Answer</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={2}
//                     value={faq.answer}
//                     onChange={(e) => {
//                       const updated = [...faqData.items];
//                       updated[index].answer = e.target.value;
//                       setFaqData({ ...faqData, items: updated });
//                     }}
//                   />
//                 </Form.Group>
//               </div>
//             ))}

//             {/* ADD NEW FAQ */}
//             <Button
//               size="sm"
//               variant="outline-primary"
//               onClick={() =>
//                 setFaqData({
//                   ...faqData,
//                   items: [...faqData.items, { question: "", answer: "" }],
//                 })
//               }
//             >
//               + Add Question
//             </Button>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setFaqModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setFaqModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </AdminLayout>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal, Form, Card, Table } from "react-bootstrap";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";

export default function AcademicsDetails() {
  const { programId } = useParams();

  // Data States
  const [academicDetails, setAcademicDetails] = useState(null);
  const [foundationData, setFoundationData] = useState(null);
  const [admissionCtaData, setAdmissionCtaData] = useState(null);
  const [faqData, setFaqData] = useState(null);

  // Modal States
  const [detailsModal, setDetailsModal] = useState(false);
  const [foundationModal, setFoundationModal] = useState(false);
  const [ctaModal, setCtaModal] = useState(false);
  const [faqModal, setFaqModal] = useState(false);

const loadAllData = async () => {
    try {
      const res = await api.get(`/academics/${programId}/details`);
      console.log("Full Data Received:", res.data); // DEBUG: Check your console!

      setAcademicDetails(res.data.details);
      setFoundationData(res.data.foundation);
      setAdmissionCtaData(res.data.cta);
      setFaqData(res.data.faq);
    } catch (err) {
      console.error("Load failed", err);
    }
  };

  useEffect(() => {
    loadAllData();
  }, [programId]);

  // 1️⃣ SAVE MAIN DETAILS (Hero Section) - FormData for image
  const saveDetails = async () => {
    try {
      const formData = new FormData();
      formData.append("heroTitle", academicDetails.hero_title || "");
      formData.append("sectionTitle", academicDetails.section_title || "");
      formData.append("description", academicDetails.description || "");
      if (academicDetails.imageFile) {
        formData.append("image", academicDetails.imageFile);
      }

      await api.put(`/academics/${programId}/details`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDetailsModal(false);
      loadAllData();
      alert("Hero section updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  // 2️⃣ SAVE FOUNDATION (Nested JSON)
  const saveFoundation = async () => {
    try {
      await api.put(`/academics/${programId}/foundation`, foundationData);
      setFoundationModal(false);
      loadAllData();
      alert("Foundation updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  // 3️⃣ SAVE ADMISSION CTA (Nested JSON)
  const saveCta = async () => {
    try {
      await api.put(`/academics/${programId}/cta`, admissionCtaData);
      setCtaModal(false);
      loadAllData();
      alert("CTA updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  // 4️⃣ SAVE FAQ (Nested JSON)
  const saveFaq = async () => {
    try {
      await api.put(`/academics/${programId}/faq`, faqData);
      setFaqModal(false);
      loadAllData();
      alert("FAQ updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (!academicDetails) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <h5 className="fw-semibold mb-4">Program Details: {academicDetails.section_title || "New Program"}</h5>

      {/* Hero Section Preview */}
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Hero & Main Description</span>
          <Button size="sm" onClick={() => setDetailsModal(true)}>Edit Section</Button>
        </Card.Header>
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-md-4">
              <img 
                src={`${import.meta.env.VITE_API_URL}${academicDetails.hero_image}`} 
                className="img-fluid rounded border" alt="Hero" 
              />
            </div>
            <div className="col-md-8">
              <h4 className="fw-bold">{academicDetails.hero_title}</h4>
              <p className="text-muted">{academicDetails.description}</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Foundation Section Preview */}
      {/* <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>Foundation Section</span>
          <Button size="sm" onClick={() => setFoundationModal(true)}>Edit Foundation</Button>
        </Card.Header>
        <Card.Body>
          <h5 className="fw-bold">{foundationData?.hero_title}</h5>
          <p className="small text-muted">{foundationData?.hero_description}</p>
          <div className="row g-2">
            {foundationData?.blocks?.map((block, i) => (
              <div key={i} className="col-md-4">
                <div className="p-2 border rounded bg-light h-100">
                  <h6 className="fw-bold mb-1">{block.title}</h6>
                  <ul className="small mb-0">
                    {block.points?.map((p, pi) => <li key={pi}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card> */}
      {/* Foundation Section Card */}
<Card className="mb-4">
  <Card.Header className="d-flex justify-content-between">
    <span>Foundation Section</span>
    <Button size="sm" onClick={() => setFoundationModal(true)}>Edit Foundation</Button>
  </Card.Header>
  <Card.Body>
    {/* If data is null, show a message instead of nothing */}
    {!foundationData?.hero_title ? (
      <div className="text-center p-3">
        <p className="text-muted">No foundation data found. Click "Edit Foundation" to add content.</p>
      </div>
    ) : (
      <>
        <h5 className="fw-bold">{foundationData.hero_title}</h5>
        <p>{foundationData.hero_description}</p>
        <div className="row">
          {foundationData.blocks.map((block, i) => (
            <div key={i} className="col-md-6 mb-2">
              <div className="p-2 border rounded">
                <strong>{block.title}</strong>
                <ul>{block.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </Card.Body>
</Card>

      {/* FAQ Preview */}
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <span>FAQ Section</span>
          <Button size="sm" onClick={() => setFaqModal(true)}>Edit FAQ</Button>
        </Card.Header>
        <Card.Body>
          <Table striped bordered size="sm">
            <thead><tr><th>Question</th><th>Answer</th></tr></thead>
            <tbody>
              {faqData?.items?.map((faq, i) => (
                <tr key={i}><td>{faq.question}</td><td>{faq.answer}</td></tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* MODAL 1: HERO DETAILS */}
      <Modal show={detailsModal} onHide={() => setDetailsModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Hero Details</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Hero Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setAcademicDetails({...academicDetails, imageFile: e.target.files[0]})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hero Title</Form.Label>
            <Form.Control value={academicDetails.hero_title || ""} onChange={(e) => setAcademicDetails({...academicDetails, hero_title: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Section Title</Form.Label>
            <Form.Control value={academicDetails.section_title || ""} onChange={(e) => setAcademicDetails({...academicDetails, section_title: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} value={academicDetails.description || ""} onChange={(e) => setAcademicDetails({...academicDetails, description: e.target.value})} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer><Button onClick={saveDetails}>Save Changes</Button></Modal.Footer>
      </Modal>

    {/* MODAL 2: FOUNDATION (Cleaned up Logic) */}
    <Modal show={foundationModal} onHide={() => setFoundationModal(false)} size="lg" centered>
      <Modal.Header closeButton><Modal.Title>Edit Foundation</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2">
            <Form.Label>Hero Title</Form.Label>
            <Form.Control 
                value={foundationData?.hero_title || ""} 
                onChange={(e) => setFoundationData({...foundationData, hero_title: e.target.value})} 
            />
        </Form.Group>
            
        <Form.Group className="mb-3">
            <Form.Label>Hero Description</Form.Label>
            <Form.Control 
                as="textarea" 
                value={foundationData?.hero_description || ""} 
                onChange={(e) => setFoundationData({...foundationData, hero_description: e.target.value})} 
            />
        </Form.Group>
            
        <hr />
        {foundationData?.blocks?.map((block, bi) => (
          <div key={bi} className="border p-3 mb-3 bg-light rounded shadow-sm">
            <div className="d-flex justify-content-between mb-2">
              <Form.Control 
                className="fw-bold"
                placeholder="Block Title (e.g. Expert Faculty)" 
                value={block.title} 
                onChange={(e) => {
                    const newBlocks = [...foundationData.blocks];
                    newBlocks[bi].title = e.target.value;
                    setFoundationData({...foundationData, blocks: newBlocks});
                }} 
              />
              <Button variant="danger" className="ms-2" onClick={() => {
                  const newBlocks = foundationData.blocks.filter((_, index) => index !== bi);
                  setFoundationData({...foundationData, blocks: newBlocks});
              }}><i className="fas fa-trash"></i></Button>
            </div>
            
            {block.points?.map((p, pi) => (
              <div key={pi} className="d-flex gap-1 mb-1">
                 <Form.Control 
                    size="sm" 
                    value={p} 
                    onChange={(e) => {
                        const newBlocks = [...foundationData.blocks];
                        newBlocks[bi].points[pi] = e.target.value;
                        setFoundationData({...foundationData, blocks: newBlocks});
                    }} 
                 />
                 <Button variant="outline-danger" size="sm" onClick={() => {
                    const newBlocks = [...foundationData.blocks];
                    newBlocks[bi].points = newBlocks[bi].points.filter((_, index) => index !== pi);
                    setFoundationData({...foundationData, blocks: newBlocks});
                 }}>-</Button>
              </div>
            ))}
            <Button size="sm" variant="link" className="p-0 mt-1" onClick={() => {
                const newBlocks = [...foundationData.blocks];
                newBlocks[bi].points = [...newBlocks[bi].points, ""];
                setFoundationData({...foundationData, blocks: newBlocks});
            }}>+ Add Point</Button>
          </div>
        ))}
        
        <Button 
            variant="primary" 
            onClick={() => setFoundationData({
                ...foundationData, 
                blocks: [...foundationData.blocks, {title: "", points: [""]}]
            })}
        >+ Add New Block</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setFoundationModal(false)}>Cancel</Button>
        <Button variant="success" onClick={saveFoundation}>Save Foundation</Button>
      </Modal.Footer>
    </Modal>

      {/* MODAL 3: FAQ */}
      <Modal show={faqModal} onHide={() => setFaqModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit FAQ</Modal.Title></Modal.Header>
        <Modal.Body>
           {faqData?.items?.map((item, i) => (
             <div key={i} className="border p-2 mb-2 rounded">
                <Form.Control className="mb-1" placeholder="Question" value={item.question} onChange={(e) => {
                  const upd = {...faqData}; upd.items[i].question = e.target.value; setFaqData(upd);
                }} />
                <Form.Control as="textarea" placeholder="Answer" value={item.answer} onChange={(e) => {
                  const upd = {...faqData}; upd.items[i].answer = e.target.value; setFaqData(upd);
                }} />
                <Button variant="link" className="text-danger" size="sm" onClick={() => {
                  const upd = {...faqData}; upd.items.splice(i, 1); setFaqData(upd);
                }}>Remove</Button>
             </div>
           ))}
           <Button size="sm" onClick={() => setFaqData({...faqData, items: [...faqData.items, {question: "", answer: ""}]})}>+ Add FAQ</Button>
        </Modal.Body>
        <Modal.Footer><Button onClick={saveFaq}>Save FAQ</Button></Modal.Footer>
      </Modal>

    </AdminLayout>
  );
}