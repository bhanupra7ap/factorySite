import headerImg from "../assets/circular-bag-header.png";
import "./bags.css";

const FIBC = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="bags-hero-content">
          <h1>Circular / Tubular (FIBC)</h1>
          <p className="bags-hero-subtitle">Seamless Design for Secure Bulk Material Handling</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Premium Quality Tubular Construction</h3>
          <p className="alt">
            Circular or Tubular Bags are designed for secure and efficient storage of bulk materials such as chemicals, grains, minerals, and food-grade products. These bags are woven from 100% virgin polypropylene, forming a seamless tubular body that minimizes stress points and prevents leakage, making them ideal for handling fine and hygroscopic materials.
          <br /> <br />
            The fabric is reinforced in multiple sections for enhanced stability and can be stitched to a square or round base, offering excellent shape retention even under heavy loads.
          </p>
        </section>

        <div className="bags-section">
          <h3>Key Features & Highlights</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Seamless Design</h4>
              <p className="p-card">Tubular construction eliminates vertical seams, reducing risk of material leakage or tearing.</p>
            </div>
            <div className="feature-card">
              <h4>High Strength & Durability</h4>
              <p className="p-card">Woven from premium-grade virgin polypropylene for maximum reliability.</p>
            </div>
            <div className="feature-card">
              <h4>Low Temperature Resistance</h4>
              <p className="p-card">Maintains flexibility and strength even in cold environments.</p>
            </div>
            <div className="feature-card">
              <h4>Food & Pharma Grade Compliance</h4>
              <p className="p-card">Made from contamination-free virgin polymer for safe handling of sensitive materials.</p>
            </div>
            <div className="feature-card">
              <h4>Easy Discharge System</h4>
              <p className="p-card">Bottom spout allows clean, controlled release of material without waste.</p>
            </div>
            <div className="feature-card">
              <h4>Customizable Options</h4>
              <p className="p-card">Available with liners, coatings, or anti-static features for sensitive materials.</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Key Applications</h3>
          <p>Circular FIBCs are widely used across industries due to their robust construction and adaptability. Typical uses include packaging and transporting:</p>
          <ul>
            <li><strong>Chemicals and Minerals</strong> – Safe for powders, granules, and dry raw materials</li>
            <li><strong>Food and Agriculture</strong> – Suitable for grains, sugar, rice, beans, nuts, and fertilizers</li>
            <li><strong>Construction</strong> – Used for cement, clay, and refractory products</li>
            <li><strong>Industrial Raw Materials</strong> – Including resins, dyes, plastics, and detergents</li>
            <li><strong>Pharmaceuticals</strong> – Safe containment for bulk pharmaceutical powders and intermediates</li>
          </ul>
        </div>

        <div className="bags-section">
          <h3>Why Choose Our Circular / Tubular FIBCs?</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Precision Manufacturing</h4>
              <p className="p-card">Each bag is woven on advanced circular looms for consistency in fabric density and dimensional accuracy. Reinforced sections ensure shape stability during filling, storage, and transport.</p>
            </div>
            <div className="feature-card">
              <h4>Versatile Handling</h4>
              <p className="p-card">Cross-corner or tunnel loops are securely stitched to the body, allowing smooth lifting using cranes or forklifts. These features enhance workplace safety and operational efficiency.</p>
            </div>
            <div className="feature-card">
              <h4>Flexible Customization</h4>
              <p className="p-card">We offer multiple filling and discharge designs — duffle tops, spout tops, flat or discharge bottoms — along with options for liners, lamination, and branding to suit your specific requirements.</p>
            </div>
            <div className="feature-card">
              <h4>Built for Safety</h4>
              <p className="p-card">All bags are tested for a minimum Safety Factor of 5:1 or 6:1, ensuring reliable performance under rated load capacities. Each bag undergoes rigorous load and stress tests before dispatch.</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Applications Beyond Storage</h3>
          <p>Circular Tubular Bags are not just containers — they are multi-purpose bulk handling solutions that enhance efficiency in:</p>
          <ul>
            <li><strong>Warehousing and Logistics:</strong> Efficient bulk storage and transport</li>
            <li><strong>Export Packaging:</strong> Secure international shipping of bulk materials</li>
            <li><strong>Disaster Management:</strong> Sand or flood barriers for emergency response</li>
            <li><strong>Mining and Mineral Handling:</strong> Robust containment for heavy materials</li>
          </ul>
        </div>

        <div className="sustainability-section">
          <h3>Make the Smarter Choice</h3>
          <p>
            Our Circular / Tubular FIBCs combine engineering precision with user convenience, delivering solutions that are strong, safe, and environmentally responsible. Whether you need bags for food-grade applications or industrial bulk handling, we ensure reliable quality at competitive pricing.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Quality Assurance</h4>
              <p className="p-card">Rigorous testing ensures each bag meets international standards for safety and performance</p>
            </div>
            <div className="sustainability-card">
              <h4>Sustainable Solutions</h4>
              <p className="p-card">Reusable, recyclable design using virgin-grade polypropylene and eco-conscious methods</p>
            </div>
            <div className="sustainability-card">
              <h4>Custom Manufacturing</h4>
              <p className="p-card">Tailored sizes, prints, and features to match your specific requirements</p>
            </div>
            <div className="sustainability-card">
              <h4>Expert Support</h4>
              <p className="p-card">Dedicated team to help you find the perfect FIBC solution for your industry</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FIBC;
