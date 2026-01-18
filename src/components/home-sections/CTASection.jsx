import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";
export default function CTASection({ ctaData, setCtaData, loadCTA}) {
  if (!ctaData) return null;
  const [ctaModal, setCtaModal] = React.useState(false);
  const saveCTA = async () => {
  await api.put("/home/cta", {
    tag: ctaData.tag,
    title: ctaData.title,
    description: ctaData.description,
    buttonText: ctaData.buttonText,
  });
  await loadCTA();
  setCtaModal(false);
  alert("CTA section updated successfully");
}
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#cta"
          >
            Call to Action
          </button>
        </h2>

        <div
          id="cta"
          className="accordion-collapse collapse"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage CTA Section</p>
              <Button size="sm" onClick={() => setCtaModal(true)}>
                Edit CTA Section
              </Button>
            </div>
            <hr />
            <div className="text-center mb-3">
              <small className="text-uppercase text-muted">{ctaData.tag}</small>
              <h4 className="fw-bold my-2">{ctaData.title}</h4>
              <p className="text-muted">{ctaData.description}</p>
              <button className="btn btn-primary">
                {ctaData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Modal */}
      <Modal show={ctaModal} onHide={() => setCtaModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit CTA Section</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Tag Line</Form.Label>
            <Form.Control
              placeholder="Enter tag line"
              value={ctaData.tag}
              onChange={(e) => setCtaData({ ...ctaData, tag: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter title"
              value={ctaData.title}
              onChange={(e) =>
                setCtaData({ ...ctaData, title: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Enter description"
              value={ctaData.description}
              onChange={(e) =>
                setCtaData({ ...ctaData, description: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Button Text</Form.Label>
            <Form.Control
              placeholder="Enter button text"
              value={ctaData.buttonText}
              onChange={(e) =>
                setCtaData({ ...ctaData, buttonText: e.target.value })
              }
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => saveCTA()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
