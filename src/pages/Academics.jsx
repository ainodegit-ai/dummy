// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";


// export default function Academics() {
//   const BASE_URL = import.meta.env.VITE_API_URL;
//   const navigate = useNavigate();
//   const [academicsModal, setAcademicsModal] = useState(false);
//   const [programModal, setProgramModal] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const [academicsData, setAcademicsData] = useState(null);

//   const saveAcademics = async () => {
//     await axios.put(`${BASE_URL}/academics/section`, {
//         heading: academicsData.heading,
//         subHeading: academicsData.subHeading,
//         programs: academicsData.programs,
//     });
//     alert("Academics section updated successfully");
//     setAcademicsModal(false);
//     };
//     const loadAcademics = async () => {
//     const res =  await axios.get(`${BASE_URL}/academics/`);
//     setAcademicsData(res.data);
//     }
//     useEffect(() => {
//     loadAcademics();
//     }, []);

//     if (!academicsData) return null;


  

//   return (
//     <div>
//       <AdminLayout>
//         <h5 className="fw-semibold mb-4">Academics</h5>
//         <div className="border rounded p-4 bg-light mb-4">
//           <h4 className="fw-bold text-center">{academicsData.heading}</h4>

//           <p className="text-center text-muted mb-4">
//             {academicsData.subHeading}
//           </p>

//           <div className="row">
//             {academicsData.programs.map((program, index) => (
//               <div className="col-md-4 mb-4" key={index}>
//                 <div className="card h-100 shadow-sm">
//                   <img
//                 src={`${import.meta.env.VITE_API_URL}${program.image}`}
//                     className="card-img-top"
//                     style={{ height: 220, objectFit: "cover" }}
//                   />
//                   <div className="card-body">
//                     <h6 className="fw-semibold">{program.title}</h6>
//                     <p className="mb-2">{program.description}</p>

//                     <div className="d-flex gap-2">
//                       <Button
//                         size="sm"
//                         onClick={() => {
//                           setEditIndex(index);
//                           setProgramModal(true);
//                         }}
//                       >
//                         Edit
//                       </Button>

//                       <Button
//                         size="sm"
//                         variant="outline-danger"
//                         onClick={() =>
//                           setAcademicsData({
//                             ...academicsData,
//                             programs: academicsData.programs.filter(
//                               (_, i) => i !== index
//                             ),
//                           })
//                         }
//                       >
//                         Delete
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline-secondary"
//                         onClick={() => navigate(`/academicdetails/${index}`)}
//                       >
//                         Edit Details Page
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="d-flex justify-content-between mt-3">
//             <Button size="sm" onClick={() => setAcademicsModal(true)}>
//               Edit Section Heading
//             </Button>

//             <Button
//               size="sm"
//               variant="primary"
//               onClick={() => {
//                 setEditIndex(null);
//                 setProgramModal(true);
//               }}
//             >
//               + Add Program
//             </Button>
//           </div>
//         </div>
//         <Modal
//           show={academicsModal}
//           onHide={() => setAcademicsModal(false)}
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Academics Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Section Heading</Form.Label>
//               <Form.Control
//                 value={academicsData.heading}
//                 onChange={(e) =>
//                   setAcademicsData({
//                     ...academicsData,
//                     heading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Sub Heading</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={2}
//                 value={academicsData.subHeading}
//                 onChange={(e) =>
//                   setAcademicsData({
//                     ...academicsData,
//                     subHeading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button onClick={() => setAcademicsModal(false)}>Save</Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={programModal}
//           onHide={() => setProgramModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>
//               {editIndex !== null ? "Edit Program" : "Add Program"}
//             </Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Program Title</Form.Label>
//               <Form.Control
//                 value={
//                   editIndex !== null
//                     ? academicsData.programs[editIndex].title
//                     : ""
//                 }
//                 onChange={(e) => {
//                   const updated = [...academicsData.programs];
//                   if (editIndex !== null) {
//                     updated[editIndex].title = e.target.value;
//                   }
//                   setAcademicsData({ ...academicsData, programs: updated });
//                 }}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={
//                   editIndex !== null
//                     ? academicsData.programs[editIndex].description
//                     : ""
//                 }
//                 onChange={(e) => {
//                   const updated = [...academicsData.programs];
//                   if (editIndex !== null) {
//                     updated[editIndex].description = e.target.value;
//                   }
//                   setAcademicsData({ ...academicsData, programs: updated });
//                 }}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Program Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) => {
//                   const updated = [...academicsData.programs];
//                   const image = URL.createObjectURL(e.target.files[0]);

//                   if (editIndex !== null) {
//                     updated[editIndex].image = image;
//                   } else {
//                     updated.push({
//                       title: "",
//                       description: "",
//                       image,
//                     });
//                   }

//                   setAcademicsData({ ...academicsData, programs: updated });
//                 }}
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button
//               onClick={() => {
//                 setProgramModal(false);
//                 setEditIndex(null);
//               }}
//             >
//               Save
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </AdminLayout>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import AdminLayout from "../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig"; // Using your api config

export default function Academics() {
  const [academicsModal, setAcademicsModal] = useState(false);
  const [programModal, setProgramModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [academicsData, setAcademicsData] = useState(null);
  const navigate = useNavigate();

  const loadAcademics = async () => {
    const res = await api.get("/academics");
    setAcademicsData(res.data);
  };

  useEffect(() => { loadAcademics(); }, []);

  // Save Heading & Subheading (JSON)
  const saveAcademicsHeading = async () => {
    await api.put("/academics/section", {
      heading: academicsData.heading,
      subHeading: academicsData.subHeading,
    });
    setAcademicsModal(false);
    loadAcademics();
  };

  // Add or Update Program (FormData)
  const handleProgramSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const program = editIndex !== null ? academicsData.programs[editIndex] : academicsData.tempProgram;

    formData.append("title", program.title);
    formData.append("description", program.description);
    if (program.imageFile) {
      formData.append("image", program.imageFile);
    }

    if (editIndex !== null) {
      await api.put(`/academics/program/${program.id}`, formData);
    } else {
      await api.post("/academics/program", formData);
    }

    setProgramModal(false);
    setEditIndex(null);
    loadAcademics();
  };

  const deleteProgram = async (id) => {
    if (window.confirm("Delete this program?")) {
      await api.delete(`/academics/program/${id}`);
      loadAcademics();
    }
  };

  if (!academicsData) return null;

  return (
    <AdminLayout>
      <h5 className="fw-semibold mb-4">Academics</h5>
      <div className="border rounded p-4 bg-light mb-4 text-center">
        <h4 className="fw-bold">{academicsData.heading}</h4>
        <p className="text-muted">{academicsData.subHeading}</p>
        <Button size="sm" onClick={() => setAcademicsModal(true)}>Edit Header</Button>
        <Button size="sm" variant="primary" className="ms-2" onClick={() => {
          setEditIndex(null);
          setAcademicsData({...academicsData, tempProgram: {title: '', description: ''}});
          setProgramModal(true);
        }}>+ Add Program</Button>
      </div>

      <div className="row">
        {academicsData.programs.map((program, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Img variant="top" src={`${import.meta.env.VITE_API_URL}${program.image}`} style={{ height: 200, objectFit: "cover" }} />
              <Card.Body>
                <h6 className="fw-bold">{program.title}</h6>
                <p className="small">{program.description}</p>
                <div className="d-flex justify-content-center gap-2">
                  <Button size="sm" onClick={() => { setEditIndex(index); setProgramModal(true); }}>Edit</Button>
                  <Button size="sm" variant="outline-danger" onClick={() => deleteProgram(program.id)}>Delete</Button>
                  <Button size="sm" variant="outline-secondary" onClick={() => navigate(`/academicdetails/${program.id}`)}>Edit Details Page</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* MODAL: SECTION HEADING */}
      <Modal show={academicsModal} onHide={() => setAcademicsModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Edit Header</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Heading</Form.Label>
            <Form.Control value={academicsData.heading} onChange={(e) => setAcademicsData({...academicsData, heading: e.target.value})} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sub Heading</Form.Label>
            <Form.Control as="textarea" value={academicsData.subHeading} onChange={(e) => setAcademicsData({...academicsData, subHeading: e.target.value})} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer><Button onClick={saveAcademicsHeading}>Save</Button></Modal.Footer>
      </Modal>

      {/* MODAL: ADD/EDIT PROGRAM */}
      <Modal show={programModal} onHide={() => setProgramModal(false)} size="lg" centered>
        <Form onSubmit={handleProgramSubmit}>
          <Modal.Header closeButton><Modal.Title>{editIndex !== null ? "Edit" : "Add"} Program</Modal.Title></Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                required
                value={editIndex !== null ? academicsData.programs[editIndex].title : academicsData.tempProgram?.title || ""} 
                onChange={(e) => {
                  const val = e.target.value;
                  if(editIndex !== null) {
                    const upd = [...academicsData.programs]; upd[editIndex].title = val; setAcademicsData({...academicsData, programs: upd});
                  } else {
                    setAcademicsData({...academicsData, tempProgram: {...academicsData.tempProgram, title: val}});
                  }
                }} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
                value={editIndex !== null ? academicsData.programs[editIndex].description : academicsData.tempProgram?.description || ""} 
                onChange={(e) => {
                  const val = e.target.value;
                  if(editIndex !== null) {
                    const upd = [...academicsData.programs]; upd[editIndex].description = val; setAcademicsData({...academicsData, programs: upd});
                  } else {
                    setAcademicsData({...academicsData, tempProgram: {...academicsData.tempProgram, description: val}});
                  }
                }} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => {
                  const file = e.target.files[0];
                  if(!file) return;
                  if(editIndex !== null) {
                    const upd = [...academicsData.programs]; 
                    upd[editIndex].imageFile = file; 
                    upd[editIndex].preview = URL.createObjectURL(file);
                    setAcademicsData({...academicsData, programs: upd});
                  } else {
                    setAcademicsData({...academicsData, tempProgram: {...academicsData.tempProgram, imageFile: file, preview: URL.createObjectURL(file)}});
                  }
              }} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer><Button type="submit">Save Program</Button></Modal.Footer>
        </Form>
      </Modal>
    </AdminLayout>
  );
}