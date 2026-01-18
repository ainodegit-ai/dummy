// import React from "react";
// import Sidebar from "./Sidebar";
// import "../styles/layout.css";
// import { useNavigate } from "react-router-dom";

// // const AdminLayout = ({ children }) => {
// //   return (
// //     <div className="layout">
// //       <Sidebar />
// //       <main className="content">{children}</main>
// //     </div>
// //   );
// // };

// // export default AdminLayout;

// export default function AdminLayout({ children }) {
//   const navigate = useNavigate();
//   const admin = JSON.parse(localStorage.getItem("adminData"));

//   const logout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminData");
//     navigate("/adminlogin");
//   };

//   return (
//     <div className="layout">

//       <Sidebar />

//       <div className="topbar">
//         <div className="admin-info">
//           <span>{admin?.full_name || admin?.username}</span>
//         </div>
//         <button className="logout-btn" onClick={logout}>Logout</button>
//       </div>

//       <div className="content">{children}</div>
//     </div>
//   );
// }

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminLayout({ children }) {
//   const navigate = useNavigate();
//   const admin = JSON.parse(localStorage.getItem("adminData"));

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminData");
//     navigate("/adminlogin");
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh", background: "#f5f5f5" }}>

//       {/* LEFT SIDEBAR */}
//       <aside
//         style={{
//           width: "240px",
//           background: "#111",
//           color: "white",
//           padding: "20px 15px",
//           flexShrink: 0,
//         }}
//       >
//         <h2 style={{ marginBottom: "20px" }}>Admin Panel</h2>

//         <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//           <a href="/dashboard" style={navLink}>Dashboard</a>
//           <a href="/homas" style={navLink}>Manage Homas</a>
//           <a href="/muhurta" style={navLink}>Manage Muhurtas</a>
//           <a href="/vastu" style={navLink}>Manage Vastu</a>
//           <a href="/gallery" style={navLink}>Gallery</a>
//           <a href="/forms" style={navLink}>Forms</a>
//           <a href="/users" style={navLink}>Users</a>
//           <a href="/admins" style={navLink}>Admins</a>
//           <a href="/payments" style={navLink}>Payments</a>
//           <a href="/trending" style={navLink}>Trending</a>
//         </nav>
//       </aside>

//       {/* MAIN AREA */}
//       <div style={{ flexGrow: 1, padding: "0" }}>
//         {/* TOP BAR */}
//         <div
//           style={{
//             height: "60px",
//             background: "white",
//             borderBottom: "1px solid #ddd",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             padding: "0 20px",
//             gap: "15px",
//           }}
//         >
//           <span>{admin?.full_name}</span>
//           {/* <button

//             style={{
//               padding: "8px 16px",
//               background: "#d9534f",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             <a href="/" style={navLink}>Profile</a>
//           </button> */}
//           <button
//             onClick={handleLogout}
//             style={{
//               padding: "8px 16px",
//               background: "#d9534f",
//               color: "white",
//               border: "none",
//               borderRadius: "6px",
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>

//         {/* PAGE CONTENT */}
//         <div style={{ padding: "25px" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// const navLink = {
//   color: "white",
//   textDecoration: "none",
//   fontSize: "16px",
//   padding: "8px 0",
// };

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/AdminLayout.css"; // <-- Import external CSS

// export default function AdminLayout({ children }) {
//   const navigate = useNavigate();
//   const admin = JSON.parse(localStorage.getItem("adminData"));

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminData");
//     navigate("/adminlogin");
//   };

//   return (
//     <div className="admin-container">

//       {/* LEFT SIDEBAR */}
//       <aside className="admin-sidebar">
//         <h2 className="admin-title">Admin Panel</h2>

//         <nav className="admin-nav">
//           <a href="/dashboard">Dashboard</a>
//           <a href="/homas">Manage Homas</a>
//           <a href="/muhurta">Manage Muhurtas</a>
//           <a href="/vastu">Manage Vastu</a>
//           <a href="/gallery">Gallery</a>
//           <a href="/forms">Forms</a>
//           <a href="/users">Users</a>
//           <a href="/admins">Admins</a>
//           <a href="/payments">Payments</a>
//           <a href="/trending">Trending</a>
//         </nav>
//       </aside>

//       {/* MAIN AREA */}
//       <div className="admin-main">

//         {/* TOP BAR */}
//         <div className="admin-topbar">
//           <span className="admin-name" onClick={() => navigate("/profile")}>
//             {admin?.full_name} (Profile)
//           </span>

//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>

//         {/* PAGE CONTENT */}
//         <div className="admin-content">{children}</div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/AdminLayout.css";
import logo_dark from "/assets/logo-dark.png";
export default function AdminLayout({ children }) {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("adminData"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    navigate("/adminlogin");
  };

  return (
    <div className="layout">
      {/* FIXED TOPBAR */}
      <header className="topbar">
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <span className="topbar-title">
          <img src={logo_dark} alt="Logo" style={{ width: "180px" }} />
        </span>

        <div className="topbar-right">
          <div className="user-info">
            <img
              src={admin?.avatar || "https://i.pravatar.cc/60?img=15"}
              alt="Avatar"
              className="avatar-img rounded-avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://i.pravatar.cc/60?img=15";
              }}
            />

            <div className="user-text">
              <span className="username">{admin?.full_name}</span>

              <span className="logout-link" onClick={handleLogout}>
                Logout
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* FIXED SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav className="sidebar-menu">
          <NavLink to="/home">
            <i className="fas fa-home"></i> Home
          </NavLink>
          <NavLink to="/aboutus">
            <i className="fas fa-info-circle"></i> About Us
          </NavLink>
          <NavLink to="/homas">
            <i className="fas fa-book"></i> Academics
          </NavLink>
          <NavLink to="/muhurta">
            <i className="fas fa-clipboard-list"></i> Admissions
          </NavLink>
          <NavLink to="/vastu">
            <i className="fas fa-users"></i> Student Life
          </NavLink>
          <NavLink to="/events">
            <i className="fas fa-images"></i> Events
          </NavLink>
          <NavLink to="/forms">
            <i className="fas fa-pen-fancy"></i> Blog
          </NavLink>
          <NavLink to="/contactus">
            <i className="fas fa-envelope"></i> Contact us
          </NavLink>
        </nav>
      </aside>

      {/* CLICK OUTSIDE TO CLOSE MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SCROLLABLE CONTENT */}
      <main className="content">{children}</main>
    </div>
  );
}
