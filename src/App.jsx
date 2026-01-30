import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentLife from "./pages/StudentLife";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import EnquireNow from "./pages/EnquireNow";
import Register from "./pages/Register";
import PrePrimary from "./pages/Academics/PrePrimary";
import Primary from "./pages/Academics/Primary";
import CBSE from "./pages/Academics/CBSE";
import ContactUs from "./pages/ContactUs";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/academics/pre-primary" element={<PrePrimary />} />
        <Route path="/academics/primary" element={<Primary />} />
        <Route path="/academics/cbse" element={<CBSE />} />
        <Route path="/enquire" element={<EnquireNow />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
