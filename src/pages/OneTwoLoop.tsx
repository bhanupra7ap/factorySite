import headerImg from "../assets/one-two-loop-header.png";
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
          <h1>One / Two Loop Bag (FIBC)</h1>
          <p className="bags-hero-subtitle">Compact, Durable, and Cost-Efficient Bulk Packaging Solutions</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Simplified Lifting, Maximum Efficiency</h3>
          <p className="alt">
            One and Two Loop Bags are compact, durable, and cost-efficient FIBCs (Flexible Intermediate Bulk Containers) designed for easy lifting, reduced handling time, and high load capacity.
            Unlike traditional four-loop bulk bags, these feature integrated lifting loops made from the same polypropylene fabric, ensuring superior strength and a simplified lifting design.
          <br /><br />
            These bags are particularly favored in agriculture, fertilizer, and construction industries, where materials such as grains, cement, minerals, fertilizers, and chemicals are handled in large quantities.
          </p>
        </section>

        <div className="bags-list">
          <h3>Key Applications</h3>
          <p>One and Two Loop FIBCs are widely used across sectors requiring bulk, lightweight, and stackable storage. Common applications include:</p>
          <ul>
            <li><strong>Agriculture:</strong> Packaging of grains, seeds, and fertilizers</li>
            <li><strong>Construction:</strong> Bulk transport of cement, sand, and mineral powder</li>
            <li><strong>Chemicals:</strong> Safe handling of dry chemical compounds and additives</li>
            <li><strong>Food & Feed:</strong> Storage of food grains, salt, or animal feed</li>
            <li><strong>Mining & Minerals:</strong> Ideal for ores, limestone, and processed powders</li>
            <li><strong>Industrial Raw Materials:</strong> Handling of resins, pigments, and fine powders</li>
          </ul>
        </div>

        <div className="bags-section">
          <h3>Advantages of One / Two Loop Bags</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>High Loading Efficiency</h4>
              <p className="p-card">Simplified lifting with one or two strong loops for quick movement</p>
            </div>
            <div className="feature-card">
              <h4>Reduced Handling Time</h4>
              <p className="p-card">Ideal for use with cranes and hooks, minimizing operator effort</p>
            </div>
            <div className="feature-card">
              <h4>Cost-Effective Solution</h4>
              <p className="p-card">Economical compared to four-loop designs while retaining similar capacity</p>
            </div>
            <div className="feature-card">
              <h4>Easy Identification</h4>
              <p className="p-card">Colored sleeves or bands can be added to classify materials by type or batch</p>
            </div>
            <div className="feature-card">
              <h4>Space-Saving Design</h4>
              <p className="p-card">Compact structure allows efficient stacking and storage</p>
            </div>
            <div className="feature-card">
              <h4>Weather and UV Resistance</h4>
              <p className="p-card">Fabric protection ensures long service life under outdoor conditions</p>
            </div>
          </div>
        </div>

        <div className="bags-section">
          <h3>Why Choose Our Loop Bags</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Integrated Strength Design</h4>
              <p className="p-card">Each loop is an extension of the bag's woven fabric, eliminating the need for separate stitched handles and improving load uniformity. This makes handling safer and extends the bag's lifespan.</p>
            </div>
            <div className="feature-card">
              <h4>Versatile Configurations</h4>
              <p className="p-card">Available in single-loop (for quick crane lifting) or two-loop (for balanced load handling) designs, these bags can be tailored with open, spout, or duffle tops based on your filling system.</p>
            </div>
            <div className="feature-card">
              <h4>Enhanced Safety & Load Assurance</h4>
              <p className="p-card">Tested under strict international standards, all our loop bags carry a Safety Factor (SF) of 5:1 or 6:1, ensuring secure lifting of heavy loads up to 3000 kg.</p>
            </div>
            <div className="feature-card">
              <h4>Customization Options</h4>
              <p className="p-card">You can choose between various fabrics, coatings, colors, liners, and printing options for easy identification, brand promotion, or material segregation.</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Manufacturing & Quality</h3>
          <p>
            Manufactured using precision looms and automated stitching equipment, our Loop Bags ensure uniform strength and consistent fabric tension. Each bag undergoes stringent load and drop testing before dispatch.
          </p>
          <p>
            Our process adheres to ISO and global FIBC standards, guaranteeing safety, hygiene, and product reliability.
          </p>
        </div>

        <div className="bags-list">
          <h3>Industries Benefiting from Loop Bags</h3>
          <p>One and Two Loop Bags are used across diverse sectors for bulk transport and storage:</p>
          <ul>
            <li>Agriculture & Fertilizer Manufacturing</li>
            <li>Cement & Construction Materials</li>
            <li>Chemical & Petrochemical Industries</li>
            <li>Food & Grain Storage</li>
            <li>Mining & Mineral Processing</li>
            <li>Logistics & Warehousing Operations</li>
          </ul>
        </div>

        <div className="sustainability-section">
          <h3>Sustainability Commitment</h3>
          <p>
            We use recyclable polypropylene materials and energy-efficient manufacturing processes to create eco-friendly packaging solutions that align with modern sustainability goals.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Recyclable Materials</h4>
              <p className="p-card">Our bags are made from recyclable polypropylene, reducing environmental impact</p>
            </div>
            <div className="sustainability-card">
              <h4>Reusable Design</h4>
              <p className="p-card">Built for multiple uses, extending product lifecycle and reducing waste</p>
            </div>
            <div className="sustainability-card">
              <h4>Lightweight Construction</h4>
              <p className="p-card">Reduces carbon footprint across logistics operations</p>
            </div>
            <div className="sustainability-card">
              <h4>Energy-Efficient Production</h4>
              <p className="p-card">Modern manufacturing processes minimize energy consumption</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FIBC;
