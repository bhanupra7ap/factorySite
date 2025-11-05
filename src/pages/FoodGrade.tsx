import headerImg from "../assets/fibc-header.jpg";
import "./bags.css";

const FIBC = () => {
  return (
    <div className="page bags-page">
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <h1 className="header-title">Food Grade FIBC Bulk Bags</h1>
      </div>

      <div className="content">
        <h2>Safe, Hygienic & Certified Packaging Solutions for Food Products</h2>

        <p>
          Our Food Grade FIBC Bags are designed to uphold the highest standards of
          safety, cleanliness, and durability for food and agricultural
          packaging. Manufactured from 100% virgin polypropylene, these bags
          ensure compliance with international food safety regulations and
          deliver uncompromised product protection from production to final
          delivery.
        <br /> <br />
          Each bag is crafted in controlled, cleanroom environments, following
          strict hygiene protocols and comprehensive quality assurance
          processes. The result — contamination-free, reliable, and sustainable
          bulk packaging trusted across the food supply chain.
        </p>

        <h3>Why Choose Our Food Grade Bulk Bags?</h3>
        <p>
          We combine cutting-edge manufacturing practices with a deep
          understanding of food-grade requirements to create FIBCs that maintain
          freshness, integrity, and purity throughout handling, storage, and
          transport.
        </p>

        <p>
        <h3>Highlights</h3>
        <ul className="features-list">
          <li>
            <strong>100% Virgin Polypropylene Resin</strong> – Ensures purity
            and meets FDA food contact norms.
          </li>
          <li>
            <strong>Certified Production Units</strong> – Manufactured in HACCP
            and BRC-compliant clean facilities.
          </li>
          <li>
            <strong>Sift-Proof Seams</strong> – Prevents leakage and
            cross-contamination.
          </li>
          <li>
            <strong>UV-Stabilized Fabric (Optional)</strong> – Shields contents
            from prolonged sunlight exposure.
          </li>
          <li>
            <strong>Moisture Protection Options</strong> – Offers humidity and
            vapor resistance for delicate products.
          </li>
          <li>
            <strong>Custom Printing Solutions</strong> – Enables branding and
            traceability with food-safe inks.
          </li>
          <li>
            <strong>Multiple Lifting Configurations</strong> – Designed for easy,
            efficient material handling.
          </li>
        </ul>
        </p>

        <p>
        <h3>Applications</h3>
        
          Our food-grade bulk bags cater to a wide range of applications in the
          food processing, agriculture, and allied industries, ensuring hygienic
          packaging and reduced product loss during transport.
        </p>

        <p>
        <h3>Common Uses Include:</h3>
        <ul className="uses-list">
          <li>Grains & Cereals – Wheat, rice, maize, pulses, and similar staples</li>
          <li>Flour & Powdered Ingredients – Wheat flour, protein blends, and mixes</li>
          <li>Sugar & Sweeteners – Refined sugar, jaggery, and natural sweeteners</li>
          <li>Spices & Seasoning Mixes – Ground or whole spices, flavoring powders</li>
          <li>Nuts & Seeds – Peanuts, cashews, sunflower seeds, and similar produce</li>
          <li>Animal Feed & Supplements – Pet food, feed ingredients, and additives</li>
          <li>Dried Fruits & Dehydrated Items – Raisins, dates, apricots, etc.</li>
          <li>Food Additives – Colorants, stabilizers, and preservatives</li>
        </ul>
        </p>

        <p>
        <h3>Commitment to Sustainability</h3>
          Our food-grade bulk bags are engineered not only for safety but also for
          sustainability. By promoting reuse and recyclability, we help
          businesses minimize environmental impact while maintaining quality
          performance.
        </p>

        <p>
        <h3>Eco-Friendly Advantages:</h3>
        <ul className="sustainability-list">
          <li>
            <strong>Reusable Construction</strong> – Enables multiple usage cycles
            to cut down on waste
          </li>
          <li>
            <strong>100% Recyclable Material</strong> – Polypropylene fabric can be
            fully recycled
          </li>
          <li>
            <strong>Reduced Carbon Emissions</strong> – Optimized logistics and
            bulk handling lower fuel use
          </li>
          <li>
            <strong>Less Packaging Waste</strong> – Eliminates dependency on
            single-use bags
          </li>
          <li>
            <strong>Energy-Efficient Manufacturing</strong> – Supports sustainable
            production practices
          </li>
        </ul>
        </p>
      </div>
    </div>
  );
};

export default FIBC;
