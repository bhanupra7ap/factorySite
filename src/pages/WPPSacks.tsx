import headerImg from "../assets/wpp-sack-header.jpg";
import wppSackImg1 from "../assets/wppsack1.png";
import wppSackImg2 from "../assets/wppsack2.png";
import wppSackImg3 from "../assets/wppsack3.png";
import "./bags.css";

const WPPSacks = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="bags-hero-content">
          <h1>WPP FIBC Sacks</h1>
          <p className="bags-hero-subtitle">Durable, Reliable & Cost-Effective Bulk Packaging</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Woven Polypropylene Bulk Bags</h3>
          <p className="alt">
            Our Woven Polypropylene (WPP) FIBC Sacks are engineered for superior
            strength, versatility, and performance in heavy-duty packaging
            applications. Designed to store and transport large volumes of dry,
            flowable materials, these sacks combine resilience with lightweight
            efficiency — making them one of the most widely used bulk packaging
            solutions across industries. Manufactured using high-quality woven polypropylene fabric, our WPP
            sacks deliver an ideal balance between cost efficiency, load
            capacity, and environmental responsibility.
          </p>
        </section>

        <div className="bags-image-section">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={wppSackImg1} alt="WPP FIBC Sacks Quality" />
          </div>
          <div className="section-content">
            <h3>What Are WPP FIBC Sacks?</h3>
            <p>
              WPP (Woven Polypropylene) sacks are flexible, strong, and reusable
              packaging containers made from woven strips of polypropylene. This
              woven construction offers exceptional tear resistance and
              load-bearing strength, ensuring safe and secure handling of goods
              during transport and storage.
            </p>
            <p>
              Depending on your application, these FIBCs can be customized in
              terms of fabric type, coating, and lifting configurations to meet
              your specific packaging requirements.
            </p>
          </div>
        </div>

        <div className="bags-section">
          <h3>Key Features & Specifications</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>High Tensile Strength Fabric</h4>
              <p className="p-card">Provides excellent resistance against tearing and puncturing.</p>
            </div>
            <div className="feature-card">
              <h4>Lightweight Yet Durable</h4>
              <p className="p-card">Reduces overall handling and shipping costs without compromising strength.</p>
            </div>
            <div className="feature-card">
              <h4>Moisture-Resistant Options</h4>
              <p className="p-card">Can be laminated or lined for additional protection against moisture.</p>
            </div>
            <div className="feature-card">
              <h4>UV Stabilized (Optional)</h4>
              <p className="p-card">Prevents material degradation from prolonged sunlight exposure.</p>
            </div>
            <div className="feature-card">
              <h4>Custom Printing Available</h4>
              <p className="p-card">Enables branding, barcoding, and easy product identification.</p>
            </div>
            <div className="feature-card">
              <h4>Variety of Designs</h4>
              <p className="p-card">Available in U-panel, circular, baffle, and conical shapes.</p>
            </div>
            <div className="feature-card">
              <h4>Multiple Lifting Loops</h4>
              <p className="p-card">Configurable for forklifts, cranes, or manual handling.</p>
            </div>
            <div className="feature-card">
              <h4>Eco-Friendly Construction</h4>
              <p className="p-card">Made from recyclable polypropylene for sustainability.</p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }} className="alt">
            Each WPP FIBC sack is engineered to provide exceptional performance
            while maintaining cost efficiency and environmental responsibility.
          </p>
        </div>

        <div className="bags-image-section reverse">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={wppSackImg2} alt="WPP FIBC Applications" />
          </div>
          <div className="section-content">
            <h3>Wide Range of Applications</h3>
            <p>
              WPP sacks are versatile and suited for packaging a wide range of
              industrial and agricultural materials. Their high load-bearing
              capacity and adaptability make them the preferred choice across
              several sectors.
            </p>
            <p>
              From agriculture to construction and chemicals, our bags are
              engineered to handle various materials with exceptional reliability
              and performance.
            </p>
          </div>
        </div>

        <div className="bags-list">
          <h3>Typical Applications</h3>
          <ul>
            <li><strong>Agriculture</strong> – Storage and transport of grains, seeds, and fertilizers</li>
            <li><strong>Construction</strong> – Sand, gravel, cement, and other building materials</li>
            <li><strong>Chemicals & Minerals</strong> – Powders, granules, and raw materials</li>
            <li><strong>Food & Feed Industry</strong> – Dry food products, animal feed, and additives</li>
            <li><strong>Recycling & Waste Management</strong> – Collection and handling of plastic, metal, or textile waste</li>
            <li><strong>Retail & Export Packaging</strong> – Safe and economical bulk transportation</li>
          </ul>
        </div>

        <div className="bags-image-section">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={wppSackImg3} alt="WPP FIBC Advantages" />
          </div>
          <div className="section-content">
            <h3>Quality & Manufacturing Standards</h3>
            <p>
              Our WPP FIBC sacks are produced under stringent quality control
              processes that ensure consistency, reliability, and compliance with
              international packaging standards.
            </p>
            <p>
              Every bag undergoes strength testing and inspection to guarantee safe
              use in demanding industrial conditions, providing you with peace of
              mind and reliable performance.
            </p>
          </div>
        </div>

        <div className="sustainability-section">
          <h3>Advantages of Choosing WPP FIBC Sacks</h3>
          <p>
            Our commitment to excellence ensures every bag meets the highest standards,
            delivering reliable packaging solutions that protect your valuable products.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Strength & Safety</h4>
              <p className="p-card">
                Each sack is designed to withstand heavy loads and rough handling without compromising structural integrity.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Cost Efficiency</h4>
              <p className="p-card">
                Their lightweight construction and reusability make them a highly economical alternative to rigid packaging systems.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Customization</h4>
              <p className="p-card">
                Available in multiple sizes, coatings, and closure styles to suit unique material requirements and logistics systems.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Eco-Conscious Manufacturing</h4>
              <p className="p-card">
                Made from recyclable PP material, helping reduce waste and support sustainable packaging initiatives.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Versatile Performance</h4>
              <p className="p-card">
                Suitable for diverse applications across agriculture, construction, chemicals, and industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WPPSacks;
