// Removed unused imports to fix build errors
import headerImg from "../assets/quality-header.png";
import commitmentToQuality from "../assets/quality-commitment-to-quality.png";
import inhouseTesting from "../assets/quality-inhouse-testing-and-control.png";
import teamAndTraining from "../assets/quality-team-and-training.png";
import lookingAhead from "../assets/quality-looking-ahead.png";
import ourQualityPhilosophy from "../assets/quality-our-quality-philosophy.png";
import "./Quality.css";

const policies = [
  {
    title: "Product Quality & Safety",
    description: "We implement rigorous quality control measures at every production stage. From raw material inspection to final product testing, we ensure our FIBC bags and non-woven products meet stringent strength, durability, and safety standards to protect your goods during storage and transportation."
  },
  {
    title: "Hygiene & Workplace Safety",
    description: "Maintaining clean production environments and safe working conditions is paramount. Our facilities follow strict hygiene protocols and safety standards to protect our workforce and ensure product integrity. Regular safety audits and training programs keep our team prepared and protected."
  },
  {
    title: "Environmental Responsibility",
    description: "We are committed to minimizing our environmental footprint through responsible manufacturing practices. This includes optimizing resource usage, reducing waste, implementing recycling initiatives, and exploring eco-friendly materials to contribute to a sustainable future."
  },
  {
    title: "Ethical Sourcing & Integrity",
    description: "We maintain transparent and ethical relationships with our suppliers and partners. Our sourcing practices prioritize quality, fair trade, and compliance with legal standards. We believe in conducting business with honesty, integrity, and respect for all stakeholders."
  },
  {
    title: "Employee Welfare",
    description: "Our employees are our greatest asset. We provide fair compensation, safe working conditions, opportunities for professional growth, and a supportive work environment. We believe that investing in our people directly translates to better quality and service for our customers."
  },
];

const Quality = () => {
  return (
    <div className="page">
      {/* Hero with header image */}
      <div 
        className="header-image quality-header"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
                <img src={commitmentToQuality} alt="Commitment to quality" loading="lazy" />
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
                <img src={ourQualityPhilosophy} alt="Our quality philosophy" loading="lazy" />
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
                <img src={inhouseTesting} alt="In-house testing and control" loading="lazy" />
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
                <img src={teamAndTraining} alt="Team and training" loading="lazy" />
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
                <img src={lookingAhead} alt="Looking ahead" loading="lazy" />
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
                key={policy.title}
                className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
                role="listitem"
              >
                {/* spacer fills the opposite side to force one item per row */}
                <div className="spacer" aria-hidden />
                <div className="dot" aria-hidden />
                <div className="timeline-card" tabIndex={0}>
                  <h3>{policy.title}</h3>
                  <p>
                    {policy.description}
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
