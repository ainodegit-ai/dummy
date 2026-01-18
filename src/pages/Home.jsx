
import React, { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import BannerSection from "../components/home-sections/BannerSection";
import HeroSection from "../components/home-sections/HeroSection";
import AboutSection from "../components/home-sections/AboutSection";
import AdmissionSection from "../components/home-sections/AdmissionSection";
import FAQSection from "../components/home-sections/FAQSection";
import ActivitySection from "../components/home-sections/ActivitySection";
import TestimonialSection from "../components/home-sections/TestimonialSection";
import StandOutSection from "../components/home-sections/StandOutSection";
import WelcomeSection from "../components/home-sections/WelcomeSection";
import CTASection from "../components/home-sections/CTASection";
import { useEffect } from "react";
import api from "../api/axiosConfig";

export default function AdminHome() {
  /* ================= BANNER STATE ================= */
  const [sliders, setSliders] = useState([]);
    useEffect(() => {
    loadBanners();
  }, []);
  
  const loadBanners = async () => {
    const res = await api.get("/home/banners");
    setSliders(res.data);
  };
  useEffect(() => {
    loadBanners();
  }, []);
  

  /* ================= HERO STATE ================= */
  const [heroData, setHeroData] = useState(null);
  const loadHero = async () => {
    const res = await api.get("/home/hero");
    setHeroData(res.data);
  };
  useEffect(() => {
    loadHero();
  },[]);

  /* ================= ABOUT STATE ================= */
  const [aboutData, setAboutData] = useState(null);
  
  const loadAbout = async () => {
    const res = await api.get("/home/about");
    setAboutData(res.data);
  };
  
  useEffect(() => {
    loadAbout();
  }, []);


  /* ================= ADMISSION STATE ================= */
  const [admissionData, setAdmissionData] = useState(null);
  const loadAdmission = async () => {
    const res = await api.get("/home/admission");
    setAdmissionData(res.data);
  }
  useEffect(() => {
    loadAdmission();
  }, []);

  /* ================= FAQ STATE ================= */
  const [faqData, setFaqData] = useState(null);
  const loadFAQ = async () => {
    const res = await api.get("/home/faq");
    setFaqData(res.data);
  };
  useEffect(() => {
    loadFAQ();
  }, []);

  /* ================= ACTIVITY STATE ================= */
const [activityData, setActivityData] = useState(null);
const loadActivity = async () => {
  const res = await api.get("/home/activity");
  setActivityData(res.data);
};
useEffect(() => {
  loadActivity();
}, []);



  /* ================= TESTIMONIAL STATE ================= */
  const [testimonialData, setTestimonialData] = useState(null);
  const loadTestimonials = async () => {
    const res = await api.get("/home/testimonials");
    setTestimonialData(res.data);
  };
  useEffect(() => {
    loadTestimonials();
  }, []);
  /* ================= STANDOUT STATE ================= */
  const [standOutData, setStandOutData] = useState(null);
  const loadStandOut = async () => {
    const res = await api.get("/home/standout");
    setStandOutData(res.data);
  }
  useEffect(() => {
    loadStandOut();
  }, []);

  /* ================= WELCOME STATE ================= */
  const [welcomeData, setWelcomeData] = useState(null);
  const loadWelcome = async () => {
    const res = await api.get("/home/welcome");
    setWelcomeData(res.data);
  };
  useEffect(() => {
    loadWelcome();
  }, []);
  /* ================= CTA STATE ================= */
  const [ctaData, setCtaData] = useState(null);
  const loadCTA = async () => {
    const res = await api.get("/home/cta");
    setCtaData(res.data);
  };
  useEffect(() => {
    loadCTA();
  }, []);

  /* ================= RENDER ================= */
  return (
    <AdminLayout>
      <div>
        <h5 className="fw-semibold mb-4">Home Page Editor</h5>
        <div className="accordion" id="homeAccordion">
          <BannerSection
            sliders={sliders}
            setSliders={setSliders}
            loadBanners={loadBanners}
          />

          <HeroSection heroData={heroData} setHeroData={setHeroData} />
          {aboutData && (
            <AboutSection
              aboutData={aboutData}
              setAboutData={setAboutData}
            />
          )}

          <AdmissionSection
            admissionData={admissionData}
            setAdmissionData={setAdmissionData}
            loadAdmission={loadAdmission}
          />
          <FAQSection
            faqData={faqData}
            setFaqData={setFaqData}
            loadFAQ={loadFAQ}
          />

          {activityData && (
  <ActivitySection
    activityData={activityData}
    setActivityData={setActivityData}
    loadActivity={loadActivity}
  />
)}

          <TestimonialSection
            testimonialData={testimonialData}
            setTestimonialData={setTestimonialData} 
            loadTestimonials={loadTestimonials}
          />
          <StandOutSection
            standOutData={standOutData}
            setStandOutData={setStandOutData}
            loadStandOut={loadStandOut}
          />
          <WelcomeSection
            welcomeData={welcomeData}
            setWelcomeData={setWelcomeData}
            loadWelcome={loadWelcome}
          />
          <CTASection ctaData={ctaData} setCtaData={setCtaData} loadCTA={loadCTA} />
        </div>
      </div>
    </AdminLayout>
  );
}
