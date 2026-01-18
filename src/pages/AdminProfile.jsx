import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import axios from "axios";
import "./AdminProfile.css";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [editForm, setEditForm] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const token = localStorage.getItem("adminToken");
    const BASE_URL = import.meta.env.VITE_API_URL;


  // Fetch profile
  useEffect(() => {
    axios
      .get(`${BASE_URL}admin/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAdmin(res.data))
      .catch((err) => console.log(err));
  }, []);

  const openEditForm = () => {
    setEditForm(admin);
    setShowEditForm(true);
    setShowPasswordForm(false);
  };

  const openPasswordForm = () => {
    setShowPasswordForm(true);
    setShowEditForm(false);
  };

  const saveProfile = () => {
    axios
      .put(`${BASE_URL}admin/profile`, editForm, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setAdmin(editForm);
        setShowEditForm(false);
        alert("Profile updated!");
      })
      .catch((err) => console.log(err));
  };

  const changePassword = () => {
    axios
      .put(`${BASE_URL}admin/change-password`, passwordForm, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Password changed!");
        setPasswordForm({ oldPassword: "", newPassword: "" });
        setShowPasswordForm(false);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  if (!admin) return <AdminLayout><p>Loading...</p></AdminLayout>;

  return (
    <AdminLayout>
      <div className="profile-container">
        <h2>Admin Profile</h2>

        {/* BASIC PROFILE CARD */}
        <div className="profile-card">
          <p><strong>Full Name:</strong> {admin.full_name}</p>
          <p><strong>Username:</strong> {admin.username}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Phone:</strong> {admin.phone}</p>

          <div className="profile-actions">
            <button className="edit-btn" onClick={openEditForm}>
              Edit Profile
            </button>

            <button className="password-btn" onClick={openPasswordForm}>
              Change Password
            </button>
          </div>
        </div>

        {/* EDIT PROFILE FORM */}
        {showEditForm && (
          <div className="edit-form-card">
            <h3>Edit Profile</h3>
            <span><strong>Full Name</strong><input
              className="modal-input"
              value={editForm.full_name}
              onChange={(e) =>
                setEditForm({ ...editForm, full_name: e.target.value })
              }
              placeholder="Full Name"
            /></span>

            <input
              className="modal-input"
              value={editForm.username}
              onChange={(e) =>
                setEditForm({ ...editForm, username: e.target.value })
              }
              placeholder="Username"
            />

            <input
              className="modal-input"
              value={editForm.email}
              onChange={(e) =>
                setEditForm({ ...editForm, email: e.target.value })
              }
              placeholder="Email"
            />

            <input
              className="modal-input"
              value={editForm.phone}
              onChange={(e) =>
                setEditForm({ ...editForm, phone: e.target.value })
              }
              placeholder="Phone"
            />

            <button className="save-btn" onClick={saveProfile}>Save Changes</button>
            <button className="cancel-btn" onClick={() => setShowEditForm(false)}>Cancel</button>
          </div>
        )}

        {/* CHANGE PASSWORD FORM */}
        {showPasswordForm && (
          <div className="edit-form-card">
            <h3>Change Password</h3>

            <input
              type="password"
              className="modal-input"
              placeholder="Old Password"
              value={passwordForm.oldPassword}
              onChange={(e) =>
                setPasswordForm({ ...passwordForm, oldPassword: e.target.value })
              }
            />

            <input
              type="password"
              className="modal-input"
              placeholder="New Password"
              value={passwordForm.newPassword}
              onChange={(e) =>
                setPasswordForm({ ...passwordForm, newPassword: e.target.value })
              }
            />

            <button className="save-btn" onClick={changePassword}>Update Password</button>
            <button className="cancel-btn" onClick={() => setShowPasswordForm(false)}>Cancel</button>
          </div>
        )}

      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
