import headerImg from "../assets/wpp-fabric-header.png";
import wppFabricImg1 from "../assets/wppfabric1.png";
import wppFabricImg2 from "../assets/wppfabric2.png";
import wppFabricImg3 from "../assets/wppfabric3.png";
import "./bags.css";

const WPPFabric = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="bags-hero-content">
          <h1>WPP Fabric</h1>
          <p className="bags-hero-subtitle">Strong, Lightweight & Versatile Fabric for Industrial Packaging</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Woven Polypropylene Fabric</h3>
          <p className="alt">
            Our Woven Polypropylene (WPP) Fabric is a high-performance material
            designed for strength, flexibility, and durability. Manufactured using
            premium-grade polypropylene yarns, it forms the foundation for a wide
            range of packaging products — including FIBC bulk bags, tarpaulins,
            liners, and ground covers. Engineered with precision and produced under stringent quality
            controls, our WPP fabric offers superior mechanical strength and
            excellent resistance to tearing, puncture, and moisture — making it
            a trusted choice for industrial and agricultural packaging solutions
            worldwide.
          </p>
        </section>

        <div className="bags-image-section">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={wppFabricImg1} alt="WPP Fabric Quality" />
          </div>
          <div className="section-content">
            <h3>What Is Woven Polypropylene Fabric?</h3>
            <p>
              WPP fabric is created by weaving polypropylene tapes in two
              perpendicular directions, producing a lightweight yet extremely
              robust structure. This unique weaving pattern ensures that the fabric
              can handle high tensile stress while remaining flexible and easy to
              convert into finished packaging products.
            </p>
            <p>
              The fabric can be supplied coated (laminated) or uncoated (flat
              woven) depending on the end-use requirements.
            </p>
          </div>
        </div>

        <div className="bags-section">
          <h3>Key Features & Technical Advantages</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>High Tensile Strength</h4>
              <p className="p-card">Withstands heavy loads without deformation.</p>
            </div>
            <div className="feature-card">
              <h4>Tear & Abrasion Resistant</h4>
              <p className="p-card">Offers long service life even under rough handling.</p>
            </div>
            <div className="feature-card">
              <h4>Lightweight & Flexible</h4>
              <p className="p-card">Easy to handle, fold, and transport.</p>
            </div>
            <div className="feature-card">
              <h4>Moisture Protection</h4>
              <p className="p-card">Available with lamination for enhanced barrier properties.</p>
            </div>
            <div className="feature-card">
              <h4>UV Stabilized (Optional)</h4>
              <p className="p-card">Provides resistance to sunlight degradation for outdoor use.</p>
            </div>
            <div className="feature-card">
              <h4>Recyclable & Eco-Friendly</h4>
              <p className="p-card">100% recyclable polypropylene composition.</p>
            </div>
            <div className="feature-card">
              <h4>Custom Widths & GSM Options</h4>
              <p className="p-card">Available from lightweight to heavy-duty grades.</p>
            </div>
            <div className="feature-card">
              <h4>Printable Surface</h4>
              <p className="p-card">Suitable for custom branding and labeling.</p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }} className="alt">
            Each roll of WPP fabric is engineered to provide exceptional performance
            while maintaining versatility and environmental responsibility.
          </p>
        </div>

        <div className="bags-image-section reverse">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={wppFabricImg2} alt="WPP Fabric Types" />
          </div>
          <div className="section-content">
            <h3>Wide Range of Available Types</h3>
            <p>
              We manufacture and supply WPP fabric in a wide range of forms to suit
              various industrial needs. Our fabric types are designed to meet
              specific application requirements with optimal performance characteristics.
            </p>
            <p>
              From breathable uncoated options to moisture-resistant laminated variants,
              our product range ensures you find the perfect solution for your packaging needs.
            </p>
          </div>
        </div>

        <div className="bags-section">
          <h3>Available Fabric Types</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Flat (Uncoated) Fabric</h4>
              <p className="p-card">Ideal for applications requiring breathability.</p>
            </div>
            <div className="feature-card">
              <h4>Coated / Laminated Fabric</h4>
              <p className="p-card">Provides superior moisture and dust resistance.</p>
            </div>
            <div className="feature-card">
              <h4>Circular Woven Fabric</h4>
              <p className="p-card">Commonly used for seamless FIBC bags.</p>
            </div>
            <div className="feature-card">
              <h4>UV Protected Fabric</h4>
              <p className="p-card">Designed for outdoor or long-term storage use.</p>
            </div>
            <div className="feature-card">
              <h4>Anti-Static Options</h4>
              <p className="p-card">Available for specialized safety applications.</p>
            </div>
          </div>
        </div>

        <div className="bags-image-section">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={wppFabricImg3} alt="WPP Fabric Applications" />
          </div>
          <div className="section-content">
            <h3>Quality & Customization</h3>
            <p>
              Each roll of WPP fabric is produced on advanced circular and flat
              weaving looms and subjected to rigorous quality testing for
              strength, uniformity, and finish.
            </p>
            <p>
              We offer complete customization in GSM (30–240 GSM), width (up to 450 cm),
              color, and lamination thickness to meet diverse industrial requirements,
              ensuring optimal performance for your specific application needs.
            </p>
          </div>
        </div>

        <div className="bags-list">
          <h3>Typical Applications</h3>
          <ul>
            <li><strong>Manufacturing of FIBC Bulk Bags</strong> – PP Sacks, and Liners</li>
            <li><strong>Agricultural Covers</strong> – For grain storage, compost, and silage</li>
            <li><strong>Construction & Infrastructure</strong> – Sandbags, scaffolding sheets, and concrete covers</li>
            <li><strong>Tarpaulins & Ground Sheets</strong> – For industrial or outdoor covering</li>
            <li><strong>Furniture & Textile Industry</strong> – Backing materials and protective coverings</li>
            <li><strong>Recycling & Waste Handling</strong> – Heavy-duty collection and transport bags</li>
          </ul>
        </div>

        <div className="sustainability-section">
          <h3>Advantages of Choosing Our WPP Fabric</h3>
          <p>
            Our commitment to excellence ensures every fabric roll meets the highest standards,
            delivering reliable material solutions that form the foundation of quality packaging products.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>100% Recyclable Material</h4>
              <p className="p-card">
                Polypropylene fabric can be fully recycled at end of life, supporting
                circular economy principles and sustainable packaging initiatives.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Energy-Efficient Production</h4>
              <p className="p-card">
                Advanced manufacturing processes minimize energy consumption and reduce
                carbon footprint throughout the production cycle.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Reusable & Durable</h4>
              <p className="p-card">
                Long service life reduces the need for frequent replacement, lowering
                overall resource consumption and waste generation.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Reduced Waste Generation</h4>
              <p className="p-card">
                Precision manufacturing and quality control minimize production waste and
                material loss during fabrication processes.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Versatile Performance</h4>
              <p className="p-card">
                Suitable for diverse applications across agriculture, construction, packaging,
                and industrial sectors with customizable specifications.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WPPFabric;
