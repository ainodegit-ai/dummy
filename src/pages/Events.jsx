// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";

// export default function Events() {
//   const [eventIntroModal, setEventIntroModal] = useState(false);
//   const [eventGalleryModal, setEventGalleryModal] = useState(false);

//   const [eventIntro, setEventIntro] = useState({
//     heading: "Rankridge School Events: Where Learning Meets Celebration",
//     subHeading: "Specialized Skill-Building at Rankridge",
//     subHeading1: "Celebrations That Last a Life Time",
//     description:
//       "School life is made special by the memories children create outside the classroom, and at Rankridge Schools our events play a big part in that journey. From cultural festivals and annual days to sports meets, science fairs, and community celebrations, every event is designed to let children shine in their own way.\n\nFor parents, these occasions are a chance to see their children grow in confidence, teamwork, and creativity. A child who sings on stage, leads a house team, or presents a project at the exhibition learns lessons no textbook can teach. We believe celebrations build stronger connections between students, families, and teachers. At Rankridge, events are more than activities; they are joyful milestones that shape character, bring families closer, and make school life truly unforgettable.",
//     image: "/assets/abtimg.jpg",
//   });

//   const [eventGallery, setEventGallery] = useState([
//     {
//       title: "School Elections",
//       image: "/assets/abtimg.jpg",
//     },
//     {
//       title: "Annual Fest",
//       image: "/assets/abtimg.jpg",
//     },
//   ]);
//   return (
//     <>
//       <AdminLayout>
//         <div>
//           <h5 className="fw-semibold mb-4">Events</h5>
//           <Card>
//             <Card.Header>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0 fw-semibold">Events Intro Section</h5>

//                 <Button size="sm" onClick={() => setEventIntroModal(true)}>
//                   Edit Events Intro Section
//                 </Button>
//               </div>
//             </Card.Header>
//             <Card.Body>
//               <Card.Text>
//                 <h4 className="fw-bold text-center mb-2">
//                   {eventIntro.heading}
//                 </h4>

//                 <h6 className="text-center text-muted mb-4">
//                   {eventIntro.subHeading}
//                 </h6>

//                 <div className="row align-items-center">
//                   <div className="col-md-3">
//                     <img
//                       src={eventIntro.image}
//                       className="img-fluid rounded shadow-sm"
//                       alt="Event Intro"
//                     />
//                   </div>

//                   <div className="col-md-9">
//                     <h5 className="fw-bold mb-2">{eventIntro.subHeading1}</h5>
//                     <p>{eventIntro.description}</p>
//                   </div>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//           <Card className="mt-4">
//             <Card.Header>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h5 className="mb-0 fw-semibold">Events Gallery</h5>

//                 <Button size="sm" onClick={() => setEventGalleryModal(true)}>
//                   Edit Events Gallery
//                 </Button>
//               </div>
//             </Card.Header>
//             <Card.Body>
//               <Card.Text>
//                 <div className="row g-3">
//                   {eventGallery.map((item, index) => (
//                     <div className="col-md-3" key={index}>
//                       <div className="bg-white border rounded overflow-hidden h-100">
//                         <img
//                           src={item.image}
//                           className="img-fluid"
//                           alt={item.title}
//                         />
//                         <div className="p-2 text-center fw-semibold">
//                           {item.title}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </div>
//         <Modal
//           show={eventIntroModal}
//           onHide={() => setEventIntroModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Events Intro Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Heading</Form.Label>
//               <Form.Control
//                 value={eventIntro.heading}
//                 onChange={(e) =>
//                   setEventIntro({ ...eventIntro, heading: e.target.value })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Sub Heading</Form.Label>
//               <Form.Control
//                 value={eventIntro.subHeading}
//                 onChange={(e) =>
//                   setEventIntro({ ...eventIntro, subHeading: e.target.value })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 value={eventIntro.description}
//                 onChange={(e) =>
//                   setEventIntro({ ...eventIntro, description: e.target.value })
//                 }
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Upload Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) =>
//                   setEventIntro({
//                     ...eventIntro,
//                     image: URL.createObjectURL(e.target.files[0]),
//                   })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button onClick={() => setEventIntroModal(false)}>Save</Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={eventGalleryModal}
//           onHide={() => setEventGalleryModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Events Gallery</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {eventGallery.map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded bg-light p-3 mb-3 position-relative"
//               >
//                 <button
//                   className="btn btn-sm btn-outline-danger position-absolute"
//                   style={{ top: 8, right: 8 }}
//                   onClick={() =>
//                     setEventGallery(eventGallery.filter((_, i) => i !== index))
//                   }
//                 >
//                   <i className="fas fa-trash"></i>
//                 </button>

//                 <Form.Group className="mb-2">
//                   <Form.Label>Event Title</Form.Label>
//                   <Form.Control
//                     value={item.title}
//                     onChange={(e) => {
//                       const updated = [...eventGallery];
//                       updated[index].title = e.target.value;
//                       setEventGallery(updated);
//                     }}
//                   />
//                 </Form.Group>

//                 <Form.Group>
//                   <Form.Label>Event Image</Form.Label>
//                   <Form.Control
//                     type="file"
//                     onChange={(e) => {
//                       const updated = [...eventGallery];
//                       updated[index].image = URL.createObjectURL(
//                         e.target.files[0]
//                       );
//                       setEventGallery(updated);
//                     }}
//                   />
//                 </Form.Group>
//               </div>
//             ))}

//             <Button
//               size="sm"
//               variant="outline-primary"
//               onClick={() =>
//                 setEventGallery([...eventGallery, { title: "", image: "" }])
//               }
//             >
//               + Add Event
//             </Button>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button onClick={() => setEventGalleryModal(false)}>Save</Button>
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

export default function Events() {
  const [eventIntroModal, setEventIntroModal] = useState(false);
  const [eventGalleryModal, setEventGalleryModal] = useState(false);

  const [eventIntro, setEventIntro] = useState(null);
  const [eventGallery, setEventGallery] = useState([]);

  const loadEventsData = async () => {
    try {
      const res = await api.get("/events");
      setEventIntro(res.data.intro);
      setEventGallery(res.data.gallery);
    } catch (err) {
      console.error("Error loading events", err);
    }
  };

  useEffect(() => {
    loadEventsData();
  }, []);

  if (!eventIntro) return null;

  // 1️⃣ SAVE EVENTS INTRO
  const saveEventIntro = async () => {
    try {
      const formData = new FormData();
      formData.append("heading", eventIntro.heading);
      formData.append("sub_heading", eventIntro.sub_heading);
      formData.append("sub_heading1", eventIntro.sub_heading1);
      formData.append("description", eventIntro.description);

      if (eventIntro.imageFile) {
        formData.append("image", eventIntro.imageFile);
      }

      await api.put("/events/intro", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEventIntroModal(false);
      loadEventsData();
      alert("Intro updated successfully!");
    } catch (err) {
      alert("Failed to update intro");
    }
  };

  // 2️⃣ GALLERY ACTIONS (Add, Delete)
  const handleAddGalleryItem = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const title = prompt("Enter Event Title:");
    if (!title) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);

    try {
      await api.post("/events/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      loadEventsData();
    } catch (err) {
      alert("Upload failed");
    }
  };

  const handleDeleteGalleryItem = async (id) => {
    if (window.confirm("Are you sure?")) {
      await api.delete(`/events/gallery/${id}`);
      loadEventsData();
    }
  };

  return (
    <AdminLayout>
      <h5 className="fw-semibold mb-4">Events</h5>

      {/* INTRO SECTION CARD */}
      <Card className="mb-4">
        <Card.Header className="bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Events Intro</h5>
            <Button size="sm" onClick={() => setEventIntroModal(true)}>Edit Intro</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <h4 className="fw-bold text-center mb-2">{eventIntro.heading}</h4>
          <h6 className="text-center text-muted mb-4">{eventIntro.sub_heading}</h6>
          <div className="row align-items-center">
            <div className="col-md-3">
              <img 
                src={`${import.meta.env.VITE_API_URL}${eventIntro.image}`} 
                className="img-fluid rounded border" 
                alt="" 
              />
            </div>
            <div className="col-md-9">
              <h5 className="fw-bold">{eventIntro.sub_heading1}</h5>
              <p style={{ whiteSpace: "pre-line" }}>{eventIntro.description}</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* GALLERY SECTION CARD */}
      <Card>
        <Card.Header className="bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-semibold">Events Gallery</h5>
            <Button size="sm" onClick={() => setEventGalleryModal(true)}>Manage Gallery</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row g-3">
            {eventGallery.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="border rounded overflow-hidden">
                  <img src={`${import.meta.env.VITE_API_URL}${item.image}`} className="img-fluid" alt="" style={{height: '150px', width: '100%', objectFit: 'cover'}} />
                  <div className="p-2 text-center small fw-bold">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* MODAL: EDIT INTRO */}
      <Modal show={eventIntroModal} onHide={() => setEventIntroModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Events Intro</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control value={eventIntro.heading} onChange={(e) => setEventIntro({...eventIntro, heading: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sub Heading</Form.Label>
            <Form.Control value={eventIntro.sub_heading} onChange={(e) => setEventIntro({...eventIntro, sub_heading: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Sub Heading 1</Form.Label>
            <Form.Control value={eventIntro.sub_heading1} onChange={(e) => setEventIntro({...eventIntro, sub_heading1: e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={6} value={eventIntro.description} onChange={(e) => setEventIntro({...eventIntro, description: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Intro Image</Form.Label>
            <div className="mb-2">
              <img src={eventIntro.imagePreview || `${import.meta.env.VITE_API_URL}${eventIntro.image}`} style={{width: '100px'}} alt="" />
            </div>
            <Form.Control type="file" onChange={(e) => {
              const file = e.target.files[0];
              if(file) setEventIntro({...eventIntro, imagePreview: URL.createObjectURL(file), imageFile: file});
            }} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEventIntroModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveEventIntro}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* MODAL: MANAGE GALLERY */}
      <Modal show={eventGalleryModal} onHide={() => setEventGalleryModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Manage Events Gallery</Modal.Title></Modal.Header>
        <Modal.Body>
          <div className="mb-3 p-3 border rounded bg-light text-center">
            <h6>Add New Event to Gallery</h6>
            <Form.Control type="file" accept="image/*" onChange={handleAddGalleryItem} />
          </div>
          <div className="row g-2">
            {eventGallery.map((item, idx) => (
              <div key={idx} className="col-4">
                <div className="border rounded position-relative">
                  <img src={`${import.meta.env.VITE_API_URL}${item.image}`} className="img-fluid" alt="" />
                  <Button 
                    variant="danger" size="sm" className="position-absolute" style={{top: 5, right: 5}}
                    onClick={() => handleDeleteGalleryItem(item.id)}
                  ><i className="fas fa-trash"></i></Button>
                  <div className="p-1 small text-center">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </AdminLayout>
  );
}