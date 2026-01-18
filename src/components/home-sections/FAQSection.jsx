import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";
export default function FAQSection({ faqData, setFaqData , loadFAQ}) {
  if (!faqData) return null;
  const [faqModal, setFaqModal] = React.useState(false);
  const saveFAQ = async () => {
  await api.put("/home/faq", {
    heading: faqData.heading,
    description: faqData.description,
    items: faqData.items,
  });
 await loadFAQ();
  setFaqModal(false);
};


  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#faq"
          >
            FAQ Section
          </button>
        </h2>

        <div
          id="faq"
          className="accordion-collapse collapse"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage FAQ Section</p>
              <Button size="sm" onClick={() => setFaqModal(true)}>
                Edit FAQ Section
              </Button>
            </div>
            <hr />
            {/* ================= PREVIEW ================= */}
            <div className="mb-3">
              <h4 className="fw-bold text-center mb-2">{faqData.heading}</h4>

              <p className="text-muted text-center mb-4">
                {faqData.description}
              </p>

              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th width="80">S.No</th>
                    <th>Question</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {faqData.items.map((faq, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{faq.question}</td>
                      <td>{faq.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Modal */}
      <Modal
        show={faqModal}
        onHide={() => setFaqModal(false)}
        size="lg"
        centered
        container={document.body}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit FAQ Section</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* HEADING */}
          <Form.Group className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control
              value={faqData.heading}
              onChange={(e) =>
                setFaqData({ ...faqData, heading: e.target.value })
              }
            />
          </Form.Group>

          {/* DESCRIPTION */}
          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={faqData.description}
              onChange={(e) =>
                setFaqData({ ...faqData, description: e.target.value })
              }
            />
          </Form.Group>

          <hr />

          {/* FAQ ITEMS */}
          <h6 className="fw-semibold mb-3">Questions & Answers</h6>

          {faqData.items.map((faq, index) => (
            <div
              key={index}
              className="border rounded bg-light p-3 mb-3 position-relative"
            >
              {/* DELETE ICON */}
              <button
                type="button"
                className="btn btn-sm btn-outline-danger position-absolute"
                style={{ top: 8, right: 8 }}
                onClick={() => {
                  const updated = faqData.items.filter((_, i) => i !== index);
                  setFaqData({ ...faqData, items: updated });
                }}
              >
                <i className="fas fa-trash"></i>
              </button>

              <Form.Group className="mb-2">
                <Form.Label>Question</Form.Label>
                <Form.Control
                  value={faq.question}
                  onChange={(e) => {
                    const updated = [...faqData.items];
                    updated[index].question = e.target.value;
                    setFaqData({ ...faqData, items: updated });
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Answer</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={faq.answer}
                  onChange={(e) => {
                    const updated = [...faqData.items];
                    updated[index].answer = e.target.value;
                    setFaqData({ ...faqData, items: updated });
                  }}
                />
              </Form.Group>
            </div>
          ))}

          {/* ADD NEW FAQ */}
          <Button
            size="sm"
            variant="outline-primary"
            onClick={() =>
              setFaqData({
                ...faqData,
                items: [...faqData.items, { question: "", answer: "" }],
              })
            }
          >
            + Add Question
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setFaqModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveFAQ}>
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
