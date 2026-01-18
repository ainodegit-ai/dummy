// adminview/src/admin/components/AddAdminModal.jsx
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../api/axiosConfig";

export default function AddAdminModal({ show, onClose, onAdded }) {
  const [form, setForm] = useState({
    username: "",
    full_name: "",
    email: "",
    phone: "",
    password: "",
    role: "admin",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.post("/admin/admins/add", form, {
  headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
});
      alert("Admin added successfully");
      onAdded && onAdded();
      setForm({
        username: "",
        full_name: "",
        email: "",
        phone: "",
        password: "",
      });
      onClose();
    } catch (err) {
      console.error("Add admin error:", err);
      alert(err.response?.data?.message || "Failed to add admin");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Username *</Form.Label>
            <Form.Control
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Phone *</Form.Label>
            <Form.Control
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Role *</Form.Label>
            <Form.Select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </Form.Select>
          </Form.Group>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose} disabled={saving}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? "Saving..." : "Add Admin"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
