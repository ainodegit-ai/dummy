// import AdminLayout from "../components/AdminLayout";

// export default function Users() {
//   return (
//     <AdminLayout>
//       <h2>Users</h2>
//       <p>Coming Soon...</p>
//     </AdminLayout>
//   );
// }


// adminview/src/admin/pages/Users.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";

import api from "../api/axiosConfig";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/admin/users", {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                    }
                  });
      setUsers(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // handle search
  useEffect(() => {
    const term = search.toLowerCase();
    const f = users.filter((u) =>
      (u.full_name || "").toLowerCase().includes(term) ||
      (u.email || "").toLowerCase().includes(term) ||
      (u.phone || "").toLowerCase().includes(term) ||
      (u.username || "").toLowerCase().includes(term)
    );
    setFiltered(f);
  }, [search, users]);

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <div>
          <h3 className="mb-1">Users</h3>
          <p className="text-muted mb-0">
            All registered customers on Sree Sharma Astrology.
          </p>
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-label">Total Users</div>
            <div className="summary-value">{users.length}</div>
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
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body p-0">
          {loading ? (
            <div className="p-3 text-center">Loading users...</div>
          ) : filtered.length === 0 ? (
            <div className="p-3 text-center text-muted">No users found.</div>
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
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.full_name || "-"}</td>
                      <td>{u.username || "-"}</td>
                      <td>{u.email || "-"}</td>
                      <td>{u.phone || "-"}</td>
                      <td>
                        {u.created_at
                          ? new Date(u.created_at).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
