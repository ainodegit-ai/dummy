// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Homas from "./pages/Homas";
// import Muhurta from "./pages/Muhurta";
// import Vastu from "./pages/Vastu";
// // import NotFound from "./pages/NotFound";

// import Gallery from "./pages/Gallery";
// import Forms from "./pages/Forms";
// import Users from "./pages/Users";
// import Admins from "./pages/Admins";
// import Payments from "./pages/Payments";
// import Trending from "./pages/Trending";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/homas" element={<Homas />} />
//         <Route path="/muhurta" element={<Muhurta />} />
//         <Route path="/vastu" element={<Vastu />} />
//         {/* <Route path="*" element={<NotFound />} /> */}

//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/forms" element={<Forms />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/admins" element={<Admins />} />
//         <Route path="/payments" element={<Payments />} />
//         <Route path="/trending" element={<Trending />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Dashboard from "./pages/Dashboard";
import Homas from "./pages/Homas";
import Muhurta from "./pages/Muhurta";
import Vastu from "./pages/Vastu";

import Gallery from "./pages/Gallery";
import Forms from "./pages/Forms";
import Users from "./pages/Users";
import Admins from "./pages/Admins";
import Payments from "./pages/Payments";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";
import AdminProfile from "./pages/AdminProfile";
import AdminLogin from "./pages/AdminLogin";
import RequireAdmin from "./utils/RequireAdmin";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Login */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAdmin>
              <Home />
            </RequireAdmin>
          }
        />
        <Route
          path="/aboutus"
          element={
            <RequireAdmin>
              <AboutUs />
            </RequireAdmin>
          }
        />
        <Route
          path="/events"
          element={
            <RequireAdmin>
              <Events />
            </RequireAdmin>
          }
        />
        <Route
          path="/contactus"
          element={
            <RequireAdmin>
              <ContactUs />
            </RequireAdmin>
          }
        />
        {/* Protected Main Modules */}
        <Route
          path="/homas"
          element={
            <RequireAdmin>
              <Homas />
            </RequireAdmin>
          }
        />

        <Route
          path="/muhurta"
          element={
            <RequireAdmin>
              <Muhurta />
            </RequireAdmin>
          }
        />

        <Route
          path="/vastu"
          element={
            <RequireAdmin>
              <Vastu />
            </RequireAdmin>
          }
        />

        {/* New Sidebar Pages */}
        <Route
          path="/gallery"
          element={
            <RequireAdmin>
              <Gallery />
            </RequireAdmin>
          }
        />

        <Route
          path="/forms"
          element={
            <RequireAdmin>
              <Forms />
            </RequireAdmin>
          }
        />

        <Route
          path="/users"
          element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }
        />

        <Route
          path="/admins"
          element={
            <RequireAdmin>
              <Admins />
            </RequireAdmin>
          }
        />

        <Route
          path="/payments"
          element={
            <RequireAdmin>
              <Payments />
            </RequireAdmin>
          }
        />

        <Route
          path="/trending"
          element={
            <RequireAdmin>
              <Trending />
            </RequireAdmin>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAdmin>
              <AdminProfile />
            </RequireAdmin>
          }
        />

        {/* Default redirect to dashboard if logged in */}
        <Route
          path="/"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
