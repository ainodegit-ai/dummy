// import React, { useState } from "react";
// import { Button, Modal, Form, Card } from "react-bootstrap";
// import AdminLayout from "../components/AdminLayout";

// export default function StudentLife() {
//   const [studentLifeModal, setStudentLifeModal] = useState(false);
//   const [activityModal, setActivityModal] = useState(false);
//   const [studentLifeData, setStudentLifeData] = useState({
//     heading: "Empowering Students for Success at Rankridge Schools",
//     subHeading: "Life Beyond Books: Learn, Create & Inspire at Rankridge.",
//     image: "/assets/abtimg.jpg",
//     contentTitle: "School Life That Inspires",
//     description:
//       "At Rankridge Schools, students are at the heart of every decision we make. We believe each child is unique, with their own talents and dreams, and our role is to provide the right environment for them to grow with confidence. From the early years to Grade 12, students experience learning that goes beyond books, with opportunities in arts, sports, science, technology, and leadership. As they progress, we guide them with care, balancing academic strength with creativity, teamwork, and values. From middle school, students also receive early support for competitive readiness in a way that feels natural and stress-free. Every classroom is designed to encourage participation, curiosity, and problem-solving. At Rankridge, being a student means more than studying — it means discovering yourself, building friendships, and preparing for life.",
//   });
//   const [activityData, setActivityData] = useState({
//     heading: "Growing, Exploring & Leading at Rankridge",
//     description:
//       "We believe learning happens everywhere. Our vibrant student life includes extracurriculars, sports, and leadership opportunities that empower every learner.",
//     items: [
//       {
//         title: "Vedic Maths",
//         description:
//           "Helps children enjoy maths with confidence through faster, smarter calculation techniques.",
//         icon: "/assets/abacus_maths.png",
//       },
//       {
//         title: "Abacus Maths",
//         description:
//           "Sharpens focus and memory while boosting mental arithmetic and concentration.",
//         icon: "/assets/abacus_maths.png",
//       },
//       {
//         title: "Creative Arts",
//         description:
//           "Lets children express themselves freely through colours, music and imagination.",
//         icon: "/assets/abacus_maths.png",
//       },
//       {
//         title: "Sports & Fitness",
//         description:
//           "Builds strength, discipline and teamwork while keeping children active and confident.",
//         icon: "/assets/abacus_maths.png",
//       },
//       {
//         title: "Community Service",
//         description:
//           "Builds empathy and gratitude while inspiring children to make a positive difference.",
//         icon: "/assets/abacus_maths.png",
//       },
//       {
//         title: "Clubs & Activities",
//         description:
//           "Helps children discover their strengths, make friends and grow in communication.",
//         icon: "/assets/abacus_maths.png",
//       },
//     ],
//   });
//   return (
//     <div>
//       <AdminLayout>
//         <h5 className="fw-semibold mb-4">Student Life</h5>
//         <div className="border rounded p-4 bg-light mb-4">
//           <h4 className="fw-bold text-center">{studentLifeData.heading}</h4>

//           <p className="text-center text-muted mb-4">
//             {studentLifeData.subHeading}
//           </p>

//           <div className="row align-items-center">
//             <div className="col-md-3">
//               <img
//                 src={studentLifeData.image}
//                 alt="Student Life"
//                 className="img-fluid rounded"
//               />
//             </div>

//             <div className="col-md-9">
//               <h5 className="fw-semibold">{studentLifeData.contentTitle}</h5>
//               <p>{studentLifeData.description}</p>
//               <div className="mt-3">
//                 <Button size="sm" onClick={() => setStudentLifeModal(true)}>
//                   Edit Student Life Section
//                 </Button>
//               </div>
//             </div>
//           </div>
//           <hr></hr>
//           <div className="mb-3">
//             <h4 className="fw-bold text-center mb-2">{activityData.heading}</h4>

//             <p className="text-muted text-center mb-4">
//               {activityData.description}
//             </p>

//             <div className="row g-3">
//               {activityData.items.map((item, index) => (
//                 <div className="col-md-4" key={index}>
//                   <div className="h-100 bg-white border rounded p-3 text-center">
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       style={{
//                         width: 48,
//                         height: 48,
//                         objectFit: "contain",
//                       }}
//                       className="mb-3"
//                     />
//                     <h6 className="fw-semibold">{item.title}</h6>
//                     <p className="small text-muted mb-0">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-3 text-center">
//               <Button size="sm" onClick={() => setActivityModal(true)}>
//                 Edit Skill Section
//               </Button>
//             </div>
//           </div>
//         </div>
//         <Modal
//           show={activityModal}
//           onHide={() => setActivityModal(false)}
//           size="lg"
//           centered
//           container={document.body}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Activity & Skill Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             {/* HEADING */}
//             <Form.Group className="mb-3">
//               <Form.Label>Heading</Form.Label>
//               <Form.Control
//                 value={activityData.heading}
//                 onChange={(e) =>
//                   setActivityData({
//                     ...activityData,
//                     heading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             {/* DESCRIPTION */}
//             <Form.Group className="mb-4">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 value={activityData.description}
//                 onChange={(e) =>
//                   setActivityData({
//                     ...activityData,
//                     description: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <hr />

//             {/* ITEMS */}
//             <h6 className="fw-semibold mb-3">Activities</h6>

//             {activityData.items.map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded bg-light p-3 mb-3 position-relative"
//               >
//                 {/* DELETE ICON */}
//                 <button
//                   type="button"
//                   className="btn btn-sm btn-outline-danger position-absolute"
//                   style={{ top: 8, right: 8 }}
//                   onClick={() => {
//                     const updated = activityData.items.filter(
//                       (_, i) => i !== index
//                     );
//                     setActivityData({ ...activityData, items: updated });
//                   }}
//                 >
//                   <i className="fas fa-trash"></i>
//                 </button>

//                 {/* ICON */}
//                 <Form.Group className="mb-2">
//                   <Form.Label>Icon Image</Form.Label>
//                   <Form.Control
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => {
//                       if (e.target.files[0]) {
//                         const updated = [...activityData.items];
//                         updated[index].icon = URL.createObjectURL(
//                           e.target.files[0]
//                         );
//                         setActivityData({ ...activityData, items: updated });
//                       }
//                     }}
//                   />
//                 </Form.Group>

//                 {/* TITLE */}
//                 <Form.Group className="mb-2">
//                   <Form.Label>Title</Form.Label>
//                   <Form.Control
//                     value={item.title}
//                     onChange={(e) => {
//                       const updated = [...activityData.items];
//                       updated[index].title = e.target.value;
//                       setActivityData({ ...activityData, items: updated });
//                     }}
//                   />
//                 </Form.Group>

//                 {/* DESCRIPTION */}
//                 <Form.Group>
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={2}
//                     value={item.description}
//                     onChange={(e) => {
//                       const updated = [...activityData.items];
//                       updated[index].description = e.target.value;
//                       setActivityData({ ...activityData, items: updated });
//                     }}
//                   />
//                 </Form.Group>
//               </div>
//             ))}

//             {/* ADD ITEM */}
//             <Button
//               size="sm"
//               variant="outline-primary"
//               onClick={() =>
//                 setActivityData({
//                   ...activityData,
//                   items: [
//                     ...activityData.items,
//                     {
//                       title: "",
//                       description: "",
//                       icon: "",
//                     },
//                   ],
//                 })
//               }
//             >
//               + Add Activity
//             </Button>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setActivityModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="primary" onClick={() => setActivityModal(false)}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <Modal
//           show={studentLifeModal}
//           onHide={() => setStudentLifeModal(false)}
//           size="lg"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Edit Student Life Section</Modal.Title>
//           </Modal.Header>

//           <Modal.Body>
//             <Form.Group className="mb-3">
//               <Form.Label>Main Heading</Form.Label>
//               <Form.Control
//                 value={studentLifeData.heading}
//                 onChange={(e) =>
//                   setStudentLifeData({
//                     ...studentLifeData,
//                     heading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Sub Heading</Form.Label>
//               <Form.Control
//                 value={studentLifeData.subHeading}
//                 onChange={(e) =>
//                   setStudentLifeData({
//                     ...studentLifeData,
//                     subHeading: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Section Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) =>
//                   setStudentLifeData({
//                     ...studentLifeData,
//                     image: URL.createObjectURL(e.target.files[0]),
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Content Title</Form.Label>
//               <Form.Control
//                 value={studentLifeData.contentTitle}
//                 onChange={(e) =>
//                   setStudentLifeData({
//                     ...studentLifeData,
//                     contentTitle: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 value={studentLifeData.description}
//                 onChange={(e) =>
//                   setStudentLifeData({
//                     ...studentLifeData,
//                     description: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//           </Modal.Body>

//           <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => setStudentLifeModal(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="primary"
//               onClick={() => setStudentLifeModal(false)}
//             >
//               Save Changes
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
import api from "../api/axiosConfig";

export default function StudentLife() {
    const [studentLifeModal, setStudentLifeModal] = useState(false);
    const [activityModal, setActivityModal] = useState(false);
    
    // Separate states to match your 3-table/query database structure
    const [mainData, setMainData] = useState(null);
    const [activityData, setActivityData] = useState({ heading: "", description: "", items: [] });

    const loadData = async () => {
        try {
            const res = await api.get("/studentlife");
            // 1. Set the top Hero/Intro data
            setMainData(res.data.main);
            
            // 2. Set the Activities section header AND the array of items
            setActivityData({
                heading: res.data.activitySection?.heading || "",
                description: res.data.activitySection?.description || "",
                items: res.data.activities || []
            });
        } catch (err) {
            console.error("Failed to load data", err);
        }
    };

    useEffect(() => { loadData(); }, []);

    // 1️⃣ Save Main Section (Heading, SubHeading, Content Title, Image)
    const saveMain = async () => {
        const formData = new FormData();
        formData.append("heading", mainData.heading);
        formData.append("sub_heading", mainData.sub_heading);
        formData.append("content_title", mainData.content_title);
        formData.append("description", mainData.description);
        
        if (mainData.imageFile) {
            formData.append("image", mainData.imageFile);
        }

        await api.put("/studentlife/main", formData, { 
            headers: { "Content-Type": "multipart/form-data" } 
        });
        setStudentLifeModal(false);
        loadData();
        alert("Main section updated!");
    };

    // 2️⃣ Save Activities & Skills (Header + Nested Array + Icons)
    const saveActivities = async () => {
        try {
            const formData = new FormData();
            
            // Parent section fields (heading and description for the skills area)
            formData.append("heading", activityData.heading);
            formData.append("description", activityData.description);

            // Pass the items list as JSON string
            const itemsJson = activityData.items.map(item => ({ 
                title: item.title, 
                description: item.description, 
                icon: item.icon 
            }));
            formData.append("items", JSON.stringify(itemsJson));

            // Append actual binary files
            activityData.items.forEach((item, index) => {
                if (item.file) {
                    formData.append(`items[${index}][icon]`, item.file);
                }
            });

            await api.put("/studentlife/activities", formData, { 
                headers: { "Content-Type": "multipart/form-data" } 
            });

            setActivityModal(false);
            loadData();
            alert("Activities and Skills updated successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to save activities.");
        }
    };

    if (!mainData) return <AdminLayout>Loading...</AdminLayout>;

    return (
        <AdminLayout>
            <h5 className="fw-semibold mb-4">Student Life Management</h5>
            
            {/* PREVIEW: MAIN SECTION */}
            <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Intro Section</h6>
                    <Button size="sm" onClick={() => setStudentLifeModal(true)}>Edit Intro</Button>
                </Card.Header>
                <Card.Body>
                    <h4 className="fw-bold text-center">{mainData.heading}</h4>
                    <p className="text-center text-muted mb-4">{mainData.sub_heading}</p>
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={`${import.meta.env.VITE_API_URL}${mainData.image}`} className="img-fluid rounded border" alt="" />
                        </div>
                        <div className="col-md-9">
                            <h5 className="fw-semibold">{mainData.content_title}</h5>
                            <p>{mainData.description}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            {/* PREVIEW: ACTIVITIES & SKILLS */}
            <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">Activities & Skills Section</h6>
                    <Button size="sm" onClick={() => setActivityModal(true)}>Edit Skills Section</Button>
                </Card.Header>
                <Card.Body>
                    {/* These are the new fields from the activity_section table */}
                    <h4 className="fw-bold text-center mb-2">{activityData.heading}</h4>
                    <p className="text-muted text-center mb-4">{activityData.description}</p>

                    <div className="row g-3">
                        {activityData.items.map((item, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="p-3 border rounded text-center h-100 bg-white shadow-sm">
                                    <img 
                                        src={`${import.meta.env.VITE_API_URL}${item.icon}`} 
                                        style={{width: '48px', height: '48px', objectFit: 'contain'}} 
                                        alt="" className="mb-2" 
                                    />
                                    <h6 className="fw-bold">{item.title}</h6>
                                    <p className="small text-muted mb-0">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card.Body>
            </Card>

            {/* MODAL: MAIN SECTION */}
            <Modal show={studentLifeModal} onHide={() => setStudentLifeModal(false)} size="lg" centered>
                <Modal.Header closeButton><Modal.Title>Edit Intro Section</Modal.Title></Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Main Image</Form.Label>
                        <Form.Control type="file" onChange={(e) => setMainData({...mainData, imageFile: e.target.files[0]})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Main Heading</Form.Label>
                        <Form.Control value={mainData.heading} onChange={(e) => setMainData({...mainData, heading: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Sub Heading</Form.Label>
                        <Form.Control value={mainData.sub_heading} onChange={(e) => setMainData({...mainData, sub_heading: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Content Title</Form.Label>
                        <Form.Control value={mainData.content_title} onChange={(e) => setMainData({...mainData, content_title: e.target.value})} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5} value={mainData.description} onChange={(e) => setMainData({...mainData, description: e.target.value})} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer><Button onClick={saveMain}>Save Changes</Button></Modal.Footer>
            </Modal>

            {/* MODAL: ACTIVITIES */}
            <Modal show={activityModal} onHide={() => setActivityModal(false)} size="lg" centered>
                <Modal.Header closeButton><Modal.Title>Edit Activities & Skills</Modal.Title></Modal.Header>
                <Modal.Body style={{maxHeight: '60vh', overflowY: 'auto'}}>
                    {/* Header Fields for the Skills Section */}
                    <Form.Group className="mb-3">
                        <Form.Label>Section Heading</Form.Label>
                        <Form.Control 
                            value={activityData.heading} 
                            onChange={(e) => setActivityData({...activityData, heading: e.target.value})} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Section Description</Form.Label>
                        <Form.Control 
                            as="textarea" rows={2} 
                            value={activityData.description} 
                            onChange={(e) => setActivityData({...activityData, description: e.target.value})} 
                        />
                    </Form.Group>
                    
                    <hr />
                    <h6>Activity Cards</h6>
                    {activityData.items.map((item, idx) => (
                        <div key={idx} className="border p-3 rounded mb-3 bg-light position-relative">
                            <Button variant="danger" size="sm" className="position-absolute" style={{top: 10, right: 10}} 
                                onClick={() => {
                                    const upd = activityData.items.filter((_, i) => i !== idx);
                                    setActivityData({...activityData, items: upd});
                                }}>X</Button>
                            
                            <Form.Group className="mb-2">
                                <Form.Label className="small">Icon</Form.Label>
                                <Form.Control type="file" onChange={(e) => {
                                    const updItems = [...activityData.items]; 
                                    updItems[idx].file = e.target.files[0]; 
                                    setActivityData({...activityData, items: updItems});
                                }} />
                            </Form.Group>

                            <Form.Control className="mb-2" placeholder="Activity Title" value={item.title} onChange={(e) => {
                                const updItems = [...activityData.items]; updItems[idx].title = e.target.value; setActivityData({...activityData, items: updItems});
                            }} />

                            <Form.Control as="textarea" rows={2} placeholder="Description" value={item.description} onChange={(e) => {
                                const updItems = [...activityData.items]; updItems[idx].description = e.target.value; setActivityData({...activityData, items: updItems});
                            }} />
                        </div>
                    ))}
                    <Button variant="outline-primary" onClick={() => setActivityData({...activityData, items: [...activityData.items, {title: '', description: '', icon: ''}]})}>+ Add New Activity</Button>
                </Modal.Body>
                <Modal.Footer><Button onClick={saveActivities}>Save All Activities</Button></Modal.Footer>
            </Modal>
        </AdminLayout>
    );
}