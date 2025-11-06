import headerImg from "../assets/fibc-header.jpg";
import "./bags.css";

const FIBC = () => {
  return (
    <div className="page bags-page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Builder Bags (FIBC)</h1>
      </div>
      <div className="content">
        
        <section className="intro">
          <h2>Overview</h2>
          <p>
            Builder Bags are a dependable solution for handling and transporting heavy construction materials such as sand, gravel, soil, stones, and debris. Designed to carry loads between 500 kg to 2000 kg, these bags ensure safe, efficient, and dust-free movement of bulk materials across job sites.
          <br /><br />
            Manufactured using high-quality woven polypropylene fabric, our Builder Bags provide a cost-effective and sustainable alternative to traditional jute or plastic sacks.
          </p>
        </section>

        <section className="type-section">
          <h2>Available Sizes</h2>
          <p>We supply standard and custom-size Builder Bags to meet diverse site requirements:<br />
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Size (cm)</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Capacity</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>85 x 85 x 85</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1000 kg</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Ex-stock Available</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>90 x 90 x 90</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1000 kg</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Ex-stock & Customizable</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>90 x 90 x 110</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>1500 kg</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>On Order</td>
              </tr>
            </tbody>
          </table>
          <br />
          Custom sizes and printing options are available upon request to suit your brand or material-handling needs.</p>
        </section>

        <section className="type-section">
          <h2>Key Applications</h2>
          <p>Builder Bags are versatile and used across multiple industries, including:<br />
          <ul className="features">
            <li>Transporting sand, gravel, crushed stone, and aggregates</li>
            <li>Collecting and disposing of site waste or scrap materials</li>
            <li>Moving soil and debris in landscaping projects</li>
            <li>Bulk handling of fertilizers, cement, or dry mix materials</li>
          </ul>
          </p>
        </section>

        <section className="type-section">
          <h2>Advantages of Our Builder Bags</h2>
          <p>Our FIBC Builder Bags are engineered for durability and ease of use:<br />
          <ul className="features">
            <li><strong>Heavy-Duty Strength</strong> – High tensile fabric supports heavy loads</li>
            <li><strong>Tear and Puncture Resistant</strong> – Ideal for rough handling on sites</li>
            <li><strong>UV Stabilized</strong> – Protection from sunlight degradation</li>
            <li><strong>Reusable & Recyclable</strong> – Designed for sustainability</li>
            <li><strong>Water Resistant</strong> – Keeps contents dry and secure</li>
            <li><strong>Low Stretch, No Odor</strong> – Maintains structural integrity under stress</li>
          </ul>
          <br />
          Each bag undergoes strict quality checks to ensure consistent performance in demanding conditions.</p>
        </section>

        <section className="type-section">
          <h2>Why Choose Our Builder Bags?</h2>
          <p>
          
          <h3>1. Rugged Construction</h3>
          <p>
            Crafted from woven polypropylene with reinforced loops, our bags maintain their shape even under maximum load. They are built to handle bulk aggregates and construction waste without tearing or leakage.
          </p>

          <h3>2. Custom Branding</h3>
          <p>
            We offer multi-color printing and logo customization to enhance your company's visibility while ensuring product traceability on every job site.
          </p>

          <h3>3. Safe Handling</h3>
          <p>
            With strong lifting loops and an optimized design for forklifts and cranes, these bags make bulk movement simple, quick, and safe.
          </p>

          <h3>4. Multiple-Use Options</h3>
          <p>
            Available in both single-trip and multi-trip variants, the bags can be reused depending on your handling cycles and storage requirements.
          </p>
          </p>
        </section>

        <section className="type-section">
          <h2>Beyond Construction — Versatile Utility</h2>
          <p>While primarily designed for the building industry, our Builder Bags also find applications in:<br />
          <ul className="features">
            <li><strong>Agriculture:</strong> Storing and transporting grain, seeds, or fertilizers</li>
            <li><strong>Waste Management:</strong> Collecting recyclables or scrap materials</li>
            <li><strong>Landscaping:</strong> Handling soil, mulch, or decorative stones</li>
            <li><strong>Disaster Relief:</strong> Quick deployment for flood control or erosion barriers</li>
          </ul>
          </p>
        </section>

        <section className="choosing">
          <h2>Make the Smarter Choice</h2>
          <p>
            Our Builder Bags combine durability, safety, and efficiency, making them a trusted partner for construction professionals and industrial users alike. Whether you need bags for single-site use or regular operations, we ensure reliable quality at competitive pricing.
          <br />
            <strong>Get in touch today to discuss your size and printing requirements.</strong><br />
            Let us help you find the perfect FIBC solution for your next project.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FIBC;
