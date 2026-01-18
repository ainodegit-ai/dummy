import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import api from "../../api/axiosConfig";
export default function AboutSection({ aboutData, setAboutData }) {
  if (!aboutData) return null;
  const [aboutModal, setAboutModal] = React.useState(false);
  const [imageFile, setImageFile] = useState(null);
  const saveAbout = async () => {
  const formData = new FormData();
  formData.append("title", aboutData.title);
  formData.append("description1", aboutData.description1);
  formData.append("description2", aboutData.description2);

  if (imageFile) {
    formData.append("image", imageFile);
  }

  await api.put("/home/about", formData);

  setAboutModal(false);
  alert("About updated successfully");
};


  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#about"
          >
            About Section
          </button>
        </h2>

        <div
          id="about"
          className="accordion-collapse collapse"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage about content</p>
              <Button size="sm" onClick={() => setAboutModal(true)}>
                + Edit About
              </Button>
            </div>
            <hr />
            <div className="mb-3">
              <div className="row align-items-center g-4">
                {/* IMAGE PREVIEW */}
                <div className="col-md-5">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${aboutData.image}`}
                    //http://localhost:5000/uploads/home/about/about_1768512649224.png
                    alt="About Preview"
                    width={200}
                  />


                </div>

                {/* TEXT PREVIEW */}
                <div className="col-md-7">
                  <h3 className="fw-bold mb-3">{aboutData.title}</h3>

                  <p className="text-muted">{aboutData.description1}</p>

                  <p className="text-muted mb-0">{aboutData.description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Modal */}
      <Modal
        show={aboutModal}
        onHide={() => setAboutModal(false)}
        size="lg"
        centered
        container={document.body}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit About Section</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* IMAGE */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setImageFile(file); // store actual file
                  setAboutData({
                    ...aboutData,
                    image: URL.createObjectURL(file), // preview
                  });
                }
              }}

            />
          </Form.Group>

          {/* TITLE */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={aboutData.title}
              onChange={(e) =>
                setAboutData({ ...aboutData, title: e.target.value })
              }
            />
          </Form.Group>

          {/* DESCRIPTION 1 */}
          <Form.Group className="mb-3">
            <Form.Label>Description (Paragraph 1)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={aboutData.description1}
              onChange={(e) =>
                setAboutData({ ...aboutData, description1: e.target.value })
              }
            />
          </Form.Group>

          {/* DESCRIPTION 2 */}
          <Form.Group>
            <Form.Label>Description (Paragraph 2)</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={aboutData.description2}
              onChange={(e) =>
                setAboutData({ ...aboutData, description2: e.target.value })
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAboutModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveAbout}>
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
