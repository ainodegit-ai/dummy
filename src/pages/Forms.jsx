// import AdminLayout from "../components/AdminLayout";

// export default function Forms() {
//   return (
//     <AdminLayout>
//       <h2>Forms</h2>
//       <p>Coming Soon...</p>
//     </AdminLayout>
//   );
// }

// import React, { useEffect, useState } from "react";
// import AdminLayout from "../components/AdminLayout";
// import axios from "axios";

// export default function Forms() {
//   const [forms, setForms] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedExtra, setSelectedExtra] = useState(null);

//   const [search, setSearch] = useState("");
//   const [filterService, setFilterService] = useState("all");
//   const [filterPaid, setFilterPaid] = useState("all");

//   // Load all forms
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/forms/all");
//         setForms(res.data);
//         setFiltered(res.data);
//       } catch (err) {
//         console.error("Failed to load forms:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   // Format date
//   const formatDate = (date) =>
//     new Date(date).toLocaleString("en-IN", {
//       dateStyle: "medium",
//       timeStyle: "short",
//     });

//   // FILTER + SEARCH LOGIC
//   useEffect(() => {
//     let data = [...forms];

//     // Filter by service
//     if (filterService !== "all") {
//       data = data.filter((f) => f.service_type === filterService);
//     }

//     // Filter by paid/unpaid
//     if (filterPaid !== "all") {
//       data = data.filter((f) =>
//         filterPaid === "paid" ? f.paid === 1 : f.paid === 0
//       );
//     }

//     // Search (name, email, phone, service type)
//     if (search.trim() !== "") {
//       const s = search.toLowerCase();
//       data = data.filter(
//         (f) =>
//           f.name?.toLowerCase().includes(s) ||
//           f.email?.toLowerCase().includes(s) ||
//           f.phone?.toLowerCase().includes(s) ||
//           f.service_type?.toLowerCase().includes(s)
//       );
//     }

//     setFiltered(data);
//   }, [search, filterService, filterPaid, forms]);

//   return (
//     <AdminLayout>
//       <h2 className="mb-3">User Forms</h2>

//       {/* FILTERS + SEARCH BAR */}
//       <div className="card p-3 mb-3">
//         <div className="row g-3">

//           {/* Search */}
//           <div className="col-md-4">
//             <input
//               className="form-control"
//               placeholder="Search name, phone, email, service..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Service Type Filter */}
//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={filterService}
//               onChange={(e) => setFilterService(e.target.value)}
//             >
//               <option value="all">All Services</option>
//               <option value="homa">Homa</option>
//               <option value="muhurta">Muhurta</option>
//               <option value="vastu">Vastu</option>
//               <option value="marriage">Marriage Matching</option>
//               <option value="astrology">Astrology</option>
//             </select>
//           </div>

//           {/* Paid Filter */}
//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={filterPaid}
//               onChange={(e) => setFilterPaid(e.target.value)}
//             >
//               <option value="all">All Payments</option>
//               <option value="paid">Paid</option>
//               <option value="unpaid">Unpaid</option>
//             </select>
//           </div>

//         </div>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-muted">No forms found.</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-bordered table-hover align-middle">
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>User ID</th>
//                 <th>Name</th>
//                 <th>Service</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Paid</th>
//                 <th>Date</th>
//                 <th>Extra</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filtered.map((f) => (
//                 <tr key={f.id}>
//                   <td>{f.id}</td>
//                   <td>{f.user_id || "—"}</td>
//                   <td>{f.name}</td>
//                   <td className="text-capitalize">{f.service_type}</td>
//                   <td>{f.email || "—"}</td>
//                   <td>{f.phone || "—"}</td>
//                   <td>
//                     {f.paid ? (
//                       <span className="badge bg-success">Paid</span>
//                     ) : (
//                       <span className="badge bg-warning text-dark">
//                         Not Paid
//                       </span>
//                     )}
//                   </td>
//                   <td>{formatDate(f.created_at)}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-info"
//                       onClick={() => setSelectedExtra(f.extra)}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       )}

//       {/* JSON EXTRA MODAL */}
//       {selectedExtra && (
//         <div
//           className="modal fade show"
//           style={{
//             display: "block",
//             background: "rgba(0,0,0,0.5)",
//           }}
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content">

//               <div className="modal-header">
//                 <h5 className="modal-title">Form Extra Details</h5>
//                 <button
//                   className="btn-close"
//                   onClick={() => setSelectedExtra(null)}
//                 ></button>
//               </div>

//               <div className="modal-body">
//                 <pre style={{ whiteSpace: "pre-wrap" }}>
//                   {JSON.stringify(JSON.parse(selectedExtra), null, 2)}
//                 </pre>
//               </div>

//               <div className="modal-footer">
//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => setSelectedExtra(null)}
//                 >
//                   Close
//                 </button>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </AdminLayout>
//   );
// }


// import React, { useEffect, useState } from "react";
// import AdminLayout from "../components/AdminLayout";
// import axios from "axios";
// import * as XLSX from "xlsx";

// export default function Forms() {
//   const [forms, setForms] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [search, setSearch] = useState("");
//   const [filterService, setFilterService] = useState("all");
//   const [filterPaid, setFilterPaid] = useState("all");

//   const [selectedExtra, setSelectedExtra] = useState(null);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;

//   // Load all forms
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/forms/all");
//         setForms(res.data);
//         setFiltered(res.data);
//       } catch (err) {
//         console.error("Failed to load forms:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   // Format date
//   const formatDate = (date) =>
//     new Date(date).toLocaleString("en-IN", {
//       dateStyle: "medium",
//       timeStyle: "short",
//     });

//   // FILTER + SEARCH
//   useEffect(() => {
//     let data = [...forms];

//     if (filterService !== "all")
//       data = data.filter((f) => f.service_type === filterService);

//     if (filterPaid !== "all")
//       data = data.filter((f) => (filterPaid === "paid" ? f.paid === 1 : f.paid === 0));

//     if (search.trim() !== "") {
//       const s = search.toLowerCase();
//       data = data.filter(
//         (f) =>
//           f.name?.toLowerCase().includes(s) ||
//           f.email?.toLowerCase().includes(s) ||
//           f.phone?.toLowerCase().includes(s) ||
//           f.service_type?.toLowerCase().includes(s)
//       );
//     }

//     setFiltered(data);
//     setCurrentPage(1); // reset page on filter change
//   }, [search, filterService, filterPaid, forms]);

//   // Pagination slicing
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentForms = filtered.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filtered.length / itemsPerPage);

//   // Export to Excel
//   const exportToExcel = () => {
//     const fileName = "forms_export.xlsx";

//     const ws = XLSX.utils.json_to_sheet(
//       filtered.map((f) => ({
//         ID: f.id,
//         Name: f.name,
//         Email: f.email,
//         Phone: f.phone,
//         Service: f.service_type,
//         Paid: f.paid ? "YES" : "NO",
//         Date: formatDate(f.created_at),
//         Extra: f.extra,
//       }))
//     );

//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Forms");

//     XLSX.writeFile(wb, fileName);
//   };

//   // Delete Form
//   const deleteForm = async (id) => {
//     if (!window.confirm(`Are you sure you want to delete form #${id}?`)) return;

//     try {
//       await axios.delete(`http://localhost:5000/forms/${id}`);
//       setForms((prev) => prev.filter((f) => f.id !== id));
//       alert("Form deleted successfully");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete form");
//     }
//   };

//   return (
//     <AdminLayout>
//       <h2 className="mb-3 d-flex justify-content-between">
//         Forms

//         <button className="btn btn-success" onClick={exportToExcel}>
//           Export Excel
//         </button>
//       </h2>

//       {/* FILTERS + SEARCH */}
//       <div className="card p-3 mb-3">
//         <div className="row g-3">

//           <div className="col-md-4">
//             <input
//               className="form-control"
//               placeholder="Search name, phone, email, service..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={filterService}
//               onChange={(e) => setFilterService(e.target.value)}
//             >
//               <option value="all">All Services</option>
//               <option value="homa">Homa</option>
//               <option value="muhurta">Muhurta</option>
//               <option value="vastu">Vastu</option>
//               <option value="marriage">Marriage Matching</option>
//               <option value="astrology">Astrology</option>
//             </select>
//           </div>

//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={filterPaid}
//               onChange={(e) => setFilterPaid(e.target.value)}
//             >
//               <option value="all">All Payments</option>
//               <option value="paid">Paid</option>
//               <option value="unpaid">Not Paid</option>
//             </select>
//           </div>

//         </div>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : filtered.length === 0 ? (
//         <p className="text-muted">No forms found.</p>
//       ) : (
//         <>
//           {/* TABLE */}
//           <div className="table-responsive">
//             <table className="table table-bordered table-hover align-middle">
//               <thead className="table-dark">
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Service</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Paid</th>
//                   <th>Date</th>
//                   <th>Extra</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {currentForms.map((f) => (
//                   <tr key={f.id}>
//                     <td>{f.id}</td>
//                     <td>{f.name}</td>
//                     <td>{f.service_type}</td>
//                     <td>{f.email || "—"}</td>
//                     <td>{f.phone || "—"}</td>
//                     <td>
//                       {f.paid ? (
//                         <span className="badge bg-success">Paid</span>
//                       ) : (
//                         <span className="badge bg-warning text-dark">
//                           Unpaid
//                         </span>
//                       )}
//                     </td>
//                     <td>{formatDate(f.created_at)}</td>

//                     <td>
//                       <button
//                         className="btn btn-info btn-sm"
//                         onClick={() => setSelectedExtra(f.extra)}
//                       >
//                         View
//                       </button>
//                     </td>

//                     <td>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => deleteForm(f.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>

//           {/* PAGINATION */}
//           <div className="d-flex justify-content-center mt-3 gap-2">
//             <button
//               className="btn btn-outline-primary"
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//             >
//               Previous
//             </button>

//             {[...Array(totalPages)].map((_, i) => (
//               <button
//                 key={i}
//                 className={`btn ${
//                   currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
//                 }`}
//                 onClick={() => setCurrentPage(i + 1)}
//               >
//                 {i + 1}
//               </button>
//             ))}

//             <button
//               className="btn btn-outline-primary"
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}

//       {/* EXTRA DETAILS MODAL */}
//       {selectedExtra && (
//         <div
//           className="modal fade show"
//           style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content">

//               <div className="modal-header">
//                 <h5 className="modal-title">Extra Information</h5>
//                 <button
//                   className="btn-close"
//                   onClick={() => setSelectedExtra(null)}
//                 ></button>
//               </div>

//               <div className="modal-body">
//                 <pre>{JSON.stringify(JSON.parse(selectedExtra), null, 2)}</pre>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </AdminLayout>
//   );
// }


import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";
import * as XLSX from "xlsx";

export default function Forms() {
  const [forms, setForms] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filterService, setFilterService] = useState("all");
  const [filterPaid, setFilterPaid] = useState("all");

  const [selectedExtra, setSelectedExtra] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const BASE_URL = import.meta.env.VITE_API_URL;

  // Load all forms
  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`${BASE_URL}forms/all`);
        setForms(res.data || []);
        setFiltered(res.data || []);
      } catch (err) {
        console.error("Failed to load forms:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Format date
  const formatDate = (date) =>
    new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  // FILTER + SEARCH
  useEffect(() => {
    let data = [...forms];

    if (filterService !== "all")
      data = data.filter((f) => f.service_type === filterService);

    if (filterPaid !== "all")
      data = data.filter((f) =>
        filterPaid === "paid" ? f.paid === 1 : f.paid === 0
      );

    if (search.trim() !== "") {
      const s = search.toLowerCase();
      data = data.filter(
        (f) =>
          f.name?.toLowerCase().includes(s) ||
          f.email?.toLowerCase().includes(s) ||
          f.phone?.toLowerCase().includes(s) ||
          f.service_type?.toLowerCase().includes(s)
      );
    }

    setFiltered(data);
    setCurrentPage(1);
  }, [search, filterService, filterPaid, forms]);

  // Pagination slicing
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentForms = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // Export to Excel
  const exportToExcel = () => {
    const fileName = "forms_export.xlsx";

    const ws = XLSX.utils.json_to_sheet(
      filtered.map((f) => ({
        ID: f.id,
        Name: f.name,
        Email: f.email,
        Phone: f.phone,
        Service: f.service_type,
        Paid: f.paid ? "YES" : "NO",
        Date: formatDate(f.created_at),
        Extra: f.extra,
      }))
    );

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Forms");
    XLSX.writeFile(wb, fileName);
  };

  // Delete Form
  const deleteForm = async (id) => {
    if (!window.confirm(`Are you sure you want to delete form #${id}?`)) return;

    try {
      await axios.delete(`${BASE_URL}forms/${id}`);
      setForms((prev) => prev.filter((f) => f.id !== id));
      alert("Form deleted successfully");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete form");
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-3 d-flex justify-content-between align-items-center">
        Forms
        <button className="btn btn-success" onClick={exportToExcel}>
          Export Excel
        </button>
      </h2>

      {/* FILTERS + SEARCH */}
      <div className="card p-3 mb-3">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Search name, phone, email, service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={filterService}
              onChange={(e) => setFilterService(e.target.value)}
            >
              <option value="all">All Services</option>
              <option value="homa">Homa</option>
              <option value="muhurta">Muhurta</option>
              <option value="vastu">Vastu</option>
              <option value="marriage">Marriage Matching</option>
              <option value="astrology">Astrology</option>
            </select>
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={filterPaid}
              onChange={(e) => setFilterPaid(e.target.value)}
            >
              <option value="all">All Payments</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Not Paid</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-muted">No forms found.</p>
      ) : (
        <>
          {/* TABLE */}
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Paid</th>
                  <th>Date</th>
                  <th>Extra</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {currentForms.map((f) => (
                  <tr key={f.id}>
                    <td>{f.id}</td>
                    <td>{f.name}</td>
                    <td>{f.service_type}</td>
                    <td>{f.email || "—"}</td>
                    <td>{f.phone || "—"}</td>
                    <td>
                      {f.paid ? (
                        <span className="badge bg-success">Paid</span>
                      ) : (
                        <span className="badge bg-warning text-dark">
                          Unpaid
                        </span>
                      )}
                    </td>
                    <td>{formatDate(f.created_at)}</td>

                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => setSelectedExtra(f.extra)}
                      >
                        View
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteForm(f.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="d-flex justify-content-center mt-3 gap-2">
            <button
              className="btn btn-outline-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`btn ${
                  currentPage === i + 1
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="btn btn-outline-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* EXTRA DETAILS MODAL */}
      {selectedExtra && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Extra Information</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedExtra(null)}
                ></button>
              </div>

              <div className="modal-body">
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {typeof selectedExtra === "string"
                    ? selectedExtra
                    : JSON.stringify(selectedExtra, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
