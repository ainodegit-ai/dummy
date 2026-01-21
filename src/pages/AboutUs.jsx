// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";
// import api from "../api/axiosConfig";
// import { useEffect } from "react";

// export default function AboutUs() {
//   const [aboutModal, setAboutModal] = useState(false);

//   const [aboutData, setAboutData] = useState(null);
//   const [whyChooseModal, setWhyChooseModal] = useState(false);

//   const [whyChooseData, setWhyChooseData] = useState(null);
//   useEffect(() => {
//   api.get("/about").then(res => {
//     setAboutData(res.data.main);
//     setWhyChooseData(res.data.whyChoose);
//   });
// }, []);
//  if (!aboutData || !whyChooseData) return null;

// const saveAboutMain = async () => {
//   try {
//     const formData = new FormData();
    
//     // 1. Append text fields
//     formData.append("title", aboutData.title);
//     formData.append("description1", aboutData.description1);
//     formData.append("description2", aboutData.description2);

//     // 2. Append the FILE binary (NOT the blob string)
//     if (aboutData.imageFile) {
//       // 'image' must match the name in uploadAbout.single("image")
//       formData.append("image", aboutData.imageFile);
//     }

//     // 3. Send with the correct Header
//     await api.put("/about/main", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     setAboutModal(false);
//     loadAbout(); // Refresh data
//     alert("Image and text saved successfully!");
//   } catch (err) {
//     console.error(err);
//     alert("Backend did not receive the image.");
//   }
// };

//   // 2️⃣ SAVE WHY CHOOSE (Nested Data)
//   const saveWhyChoose = async () => {
//     try {
//       // Since whyChoose has no files, we can send as pure JSON
//       await api.put("/about/whychoose", {
//         heading: whyChooseData.heading,
//         subtitle: whyChooseData.subtitle,
//         description: whyChooseData.description,
//         items: whyChooseData.items
//       });

//       setWhyChooseModal(false);
//       alert("Why Choose updated!");
//     } catch (err) {
//       alert("Failed to update Why Choose");
//     }
//   };

//   // ... In the Modal Body for About ...
//   <Form.Control
//     type="file"
//     accept="image/*"
//     onChange={(e) => {
//       const file = e.target.files[0];
//       if (file) {
//         setAboutData({
//           ...aboutData,
//           imagePreview: URL.createObjectURL(file), // UI Preview
//           imageFile: file, // Binary for API
//         });
//       }
//     }}
//   />
  
//   return (
//     <>
//       <AdminLayout>
//         <div>
//           <h5 className="fw-semibold mb-4">About Us</h5>
//           <Card>
//             <Card.Header>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0 fw-semibold">Section1</h5>

//                 <Button size="sm" onClick={() => setAboutModal(true)}>
//                   Edit About
//                 </Button>
//               </div>
//             </Card.Header>
//             <Card.Body>
//               <Card.Text>
//                 <div className="row align-items-center g-4">
//                   {/* IMAGE PREVIEW */}
//                   <div className="col-md-2">
//                     <img src={`${import.meta.env.VITE_API_URL}${aboutData.image}`} />
//                     <h4>{aboutData.title}</h4>
//                     <p>{aboutData.description1}</p>

//                   </div>

//                   {/* TEXT PREVIEW */}
//                   <div className="col-md-10">
//                     <h4 className="fw-bold mb-3">{aboutData.title}</h4>

//                     <p className="text-muted">{aboutData.description1}</p>

//                     <p className="text-muted mb-0">{aboutData.description2}</p>
//                   </div>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//           <Card className="mt-4">
//             <Card.Header>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0 fw-semibold">Section2</h5>

//                 <Button size="sm" onClick={() => setWhyChooseModal(true)}>
//                   Edit Why Choose Section
//                 </Button>
//               </div>
//             </Card.Header>
//             <Card.Body>
//               <Card.Text>
//                 <div className="mb-3">
//                   <h3 className="fw-bold text-center mb-2">
//                     {whyChooseData.heading}
//                   </h3>

//                   <p className="text-center fw-semibold mb-1">
//                     {whyChooseData.subtitle}
//                   </p>

//                   <p className="text-center text-muted mb-4">
//                     {whyChooseData.description}
//                   </p>

//                   {whyChooseData.items.map((item, index) => (
//                     <div
//                       key={index}
//                       className="bg-white border rounded p-3 mb-3"
//                     >
//                       <h6 className="fw-semibold mb-2">{item.title}</h6>
//                       <ul className="mb-0">
//                         {item.points.map((p, i) => (
//                           <li key={i}>{p}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>

//           {/* ================= ACTION ================= */}
//         </div>
//         <Modal
//           show={aboutModal}
//           onHide={() => setAboutModal(false)}
//           size="lg"
//           centered
//           container={document.body}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit About Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* IMAGE */}
//             <Form.Group className="mb-3">
//               <Form.Label>Upload Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => {
//                   if (e.target.files[0]) {
//                     setAboutData({
//                       ...aboutData,
//                       image: URL.createObjectURL(e.target.files[0]),
//                     });
//                   }
//                 }}
//               />
//             </Form.Group>

//             {/* TITLE */}
//             <Form.Group className="mb-3">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 value={aboutData.title}
//                 onChange={(e) =>
//                   setAboutData({ ...aboutData, title: e.target.value })
//                 }
//               />
//             </Form.Group>

//             {/* DESCRIPTION 1 */}
//             <Form.Group className="mb-3">
//               <Form.Label>Description (Paragraph 1)</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 value={aboutData.description1}
//                 onChange={(e) =>
//                   setAboutData({ ...aboutData, description1: e.target.value })
//                 }
//               />
//             </Form.Group>

//             {/* DESCRIPTION 2 */}
//             <Form.Group>
//               <Form.Label>Description (Paragraph 2)</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 value={aboutData.description2}
//                 onChange={(e) =>
//                   setAboutData({ ...aboutData, description2: e.target.value })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setAboutModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setAboutModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={whyChooseModal}
//           onHide={() => setWhyChooseModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Why Choose Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* HEADING */}
//             <Form.Group className="mb-3">
//               <Form.Label>Heading</Form.Label>
//               <Form.Control
//                 value={whyChooseData.heading}
//                 onChange={(e) =>
//                   setWhyChooseData({
//                     ...whyChooseData,
//                     heading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             {/* SUBTITLE */}
//             <Form.Group className="mb-3">
//               <Form.Label>Subtitle</Form.Label>
//               <Form.Control
//                 value={whyChooseData.subtitle}
//                 onChange={(e) =>
//                   setWhyChooseData({
//                     ...whyChooseData,
//                     subtitle: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             {/* DESCRIPTION */}
//             <Form.Group className="mb-4">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 value={whyChooseData.description}
//                 onChange={(e) =>
//                   setWhyChooseData({
//                     ...whyChooseData,
//                     description: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* REASONS */}
//             <h6 className="fw-semibold mb-3">Reasons</h6>

//             {whyChooseData.items.map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded bg-light p-3 mb-3 position-relative"
//               >
//                 {/* DELETE REASON */}
//                 <button
//                   className="btn btn-sm btn-outline-danger position-absolute"
//                   style={{ top: 8, right: 8 }}
//                   onClick={() =>
//                     setWhyChooseData({
//                       ...whyChooseData,
//                       items: whyChooseData.items.filter((_, i) => i !== index),
//                     })
//                   }
//                 >
//                   <i className="fas fa-trash"></i>
//                 </button>

//                 {/* TITLE */}
//                 <Form.Group className="mb-2">
//                   <Form.Label>Reason Title</Form.Label>
//                   <Form.Control
//                     value={item.title}
//                     onChange={(e) => {
//                       const updated = [...whyChooseData.items];
//                       updated[index].title = e.target.value;
//                       setWhyChooseData({ ...whyChooseData, items: updated });
//                     }}
//                   />
//                 </Form.Group>

//                 {/* BULLET POINTS */}
//                 <Form.Label>Bullet Points</Form.Label>

//                 {item.points.map((point, pIndex) => (
//                   <div key={pIndex} className="d-flex gap-2 mb-2">
//                     <Form.Control
//                       value={point}
//                       onChange={(e) => {
//                         const updated = [...whyChooseData.items];
//                         updated[index].points[pIndex] = e.target.value;
//                         setWhyChooseData({ ...whyChooseData, items: updated });
//                       }}
//                     />
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       onClick={() => {
//                         const updated = [...whyChooseData.items];
//                         updated[index].points = updated[index].points.filter(
//                           (_, i) => i !== pIndex
//                         );
//                         setWhyChooseData({ ...whyChooseData, items: updated });
//                       }}
//                     >
//                       <i className="fas fa-trash"></i>
//                     </Button>
//                   </div>
//                 ))}

//                 <Button
//                   size="sm"
//                   variant="outline-primary"
//                   onClick={() => {
//                     const updated = [...whyChooseData.items];
//                     updated[index].points.push("");
//                     setWhyChooseData({ ...whyChooseData, items: updated });
//                   }}
//                 >
//                   + Add Point
//                 </Button>
//               </div>
//             ))}

//             <Button
//               size="sm"
//               variant="outline-primary"
//               onClick={() =>
//                 setWhyChooseData({
//                   ...whyChooseData,
//                   items: [...whyChooseData.items, { title: "", points: [] }],
//                 })
//               }
//             >
//               + Add Reason
//             </Button>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setWhyChooseModal(false)}
//             >
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setWhyChooseModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </AdminLayout>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";

export default function AboutUs() {
  const [aboutModal, setAboutModal] = useState(false);
  const [aboutData, setAboutData] = useState(null);
  const [whyChooseModal, setWhyChooseModal] = useState(false);
  const [whyChooseData, setWhyChooseData] = useState(null);

  const loadAboutData = () => {
    api.get("/about").then((res) => {
      setAboutData(res.data.main);
      setWhyChooseData(res.data.whyChoose);
    });
  };

  useEffect(() => {
    loadAboutData();
  }, []);

  if (!aboutData || !whyChooseData) return null;

  //  SAVE ABOUT MAIN (Section 1)
  const saveAboutMain = async () => {
    try {
      const formData = new FormData();
      formData.append("title", aboutData.title);
      formData.append("description1", aboutData.description1);
      formData.append("description2", aboutData.description2);

      if (aboutData.imageFile) {
        formData.append("image", aboutData.imageFile);
      }

      await api.put("/about/main", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setAboutModal(false);
      loadAboutData();
      alert("About section updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update About Main.");
    }
  };

  //  SAVE WHY CHOOSE (Section 2)
  const saveWhyChoose = async () => {
    try {
      await api.put("/about/whychoose", {
        heading: whyChooseData.heading,
        subtitle: whyChooseData.subtitle,
        description: whyChooseData.description,
        items: whyChooseData.items,
      });

      setWhyChooseModal(false);
      loadAboutData();
      alert("Why Choose updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update Why Choose");
    }
  };

  return (
    <AdminLayout>
      <h5 className="fw-semibold mb-4">About Us</h5>

      {/* ================= SECTION 1: ABOUT MAIN ================= */}
      <Card className="mb-4">
        <Card.Header className="bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Section 1: Main Content</h5>
            <Button size="sm" onClick={() => setAboutModal(true)}>Edit About</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row align-items-center g-4">
            <div className="col-md-3 text-center">
              <img
                src={`${import.meta.env.VITE_API_URL}${aboutData.image}`}
                className="img-fluid rounded border"
                alt="About"
              />
            </div>
            <div className="col-md-9">
              <h4 className="fw-bold">{aboutData.title}</h4>
              <p className="text-muted">{aboutData.description1}</p>
              <p className="text-muted mb-0">{aboutData.description2}</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* ================= SECTION 2: WHY CHOOSE ================= */}
      <Card>
        <Card.Header className="bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Section 2: Why Choose Us</h5>
            <Button size="sm" onClick={() => setWhyChooseModal(true)}>Edit Why Choose</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="text-center mb-4">
            <h3 className="fw-bold">{whyChooseData.heading}</h3>
            <p className="fw-semibold text-primary">{whyChooseData.subtitle}</p>
            <p className="text-muted">{whyChooseData.description}</p>
          </div>
          <div className="row g-3">
            {whyChooseData.items.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="p-3 border rounded h-100 bg-light">
                  <h6 className="fw-bold">{item.title}</h6>
                  <ul className="mb-0 small">
                    {item.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* ================= MODAL: EDIT ABOUT MAIN ================= */}
      <Modal show={aboutModal} onHide={() => setAboutModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit About Section</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <div className="mb-2">
              <img
                src={aboutData.imagePreview || `${import.meta.env.VITE_API_URL}${aboutData.image}`}
                style={{ width: '120px', height: '100px', objectFit: 'cover' }}
                className="border rounded" alt="Preview"
              />
            </div>
            <Form.Control
              type="file" accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setAboutData({
                    ...aboutData,
                    imagePreview: URL.createObjectURL(file),
                    imageFile: file
                  });
                }
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control value={aboutData.title} onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Paragraph 1</Form.Label>
            <Form.Control as="textarea" rows={3} value={aboutData.description1} onChange={(e) => setAboutData({ ...aboutData, description1: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Paragraph 2</Form.Label>
            <Form.Control as="textarea" rows={3} value={aboutData.description2} onChange={(e) => setAboutData({ ...aboutData, description2: e.target.value })} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAboutModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveAboutMain}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* ================= MODAL: EDIT WHY CHOOSE ================= */}
      <Modal show={whyChooseModal} onHide={() => setWhyChooseModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Why Choose Section</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control value={whyChooseData.heading} onChange={(e) => setWhyChooseData({ ...whyChooseData, heading: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control value={whyChooseData.subtitle} onChange={(e) => setWhyChooseData({ ...whyChooseData, subtitle: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control value={whyChooseData.description} onChange={(e) => setWhyChooseData({ ...whyChooseData, description: e.target.value })} />
          </Form.Group>

          <hr />
          <h6>Items & Bullet Points</h6>
          {whyChooseData.items.map((item, index) => (
            <div key={index} className="border p-3 rounded mb-3 bg-light position-relative">
              <Button 
                variant="outline-danger" size="sm" className="position-absolute" style={{top: 10, right: 10}}
                onClick={() => {
                  const updated = whyChooseData.items.filter((_, i) => i !== index);
                  setWhyChooseData({ ...whyChooseData, items: updated });
                }}
              >
                <i className="fas fa-trash"></i>
              </Button>
              
              <Form.Group className="mb-2">
                <Form.Label>Item Title</Form.Label>
                <Form.Control 
                  value={item.title} 
                  onChange={(e) => {
                    const updated = [...whyChooseData.items];
                    updated[index].title = e.target.value;
                    setWhyChooseData({ ...whyChooseData, items: updated });
                  }}
                />
              </Form.Group>

              <Form.Label className="small">Points</Form.Label>
              {item.points.map((point, pIndex) => (
                <div key={pIndex} className="d-flex gap-2 mb-2">
                  <Form.Control 
                    size="sm" value={point} 
                    onChange={(e) => {
                      const updated = [...whyChooseData.items];
                      updated[index].points[pIndex] = e.target.value;
                      setWhyChooseData({ ...whyChooseData, items: updated });
                    }}
                  />
                  <Button 
                    variant="outline-danger" size="sm"
                    onClick={() => {
                      const updated = [...whyChooseData.items];
                      updated[index].points = updated[index].points.filter((_, i) => i !== pIndex);
                      setWhyChooseData({ ...whyChooseData, items: updated });
                    }}
                  ><i className="fas fa-times"></i></Button>
                </div>
              ))}
              <Button 
                variant="link" size="sm" className="p-0"
                onClick={() => {
                  const updated = [...whyChooseData.items];
                  updated[index].points.push("");
                  setWhyChooseData({ ...whyChooseData, items: updated });
                }}
              >+ Add Point</Button>
            </div>
          ))}
          <Button 
            variant="outline-primary" size="sm"
            onClick={() => setWhyChooseData({
              ...whyChooseData,
              items: [...whyChooseData.items, { title: "", points: [""] }]
            })}
          >+ Add New Reason Card</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setWhyChooseModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveWhyChoose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
}