import { Link } from "react-router-dom";
import { MdScience, MdGroups, MdVerified } from "react-icons/md";
import headerImg from "../assets/quality-header.avif";

const policies = [
  "Product Quality & Safety",
  "Hygiene & Workplace Safety",
  "Environmental Responsibility",
  "Ethical Sourcing & Integrity",
  "Employee Welfare",
];

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 16,
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  padding: "1.25rem",
  border: "1px solid #f2f2f2",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1rem",
};

const sectionPad: React.CSSProperties = { padding: "2rem 0" };

const Quality = () => {
  return (
    <div className="page">
      {/* Hero with header image */}
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <h1 className="header-title">Quality at Our Core</h1>
      </div>

      {/* Main content sections */}
      <div className="content">
        {/* 1. Introduction (Commitment to Quality) */}
        <section className="quality-intro" style={{ ...sectionPad, textAlign: "center", background: "#f9fafb", borderRadius: 16, padding: "2.5rem 1rem", marginBottom: "1.5rem" }}>
          <h2>Commitment to Quality</h2>
          <p style={{ maxWidth: 800, margin: "0 auto", color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Quality is at the heart of everything we do. As a growing manufacturing company, we believe in building excellence
            from the ground up — through continuous learning, attention to detail, and adherence to evolving best practices.
          </p>
        </section>

        {/* 2. Our Quality Philosophy */}
        <section className="quality-philosophy" style={{ ...sectionPad, background: "#f3f4f6", borderRadius: 16, padding: "2rem 1.5rem" }}>
          <h2 style={{ textAlign: "center" }}>Our Quality Philosophy</h2>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p>
              We approach quality as an ongoing process, not a one-time goal. Every stage — from raw material inspection to
              final product — is governed by clear operating procedures designed to ensure strength, safety, and consistency.
            </p>
          </div>
        </section>

        {/* 3. Internal Policies & Practices */}
        <section className="quality-policies" style={sectionPad}>
          <h2 style={{ textAlign: "center" }}>Internal Policies &amp; Practices</h2>
          <p style={{ maxWidth: 900, margin: "0 auto 1rem", textAlign: "center" }}>
            We follow a structured framework that includes policies on:
          </p>
          <div style={{ ...gridStyle, maxWidth: 1100, margin: "0 auto" }}>
            {policies.map((policy) => (
              <div key={policy} style={cardStyle}>
                <h3 style={{ margin: 0 }}>{policy}</h3>
                <p style={{ marginTop: "0.5rem" }}>
                  Our internal guidelines ensure consistency and accountability in every production stage.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. In-House Testing and Control */}
        <section className="testing-facility" style={{ ...sectionPad, background: "#f9fafb", borderRadius: 16, padding: "2rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
            <MdScience aria-hidden />In-House Testing and Control
          </h2>
          <p style={{ maxWidth: 900, margin: "0.5rem auto 0" }}>
            Our in-house inspection setup allows us to monitor parameters such as fabric strength, consistency, and finish.
            Regular process checks help us identify and correct deviations early, ensuring dependable quality.
          </p>
        </section>

        {/* 5. Team & Training */}
        <section className="team" style={{ ...sectionPad, textAlign: "center" }}>
          <h2 style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
            <MdGroups aria-hidden />Team &amp; Training
          </h2>
          <p style={{ maxWidth: 900, margin: "0.5rem auto 0" }}>
            Our skilled and experienced team forms the backbone of our quality system. Through continuous training and a
            culture of responsibility, we ensure every product meets our internal benchmarks.
          </p>
        </section>

        {/* 6. Looking Ahead */}
        <section className="future-goals" style={{ ...sectionPad, background: "#f3f4f6", borderRadius: 16, padding: "2rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
            <MdVerified aria-hidden />Looking Ahead
          </h2>
          <p style={{ maxWidth: 900, margin: "0.5rem auto 0" }}>
            We are in the process of aligning our systems with international quality standards and certifications to further
            strengthen our commitment to excellence.
          </p>
        </section>

        {/* Footer CTA */}
        <section className="footer-cta" style={{ ...sectionPad, textAlign: "center", background: "#eff6ff", borderRadius: 16, padding: "2.5rem 1.5rem" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>Interested in Our Products?</h2>
          <p style={{ color: "#374151", marginBottom: "1rem" }}>
            Learn more about our manufacturing process or connect with our team to discuss custom requirements.
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "#2563eb",
                color: "#ffffff",
                padding: "0.75rem 1.25rem",
                borderRadius: 12,
                border: 0,
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(37,99,235,0.35)",
              }}
            >
              Contact Us
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Quality;
