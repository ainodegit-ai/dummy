
// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "../styles/AdminLayout.css";
// import logo_dark from "/assets/logo-dark.png";
// export default function AdminLayout({ children }) {
//   const navigate = useNavigate();
//   const admin = JSON.parse(localStorage.getItem("adminData"));
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminData");
//     navigate("/adminlogin");
//   };

//   return (
//     <div className="layout">
//       {/* FIXED TOPBAR */}
//       <header className="topbar">
//         <button
//           className="hamburger"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           ☰
//         </button>

//         <span className="topbar-title">
//           <img src={logo_dark} alt="Logo" style={{ width: "180px" }} />
//         </span>

//         <div className="topbar-right">
//           <div className="user-info">
//             <img
//               src={admin?.avatar || "https://i.pravatar.cc/60?img=15"}
//               alt="Avatar"
//               className="avatar-img rounded-avatar"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://i.pravatar.cc/60?img=15";
//               }}
//             />

//             <div className="user-text">
//               <span className="username">{admin?.full_name}</span>

//               <span className="logout-link" onClick={handleLogout}>
//                 Logout
//               </span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* FIXED SIDEBAR */}
//       <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//         <nav className="sidebar-menu">
//           <NavLink to="/home">
//             <i className="fas fa-home"></i> Home
//           </NavLink>
//           <NavLink to="/aboutus">
//             <i className="fas fa-info-circle"></i> About Us
//           </NavLink>
//           <NavLink to="/academics">
//             <i className="fas fa-book"></i> Academics
//           </NavLink>
//           <NavLink to="/admissions">
//             <i className="fas fa-clipboard-list"></i> Admissions
//           </NavLink>
//           <NavLink to="/studentlife">
//             <i className="fas fa-users"></i> Student Life
//           </NavLink>
//           <NavLink to="/events">
//             <i className="fas fa-images"></i> Events
//           </NavLink>
//           <NavLink to="/forms">
//             <i className="fas fa-pen-fancy"></i> Blog
//           </NavLink>
//           <NavLink to="/contactus">
//             <i className="fas fa-envelope"></i> Contact us
//           </NavLink>
//         </nav>
//       </aside>

//       {/* CLICK OUTSIDE TO CLOSE MOBILE SIDEBAR */}
//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       {/* SCROLLABLE CONTENT */}
//       <main className="content">{children}</main>
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
          <NavLink to="/academics">
            <i className="fas fa-book"></i> Academics
          </NavLink>
          <NavLink to="/admissions">
            <i className="fas fa-clipboard-list"></i> Admissions
          </NavLink>
          <NavLink to="/studentlife">
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
