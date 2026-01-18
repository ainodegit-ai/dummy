// import AdminLayout from "../components/AdminLayout";

// export default function Trending() {
//   return (
//     <AdminLayout>
//       <h2>Trending</h2>
//       <p>Coming Soon...</p>
//     </AdminLayout>
//   );
// }

// adminview/src/pages/Trending.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";
import TrendingServices from "../components/trending/TrendingServices";

export default function Trending() {
  const [homas, setHomas] = useState([]);
  const [muhurtas, setMuhurtas] = useState([]);
  const [vastu, setVastu] = useState([]);
  const [trending, setTrending] = useState([]); // raw trending from DB
  const [selected, setSelected] = useState([]); // selected services
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Helper: normalize API response to always be an array
  const toArray = (data) => {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.data)) return data.data;
    return [];
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const [homasRes, muhurtasRes, vastuRes, trendingRes] =
        await Promise.all([
          api.get("/homas"),
          api.get("/muhurta"),
          api.get("/vastu"),
          api.get("/trending"),
        ]);

      const homaList = toArray(homasRes.data);
      const muhurtaList = toArray(muhurtasRes.data);
      const vastuList = toArray(vastuRes.data);
      const trendingList = toArray(trendingRes.data); // [{id, service_id, service_type}, ...]

      setHomas(homaList);
      setMuhurtas(muhurtaList);
      setVastu(vastuList);
      setTrending(trendingList);

      // Build master list of all services with type
      const allServices = [
        ...homaList.map((h) => ({
          key: `homa-${h.id}`,
          service_id: h.id,
          service_type: "homa",
          name: h.name || h.homa_name || `Homa #${h.id}`,
        })),
        ...muhurtaList.map((m) => ({
          key: `muhurta-${m.id}`,
          service_id: m.id,
          service_type: "muhurta",
          name: m.name || m.muhurta_name || `Muhurta #${m.id}`,
        })),
        ...vastuList.map((v) => ({
          key: `vastu-${v.id}`,
          service_id: v.id,
          service_type: "vastu",
          name: v.name || v.vastu_name || `Vastu #${v.id}`,
        })),
      ];

      // Pre-select services that are already trending
      const preSelected = allServices.filter((svc) =>
        trendingList.some(
          (t) =>
            t.service_id === svc.service_id &&
            t.service_type === svc.service_type
        )
      );

      setSelected(preSelected);
    } catch (err) {
      console.error("Trending fetch error:", err);
      alert("Failed to load trending data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isSelected = (service) =>
    selected.some(
      (s) =>
        s.service_id === service.service_id &&
        s.service_type === service.service_type
    );

  const toggleService = (service) => {
    if (isSelected(service)) {
      setSelected((prev) =>
        prev.filter(
          (s) =>
            !(
              s.service_id === service.service_id &&
              s.service_type === service.service_type
            )
        )
      );
    } else {
      setSelected((prev) => [...prev, service]);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const payload = {
        items: selected.map((s) => ({
          service_id: s.service_id,
          service_type: s.service_type,
        })),
      };

      await api.post("/trending/save", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });

      alert("Trending services updated successfully");
      fetchData();
    } catch (err) {
      console.error("Trending save error:", err);
      alert(
        err.response?.data?.message || "Failed to save trending services"
      );
    } finally {
      setSaving(false);
    }
  };

  // Build one combined list to render
  const combined = [
    ...homas.map((h) => ({
      key: `homa-${h.id}`,
      service_id: h.id,
      service_type: "homa",
      name: h.name || h.homa_name || `Homa #${h.id}`,
    })),
    ...muhurtas.map((m) => ({
      key: `muhurta-${m.id}`,
      service_id: m.id,
      service_type: "muhurta",
      name: m.name || m.muhurta_name || `Muhurta #${m.id}`,
    })),
    ...vastu.map((v) => ({
      key: `vastu-${v.id}`,
      service_id: v.id,
      service_type: "vastu",
      name: v.name || v.vastu_name || `Vastu #${v.id}`,
    })),
  ];

  return (
    <AdminLayout>
      {/* <div className="admin-page-header">
        <div>
          <h3 className="mb-1">Trending Services</h3>
          <p className="text-muted mb-0">
            Choose which services (Homas, Muhurtas, Vastu) to highlight on the user
            homepage.
          </p>
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-label">Total Services</div>
            <div className="summary-value">{combined.length}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Selected Trending</div>
            <div className="summary-value">{selected.length}</div>
          </div>
          <button
            className="btn btn-sm btn-primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Trending"}
          </button>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body p-0">
          {loading ? (
            <div className="p-3 text-center">Loading services...</div>
          ) : combined.length === 0 ? (
            <div className="p-3 text-center text-muted">
              No services found to mark as trending.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: 60 }}>Trending</th>
                    <th>Service Name</th>
                    <th>Type</th>
                    <th>Service ID</th>
                  </tr>
                </thead>
                <tbody>
                  {combined.map((svc) => (
                    <tr key={svc.key}>
                      <td>
                        <input
                          type="checkbox"
                          checked={isSelected(svc)}
                          onChange={() => toggleService(svc)}
                        />
                      </td>
                      <td>{svc.name}</td>
                      <td className="text-capitalize">
                        {svc.service_type}
                      </td>
                      <td>{svc.service_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div> */}
      <TrendingServices />
    </AdminLayout>
  );
}
