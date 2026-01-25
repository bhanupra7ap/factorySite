import headerImg from "../assets/builder-bag-header.png";
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
          <h1>Builder Bags (FIBC)</h1>
          <p className="bags-hero-subtitle">Dependable Solutions for Heavy Construction Materials</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Premium Quality for Construction Excellence</h3>
          <p className="alt">
            Builder Bags are a dependable solution for handling and transporting heavy construction materials such as sand, gravel, soil, stones, and debris. Designed to carry loads between 500 kg to 2000 kg, these bags ensure safe, efficient, and dust-free movement of bulk materials across job sites.
          <br /> <br />
            Manufactured using high-quality woven polypropylene fabric, our Builder Bags provide a cost-effective and sustainable alternative to traditional jute or plastic sacks.
          </p>
        </section>

        <div className="bags-section">
          <h3>Key Features & Highlights</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Heavy-Duty Strength</h4>
              <p className="p-card">High tensile fabric supports heavy loads without compromising structural integrity.</p>
            </div>
            <div className="feature-card">
              <h4>Tear and Puncture Resistant</h4>
              <p className="p-card">Ideal for rough handling on construction sites and industrial environments.</p>
            </div>
            <div className="feature-card">
              <h4>UV Stabilized</h4>
              <p className="p-card">Protection from sunlight degradation for extended outdoor use.</p>
            </div>
            <div className="feature-card">
              <h4>Reusable & Recyclable</h4>
              <p className="p-card">Designed for sustainability, reducing environmental impact and costs.</p>
            </div>
            <div className="feature-card">
              <h4>Water Resistant</h4>
              <p className="p-card">Keeps contents dry and secure during storage and transport.</p>
            </div>
            <div className="feature-card">
              <h4>Low Stretch, No Odor</h4>
              <p className="p-card">Maintains structural integrity under stress with consistent performance.</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Key Applications</h3>
          <p>Builder Bags are versatile and used across multiple industries, including:</p>
          <ul>
            <li><strong>Construction Sites</strong> – Transporting sand, gravel, crushed stone, and aggregates</li>
            <li><strong>Waste Management</strong> – Collecting and disposing of site waste or scrap materials</li>
            <li><strong>Landscaping Projects</strong> – Moving soil and debris in landscaping projects</li>
            <li><strong>Bulk Handling</strong> – Bulk handling of fertilizers, cement, or dry mix materials</li>
          </ul>
        </div>

        <div className="bags-list">
          <h3>Beyond Construction — Versatile Utility</h3>
          <p>While primarily designed for the building industry, our Builder Bags also find applications in:</p>
          <ul>
            <li><strong>Agriculture:</strong> Storing and transporting grain, seeds, or fertilizers</li>
            <li><strong>Waste Management:</strong> Collecting recyclables or scrap materials</li>
            <li><strong>Landscaping:</strong> Handling soil, mulch, or decorative stones</li>
            <li><strong>Disaster Relief:</strong> Quick deployment for flood control or erosion barriers</li>
          </ul>
        </div>

        <div className="sustainability-section">
          <h3>Make the Smarter Choice</h3>
          <p>
            Our Builder Bags combine durability, safety, and efficiency, making them a trusted partner for construction professionals and industrial users alike. Whether you need bags for single-site use or regular operations, we ensure reliable quality at competitive pricing.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Quality Assurance</h4>
              <p className="p-card">Each bag undergoes strict quality checks to ensure consistent performance in demanding conditions</p>
            </div>
            <div className="sustainability-card">
              <h4>Cost-Effective Solution</h4>
              <p className="p-card">Competitive pricing without compromising on quality and performance</p>
            </div>
            <div className="sustainability-card">
              <h4>Quick Delivery</h4>
              <p className="p-card">Ex-stock availability ensures fast turnaround for your project needs</p>
            </div>
            <div className="sustainability-card">
              <h4>Expert Support</h4>
              <p className="p-card">Dedicated team to help you find the perfect FIBC solution for your project</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FIBC;
