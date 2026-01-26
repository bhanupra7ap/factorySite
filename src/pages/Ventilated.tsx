import headerImg from "../assets/ventilated-header.png";
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
          <h1>Ventilated FIBC Bags</h1>
          <p className="bags-hero-subtitle">Breathable Bulk Bags for Fresh and Dry Agricultural Products</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Engineered for Airflow and Freshness</h3>
          <p className="alt">
            Ventilated FIBC Bags — also known as Breathable Bulk Bags — are specifically engineered for packaging materials that require continuous airflow to stay fresh and dry.
            Manufactured using ventilated woven polypropylene fabric, these bags feature breathable strips or mesh panels that allow air circulation, helping to prevent mold growth, sprouting, or moisture accumulation.
          <br /> <br />
            They are the ideal packaging solution for agricultural products such as potatoes, onions, carrots, and other produce, as well as firewood and similar moisture-prone materials.
          </p>
        </section>

        <div className="bags-section">
          <h3>Key Advantages of Ventilated FIBC Bags</h3>
          <p>Our ventilated FIBCs are designed to maintain product quality, freshness, and safety while optimizing efficiency in handling and logistics.</p>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Optimal Airflow</h4>
              <p className="p-card">Continuous ventilation prevents condensation and heat buildup</p>
            </div>
            <div className="feature-card">
              <h4>Prevents Spoilage</h4>
              <p className="p-card">Reduces mold growth and sprouting in perishable goods</p>
            </div>
            <div className="feature-card">
              <h4>Lightweight and Strong</h4>
              <p className="p-card">High strength-to-weight ratio ensures safe transport</p>
            </div>
            <div className="feature-card">
              <h4>UV and Weather Resistant</h4>
              <p className="p-card">Fabric stabilized for outdoor exposure</p>
            </div>
            <div className="feature-card">
              <h4>Reusable and Cost-Effective</h4>
              <p className="p-card">Durable enough for multiple uses</p>
            </div>
            <div className="feature-card">
              <h4>Customizable Design</h4>
              <p className="p-card">Choice of mesh type, bag size, and printing options</p>
            </div>
            <div className="feature-card">
              <h4>Easy Handling</h4>
              <p className="p-card">Compatible with forklifts, cranes, and pallet systems</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Applications of Ventilated Bags</h3>
          <p>
            Ventilated Bulk Bags are essential for industries that require breathable, moisture-regulating packaging for perishable or organic materials.
          </p>
          <p>Common applications include:</p>
          <ul>
            <li><strong>Agriculture:</strong> Storage and transport of potatoes, onions, carrots, and peanuts</li>
            <li><strong>Forestry:</strong> Packaging and transport of firewood, wood chips, and bark</li>
            <li><strong>Food Industry:</strong> For semi-dry food products and commodities that require airflow</li>
            <li><strong>Horticulture:</strong> Suitable for compost, soil blends, or organic fertilizers</li>
            <li><strong>Recycling and Biomass:</strong> Handling waste materials that benefit from air circulation</li>
          </ul>
        </div>

        <div className="bags-section">
          <h3>Why Choose Our Ventilated FIBCs</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Engineered for Product Preservation</h4>
              <p className="p-card">The ventilated structure promotes consistent airflow, maintaining the freshness and shelf life of your agricultural produce or organic materials.</p>
            </div>
            <div className="feature-card">
              <h4>Precision Manufacturing</h4>
              <p className="p-card">Our ventilated bags are woven on high-speed circular looms with precision vent spacing, ensuring uniform airflow and consistent performance batch after batch.</p>
            </div>
            <div className="feature-card">
              <h4>Custom-Built for Your Needs</h4>
              <p className="p-card">Available in multiple sizes, loop configurations, and venting styles, these bags can be tailored to meet your product's unique storage and transport conditions.</p>
            </div>
            <div className="feature-card">
              <h4>Durability & Safety Assured</h4>
              <p className="p-card">With a Safety Factor (SF) of 5:1 or 6:1, all bags are tested for load strength, seam quality, and airflow efficiency, ensuring safety and reliability under demanding conditions.</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Benefits of Using Ventilated FIBC Bags</h3>
          <ul>
            <li><strong>Preserves Freshness:</strong> Prevents rotting and maintains natural color and firmness of produce</li>
            <li><strong>Extends Shelf Life:</strong> Ensures better quality retention during shipping and storage</li>
            <li><strong>Reduces Losses:</strong> Minimizes product spoilage and waste</li>
            <li><strong>Environmentally Friendly:</strong> Recyclable fabric reduces plastic waste</li>
            <li><strong>Efficient Handling:</strong> Stackable and forklift-friendly design</li>
            <li><strong>Moisture Control:</strong> Maintains an optimal humidity balance inside the bag</li>
          </ul>
        </div>

        <div className="bags-list">
          <h3>Manufacturing & Quality</h3>
          <p>
            Every Ventilated FIBC is produced in a controlled environment using UV-stabilized virgin polypropylene.
            Advanced ventilation and stitching technology ensure consistency in airflow and durability. Each bag is tested for tensile strength, airflow, and load performance before dispatch.
          </p>
          <p>
            Our products comply with international FIBC quality standards, ensuring performance and safety across agricultural and industrial applications.
          </p>
        </div>

        <div className="bags-list">
          <h3>Comparison: Ventilated vs. Standard FIBC</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Feature</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Ventilated FIBC</th>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Standard FIBC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Air Permeability</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>High (breathable fabric)</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>None (sealed weave)</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Ideal For</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Fruits, vegetables, wood, organics</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Cement, sand, chemicals</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Spoilage Prevention</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Excellent</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Limited</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Moisture Handling</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Controls humidity</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Sealed environment</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Typical Use</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Food & agriculture</td>
                <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>Industrial & construction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sustainability-section">
          <h3>Sustainability Commitment</h3>
          <p>
            We are committed to sustainable packaging innovation.
            Our ventilated FIBCs are recyclable, lightweight, and energy-efficiently produced, aligning with our mission to reduce environmental impact while enhancing supply-chain efficiency.
          </p>
          <p>
            By adopting ventilated bags, our clients contribute to lower food waste, reduced carbon footprint, and a more circular packaging ecosystem.
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
