import React, { useState, useEffect } from "react";
import api from "../../api/axiosConfig";
import "./TrendingStyles.css";

const TrendingServices = () => {
  const types = [
    { id: "homas", name: "Homa" },
    { id: "muhurta", name: "Muhurta" },
    { id: "vastu", name: "Vastu" }
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [services, setServices] = useState([]);
  const [trending, setTrending] = useState([]);

  // LOAD TRENDING PROPERLY (full objects)
  const fetchTrending = async () => {
    try {
      const res = await api.get("/trending");
      setTrending(res.data); // store full objects
    } catch (err) {
      console.error("Error fetching trending:", err);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  // Fetch services from backend
  const fetchServices = async (type) => {
    try {
      const res = await api.get(`/${type}`);
      setServices(res.data);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
    fetchServices(type.id);
  };

  // Check if service is trending
  const isTrending = (serviceId) => {
    return trending.some(
      (t) => t.service_id === serviceId && t.service_type === selectedType.id
    );
  };

  // Toggle Trending
  const toggleTrending = (serviceId) => {
    if (isTrending(serviceId)) {
      // remove
      setTrending((prev) =>
        prev.filter(
          (t) =>
            !(t.service_id === serviceId && t.service_type === selectedType.id)
        )
      );
    } else {
      // add
      setTrending((prev) => [
        ...prev,
        { service_id: serviceId, service_type: selectedType.id }
      ]);
    }
  };

  // SAVE TRENDING (backend expects {items: [...]})
  // const saveTrending = async () => {
  //   try {
  //     await api.post("/trending/save", { items: trending });
  //     alert("Trending services updated!");
  //   } catch (err) {
  //     console.log(err);
  //     alert("Failed to save trending.");
  //   }
  // };

  const saveTrending = async () => {
  try {
    const token = localStorage.getItem("adminToken"); // OR "adminToken"

    await api.post(
      "/trending/save",
      { items: trending },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Trending services updated!");
  } catch (err) {
    console.log("Save Trending Error:", err);
    alert("Failed to save trending.");
  }
};


  return (
    <div className="trending-card">
      <h4 className="title">Trending Services</h4>

      {/* Custom Dropdown */}
      <div className="dropdown-section">
        <div
          className="dropdown-box"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="dropdown-header">
            {selectedType ? selectedType.name : "-- Select Service Type --"}
            <span>{isDropdownOpen ? "▲" : "▼"}</span>
          </div>

          <div className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
            {types.map((type) => (
              <div
                key={type.id}
                className="dropdown-item"
                onClick={() => handleSelectType(type)}
              >
                {type.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {!selectedType && (
        <p className="text-muted">Please select a service type.</p>
      )}

      {selectedType && (
        <div
          className="table-responsive mt-3"
          style={{ maxHeight: "350px", overflowY: "auto" }}
        >
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Trending</th>
                <th>Service Name</th>
                <th>ID</th>
              </tr>
            </thead>

            <tbody>
              {services.map((s) => (
                <tr key={s.id}>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={isTrending(s.id)}
                      onChange={() => toggleTrending(s.id)}
                    />
                  </td>
                  <td>{s.title || s.name}</td>
                  <td>{s.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedType && (
        <button className="btn-save" onClick={saveTrending}>
          Save Trending
        </button>
      )}
    </div>
  );
};

export default TrendingServices;





// import React, { useState, useEffect } from "react";
// import api from "../../api/axiosConfig";
// import "./TrendingStyles.css";

// const TrendingServices = () => {
//   const types = [
//     { id: "homas", name: "Homa" },
//     { id: "muhurta", name: "Muhurta" },
//     { id: "vastu", name: "Vastu" }
//   ];

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState(null);
//   const [services, setServices] = useState([]);
//   const [trending, setTrending] = useState([]);

//   // Fetch trending from backend
//   const fetchTrending = async () => {
//     try {
//       const res = await api.get("/trending");
//       setTrending(res.data.map((s) => s.service_id));
//     } catch (err) {
//       console.error("Error fetching trending:", err);
//     }
//   };

//   useEffect(() => {
//     fetchTrending();
//   }, []);

//   // Fetch services based on selected type
//   const fetchServices = async (type) => {
//     try {
//       const res = await api.get(`/${type}`);
//       setServices(res.data);
//     } catch (err) {
//       console.error("Error fetching services:", err);
//     }
//   };

//   // Select Type (Custom dropdown)
//   const handleSelectType = (type) => {
//     setSelectedType(type);
//     setIsDropdownOpen(false);
//     fetchServices(type.id);
//   };

//   // Toggle Trending
//   const toggleTrending = (id) => {
//     setTrending((prev) =>
//       prev.includes(id)
//         ? prev.filter((t) => t !== id)
//         : [...prev, id]
//     );
//   };

//   // Save trending
//   const saveTrending = async () => {
//     try {
//       await api.post("/trending/save", { services: trending });
//       alert("Trending services updated!");
//     } catch (err) {
//       alert("Failed to save trending.");
//     }
//   };

//   return (
//     <div className="trending-card">
//       <h4 className="title">Trending Services</h4>

//       {/* Custom Dropdown */}
//       <div className="dropdown-section">
//         <div
//           className="dropdown-box"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         >
//           <div className="dropdown-header">
//             {selectedType ? selectedType.name : "-- Select Service Type --"}
//             <span>{isDropdownOpen ? "▲" : "▼"}</span>
//           </div>

//           <div className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
//             {types.map((type) => (
//               <div
//                 key={type.id}
//                 className="dropdown-item"
//                 onClick={() => handleSelectType(type)}
//               >
//                 {type.name}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* If no type selected */}
//       {!selectedType && (
//         <p className="text-muted">Please select a service type.</p>
//       )}

//       {/* Services Table */}
//       {selectedType && (
//         <div className="table-responsive mt-3" style={{ maxHeight: "350px", overflowY: "auto" }}>
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th style={{ width: "80px" }}>Trending</th>
//                 <th>Service Name</th>
//                 <th style={{ width: "100px" }}>ID</th>
//               </tr>
//             </thead>

//             <tbody>
//               {services.map((s) => (
//                 <tr key={s.id}>
//                   <td className="text-center">
//                     <input
//                       type="checkbox"
//                       checked={trending.includes(s.id)}
//                       onChange={() => toggleTrending(s.id)}
//                     />
//                   </td>

//                   <td>{s.title || s.name}</td>
//                   <td>{s.id}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedType && (
//         <button className="btn-save" onClick={saveTrending}>
//           Save Trending
//         </button>
//       )}
//     </div>
//   );
// };

// export default TrendingServices;





// import React, { useEffect, useState } from "react";
// import api from "../../api/axiosConfig";
// import "./TrendingStyles.css"; // optional for smooth UI styling

// export default function TrendingServices() {
//   const [homas, setHomas] = useState([]);
//   const [muhurta, setMuhurta] = useState([]);
//   const [vastu, setVastu] = useState([]);
//   const [selectedTrending, setSelectedTrending] = useState([]);

//   const [open, setOpen] = useState({
//     homa: false,
//     muhurta: false,
//     vastu: false,
//   });

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const h = await api.get("/homas");
//         const m = await api.get("/muhurta");
//         const v = await api.get("/vastu");

//         setHomas(h.data);
//         setMuhurta(m.data);
//         setVastu(v.data);
//       } catch (err) {
//         console.error("Service load error:", err);
//         alert("Failed to load services");
//       }
//     };

//     load();
//   }, []);

//   useEffect(() => {
//     const get = async () => {
//       try {
//         const res = await api.get("/trending");
//         const ids = res.data.map((item) => item.service_id);
//         setSelectedTrending(ids);
//       } catch (err) {
//         console.error("Trending load error:", err);
//       }
//     };

//     get();
//   }, []);

//   const toggleTrending = (id) => {
//     setSelectedTrending((prev) =>
//       prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : [...prev, id]
//     );
//   };

//   const saveTrending = async () => {
//     const items = [
//       ...homas.map((x) => ({ id: x.id, type: "homa" })),
//       ...muhurta.map((x) => ({ id: x.id, type: "muhurta" })),
//       ...vastu.map((x) => ({ id: x.id, type: "vastu" })),
//     ]
//       .filter((x) => selectedTrending.includes(x.id))
//       .map((x) => ({
//         service_id: x.id,
//         service_type: x.type,
//       }));

//     try {
//       await api.post(
//         "/trending/save",
//         { items },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
//           },
//         }
//       );

//       alert("Trending services updated!");
//     } catch (err) {
//       console.error("Save trending error:", err);
//       alert("Failed to save trending");
//     }
//   };

//   const toggleDropdown = (category) => {
//     setOpen((prev) => ({ ...prev, [category]: !prev[category] }));
//   };

//   const renderList = (list, type) => (
//     <div
//       className={`dropdown-content ${open[type] ? "open" : ""}`}
//     >
//       {list.map((item) => (
//         <div
//           key={`${type}-${item.id}`}
//           className="dropdown-item d-flex justify-content-between"
//         >
//           <span>{item.name}</span>
//           <input
//             type="checkbox"
//             checked={selectedTrending.includes(item.id)}
//             onChange={() => toggleTrending(item.id)}
//           />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="trending-card">
//       <h4 className="title">Trending Services</h4>

//       <div className="dropdown-section">
//         {/* HOMA */}
//         <div className="dropdown-box">
//           <div
//             className="dropdown-header"
//             onClick={() => toggleDropdown("homa")}
//           >
//             <span> Homas</span>
//             <span>{open.homa ? "▲" : "▼"}</span>
//           </div>
//           {renderList(homas, "homa")}
//         </div>

//         {/* MUHURTA */}
//         <div className="dropdown-box">
//           <div
//             className="dropdown-header"
//             onClick={() => toggleDropdown("muhurta")}
//           >
//             <span> Muhurta</span>
//             <span>{open.muhurta ? "▲" : "▼"}</span>
//           </div>
//           {renderList(muhurta, "muhurta")}
//         </div>

//         {/* VASTU */}
//         <div className="dropdown-box">
//           <div
//             className="dropdown-header"
//             onClick={() => toggleDropdown("vastu")}
//           >
//             <span> Vastu</span>
//             <span>{open.vastu ? "▲" : "▼"}</span>
//           </div>
//           {renderList(vastu, "vastu")}
//         </div>
//       </div>

//       <button className="btn-save" onClick={saveTrending}>
//         Save Trending
//       </button>
//     </div>
//   );
// }
