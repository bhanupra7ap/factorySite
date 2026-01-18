import headerImg from "../assets/fibc-header.jpg";
import "./bags.css";

const FIBC = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-header-image"
        style={{ backgroundImage: `url(${headerImg})` }}
        role="img"
        aria-label="FIBC header"
      >
  <h1 className="header-title">FIBC Type A, B &amp; C</h1>
      </div>

  <main className="content bags-content">
        <section className="intro">
          <h2>Types of FIBC Bags – A, B &amp; C</h2>
          <h3>Overview</h3>
          <p>
            Flexible Intermediate Bulk Containers (FIBCs), commonly known as
            bulk bags or jumbo bags, are engineered to safely store and
            transport dry, flowable materials across diverse industries.
            Depending on the static protection required, FIBCs are classified
            into three main types — Type A, Type B, and Type C — each designed
            for specific handling and safety conditions.
          <br /> <br />
            At Aries Packtech Pvt. Ltd., we provide FIBCs that are precisely
            designed and tested to match the operational and safety demands of
            your business. Our team assists in selecting the most suitable FIBC
            type for your material and environment to ensure efficiency and
            compliance with safety standards.
          </p>
        </section>

        <section className="type-section">
          <h3>Type A FIBC Bags</h3>

          
          <p>
            <h3>Description:</h3>
            Type A bags are the standard form of bulk containers made from
            plain woven polypropylene or similar non-conductive fabrics. These
            bags do not possess any static dissipative or conductive
            properties.
          </p>

          
          <p>
            <h3>Usage:</h3>
            They are ideal for storing and transporting non-flammable, dry
            materials where there is no presence of combustible dust or
            flammable vapors.
          </p>
          <p>
          <h3>Key Features:</h3>
          <ul className="features">
            <li>Constructed from non-conductive materials</li>
            <li>Economical and durable for general-purpose applications</li>
            <li>Suitable for materials such as grains, minerals, and
                construction aggregates</li>
          </ul>
          </p>

          <p>
          <h3>Safety Precautions:</h3>
          <ul className="safety">
            <li>Not suitable for flammable or combustible materials</li>
            <li>Avoid use in areas where flammable gases or vapors are present</li>
            <li>Prevent accumulation of static charges around the bag</li>
          </ul>

          </p>
        </section>

        <section className="type-section">
          <h3>Type B FIBC Bags</h3>

          
          <p>
            <h3>Description:</h3>
            Type B FIBCs are similar in construction to Type A but use fabric
            with a low breakdown voltage (&lt; 6 kV). This design minimizes the
            risk of highly energetic discharges known as propagating brush
            discharges.
          </p>

          
          <p>
            <h3>Usage:</h3>
            Best suited for transporting dry, flammable powders where no
            flammable gases or vapors are present.
          </p>

          <p>
          <h3>Key Features:</h3>
          <ul className="features">
            <li>Made from non-conductive polypropylene with controlled breakdown voltage</li>
            <li>Prevents propagating brush discharges</li>
            <li>Offers improved safety in handling combustible powders</li>
          </ul>
          </p>

          <p>
          <h3>Safety Precautions:</h3>
          <ul className="safety">
            <li>Do not use where flammable gases or vapors exist</li>
            <li>Keep away from environments with ignition energies below 3 mJ</li>
            <li>Ensure static-free operations through proper grounding of surrounding equipment</li>
          </ul>
          </p>
        </section>

        <section className="type-section">
          <h3>Type C FIBC Bags (Conductive Bags)</h3>

          
          <p>
            <h3>Description:</h3>
            Type C, or conductive FIBCs, are manufactured from fabrics
            interwoven with conductive threads, creating a grid that allows
            static charges to safely dissipate when properly grounded.
          </p>

          <p>
            <h3>Usage:</h3>
            They are designed for operations involving flammable powders,
            vapors, or gases, where static control is essential.
          </p>

          <p>
          <h3>Key Features:</h3>
          <ul className="features">
            <li>Conductive grid ensures charge dissipation during filling and discharge</li>
            <li>Must be electrically grounded during use</li>
            <li>Highly reliable in electrostatically sensitive environments</li>
            <li>Recommended for chemical, pharmaceutical, and fine-powder industries</li>
          </ul>
          </p>

          <p>
          <h3>Safety Precautions:</h3>
          <ul className="safety">
            <li>Always connect the bag to a verified ground point</li>
            <li>Never use Type C bags if grounding continuity is compromised</li>
            <li>Regularly inspect earthing systems to maintain safety integrity</li>
          </ul>
          </p>
        </section>

        <section className="choosing">
          <h3>Choosing the Right Type</h3>
          <p>Selecting the right FIBC depends on:<br /> <br />
          <ul>
            <li>The flammability of the material being handled</li>
            <li>The presence of dust, vapor, or gas in the working environment</li>
            <li>The safety standards applicable to your industry</li>
          </ul>
          <br />
            Our specialists can guide you in choosing the correct bag type to
            ensure operational safety and efficiency.
          </p>
        </section>
      </main>
    </div>
  );
};

export default FIBC;
