import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function HeroSection({ heroData, setHeroData }) {
  if (!heroData) return null;
  const [heroModal, setHeroModal] = React.useState(false);
  const saveHero = async () => {
  await api.put("/home/hero", {
    heading: heroData.heading,
    sub_heading: heroData.sub_heading,
    description: heroData.description,
    cards: heroData.cards,
  });

  setHeroModal(false);
  alert("Hero updated successfully");
};


  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#hero"
          >
            Hero Section
          </button>
        </h2>

        <div
          id="hero"
          className="accordion-collapse collapse"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Update your hero section here</p>
              <Button size="sm" onClick={() => setHeroModal(true)}>
                + Edit Hero
              </Button>
            </div>
            <hr />
            <div className="mb-3">
              <h3 className="fw-bold text-center mb-2">{heroData.heading}</h3>

              <h5 className="text-center text-primary mb-2">
                {heroData.subHeading}
              </h5>

              <p className="text-center text-muted mb-4">
                {heroData.description}
              </p>

              <div className="row g-3">
                {heroData.cards.map((card, index) => (
                  <div className="col-md-3" key={index}>
                    <div className="text-center p-3 border rounded h-100 bg-white">
                      <h6 className="fw-semibold mb-2">{card.title}</h6>
                      <p className="small text-muted mb-0">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Modal */}
      <Modal
        show={heroModal}
        onHide={() => setHeroModal(false)}
        size="lg"
        centered
        container={document.body}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Hero Section</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* MAIN HERO CONTENT */}
          <h6 className="fw-semibold mb-3">Hero Content</h6>

          <Form.Group className="mb-2">
            <Form.Label>Main Heading</Form.Label>
            <Form.Control
              value={heroData.heading}
              onChange={(e) =>
                setHeroData({ ...heroData, heading: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Sub Heading</Form.Label>
            <Form.Control
              value={heroData.subHeading}
              onChange={(e) =>
                setHeroData({ ...heroData, subHeading: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={heroData.description}
              onChange={(e) =>
                setHeroData({ ...heroData, description: e.target.value })
              }
            />
          </Form.Group>

          <hr />

          <h6 className="fw-semibold mb-3">Feature Cards</h6>

          {heroData.cards.map((card, index) => (
            <div
              key={index}
              className="border rounded p-3 mb-3 position-relative"
            >
              {/* DELETE BUTTON */}
              <button
                type="button"
                className="btn btn-sm btn-outline-danger position-absolute"
                style={{ top: 10, right: 10 }}
                onClick={() => {
                  const updatedCards = heroData.cards.filter(
                    (_, i) => i !== index
                  );
                  setHeroData({ ...heroData, cards: updatedCards });
                }}
              >
                <i className="fas fa-trash"></i>
              </button>

              <strong>Card {index + 1}</strong>

              <Form.Group className="mt-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={card.title}
                  onChange={(e) => {
                    const cards = [...heroData.cards];
                    cards[index].title = e.target.value;
                    setHeroData({ ...heroData, cards });
                  }}
                />
              </Form.Group>

              <Form.Group className="mt-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={card.description}
                  onChange={(e) => {
                    const cards = [...heroData.cards];
                    cards[index].description = e.target.value;
                    setHeroData({ ...heroData, cards });
                  }}
                />
              </Form.Group>
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setHeroModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveHero}>
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
