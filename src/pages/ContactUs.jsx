// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";

// export default function ContactUs() {
//   const [contactModal, setContactModal] = useState(false);

//   const [contactData, setContactData] = useState({
//     phone: "+91 98765 43210",
//     email: "info@rankridge.com",
//     address:
//       "Rankridge International School,\nKPHB, Kukatpally,\nHyderabad, Telangana",
//     socials: {
//       facebook: "https://facebook.com/rankridge",
//       linkedin: "https://linkedin.com/company/rankridge",
//       instagram: "https://instagram.com/rankridge",
//       google: "https://g.page/rankridge",
//       youtube: "https://youtube.com/@rankridge",
//     },
//     mapUrl:
//       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2765518620504!2d78.39896507462926!3d17.494307099717222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916dc919441f%3A0x6a5d5866eb4a01dc!2sRANKRIDGE%20-%20IIT%20JEE%20%26%20NEET%20Long%20Term%20Coaching%20Centers%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1767959251252!5m2!1sen!2sin",
//   });
//   return (
//     <>
//       <AdminLayout>
//         <div>
//           <h5 className="fw-semibold mb-4">Contact Us</h5>
//           <Card>
//             <Card.Header>
//               <div className="d-flex justify-content-between align-items-center">
//                 <h6 className="mb-0 fw-semibold">Section1</h6>

//                 <Button size="sm" onClick={() => setContactModal(true)}>
//                   Edit Contact Details
//                 </Button>
//               </div>
//             </Card.Header>
//             <Card.Body>
//               <Card.Text>
//                 <div className="row  g-4">
//                   <div className="col-md-4">
//                     <p className="mb-2">
//                       <strong>Phone:</strong> {contactData.phone}
//                     </p>

//                     <p className="mb-2">
//                       <strong>Email:</strong> {contactData.email}
//                     </p>

//                     <p style={{ whiteSpace: "pre-line" }}>
//                       <strong>Address:</strong> {contactData.address}
//                     </p>

//                     {/* SOCIAL LINKS */}
//                     <div className="mt-3 d-flex gap-3">
//                       <a href={contactData.socials.facebook} target="_blank">
//                         Facebook
//                       </a>
//                       <a href={contactData.socials.linkedin} target="_blank">
//                         LinkedIn
//                       </a>
//                       <a href={contactData.socials.instagram} target="_blank">
//                         Instagram
//                       </a>
//                       <a href={contactData.socials.google} target="_blank">
//                         Google
//                       </a>
//                       <a href={contactData.socials.youtube} target="_blank">
//                         YouTube
//                       </a>
//                     </div>
//                   </div>

//                   {/* TEXT PREVIEW */}
//                   <div className="col-md-8">
//                     <iframe
//                       src={contactData.mapUrl}
//                       width="100%"
//                       height="350"
//                       style={{ border: 0 }}
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     ></iframe>
//                   </div>
//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>

//           <div className="text-end"></div>
//         </div>
//         <Modal
//           show={contactModal}
//           onHide={() => setContactModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Contact Details</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* PHONE */}
//             <Form.Group className="mb-3">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 value={contactData.phone}
//                 onChange={(e) =>
//                   setContactData({ ...contactData, phone: e.target.value })
//                 }
//               />
//             </Form.Group>

//             {/* EMAIL */}
//             <Form.Group className="mb-3">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={contactData.email}
//                 onChange={(e) =>
//                   setContactData({ ...contactData, email: e.target.value })
//                 }
//               />
//             </Form.Group>

//             {/* ADDRESS */}
//             <Form.Group className="mb-4">
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={contactData.address}
//                 onChange={(e) =>
//                   setContactData({ ...contactData, address: e.target.value })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* SOCIAL LINKS */}
//             <h6 className="fw-semibold mb-3">Social Media Links</h6>

//             {Object.keys(contactData.socials).map((key) => (
//               <Form.Group className="mb-2" key={key}>
//                 <Form.Label>{key.toUpperCase()}</Form.Label>
//                 <Form.Control
//                   value={contactData.socials[key]}
//                   onChange={(e) =>
//                     setContactData({
//                       ...contactData,
//                       socials: {
//                         ...contactData.socials,
//                         [key]: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </Form.Group>
//             ))}

//             <hr />

//             {/* MAP */}
//             <Form.Group>
//               <Form.Label>Google Map Embed URL</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Paste Google Maps embed iframe src URL"
//                 value={contactData.mapUrl}
//                 onChange={(e) =>
//                   setContactData({ ...contactData, mapUrl: e.target.value })
//                 }
//               />
//               <small className="text-muted">
//                 Google Maps → Share → Embed a map → Copy src URL
//               </small>
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setContactModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setContactModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </AdminLayout>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";

export default function ContactUs() {
  const [contactModal, setContactModal] = useState(false);
  const [contactData, setContactData] = useState({
    phone: "",
    email: "",
    address: "",
    socials: {
      facebook: "",
      linkedin: "",
      instagram: "",
      google: "",
      youtube: "",
    },
    mapUrl: "",
  });

  const loadContactData = async () => {
    try {
      const res = await api.get("/contact");
      const data = res.data;
      // Map flat DB fields back into our nested state structure
      setContactData({
        phone: data.phone,
        email: data.email,
        address: data.address,
        mapUrl: data.map_url,
        socials: {
          facebook: data.facebook,
          linkedin: data.linkedin,
          instagram: data.instagram,
          google: data.google,
          youtube: data.youtube,
        },
      });
    } catch (err) {
      console.error("Error loading contact data", err);
    }
  };

  useEffect(() => {
    loadContactData();
  }, []);

  const saveContact = async () => {
    try {
      // Flatten the data to match the backend controller's req.body
      const payload = {
        phone: contactData.phone,
        email: contactData.email,
        address: contactData.address,
        facebook: contactData.socials.facebook,
        linkedin: contactData.socials.linkedin,
        instagram: contactData.socials.instagram,
        google: contactData.socials.google,
        youtube: contactData.socials.youtube,
        map_url: contactData.mapUrl,
      };

      await api.put("/contact", payload);
      alert("Contact details updated successfully!");
      setContactModal(false);
      loadContactData();
    } catch (err) {
      alert("Failed to update contact details.");
    }
  };

  return (
    <AdminLayout>
      <h5 className="fw-semibold mb-4">Contact Us</h5>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0 fw-semibold">Contact Details & Map</h6>
            <Button size="sm" onClick={() => setContactModal(true)}>
              Edit Contact Details
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row g-4">
            <div className="col-md-4">
              <p className="mb-2"><strong>Phone:</strong> {contactData.phone}</p>
              <p className="mb-2"><strong>Email:</strong> {contactData.email}</p>
              <p style={{ whiteSpace: "pre-line" }}><strong>Address:</strong> {contactData.address}</p>

              <div className="mt-3 d-flex flex-wrap gap-2">
                {Object.entries(contactData.socials).map(([key, url]) => (
                  url && (
                    <a key={key} href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                  )
                ))}
              </div>
            </div>

            <div className="col-md-8">
              <iframe
                src={contactData.mapUrl}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "8px" }}
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Modal show={contactModal} onHide={() => setContactModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              value={contactData.phone} 
              onChange={(e) => setContactData({ ...contactData, phone: e.target.value })} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              value={contactData.email} 
              onChange={(e) => setContactData({ ...contactData, email: e.target.value })} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control 
              as="textarea" rows={3} 
              value={contactData.address} 
              onChange={(e) => setContactData({ ...contactData, address: e.target.value })} 
            />
          </Form.Group>

          <hr />
          <h6>Social Links</h6>
          {Object.keys(contactData.socials).map((key) => (
            <Form.Group className="mb-2" key={key}>
              <Form.Label className="small mb-0 text-uppercase">{key}</Form.Label>
              <Form.Control
                size="sm"
                value={contactData.socials[key]}
                onChange={(e) => setContactData({
                  ...contactData,
                  socials: { ...contactData.socials, [key]: e.target.value }
                })}
              />
            </Form.Group>
          ))}

          <hr />
          <Form.Group>
            <Form.Label>Google Map Embed URL (src only)</Form.Label>
            <Form.Control 
              as="textarea" rows={2} 
              value={contactData.mapUrl} 
              onChange={(e) => setContactData({ ...contactData, mapUrl: e.target.value })} 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setContactModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={saveContact}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
}