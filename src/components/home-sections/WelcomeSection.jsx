// import React from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import api from "../../api/axiosConfig";
// export default function WelcomeSection({ welcomeData, setWelcomeData, loadWelcome}) {
//   if (!welcomeData) return null;
//   const [welcomeModal, setWelcomeModal] = React.useState(false);
//   const saveWelcome = async () => {
//   await api.put("/home/welcome", {
//     title: welcomeData.title,
//     text1: welcomeData.text1,
//     text2: welcomeData.text2,
//     buttonText: welcomeData.buttonText,
//     image: welcomeData.image,
//   });
//   await loadWelcome();
//   setWelcomeModal(false);
//   alert("Welcome section updated successfully");
// }

//   return (
//     <>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className="accordion-button collapsed"
//             data-bs-toggle="collapse"
//             data-bs-target="#welcome"
//           >
//             Welcome to Rankridge School, Hyderabad
//           </button>
//         </h2>

//         <div
//           id="welcome"
//           className="accordion-collapse collapse"
//           data-bs-parent="#homeAccordion"
//         >
//           <div className="accordion-body">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <p className="mb-0">
//                 Manage Welcome to Rankridge School, Hyderabad Section
//               </p>
//               <Button size="sm" onClick={() => setWelcomeModal(true)}>
//                 Edit Welcome Section
//               </Button>
//             </div>
//             <hr />
//             <div className="mb-3">
//               <div className="row align-items-center">
//                 <div className="col-md-8">
//                   <h4 className="fw-bold">{welcomeData.title}</h4>
//                   <p>{welcomeData.text1}</p>
//                   <p>{welcomeData.text2}</p>
//                   <button className="btn btn-primary btn-sm">
//                     {welcomeData.buttonText}
//                   </button>
//                 </div>

//                 <div className="col-md-4">
//                   <img
//                     src={`${import.meta.env.VITE_API_URL}${welcomeData.image}`}
//                     className="img-fluid rounded"
//                   />

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Welcome Modal */}
//       <Modal
//         show={welcomeModal}
//         onHide={() => setWelcomeModal(false)}
//         size="lg"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Welcome Section</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               placeholder="Enter title"
//               value={welcomeData.title}
//               onChange={(e) =>
//                 setWelcomeData({ ...welcomeData, title: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Description (Paragraph 1)</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={2}
//               placeholder="Enter first paragraph"
//               value={welcomeData.text1}
//               onChange={(e) =>
//                 setWelcomeData({ ...welcomeData, text1: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Description (Paragraph 2)</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={2}
//               placeholder="Enter second paragraph"
//               value={welcomeData.text2}
//               onChange={(e) =>
//                 setWelcomeData({ ...welcomeData, text2: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Button Text</Form.Label>
//             <Form.Control
//               placeholder="Enter button text"
//               value={welcomeData.buttonText}
//               onChange={(e) =>
//                 setWelcomeData({ ...welcomeData, buttonText: e.target.value })
//               }
//             />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Upload Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setWelcomeData({
//                   ...welcomeData,
//                   image: URL.createObjectURL(e.target.files[0]),
//                 })
//               }
//             />
//           </Form.Group>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button onClick={()=>saveWelcome()}>Save</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }


import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function WelcomeSection({ welcomeData, setWelcomeData, loadWelcome }) {
  if (!welcomeData) return null;
  const [welcomeModal, setWelcomeModal] = React.useState(false);

  const saveWelcome = async () => {
    try {
      const formData = new FormData();
      formData.append("title", welcomeData.title);
      formData.append("text1", welcomeData.text1);
      formData.append("text2", welcomeData.text2);
      formData.append("buttonText", welcomeData.buttonText);

      // If a new file was selected, append the binary file object
      if (welcomeData.imageFile) {
        formData.append("image", welcomeData.imageFile);
      }

      await api.put("/home/welcome", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await loadWelcome();
      setWelcomeModal(false);
      alert("Welcome section updated successfully");
    } catch (error) {
      console.error("Update failed", error);
      alert("Failed to update Welcome section");
    }
  };

  return (
    <>
      {/* ... Accordion structure unchanged ... */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#welcome">
            Welcome to Rankridge School, Hyderabad
          </button>
        </h2>
        <div id="welcome" className="accordion-collapse collapse" data-bs-parent="#homeAccordion">
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage Welcome Section</p>
              <Button size="sm" onClick={() => setWelcomeModal(true)}>Edit Welcome Section</Button>
            </div>
            <hr />
            <div className="mb-3">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h4 className="fw-bold">{welcomeData.title}</h4>
                  <p>{welcomeData.text1}</p>
                  <p>{welcomeData.text2}</p>
                  {welcomeData.button_text && (
                    <button className="btn btn-primary btn-sm">
                      {welcomeData.button_text}
                    </button>
                  )}

                </div>
                <div className="col-md-4">
                  <img src={`${import.meta.env.VITE_API_URL}${welcomeData.image}`} className="img-fluid rounded" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={welcomeModal} onHide={() => setWelcomeModal(false)} size="lg" centered>
        <Modal.Header closeButton><Modal.Title>Edit Welcome Section</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              value={welcomeData.title} 
              onChange={(e) => setWelcomeData({ ...welcomeData, title: e.target.value })} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description (Paragraph 1)</Form.Label>
            <Form.Control as="textarea" rows={2} value={welcomeData.text1} onChange={(e) => setWelcomeData({ ...welcomeData, text1: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description (Paragraph 2)</Form.Label>
            <Form.Control as="textarea" rows={2} value={welcomeData.text2} onChange={(e) => setWelcomeData({ ...welcomeData, text2: e.target.value })} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Button Text</Form.Label>
            <Form.Control value={welcomeData.buttonText} onChange={(e) => setWelcomeData({ ...welcomeData, buttonText: e.target.value })} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Upload Image</Form.Label>
            <div className="mb-2">
                <img 
                    src={welcomeData.imagePreview || `${import.meta.env.VITE_API_URL}${welcomeData.image}`} 
                    style={{ width: '100px' }} 
                    alt="preview" 
                />
            </div>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setWelcomeData({
                    ...welcomeData,
                    imagePreview: URL.createObjectURL(file), // For UI only
                    imageFile: file, // For API upload
                  });
                }
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setWelcomeModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => saveWelcome()}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}