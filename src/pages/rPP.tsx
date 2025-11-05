import headerImg from "../assets/fibc-header.jpg";
import "./bags.css";

const RPP = () => {
  return (
    <div className="page bags-page">
      <div
        className="header-image"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <h1 className="header-title">FIBC rPP</h1>
      </div>

      <div className="content">
        <h2>Recycled Polypropylene (PP) Bags</h2>
        <p className="intro">
          Sustainable Packaging for a Greener Tomorrow
        <br /> <br />
          At Varuna Polypack, we believe sustainability begins with
          responsibility. Our Recycled Polypropylene (PP) Bags are designed to
          minimize environmental impact while maintaining the strength and
          performance expected from premium packaging solutions. By embracing
          recycling and reusability, we’re proud to contribute to a cleaner
          planet and a more circular economy — where materials are continuously
          repurposed rather than discarded.
        </p>

        <h3>Why Choose Recycled Polypropylene?</h3>
        <p>
          Polypropylene is a durable, lightweight, and versatile plastic that
          can be efficiently recycled without losing its structural integrity.
          Reusing PP material conserves valuable natural resources and reduces
          the energy required to produce new plastic.
        </p>

        <h3>Key Environmental Benefits:</h3>
        <p>
          <ul className="features-list">
            <li>Conserves Raw Materials – Reduces dependency on virgin polymer extraction.</li>
            <li>Minimizes Landfill Waste – Diverts tons of plastic from landfill sites.</li>
            <li>Energy Efficient – Requires far less energy than producing new PP resin.</li>
            <li>Supports a Circular Economy – Promotes the reuse and regeneration of resources.</li>
          </ul>
        </p>
        <p>
          Each ton of recycled polypropylene can save significant landfill space
          while lowering carbon emissions associated with plastic manufacturing.
        </p>

        <div className="type-section">
          <h3>Advantages of Recycled Polypropylene Bags</h3>
          <p>
          <ol className="features-list" style={{ color: '#ff8c00' }}>
            <li>
              <strong>Environmentally Responsible</strong>
              <p>
                Switching to recycled PP bags helps reduce plastic pollution and
                supports your company’s sustainability initiatives. Every bag used
                contributes to a measurable reduction in waste generation.
              </p>
            </li>

            <li>
              <strong>Strong and Long-Lasting</strong>
              <p>
                Recycled PP retains the inherent strength of the base polymer. Our
                bags are tough, tear-resistant, and suitable for multiple uses —
                ideal for packaging, transport, or daily carrying purposes.
              </p>
            </li>

            <li>
              <strong>Cost-Effective Solution</strong>
              <p>
                Recycling reduces production costs and energy usage, enabling us to
                offer competitively priced, eco-conscious products without
                compromising on performance or quality.
              </p>
            </li>

            <li>
              <strong>Customizable and Versatile</strong>
              <p>
                Available in various sizes, designs, and configurations, our recycled
                PP bags can be tailored to your exact needs — from bulk packaging and
                retail use to promotional products and storage solutions.
              </p>
            </li>
          </ol>
          </p>
        </div>

        <div className="type-section">
          <h3>The Polypropylene Recycling Process</h3>
          <p>
            Our recycling process ensures that every bag we manufacture meets high
            environmental and quality standards.
          <br /> <br />

          <h4>Process Overview:</h4>
          <ul className="features-list">
            <li>
              <strong>Collection &amp; Sorting</strong> – Used PP materials are gathered and segregated from other plastics.
            </li>
            <li>
              <strong>Cleaning</strong> – Contaminants are removed through thorough washing and filtration.
            </li>
            <li>
              <strong>Shredding &amp; Pelletizing</strong> – The cleaned PP is shredded, melted, and converted into pellets.
            </li>
            <li>
              <strong>Reprocessing</strong> – These pellets are used to produce new, durable bags with reduced environmental impact.
            </li>
          </ul>

          <br /> <br />
            Through this closed-loop system, we transform discarded materials into
            sustainable products that meet modern industrial needs.
          </p>
        </div>

        <div className="type-section">
          <h3>Our Commitment to the Environment</h3>
          <p>
            Sustainability is more than a practice — it’s our philosophy. At Varuna Polypack, we continue to innovate with eco-friendly packaging alternatives that protect both your goods and the environment. Every recycled PP bag we produce is a step toward waste reduction and resource conservation.
          <br /> <br />

          <h4>Our Sustainability Goals Include:</h4>
          <ul className="sustainability-list">
            <li>Expanding the use of recyclable and reusable materials</li>
            <li>Reducing plastic waste across the supply chain</li>
            <li>Promoting customer awareness about responsible packaging choices</li>
            <li>Investing in cleaner, energy-efficient production technologies</li>
          </ul>
          </p>
        </div>

        <div className="type-section">
          <h3>Join the Green Initiative</h3>
          <p>
            By choosing our Recycled Polypropylene Bags, you’re not only adopting a durable and practical packaging solution but also taking part in a global movement toward environmental stewardship. Together, we can turn sustainability into action — one recycled bag at a time.
          <br /> <br />
            <strong>Contact us today</strong> to learn how our recycled PP products can align with your company’s sustainability goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RPP;
