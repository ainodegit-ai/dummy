// import AdminLayout from "../components/AdminLayout";

// export default function Admins() {
//   return (
//     <AdminLayout>
//       <h2>Admins</h2>
//       <p>Coming Soon...</p>
//     </AdminLayout>
//   );
// }


// adminview/src/pages/Admins.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";
import AddAdminModal from "../components/AddAdminModal";


export default function Admins() {
  const currentAdmin = JSON.parse(localStorage.getItem("adminData"));
  const [admins, setAdmins] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/admins", { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
      setAdmins(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Error fetching admins:", err);
      alert("Failed to load admins");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    const f = admins.filter((a) =>
      (a.full_name || "").toLowerCase().includes(term) ||
      (a.email || "").toLowerCase().includes(term) ||
      (a.phone || "").toLowerCase().includes(term) ||
      (a.username || "").toLowerCase().includes(term)
    );
    setFiltered(f);
  }, [search, admins]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;

    try {
      await api.delete(`/admin/admins/${id}`, {
  headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
});
      alert("Admin deleted");
      fetchAdmins();
    } catch (err) {
      console.error("Delete admin error:", err);
      alert("Failed to delete admin");
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <div>
          <h3 className="mb-1">Admins</h3>
          <p className="text-muted mb-0">
            Manage admin accounts with access to dashboard.
          </p>
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-label">Total Admins</div>
            <div className="summary-value">{admins.length}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Search</div>
            <input
              className="form-control form-control-sm"
              placeholder="Name / Email / Phone"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="btn btn-sm btn-success"
            onClick={() => setShowAddModal(true)}
          >
            + Add Admin
          </button>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body p-0">
          {loading ? (
            <div className="p-3 text-center">Loading admins...</div>
          ) : filtered.length === 0 ? (
            <div className="p-3 text-center text-muted">No admins found.</div>
          ) : (
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created</th>
                    <th style={{ width: 120 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a) => (
                    <tr key={a.id}>
                      <td>{a.id}</td>
                      <td>{a.full_name || "-"}</td>
                      <td>{a.username || "-"}</td>
                      <td>{a.email || "-"}</td>
                      <td>{a.phone || "-"}</td>
                      <td>
                        {a.created_at
                          ? new Date(a.created_at).toLocaleString()
                          : "-"}
                      </td>
                      <td>
                        {currentAdmin?.role === "super_admin" && (
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDelete(a.id)}
                          >
                            Delete
                          </button>
                        )}

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <AddAdminModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdded={fetchAdmins}
      />
    </AdminLayout>
  );
}
