import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";
export default function AdmissionSection({ admissionData, setAdmissionData }) {
  if (!admissionData) return null;
  const [admissionModal, setAdmissionModal] = React.useState(false);
  const saveAdmission = async () => {
    await api.put("/home/admission", {
      title: admissionData.title,
      subtitle: admissionData.subtitle,
    });
    setAdmissionModal(false);
  }


  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#admission"
          >
            Admission Section
          </button>
        </h2>

        <div
          id="admission"
          className="accordion-collapse collapse"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage Admission Section</p>
              <Button size="sm" onClick={() => setAdmissionModal(true)}>
                Edit Admission Section
              </Button>
            </div>
            <hr />
            <div className="text-center mb-3">
              <h4 className="fw-bold mb-2">{admissionData.title}</h4>
              <p className="text-muted mb-0">{admissionData.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Modal */}
      <Modal
        show={admissionModal}
        onHide={() => setAdmissionModal(false)}
        centered
        container={document.body}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Admission Section</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={admissionData.title}
              onChange={(e) =>
                setAdmissionData({
                  ...admissionData,
                  title: e.target.value,
                })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Subtitle</Form.Label>
            <Form.Control
              value={admissionData.subtitle}
              onChange={(e) =>
                setAdmissionData({
                  ...admissionData,
                  subtitle: e.target.value,
                })
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdmissionModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => saveAdmission()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
