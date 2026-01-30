// AcademicsTemplate.jsx

import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import MediaBlock from "../../components/ui/MediaBlock";
import FaqItem from "../../components/ui/FaqItem";
import CallToActionSection from "../CallToActionSection";

function AcademicsTemplate({ data }) {
  return (
    <>
      {/* ===== HERO ===== */}
      <Section>
        <h1 className="hero-title">{data.hero.title}</h1>

        <MediaBlock image={data.hero.image} alt={data.hero.alt}>
          <h2>{data.hero.heading}</h2>
          {data.hero.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </MediaBlock>
      </Section>

      {/* ===== INTRO ===== */}
      <Section>
        <h3 style={{ textAlign: "center" }}>{data.intro.title}</h3>
        <p style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          {data.intro.text}
        </p>
      </Section>

      {/* ===== FEATURES ===== */}
      <Section variant="primary">
        {data.features.map((item, index) => (
          <Card key={index}>
            <h4>{item.title}</h4>
            <ul>
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Section>

      {/* ===== ADMISSIONS ===== */}
      <Section variant="primary">
        <h3 style={{ textAlign: "center" }}>{data.admissions.title}</h3>
        <p style={{ textAlign: "center", maxWidth: "900px", margin: "auto" }}>
          {data.admissions.text}
        </p>
      </Section>

      {/* ===== FAQ ===== */}
      <Section variant="light">
        <h3 style={{ textAlign: "center" }}>
          Frequently Asked Questions (FAQ)
        </h3>

        {data.faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </Section>
      <CallToActionSection />
    </>
  );
}

export default AcademicsTemplate;
