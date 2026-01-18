// import React from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import api from "../../api/axiosConfig";

// export default function StandOutSection({ standOutData, setStandOutData, loadStandOut}) {
//   if (!standOutData) return null;
//   const [standOutModal, setStandOutModal] = React.useState(false);
//   const saveStandOut = async () => {
//   await api.put("/home/standout", {
//     heading: standOutData.heading,
//     items: standOutData.items,
//   });

//   await loadStandOut();
//   setStandOutModal(false);
// }

//   return (
//     <>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             data-bs-toggle="collapse"
//             data-bs-target="#standout"
//           >
//             What Makes Rankridge Stand Out
//           </button>
//         </h2>

//         <div
//           id="standout"
//           className="accordion-collapse collapse"
//           data-bs-parent="#homeAccordion"
//         >
//           <div className="accordion-body">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <p className="mb-0">
//                 Manage What Makes Rankridge Stand Out Section
//               </p>
//               <Button size="sm" onClick={() => setStandOutModal(true)}>
//                 Edit Stand Out Section
//               </Button>
//             </div>
//             <hr />
//             {/* ================= PREVIEW ================= */}
//             <div className="mb-3">
//               <h4 className="fw-bold text-center mb-4">
//                 {standOutData.heading}
//               </h4>

//               <div className="row g-3">
//                 {standOutData.items.map((item, i) => (
//                   <div className="col-md-4" key={i}>
//                     <div className="border rounded text-center p-3 bg-white h-100">
//                       <img
//                         src={`${import.meta.env.VITE_API_URL}${item.icon}`}

//                         style={{ width: 60 }}
//                         className="mb-3"
//                       />
//                       <p className="fw-semibold mb-0">{item.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stand Out Modal */}
//       <Modal
//         show={standOutModal}
//         onHide={() => setStandOutModal(false)}
//         size="lg"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Stand Out Section</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form.Group className="mb-3">
//             <Form.Label>Section Heading</Form.Label>
//             <Form.Control
//               placeholder="Enter section heading"
//               value={standOutData.heading}
//               onChange={(e) =>
//                 setStandOutData({ ...standOutData, heading: e.target.value })
//               }
//             />
//           </Form.Group>

//           {standOutData.items.map((item, index) => (
//             <div
//               className="border rounded p-3 mb-3 position-relative"
//               key={index}
//             >
//               <button
//                 className="btn btn-sm btn-outline-danger position-absolute"
//                 style={{ top: 8, right: 8 }}
//                 onClick={() =>
//                   setStandOutData({
//                     ...standOutData,
//                     items: standOutData.items.filter((_, i) => i !== index),
//                   })
//                 }
//               >
//                 <i className="fas fa-trash"></i>
//               </button>

//               <Form.Group className="mb-2">
//                 <Form.Label>Card Title</Form.Label>
//                 <Form.Control
//                   placeholder="Enter title"
//                   value={item.title}
//                   onChange={(e) => {
//                     const updated = [...standOutData.items];
//                     updated[index].title = e.target.value;
//                     setStandOutData({ ...standOutData, items: updated });
//                   }}
//                 />
//               </Form.Group>

//               <Form.Group>
//                 <Form.Label>Icon Image</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     const updated = [...standOutData.items];
//                     updated[index].icon = URL.createObjectURL(
//                       e.target.files[0]
//                     );
//                     setStandOutData({ ...standOutData, items: updated });
//                   }}
//                 />
//               </Form.Group>
//             </div>
//           ))}

//           <Button
//             size="sm"
//             variant="outline-primary"
//             onClick={() =>
//               setStandOutData({
//                 ...standOutData,
//                 items: [...standOutData.items, { title: "", icon: "" }],
//               })
//             }
//           >
//             + Add Item
//           </Button>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setStandOutModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={() => saveStandOut()}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function StandOutSection({ standOutData, setStandOutData, loadStandOut }) {
  if (!standOutData) return null;
  const [standOutModal, setStandOutModal] = React.useState(false);

  const saveStandOut = async () => {
    try {
      const formData = new FormData();
      formData.append("heading", standOutData.heading);

      standOutData.items.forEach((item, index) => {
        formData.append(`items[${index}][title]`, item.title || "");
        
        // If there is a new file object, append it. 
        // Otherwise, append the existing path string.
        if (item.iconFile) {
          formData.append(`items[${index}][icon]`, item.iconFile);
        } else {
          formData.append(`items[${index}][icon]`, item.icon || "");
        }
      });

      // MUST send as multipart/form-data
      await api.put("/home/standout", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await loadStandOut(); // Refresh from DB
      setStandOutModal(false);
      alert("Stand Out Section updated successfully!");
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save. Check console for details.");
    }
  };

  return (
    <>
      {/* ... Accordion structure stays the same ... */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#standout">
            What Makes Rankridge Stand Out
          </button>
        </h2>
        <div id="standout" className="accordion-collapse collapse" data-bs-parent="#homeAccordion">
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage Stand Out Section</p>
              <Button size="sm" onClick={() => setStandOutModal(true)}>Edit Section</Button>
            </div>
            <hr />
            <div className="mb-3">
              <h4 className="fw-bold text-center mb-4">{standOutData.heading}</h4>
              <div className="row g-3">
                {standOutData.items.map((item, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="border rounded text-center p-3 bg-white h-100">
                      <img src={`${import.meta.env.VITE_API_URL}${item.icon}`} style={{ width: 60 }} className="mb-3" alt="" />
                      <p className="fw-semibold mb-0">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={standOutModal} onHide={() => setStandOutModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Stand Out Section</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Section Heading</Form.Label>
            <Form.Control
              value={standOutData.heading}
              onChange={(e) => setStandOutData({ ...standOutData, heading: e.target.value })}
            />
          </Form.Group>

          {standOutData.items.map((item, index) => (
            <div className="border rounded p-3 mb-3 position-relative" key={index}>
              <button
                className="btn btn-sm btn-outline-danger position-absolute"
                style={{ top: 8, right: 8 }}
                onClick={() => setStandOutData({
                  ...standOutData,
                  items: standOutData.items.filter((_, i) => i !== index),
                })}
              >
                <i className="fas fa-trash"></i>
              </button>

              <Form.Group className="mb-2">
                <Form.Label>Card Title</Form.Label>
                <Form.Control
                  value={item.title}
                  onChange={(e) => {
                    const updated = [...standOutData.items];
                    updated[index].title = e.target.value;
                    setStandOutData({ ...standOutData, items: updated });
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Icon Image</Form.Label>
                <div className="mb-2">
                   {/* Preview: Show new blob URL if uploading, else show server URL */}
                   <img 
                    src={item.iconPreview || `${import.meta.env.VITE_API_URL}${item.icon}`} 
                    style={{width: '50px'}} 
                    alt="preview" 
                   />
                </div>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const updated = [...standOutData.items];
                      updated[index].iconPreview = URL.createObjectURL(file); // For UI preview
                      updated[index].iconFile = file; // For the actual upload
                      setStandOutData({ ...standOutData, items: updated });
                    }
                  }}
                />
              </Form.Group>
            </div>
          ))}

          <Button
            size="sm"
            variant="outline-primary"
            onClick={() => setStandOutData({
                ...standOutData,
                items: [...standOutData.items, { title: "", icon: "" }],
            })}
          >
            + Add Item
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setStandOutModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveStandOut}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}