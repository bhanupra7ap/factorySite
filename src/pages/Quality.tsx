// Removed unused imports to fix build errors
import headerImg from "../assets/quality-header.avif";
import altQualityImg from "../assets/non-woven-header.avif";
import "./Quality.css";

const policies = [
  "Product Quality & Safety",
  "Hygiene & Workplace Safety",
  "Environmental Responsibility",
  "Ethical Sourcing & Integrity",
  "Employee Welfare",
];

const Quality = () => {
  return (
    <div className="page">
      {/* Hero with header image */}
      <div className="header-image quality-header">
        <h1 className="header-title">Quality at Our Core</h1>
      </div>

      {/* Main content sections */}
      <div className="content">
        {/* Connected alternating rows like WhoWeAre: Intro + Philosophy with opposite images */}
        <section className="themes-alt section-pad" aria-labelledby="quality-themes">
          <h2 id="quality-themes">Quality Overview</h2>
          <div className="themes-alt-card">
            {/* 1. Commitment to Quality — Text Left, Image Right */}
            <div className="theme-row">
              <div className="theme-text">
                <h3>Commitment to Quality</h3>
                <p style={{ margin: 0 }}>
                  Quality is at the heart of everything we do. As a growing manufacturing company, we believe in building
                  excellence from the ground up — through continuous learning, attention to detail, and adherence to evolving
                  best practices.
                </p>
              </div>
              <div className="theme-media">
                <img src={headerImg} alt="Commitment to quality" loading="lazy" />
              </div>
            </div>

            {/* 2. Our Quality Philosophy — Text Right, Image Left */}
            <div className="theme-row reverse">
              <div className="theme-text">
                <h3>Our Quality Philosophy</h3>
                <p style={{ margin: 0 }}>
                  We approach quality as an ongoing process, not a one-time goal. Every stage — from raw material inspection
                  to final product — is governed by clear operating procedures designed to ensure strength, safety, and
                  consistency.
                </p>
              </div>
              <div className="theme-media">
                <img src={altQualityImg} alt="Our quality philosophy" loading="lazy" />
              </div>
            </div>

            {/* 3. In-House Testing & Control — Text Left, Image Right */}
            <div className="theme-row">
              <div className="theme-text">
                <h3>
                  In-House Testing &amp; Control
                </h3>
                <p style={{ margin: 0 }}>
                  Our in-house inspection setup allows us to monitor parameters such as fabric strength, consistency, and
                  finish. Regular process checks help us identify and correct deviations early, ensuring dependable quality.
                </p>
              </div>
              <div className="theme-media">
                <img src={altQualityImg} alt="In-house testing and control" loading="lazy" />
              </div>
            </div>

            {/* 4. Team & Training — Text Right, Image Left */}
            <div className="theme-row reverse">
              <div className="theme-text">
                <h3>
                  Team &amp; Training
                </h3>
                <p style={{ margin: 0 }}>
                  Our skilled and experienced team forms the backbone of our quality system. Through continuous training and
                  a culture of responsibility, we ensure every product meets our internal benchmarks.
                </p>
              </div>
              <div className="theme-media">
                <img src={headerImg} alt="Team and training" loading="lazy" />
              </div>
            </div>

            {/* 5. Looking Ahead — Text Left, Image Right */}
            <div className="theme-row">
              <div className="theme-text">
                <h3>
                  Looking Ahead
                </h3>
                <p style={{ margin: 0 }}>
                  We are in the process of aligning our systems with international quality standards and certifications to
                  further strengthen our commitment to excellence.
                </p>
              </div>
              <div className="theme-media">
                <img src={altQualityImg} alt="Looking ahead" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Internal Policies & Practices */}
        <section className="quality-policies section-pad" aria-labelledby="policies-timeline">
          <h2 id="policies-timeline">Internal Policies &amp; Practices</h2>
          {/* Timeline tree: root + alternating cards on either side of a central line */}
          
          <ul className="policy-timeline" role="list" aria-label="Policy timeline">
            {policies.map((policy, idx) => (
              <li
                key={policy}
                className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
                role="listitem"
              >
                {/* spacer fills the opposite side to force one item per row */}
                <div className="spacer" aria-hidden />
                <div className="dot" aria-hidden />
                <div className="timeline-card" tabIndex={0}>
                  <h3>{policy}</h3>
                  <p>
                    Our internal guidelines ensure consistency and accountability in every production stage.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Quality;
