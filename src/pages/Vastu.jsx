import React, { useEffect, useState, useMemo } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";
import VastuForm from "../components/VastuForm";
import { Modal, Button } from "react-bootstrap";
import "../styles/homas.css";

export default function Vastu() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  //  pagination (must be on top)
  const [page, setPage] = useState(1);
  const perPage = 10;

  // form
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  // delete
  const [showDelete, setShowDelete] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await api.get("/vastu");
      setItems(res.data || []);
    } catch (err) {
      console.error("Failed to fetch vastu", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // 🔍 filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (i) =>
        i.title?.toLowerCase().includes(q) ||
        i.slug?.toLowerCase().includes(q)
    );
  }, [query, items]);

  // 📄 pagination logic
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  const currentItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  const confirmDelete = (item) => {
    setToDelete(item);
    setShowDelete(true);
  };

  const doDelete = async () => {
    try {
      await api.delete(`/vastu/${toDelete.id}`);
      setShowDelete(false);
      fetchItems();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Could not delete this Vastu!");
    }
  };

  return (
    <AdminLayout>
      <div className="mh-header">
        <h2>Manage Vastu</h2>

        <div className="mh-controls">
          <input
            className="mh-search"
            placeholder="Search Vastu..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1); // reset page on search
            }}
          />

          <button
            className="mh-add-btn"
            onClick={() => {
              setSelected(null);
              setShowForm(true);
            }}
          >
            + Add Vastu
          </button>
        </div>
      </div>

      <div className="mh-container">
        <table className="mh-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.slug}</td>
                <td>{v.price}</td>

                <td className="mh-actions">
                  <button
                    className="mh-edit"
                    onClick={() => {
                      setSelected(v);
                      setShowForm(true);
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </button>

                  <button
                    className="mh-delete"
                    onClick={() => confirmDelete(v)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: 30 }}>
                  No Vastu Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mh-pagination">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>

        <span>
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      {/* Add/Edit Form */}
      <VastuForm
        show={showForm}
        onHide={() => setShowForm(false)}
        item={selected}
        refresh={fetchItems}
      />

      {/* Delete Modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Vastu</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Delete <b>{toDelete?.title}</b>?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={doDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
}
