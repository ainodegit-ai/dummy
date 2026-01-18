// import React from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import { useState } from "react";
// import api from "../../api/axiosConfig";

// export default function ActivitySection({ activityData, setActivityData, loadActivity }) {
//   if (!activityData) return null;

//   const [activityModal, setActivityModal] = useState(false);
//   const [iconFiles, setIconFiles] = useState({}); 
// const saveActivity = async () => {
//   const formData = new FormData();

//   formData.append("heading", activityData.heading);
//   formData.append("description", activityData.description);

//   activityData.items.forEach((item, index) => {
//     formData.append(`items[${index}][title]`, item.title);
//     formData.append(`items[${index}][description]`, item.description);

//     if (iconFiles[index]) {
//       formData.append(`items[${index}][icon]`, iconFiles[index]);
//     } else {
//       formData.append(`items[${index}][icon]`, item.icon || "");
//     }
//   });

//   await api.put("/home/activity", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

//   setActivityModal(false);
//   loadActivity();
// };

//   return (
//     <>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             data-bs-toggle="collapse"
//             data-bs-target="#activity"
//           >
//             Activity & Skill
//           </button>
//         </h2>

//         <div
//           id="activity"
//           className="accordion-collapse collapse"
//           data-bs-parent="#homeAccordion"
//         >
//           <div className="accordion-body">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <p className="mb-0">Manage Activity & Skill Section</p>
//               <Button size="sm" onClick={() => setActivityModal(true)}>
//                 Edit Activity & Skill Section
//               </Button>
//             </div>
//             <hr />
//             {/* ================= PREVIEW ================= */}
//             <div className="mb-3">
//               <h3 className="fw-bold text-center mb-2">
//                 {activityData.heading}
//               </h3>

//               <p className="text-muted text-center mb-4">
//                 {activityData.description}
//               </p>

//               <div className="row g-3">
//                 {activityData.items.map((item, index) => (
//                   <div className="col-md-4" key={index}>
//                     <div className="h-100 bg-white border rounded p-3 text-center">
//                       {item.icon && (
//   <img
//   src={`${import.meta.env.VITE_API_URL}${item.icon}`}
//   alt={item.title}
//   style={{
//     width: 48,
//     height: 48,
//     objectFit: "contain",
//   }}
//   className="mb-3"
// />

// )}

//                       <h6 className="fw-semibold">{item.title}</h6>
//                       <p className="small text-muted mb-0">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Activity Modal */}
//       <Modal
//         show={activityModal}
//         onHide={() => setActivityModal(false)}
//         size="lg"
//         centered
//         container={document.body}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Activity & Skill Section</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           {/* HEADING */}
//           <Form.Group className="mb-3">
//             <Form.Label>Heading</Form.Label>
//             <Form.Control
//               value={activityData.heading}
//               onChange={(e) =>
//                 setActivityData({
//                   ...activityData,
//                   heading: e.target.value,
//                 })
//               }
//             />
//           </Form.Group>

//           {/* DESCRIPTION */}
//           <Form.Group className="mb-4">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               value={activityData.description}
//               onChange={(e) =>
//                 setActivityData({
//                   ...activityData,
//                   description: e.target.value,
//                 })
//               }
//             />
//           </Form.Group>

//           <hr />

//           {/* ITEMS */}
//           <h6 className="fw-semibold mb-3">Activities</h6>

//           {activityData.items.map((item, index) => (
//             <div
//               key={index}
//               className="border rounded bg-light p-3 mb-3 position-relative"
//             >
//               {/* DELETE ICON */}
//               <button
//                 type="button"
//                 className="btn btn-sm btn-outline-danger position-absolute"
//                 style={{ top: 8, right: 8 }}
//                 onClick={() => {
//                   const updated = activityData.items.filter(
//                     (_, i) => i !== index
//                   );
//                   setActivityData({ ...activityData, items: updated });
//                 }}
//               >
//                 <i className="fas fa-trash"></i>
//               </button>

//               {/* ICON */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Icon Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (!file) return;
                  
//                     // store file for upload
//                     setIconFiles((prev) => ({
//                       ...prev,
//                       [index]: file,
//                     }));
                  
//                     // update preview
//                     const updated = [...activityData.items];
//                     updated[index].icon = URL.createObjectURL(file);
                  
//                     setActivityData({
//                       ...activityData,
//                       items: updated,
//                     });
//                   }}

//                 />
//               </Form.Group>

//               {/* TITLE */}
//               <Form.Group className="mb-2">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control
//                   value={item.title}
//                   onChange={(e) => {
//                     const updated = [...activityData.items];
//                     updated[index].title = e.target.value;
//                     setActivityData({ ...activityData, items: updated });
//                   }}
//                 />
//               </Form.Group>

//               {/* DESCRIPTION */}
//               <Form.Group>
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={2}
//                   value={item.description}
//                   onChange={(e) => {
//                     const updated = [...activityData.items];
//                     updated[index].description = e.target.value;
//                     setActivityData({ ...activityData, items: updated });
//                   }}
//                 />
//               </Form.Group>
//             </div>
//           ))}

//           {/* ADD ITEM */}
//           <Button
//             size="sm"
//             variant="outline-primary"
//             onClick={() =>
//               setActivityData({
//                 ...activityData,
//                 items: [
//                   ...activityData.items,
//                   {
//                     title: "",
//                     description: "",
//                     icon: "",
//                   },
//                 ],
//               })
//             }
//           >
//             + Add Activity
//           </Button>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setActivityModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={saveActivity}>
//             Save Changes
//           </Button>

//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function ActivitySection({ activityData, setActivityData, loadActivity }) {
  if (!activityData) return null;

  const [activityModal, setActivityModal] = useState(false);

  const saveActivity = async () => {
    try {
      const formData = new FormData();
      formData.append("heading", activityData.heading);
      formData.append("description", activityData.description);

      activityData.items.forEach((item, index) => {
        formData.append(`items[${index}][title]`, item.title || "");
        formData.append(`items[${index}][description]`, item.description || "");

        // Send binary file if it exists, otherwise send the existing path string
        if (item.file) {
          formData.append(`items[${index}][icon]`, item.file);
        } else {
          formData.append(`items[${index}][icon]`, item.icon || "");
        }
      });

      await api.put("/home/activity", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Updated successfully!");
      setActivityModal(false);
      loadActivity();
    } catch (error) {
      console.error(error);
      alert("Failed to update activity section.");
    }
  };

  return (
    <>
      {/* ... Accordion structure unchanged ... */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#activity">
            Activity & Skill
          </button>
        </h2>
        <div id="activity" className="accordion-collapse collapse" data-bs-parent="#homeAccordion">
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage Activity & Skill</p>
              <Button size="sm" onClick={() => setActivityModal(true)}>Edit Section</Button>
            </div>
            <hr />
            <div className="mb-3 text-center">
              <h3>{activityData.heading}</h3>
              <p>{activityData.description}</p>
              <div className="row g-3">
                {activityData.items.map((item, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="border p-3 rounded h-100 bg-white">
                      <img 
                        src={`${import.meta.env.VITE_API_URL}${item.icon}`} 
                        alt="" 
                        style={{ width: 48, height: 48, objectFit: "contain" }} 
                        className="mb-2" 
                      />
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={activityModal} onHide={() => setActivityModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Activity & Skill</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control 
              value={activityData.heading} 
              onChange={(e) => setActivityData({ ...activityData, heading: e.target.value })} 
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" rows={2} 
              value={activityData.description} 
              onChange={(e) => setActivityData({ ...activityData, description: e.target.value })} 
            />
          </Form.Group>

          {activityData.items.map((item, index) => (
            <div key={index} className="border rounded p-3 mb-3 position-relative bg-light">
              <button
                type="button"
                className="btn btn-sm btn-outline-danger position-absolute"
                style={{ top: 8, right: 8 }}
                onClick={() => {
                  const updated = activityData.items.filter((_, i) => i !== index);
                  setActivityData({ ...activityData, items: updated });
                }}
              >
                <i className="fas fa-trash"></i>
              </button>

              <Form.Group className="mb-2">
                <Form.Label>Icon</Form.Label>
                <div className="mb-2">
                  <img 
                    src={item.preview || `${import.meta.env.VITE_API_URL}${item.icon}`} 
                    style={{ width: 40, height: 40 }} 
                    alt="" 
                  />
                </div>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const updated = [...activityData.items];
                      updated[index].preview = URL.createObjectURL(file); // Temporary UI preview
                      updated[index].file = file; // Actual binary for upload
                      setActivityData({ ...activityData, items: updated });
                    }
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...activityData.items];
                    updated[index].title = e.target.value;
                    setActivityData({ ...activityData, items: updated });
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Item Description</Form.Label>
                <Form.Control
                  as="textarea" rows={2}
                  value={item.description}
                  onChange={(e) => {
                    const updated = [...activityData.items];
                    updated[index].description = e.target.value;
                    setActivityData({ ...activityData, items: updated });
                  }}
                />
              </Form.Group>
            </div>
          ))}

          <Button 
            variant="outline-primary" size="sm" 
            onClick={() => setActivityData({
              ...activityData, 
              items: [...activityData.items, { title: "", description: "", icon: "" }]
            })}
          >
            + Add Activity
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setActivityModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveActivity}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}