import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function BannerSection({ sliders, setSliders, loadBanners }) {
  const [activeModal, setActiveModal] = React.useState(null);
  const [bannerFile, setBannerFile] = React.useState(null);

  const addBanner = async () => {
    if (!bannerFile) return;
  
    const formData = new FormData();
    formData.append("image", bannerFile);
  
    await api.post("/home/banners", formData);
  
    setBannerFile(null);
    setActiveModal(null);
    loadBanners(); // reload from DB
  };


  const deleteBanner = async (id) => {
    await api.delete(`/home/banners/${id}`);
    loadBanners();
  };


  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#banner"
          >
            Banner Section
          </button>
        </h2>

        <div
          id="banner"
          className="accordion-collapse collapse show"
          data-bs-parent="#homeAccordion"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0">Manage banner images</p>
              <Button size="sm" onClick={() => setActiveModal("banner")}>
                + Add Banner
              </Button>
            </div>

            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th width="80">S.No</th>
                  <th>Image Preview</th>
                  <th width="120">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sliders.map((s, i) => (
                  <tr key={s.id}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={`${import.meta.env.VITE_API_URL}${s.image}`}
                        alt="Banner"
                        style={{
                          width: 160,
                          objectFit: "cover",
                          borderRadius: 6,
                        }}
                      />
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => deleteBanner(s.id)}
                        >
                          <i className="fas fa-edit" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => deleteBanner(s.id)}
                        >
                          <i className="fas fa-trash" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Banner Modal */}
      <Modal
        show={activeModal === "banner"}
        onHide={() => setActiveModal(null)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="file"
            onChange={(e) => setBannerFile(e.target.files[0])}
          />
          <small className="text-muted">1920 × 699 required</small>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={addBanner}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
