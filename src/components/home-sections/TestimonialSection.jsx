import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";
export default function TestimonialSection({
  testimonialData,
  setTestimonialData,
  loadTestimonials,
}) {
  if (!testimonialData) return null;
  const [testimonialModal, setTestimonialModal] = React.useState(false);
const saveTestimonials = async () => {
  try {
    const formData = new FormData();
    formData.append("heading", testimonialData.heading);
    formData.append("description", testimonialData.description);

    testimonialData.items.forEach((item, index) => {
      formData.append(`items[${index}][name]`, item.name);
      formData.append(`items[${index}][role]`, item.role);
      formData.append(`items[${index}][rating]`, item.rating);
      formData.append(`items[${index}][text]`, item.text);

      // Check if item.image is a File object (newly uploaded) 
      // or a string (existing image path from DB)
      if (item.imageFile) {
        formData.append(`items[${index}][image]`, item.imageFile);
      } else {
        formData.append(`items[${index}][image]`, item.image);
      }
    });

    await api.put("/home/testimonials", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    await loadTestimonials();
    setTestimonialModal(false);
    alert("Testimonials updated successfully!");
  } catch (error) {
    console.error("Update failed", error);
    alert("Failed to update testimonials.");
  }
};

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#testimonials"
          >
            Testimonials
          </button>
        </h2>

        <div
          id="testimonials"
          className="accordion-collapse collapse"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage testimonials Section</p>
              <Button size="sm" onClick={() => setTestimonialModal(true)}>
                Edit Testimonials
              </Button>
            </div>
            <hr />
            {/* ================= PREVIEW ================= */}
            <div className="mb-3">
              <h4 className="fw-bold text-center mb-2">
                {testimonialData.heading}
              </h4>

              <p className="text-muted text-center mb-4">
                {testimonialData.description}
              </p>

              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th width="60">S.No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Rating</th>
                    <th>Testimonial</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonialData.items.map((t, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                        src={`${import.meta.env.VITE_API_URL}${t.image}`}
                          alt={t.name}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{t.name}</td>
                      <td>{t.role}</td>
                      <td>{"⭐".repeat(t.rating)}</td>
                      <td>{t.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Modal */}
      <Modal
        show={testimonialModal}
        onHide={() => setTestimonialModal(false)}
        size="lg"
        centered
        container={document.body}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Testimonials</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* HEADING */}
          <Form.Group className="mb-3">
            <Form.Label>Heading</Form.Label>
            <Form.Control
              value={testimonialData.heading}
              onChange={(e) =>
                setTestimonialData({
                  ...testimonialData,
                  heading: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* DESCRIPTION */}
          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={testimonialData.description}
              onChange={(e) =>
                setTestimonialData({
                  ...testimonialData,
                  description: e.target.value,
                })
              }
            />
          </Form.Group>

          <hr />

          {/* TESTIMONIAL ITEMS */}
          <h6 className="fw-semibold mb-3">Testimonials</h6>

          {testimonialData.items.map((t, index) => (
            <div
              key={index}
              className="border rounded bg-light p-3 mb-3 position-relative"
            >
              {/* DELETE */}
              <button
                type="button"
                className="btn btn-sm btn-outline-danger position-absolute"
                style={{ top: 8, right: 8 }}
                onClick={() => {
                  const updated = testimonialData.items.filter(
                    (_, i) => i !== index
                  );
                  setTestimonialData({
                    ...testimonialData,
                    items: updated,
                  });
                }}
              >
                <i className="fas fa-trash"></i>
              </button>

              {/* IMAGE */}
              <Form.Group className="mb-2">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const updated = [...testimonialData.items];
                      // Store the preview URL for the UI
                      updated[index].imagePreview = URL.createObjectURL(file);
                      // Store the actual file for the API call
                      updated[index].imageFile = file; 
                      
                      setTestimonialData({
                        ...testimonialData,
                        items: updated,
                      });
                    }
                  }}
                />
              </Form.Group>

              {/* NAME */}
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={t.name}
                  onChange={(e) => {
                    const updated = [...testimonialData.items];
                    updated[index].name = e.target.value;
                    setTestimonialData({
                      ...testimonialData,
                      items: updated,
                    });
                  }}
                />
              </Form.Group>

              {/* ROLE */}
              <Form.Group className="mb-2">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  value={t.role}
                  onChange={(e) => {
                    const updated = [...testimonialData.items];
                    updated[index].role = e.target.value;
                    setTestimonialData({
                      ...testimonialData,
                      items: updated,
                    });
                  }}
                />
              </Form.Group>

              {/* RATING */}
              <Form.Group className="mb-2">
                <Form.Label>Rating (1–5)</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  max="5"
                  value={t.rating}
                  onChange={(e) => {
                    const updated = [...testimonialData.items];
                    updated[index].rating = Number(e.target.value);
                    setTestimonialData({
                      ...testimonialData,
                      items: updated,
                    });
                  }}
                />
              </Form.Group>

              {/* TEXT */}
              <Form.Group>
                <Form.Label>Testimonial Text</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={t.text}
                  onChange={(e) => {
                    const updated = [...testimonialData.items];
                    updated[index].text = e.target.value;
                    setTestimonialData({
                      ...testimonialData,
                      items: updated,
                    });
                  }}
                />
              </Form.Group>
            </div>
          ))}

          {/* ADD TESTIMONIAL */}
          <Button
            size="sm"
            variant="outline-primary"
            onClick={() =>
              setTestimonialData({
                ...testimonialData,
                items: [
                  ...testimonialData.items,
                  {
                    name: "",
                    role: "",
                    rating: 5,
                    text: "",
                    image: "",
                  },
                ],
              })
            }
          >
            + Add Testimonial
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setTestimonialModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={() => saveTestimonials()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
