// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";

// export default function Adminssions() {
//   const [activeModal, setActiveModal] = useState(null);
//   const [heroModal, setHeroModal] = useState(false);

//   const [admissionHero, setAdmissionHero] = useState({
//     title: "Admissions Now Open - Empower Your Child with Rankridge Education",
//   });
//   const [admissionsData, setAdmissionsData] = useState({
//     intro: {
//       title: "Admissions with Care and Clarity",
//       description:
//         "Becoming part of Rankridge Schools is simple, transparent, and welcoming. We open admissions for students from Pre-School up to Grade 12, and we offer curricula including CBSE, ICSE, State Board, and Cambridge (IGCSE / AS & A Levels) to suit different learning styles and future goals. When you apply, you complete our application form, submit previous academic records, and meet our admissions team for a warm, friendly discussion. For students from Grade 6 onwards, we also offer the IIT-JEE & NEET foundation programme so they can begin competitive exam preparation early, while continuing regular academics.",
//       image: "/assets/abtimg.jpg",
//     },

//     procedure: {
//       title: "Registration And Admission Procedure",
//       description:
//         "Admissions are open for Classes LKG to XII. The application form along with the prospectus can be collected from the school office during working hours.",
//       image: "/assets/abtimg.jpg",
//     },

//     submission: {
//       title: "Submission Of Application Forms",
//       documents: [
//         "Two recent passport-size photographs of the student",
//         "Original Transfer Certificate from the previous school",
//         "Photocopy of the previous school's progress report",
//         "Photocopy of Aadhaar Card",
//         "Photocopy of the Birth Certificate",
//       ],
//     },

//     visit: {
//       title: "School Visit",
//       description:
//         "Parents are welcome to visit the school premises for an interaction session with or without the child.",
//     },

//     interaction: {
//       title: "Interaction & Assessment",
//       description:
//         "The Principal and the school counsellor will meet with the student and parents to understand the child’s learning level.",
//     },
//   });

//   return (
//     <div>
//       <AdminLayout>
//         <h5 className="fw-semibold mb-4">Admissions</h5>
//         <div className="border rounded p-4 bg-light mb-3">
//           <h3 className="fw-bold text-center mb-0">{admissionHero.title}</h3>

//           <div className="text-center mt-3">
//             <Button size="sm" onClick={() => setHeroModal(true)}>
//               Edit Hero Section
//             </Button>
//           </div>
//           <hr />
//           <div className="row align-items-center g-4">
//             {/* IMAGE PREVIEW */}
//             <div className="col-md-2">
//               <img
//                 src={admissionsData.intro.image}
//                 className="img-fluid rounded mb-2"
//               />
//             </div>

//             {/* TEXT PREVIEW */}
//             <div className="col-md-10">
//               <h5 className="fw-bold">{admissionsData.intro.title}</h5>
//               <p>{admissionsData.intro.description}</p>
//               <Button size="sm" onClick={() => setActiveModal("intro")}>
//                 Edit Intro
//               </Button>
//             </div>
//           </div>

//           <hr />

//           {/* PROCEDURE */}

//           <div className="row align-items-center g-4">
//             <div className="col-md-10">
//               <h5 className="fw-semibold">{admissionsData.procedure.title}</h5>
//               <p>{admissionsData.procedure.description}</p>
//               <h6 className="fw-semibold">{admissionsData.submission.title}</h6>
//               <ul>
//                 {admissionsData.submission.documents.map((d, i) => (
//                   <li key={i}>{d}</li>
//                 ))}
//               </ul>

//               <Button size="sm" onClick={() => setActiveModal("procedureDocs")}>
//                 Edit Procedure
//               </Button>
//             </div>
//             <div className="col-md-2">
//               <img
//                 src={admissionsData.procedure.image}
//                 className="img-fluid rounded mb-2"
//               />
//             </div>

//             {/* TEXT PREVIEW */}
//           </div>

//           <hr />
//           <div className="row align-items-center g-4">
//             {/* IMAGE PREVIEW */}

//             {/* TEXT PREVIEW */}

//             <div className="col-md-2">
//               <img
//                 src={admissionsData.intro.image}
//                 className="img-fluid rounded mb-2"
//               />
//             </div>
//             <div className="col-md-10">
//               <h6 className="fw-semibold">{admissionsData.visit.title}</h6>
//               <p>{admissionsData.visit.description}</p>
//               <h6 className="fw-semibold">
//                 {admissionsData.interaction.title}
//               </h6>
//               <p>{admissionsData.interaction.description}</p>
//               <Button
//                 size="sm"
//                 onClick={() => setActiveModal("visitInteraction")}
//               >
//                 Edit Interaction
//               </Button>
//             </div>
//           </div>
//           {/* VISIT */}

//           <hr />

//           {/* INTERACTION */}
//         </div>

//         <Modal
//           show={activeModal === "intro"}
//           onHide={() => setActiveModal(null)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Admissions Intro</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 value={admissionsData.intro.title}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     intro: { ...admissionsData.intro, title: e.target.value },
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 value={admissionsData.intro.description}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     intro: {
//                       ...admissionsData.intro,
//                       description: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     intro: {
//                       ...admissionsData.intro,
//                       image: URL.createObjectURL(e.target.files[0]),
//                     },
//                   })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button onClick={() => setActiveModal(null)}>Save</Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={activeModal === "procedureDocs"}
//           onHide={() => setActiveModal(null)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Admission Procedure & Documents</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* PROCEDURE */}
//             <h6 className="fw-semibold mb-2">Registration Procedure</h6>

//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 value={admissionsData.procedure.title}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     procedure: {
//                       ...admissionsData.procedure,
//                       title: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={admissionsData.procedure.description}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     procedure: {
//                       ...admissionsData.procedure,
//                       description: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* DOCUMENTS */}

//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 value={admissionsData.submission.title}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     procedure: {
//                       ...admissionsData.procedure,
//                       title: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>
//             <h6 className="fw-semibold mb-2">Required Documents</h6>
//             {admissionsData.submission.documents.map((doc, index) => (
//               <div key={index} className="d-flex gap-2 mb-2">
//                 <Form.Control
//                   value={doc}
//                   onChange={(e) => {
//                     const updated = [...admissionsData.submission.documents];
//                     updated[index] = e.target.value;
//                     setAdmissionsData({
//                       ...admissionsData,
//                       submission: {
//                         ...admissionsData.submission,
//                         documents: updated,
//                       },
//                     });
//                   }}
//                 />

//                 <Button
//                   size="sm"
//                   variant="outline-danger"
//                   onClick={() => {
//                     const updated = admissionsData.submission.documents.filter(
//                       (_, i) => i !== index
//                     );
//                     setAdmissionsData({
//                       ...admissionsData,
//                       submission: {
//                         ...admissionsData.submission,
//                         documents: updated,
//                       },
//                     });
//                   }}
//                 >
//                   <i className="fas fa-trash" />
//                 </Button>
//               </div>
//             ))}

//             <Button
//               size="sm"
//               variant="outline-primary"
//               onClick={() =>
//                 setAdmissionsData({
//                   ...admissionsData,
//                   submission: {
//                     ...admissionsData.submission,
//                     documents: [...admissionsData.submission.documents, ""],
//                   },
//                 })
//               }
//             >
//               + Add Document
//             </Button>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setActiveModal(null)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setActiveModal(null)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={activeModal === "visitInteraction"}
//           onHide={() => setActiveModal(null)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit School Visit & Interaction</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 value={admissionsData.visit.title}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     visit: {
//                       ...admissionsData.visit,
//                       title: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>
//             <Form.Group className="mb-4">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={admissionsData.visit.description}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     visit: {
//                       ...admissionsData.visit,
//                       description: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 value={admissionsData.interaction.title}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     interaction: {
//                       ...admissionsData.interaction,
//                       title: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={admissionsData.interaction.description}
//                 onChange={(e) =>
//                   setAdmissionsData({
//                     ...admissionsData,
//                     interaction: {
//                       ...admissionsData.interaction,
//                       description: e.target.value,
//                     },
//                   })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setActiveModal(null)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setActiveModal(null)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={heroModal}
//           size="lg"
//           onHide={() => setHeroModal(false)}
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Admissions Hero Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group>
//               <Form.Label>Hero Title</Form.Label>
//               <Form.Control
//                 value={admissionHero.title}
//                 onChange={(e) =>
//                   setAdmissionHero({
//                     ...admissionHero,
//                     title: e.target.value,
//                   })
//                 }
//                 placeholder="Enter hero heading"
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setHeroModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setHeroModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </AdminLayout>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";

export default function Admissions() {
  const [activeModal, setActiveModal] = useState(null);
  const [heroModal, setHeroModal] = useState(false);
  const [admissionHero, setAdmissionHero] = useState(null);
  const [admissionsData, setAdmissionsData] = useState(null);

  const loadData = async () => {
    const res = await api.get("/admissions");
    setAdmissionHero(res.data.hero);
    setAdmissionsData({
      sections: res.data.sections,
      documents: res.data.documents
    });
  };

  useEffect(() => { loadData(); }, []);

  const saveHero = async () => {
    await api.put("/admissions/hero", { title: admissionHero.title });
    setHeroModal(false);
    loadData();
  };

  const saveSection = async (key) => {
    const section = admissionsData.sections[key];
    const formData = new FormData();
    formData.append("title", section.title);
    formData.append("description", section.description);
    
    if (section.imageFile) {
      formData.append("image", section.imageFile);
    }

    await api.put(`/admissions/section/${key}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    setActiveModal(null);
    loadData();
  };

  const saveDocuments = async () => {
    await api.put("/admissions/documents", {
      title: admissionsData.documents.title,
      documents: admissionsData.documents.items
    });
    setActiveModal(null);
    loadData();
  };

  if (!admissionHero || !admissionsData) return null;

  return (
    <AdminLayout>
      <h5 className="fw-semibold mb-4">Admissions</h5>
      <div className="border rounded p-4 bg-light mb-3">
        <h3 className="fw-bold text-center mb-0">{admissionHero.title}</h3>
        <div className="text-center mt-3">
          <Button size="sm" onClick={() => setHeroModal(true)}>Edit Hero</Button>
        </div>
        <hr />

        {/* INTRO */}
        <div className="row align-items-center g-4">
          <div className="col-md-2">
            <img src={`${import.meta.env.VITE_API_URL}${admissionsData.sections.intro.image}`} className="img-fluid rounded shadow-sm" alt="" />
          </div>
          <div className="col-md-10">
            <h5 className="fw-bold">{admissionsData.sections.intro.title}</h5>
            <p>{admissionsData.sections.intro.description}</p>
            <Button size="sm" onClick={() => setActiveModal("intro")}>Edit Intro</Button>
          </div>
        </div>
        <hr />

        {/* PROCEDURE & DOCUMENTS */}
        <div className="row align-items-center g-4">
          <div className="col-md-10">
            <h5 className="fw-semibold">{admissionsData.sections.procedure.title}</h5>
            <p>{admissionsData.sections.procedure.description}</p>
            <h6 className="fw-bold mt-3">{admissionsData.documents.title}</h6>
            <ul>{admissionsData.documents.items.map((d, i) => <li key={i}>{d}</li>)}</ul>
            <Button size="sm" onClick={() => setActiveModal("procedure")}>Edit Procedure & Docs</Button>
          </div>
          <div className="col-md-2">
            <img src={`${import.meta.env.VITE_API_URL}${admissionsData.sections.procedure.image}`} className="img-fluid rounded shadow-sm" alt="" />
          </div>
        </div>
        <hr />

        {/* VISIT & INTERACTION */}
        <div className="row align-items-center g-4">
          <div className="col-md-2">
            <img src={`${import.meta.env.VITE_API_URL}${admissionsData.sections.visit.image}`} className="img-fluid rounded shadow-sm" alt="" />
          </div>
          <div className="col-md-10">
            <h6 className="fw-bold">{admissionsData.sections.visit.title}</h6>
            <p>{admissionsData.sections.visit.description}</p>
            <h6 className="fw-bold mt-3">{admissionsData.sections.interaction.title}</h6>
            <p>{admissionsData.sections.interaction.description}</p>
            <Button size="sm" onClick={() => setActiveModal("interaction")}>Edit Interaction & Visit</Button>
          </div>
        </div>
      </div>

      {/* MODAL: HERO */}
      <Modal show={heroModal} onHide={() => setHeroModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Edit Hero</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Control value={admissionHero.title} onChange={(e) => setAdmissionHero({...admissionHero, title: e.target.value})} />
        </Modal.Body>
        <Modal.Footer><Button onClick={saveHero}>Save</Button></Modal.Footer>
      </Modal>

      {/* MODAL: INTRO (Section with Image) */}
      <Modal show={activeModal === "intro"} onHide={() => setActiveModal(null)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Intro</Modal.Title></Modal.Header>
        <Modal.Body>
          <div className="mb-3 text-center">
            <img src={admissionsData.sections.intro.preview || `${import.meta.env.VITE_API_URL}${admissionsData.sections.intro.image}`} style={{height: '100px'}} alt="" />
          </div>
          <Form.Control type="file" className="mb-3" onChange={(e) => {
            const file = e.target.files[0];
            if(file) {
              const upd = {...admissionsData};
              upd.sections.intro.imageFile = file;
              upd.sections.intro.preview = URL.createObjectURL(file);
              setAdmissionsData(upd);
            }
          }} />
          <Form.Control className="mb-2" value={admissionsData.sections.intro.title} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.intro.title = e.target.value; setAdmissionsData(upd);
          }} />
          <Form.Control as="textarea" rows={4} value={admissionsData.sections.intro.description} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.intro.description = e.target.value; setAdmissionsData(upd);
          }} />
        </Modal.Body>
        <Modal.Footer><Button onClick={() => saveSection('intro')}>Save</Button></Modal.Footer>
      </Modal>

      {/* MODAL: PROCEDURE & DOCUMENTS (Section with Image) */}
      <Modal show={activeModal === "procedure"} onHide={() => setActiveModal(null)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Procedure & Documents</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Label>Procedure Image</Form.Label>
          <Form.Control type="file" className="mb-3" onChange={(e) => {
             const file = e.target.files[0];
             if(file) {
                const upd = {...admissionsData};
                upd.sections.procedure.imageFile = file;
                upd.sections.procedure.preview = URL.createObjectURL(file);
                setAdmissionsData(upd);
             }
          }} />
          <Form.Control className="mb-2" value={admissionsData.sections.procedure.title} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.procedure.title = e.target.value; setAdmissionsData(upd);
          }} />
          <Form.Control as="textarea" className="mb-3" value={admissionsData.sections.procedure.description} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.procedure.description = e.target.value; setAdmissionsData(upd);
          }} />
          <hr />
          <h6>Manage Required Documents</h6>
          <Form.Control className="mb-2 fw-bold" value={admissionsData.documents.title} onChange={(e) => {
             const upd = {...admissionsData}; upd.documents.title = e.target.value; setAdmissionsData(upd);
          }} />
          {admissionsData.documents.items.map((doc, idx) => (
            <div key={idx} className="d-flex gap-2 mb-2">
              <Form.Control value={doc} onChange={(e) => {
                 const upd = {...admissionsData}; upd.documents.items[idx] = e.target.value; setAdmissionsData(upd);
              }} />
              <Button variant="danger" size="sm" onClick={() => {
                 const upd = {...admissionsData}; upd.documents.items.splice(idx, 1); setAdmissionsData(upd);
              }}><i className="fas fa-trash"></i></Button>
            </div>
          ))}
          <Button size="sm" onClick={() => {
             const upd = {...admissionsData}; upd.documents.items.push(""); setAdmissionsData(upd);
          }}>+ Add Doc Item</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={async () => { await saveSection('procedure'); await saveDocuments(); }}>Save All</Button>
        </Modal.Footer>
      </Modal>

      {/* MODAL: INTERACTION & VISIT (Section with Image) */}
      <Modal show={activeModal === "interaction"} onHide={() => setActiveModal(null)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Visit & Interaction</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Label>Section Image</Form.Label>
          <Form.Control type="file" className="mb-3" onChange={(e) => {
             const file = e.target.files[0];
             if(file) {
                const upd = {...admissionsData};
                upd.sections.visit.imageFile = file;
                upd.sections.visit.preview = URL.createObjectURL(file);
                setAdmissionsData(upd);
             }
          }} />
          <Form.Label>Visit Details</Form.Label>
          <Form.Control className="mb-2" value={admissionsData.sections.visit.title} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.visit.title = e.target.value; setAdmissionsData(upd);
          }} />
          <Form.Control as="textarea" className="mb-3" value={admissionsData.sections.visit.description} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.visit.description = e.target.value; setAdmissionsData(upd);
          }} />
          <hr />
          <Form.Label>Interaction Details</Form.Label>
          <Form.Control className="mb-2" value={admissionsData.sections.interaction.title} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.interaction.title = e.target.value; setAdmissionsData(upd);
          }} />
          <Form.Control as="textarea" value={admissionsData.sections.interaction.description} onChange={(e) => {
            const upd = {...admissionsData}; upd.sections.interaction.description = e.target.value; setAdmissionsData(upd);
          }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={async () => { await saveSection('visit'); await saveSection('interaction'); }}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
}