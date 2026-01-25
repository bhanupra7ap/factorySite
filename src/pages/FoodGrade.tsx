import foodGradeImg from "../assets/food-grade.png";
import foodGrade1 from "../assets/food-grade-Photoroom.png";
import foodGrade2 from "../assets/food-grade-2-Photoroom.png";
import foodGrade3 from "../assets/food-grade-3-Photoroom.png";
import "./bags.css";

const FIBC = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{
          backgroundImage: `url(${foodGradeImg})`,
        }}
      >
        <div className="bags-hero-content">
          <h1>Food Grade FIBC Bulk Bags</h1>
          <p className="bags-hero-subtitle">Safe, Hygienic & Certified Packaging Solutions</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Premium Quality for Food Safety Excellence</h3>
          <p className="alt">
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
        </section>

        <div className="bags-image-section">
          <div className="section-image">
            <img src={foodGrade1} alt="Food Grade FIBC Quality" />
          </div>
          <div className="section-content">
            <h3>Why Choose Our Food Grade Bulk Bags?</h3>
            <p>
              We combine cutting-edge manufacturing practices with a deep
              understanding of food-grade requirements to create FIBCs that maintain
              freshness, integrity, and purity throughout handling, storage, and
              transport.
            </p>
            <p>
              Our commitment to excellence ensures every bag meets stringent quality
              standards, providing you with reliable packaging solutions that protect
              your valuable food products.
            </p>
          </div>
        </div>

        <div className="bags-section">
          <h3>Key Features & Highlights</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>100% Virgin Polypropylene Resin</h4>
              <p className="p-card">Ensures purity and meets FDA food contact norms for safe packaging of edible products.</p>
            </div>
            <div className="feature-card">
              <h4>Certified Production Units</h4>
              <p className="p-card">Manufactured in HACCP and BRC-compliant clean facilities with strict quality control.</p>
            </div>
            <div className="feature-card">
              <h4>Sift-Proof Seams</h4>
              <p className="p-card">Prevents leakage and cross-contamination, ensuring product integrity during transport.</p>
            </div>
            <div className="feature-card">
              <h4>UV-Stabilized Fabric</h4>
              <p className="p-card">Optional UV protection shields contents from prolonged sunlight exposure.</p>
            </div>
            <div className="feature-card">
              <h4>Moisture Protection</h4>
              <p className="p-card">Advanced humidity and vapor resistance options for delicate food products.</p>
            </div>
            <div className="feature-card">
              <h4>Custom Printing Solutions</h4>
              <p className="p-card">Food-safe inks enable clear branding and traceability for your products.</p>
            </div>
          </div>
        </div>

        <div className="bags-image-section reverse">
          <div className="section-image">
            <img src={foodGrade2} alt="Food Grade FIBC Applications" />
          </div>
          <div className="section-content">
            <h3>Wide Range of Applications</h3>
            <p>
              Our food-grade bulk bags cater to diverse applications in the
              food processing, agriculture, and allied industries, ensuring hygienic
              packaging and reduced product loss during transport.
            </p>
            <p>
              From grains and cereals to specialized food additives, our bags are
              engineered to handle various food products with the utmost care and
              protection.
            </p>
          </div>
        </div>

        <div className="bags-list">
          <h3>Common Applications</h3>
          <ul>
            <li><strong>Grains & Cereals</strong> – Wheat, rice, maize, pulses, and similar staples</li>
            <li><strong>Flour & Powdered Ingredients</strong> – Wheat flour, protein blends, and mixes</li>
            <li><strong>Sugar & Sweeteners</strong> – Refined sugar, jaggery, and natural sweeteners</li>
            <li><strong>Spices & Seasoning Mixes</strong> – Ground or whole spices, flavoring powders</li>
            <li><strong>Nuts & Seeds</strong> – Peanuts, cashews, sunflower seeds, and similar produce</li>
            <li><strong>Animal Feed & Supplements</strong> – Pet food, feed ingredients, and additives</li>
            <li><strong>Dried Fruits & Dehydrated Items</strong> – Raisins, dates, apricots, etc.</li>
            <li><strong>Food Additives</strong> – Colorants, stabilizers, and preservatives</li>
          </ul>
        </div>

        <div className="bags-image-section">
          <div className="section-image">
            <img src={foodGrade3} alt="Sustainable Food Grade Packaging" />
          </div>
          <div className="section-content">
            <h3>Commitment to Sustainability</h3>
            <p>
              Our food-grade bulk bags are engineered not only for safety but also for
              sustainability. By promoting reuse and recyclability, we help
              businesses minimize environmental impact while maintaining quality
              performance.
            </p>
            <p>
              Join us in building a greener future with packaging solutions that
              combine exceptional quality with environmental responsibility.
            </p>
          </div>
        </div>

        <div className="sustainability-section">
          <h3>Eco-Friendly Advantages</h3>
          <p>
            Our commitment to the environment drives us to create packaging solutions
            that reduce waste, conserve resources, and support sustainable business practices.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Reusable Construction</h4>
              <p className="p-card">Enables multiple usage cycles to cut down on waste and reduce costs</p>
            </div>
            <div className="sustainability-card">
              <h4>100% Recyclable Material</h4>
              <p className="p-card">Polypropylene fabric can be fully recycled at end of life</p>
            </div>
            <div className="sustainability-card">
              <h4>Reduced Carbon Emissions</h4>
              <p className="p-card">Optimized logistics and bulk handling lower fuel consumption</p>
            </div>
            <div className="sustainability-card">
              <h4>Less Packaging Waste</h4>
              <p className="p-card">Eliminates dependency on single-use bags and excess packaging</p>
            </div>
            <div className="sustainability-card">
              <h4>Energy-Efficient Manufacturing</h4>
              <p className="p-card">Supports sustainable production practices and reduces energy use</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FIBC;
