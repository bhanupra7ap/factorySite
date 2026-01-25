import headerImg from "../assets/rpp-header.png";
import rpp4 from "../assets/rpp4.png";
import rpp5 from "../assets/rpp5.png";
import rpp6 from "../assets/rpp6.png";
import rpp7 from "../assets/rpp7.png";
import "./bags.css";

const RPP = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="bags-hero-content">
          <h1>FIBC rPP</h1>
          <p className="bags-hero-subtitle">Sustainable Packaging for a Greener Tomorrow</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Recycled Polypropylene (PP) Bags</h3>
          <p className="alt">
            At Aries Packtech Pvt. Ltd., we believe sustainability begins with
            responsibility. Our Recycled Polypropylene (PP) Bags are designed to
            minimize environmental impact while maintaining the strength and
            performance expected from premium packaging solutions. By embracing
            recycling and reusability, we're proud to contribute to a cleaner
            planet and a more circular economy — where materials are continuously
            repurposed rather than discarded.
          </p>
        </section>

        <div className="bags-image-section">
          <div className="section-image">
            <img src={rpp4} alt="Recycled Polypropylene Bags" />
          </div>
          <div className="section-content">
            <h3>Why Choose Recycled Polypropylene?</h3>
            <p>
              Polypropylene is a durable, lightweight, and versatile plastic that
              can be efficiently recycled without losing its structural integrity.
              Reusing PP material conserves valuable natural resources and reduces
              the energy required to produce new plastic.
            </p>
            <p>
              We combine cutting-edge recycling practices with a deep understanding
              of environmental responsibility to create bags that maintain strength,
              durability, and performance throughout their lifecycle.
            </p>
          </div>
        </div>

        <div className="bags-section">
          <h3>Key Environmental Benefits</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Conserves Raw Materials</h4>
              <p className="p-card">Reduces dependency on virgin polymer extraction.</p>
            </div>
            <div className="feature-card">
              <h4>Minimizes Landfill Waste</h4>
              <p className="p-card">Diverts tons of plastic from landfill sites.</p>
            </div>
            <div className="feature-card">
              <h4>Energy Efficient</h4>
              <p className="p-card">Requires far less energy than producing new PP resin.</p>
            </div>
            <div className="feature-card">
              <h4>Supports a Circular Economy</h4>
              <p className="p-card">Promotes the reuse and regeneration of resources.</p>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }} className="alt">
            Each ton of recycled polypropylene can save significant landfill space
            while lowering carbon emissions associated with plastic manufacturing.
          </p>
        </div>

        <div className="sustainability-section">
          <h3>Advantages of Recycled Polypropylene Bags</h3>
          <p>
            We combine cutting-edge recycling practices with a deep understanding
            of environmental responsibility to create bags that maintain strength,
            durability, and performance throughout their lifecycle.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Environmentally Responsible</h4>
              <p className="p-card">
                Switching to recycled PP bags helps reduce plastic pollution and
                supports your company's sustainability initiatives. Every bag used
                contributes to a measurable reduction in waste generation.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Strong and Long-Lasting</h4>
              <p className="p-card">
                Recycled PP retains the inherent strength of the base polymer. Our
                bags are tough, tear-resistant, and suitable for multiple uses —
                ideal for packaging, transport, or daily carrying purposes.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Cost-Effective Solution</h4>
              <p className="p-card">
                Recycling reduces production costs and energy usage, enabling us to
                offer competitively priced, eco-conscious products without
                compromising on performance or quality.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Customizable and Versatile</h4>
              <p className="p-card">
                Available in various sizes, designs, and configurations, our recycled
                PP bags can be tailored to your exact needs — from bulk packaging and
                retail use to promotional products and storage solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="bags-image-section reverse">
          <div className="section-image">
            <img src={rpp5} alt="Recycling Process" />
          </div>
          <div className="section-content">
            <h3>Wide Range of Applications</h3>
            <p>
              Our recycled PP bags cater to diverse applications across various
              industries, ensuring sustainable packaging and reduced environmental
              impact during transport and storage.
            </p>
            <p>
              From industrial bulk packaging to retail solutions, our bags are
              engineered to handle various products with durability and environmental
              consciousness.
            </p>
          </div>
        </div>

        <div className="process-section">
          <h3>The Polypropylene Recycling Process</h3>
          <p className="p-card">
            Our recycling process ensures that every bag we manufacture meets high
            environmental and quality standards.
          </p>

          <div className="process-flow">
            <div className="process-step step-1">
              <div className="step-content">
                <h4 className="step-number">STEP 01</h4>
                <h5 className="step-title">Collection &amp; Sorting</h5>
                <p className="step-description">
                  Used PP materials are gathered and segregated from other plastics to ensure quality raw material for recycling.
                </p>
              </div>
            </div>

            <div className="process-step step-2">
              <div className="step-content">
                <h4 className="step-number">STEP 02</h4>
                <h5 className="step-title">Cleaning</h5>
                <p className="step-description">
                  Contaminants are removed through thorough washing and filtration to prepare the material for processing.
                </p>
              </div>
            </div>

            <div className="process-step step-3">
              <div className="step-content">
                <h4 className="step-number">STEP 03</h4>
                <h5 className="step-title">Shredding &amp; Pelletizing</h5>
                <p className="step-description">
                  The cleaned PP is shredded, melted, and converted into uniform pellets ready for manufacturing.
                </p>
              </div>
            </div>

            <div className="process-step step-4">
              <div className="step-content">
                <h4 className="step-number">STEP 04</h4>
                <h5 className="step-title">Reprocessing</h5>
                <p className="step-description">
                  These pellets are used to produce new, durable bags with reduced environmental impact and maintained quality.
                </p>
              </div>
            </div>
          </div>

          <p style={{ marginTop: '2rem' }}>
            Through this closed-loop system, we transform discarded materials into
            sustainable products that meet modern industrial needs.
          </p>
        </div>

        <div className="bags-image-section">
          <div className="section-image">
            <img src={rpp6} alt="Sustainable Packaging Solutions" />
          </div>
          <div className="section-content">
            <h3>Our Commitment to the Environment</h3>
            <p>
              Sustainability is more than a practice — it's our philosophy. At Aries
              Packtech Pvt. Ltd., we continue to innovate with eco-friendly packaging
              alternatives that protect both your goods and the environment.
            </p>
            <p>
              Every recycled PP bag we produce is a step toward waste reduction and
              resource conservation, helping businesses achieve their sustainability goals.
            </p>
          </div>
        </div>

        <div className="bags-list">
          <h3>Our Sustainability Goals</h3>
          <p>
            We are committed to creating a circular economy through responsible
            manufacturing and continuous innovation in sustainable packaging solutions.
          </p>
          <h4>Key Initiatives Include:</h4>
          <ul>
            <li>Expanding the use of recyclable and reusable materials</li>
            <li>Reducing plastic waste across the supply chain</li>
            <li>Promoting customer awareness about responsible packaging choices</li>
            <li>Investing in cleaner, energy-efficient production technologies</li>
          </ul>
        </div>

        <div className="bags-image-section reverse">
          <div className="section-image">
            <img src={rpp7} alt="Join the Green Initiative" />
          </div>
          <div className="section-content">
            <h3>Join the Green Initiative</h3>
            <p>
              By choosing our Recycled Polypropylene Bags, you're not only adopting a
              durable and practical packaging solution but also taking part in a global
              movement toward environmental stewardship.
            </p>
            <p>
              Together, we can turn sustainability into action — one recycled bag at a time.
              <strong> Contact us today</strong> to learn how our recycled PP products can
              align with your company's sustainability goals.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RPP;
