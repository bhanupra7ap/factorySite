import headerImg from "../assets/non-woven-header.avif";
import nonWovenBagsImg1 from "../assets/nonwoven1.png";
import nonWovenBagsImg2 from "../assets/nonwoven2.png";
import "./bags.css";

const NonWovenBags = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="bags-hero-content">
          <h1>Non-Woven Shopping Bags</h1>
          <p className="bags-hero-subtitle">Eco-Friendly, Reusable & Sustainable Carry Solutions</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Premium Non-Woven Shopping Bags</h3>
          <p className="alt">
            Our Non-Woven Shopping Bags offer an ideal balance of functionality,
            style, and sustainability. Designed as a superior alternative to
            traditional plastic carry bags, these bags are lightweight, durable,
            and fully reusable — helping businesses and consumers make an
            environmentally responsible choice without compromising on strength
            or aesthetics.
          <br /> <br />
            Manufactured using high-quality polypropylene non-woven fabric, these
            bags are available in various sizes, styles, and colors to suit
            diverse retail and promotional needs.
          </p>
        </section>

        <div className="bags-image-section">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={nonWovenBagsImg1} alt="Non-Woven Bags Applications" />
          </div>
          <div className="section-content">
            <h3>What Are Non-Woven Bags?</h3>
            <p>
              Non-woven bags are made from spun-bond polypropylene fabric, created
              through a thermal bonding process that eliminates the need for
              weaving or knitting. This production method results in a smooth,
              flexible, and breathable material that is strong enough for repeated
              use and fully recyclable at the end of its life cycle.
            </p>
            <p>
              Designed for diverse retail and promotional needs, these bags combine
              eco-friendliness with practical functionality and visual appeal.
            </p>
          </div>
        </div>

        <div className="bags-section">
          <h3>Key Features & Benefits</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Eco-Friendly Construction</h4>
              <p className="p-card">Made from recyclable polypropylene, reducing plastic waste.</p>
            </div>
            <div className="feature-card">
              <h4>Reusable & Long-Lasting</h4>
              <p className="p-card">Designed for multiple usage cycles without losing strength.</p>
            </div>
            <div className="feature-card">
              <h4>Lightweight yet Durable</h4>
              <p className="p-card">Easy to carry while supporting substantial weight.</p>
            </div>
            <div className="feature-card">
              <h4>Water-Resistant & Breathable</h4>
              <p className="p-card">Protects contents from moisture while allowing ventilation.</p>
            </div>
            <div className="feature-card">
              <h4>Customizable Designs</h4>
              <p className="p-card">Available in various sizes, shapes, and colors with printing options.</p>
            </div>
            <div className="feature-card">
              <h4>Cost-Effective</h4>
              <p className="p-card">Affordable, durable, and ideal for bulk distribution or retail use.</p>
            </div>
            <div className="feature-card">
              <h4>Soft & Stylish Finish</h4>
              <p className="p-card">Offers a premium look suitable for brand promotion and gifting.</p>
            </div>
            <div className="feature-card">
              <h4>Versatile Applications</h4>
              <p className="p-card">Perfect for retail, promotional events, and corporate gifting.</p>
            </div>
          </div>
        </div>

        <div className="bags-image-section reverse">
          <div className="section-image" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            <img src={nonWovenBagsImg2} alt="Non-Woven Bags Applications" />
          </div>
          <div className="section-content">
            <h3>Wide Range of Applications</h3>
            <p>
              Non-woven shopping bags have become a preferred choice across
              industries due to their sustainability, reusability, and visual
              appeal.
            </p>
            <ul style={{ marginTop: '1rem' }}>
              <li>Retail & Supermarkets – Ideal replacement for single-use plastic shopping bags</li>
              <li>Promotional & Branding Events – Custom-printed bags for corporate giveaways</li>
              <li>Food & Grocery Packaging – Convenient and hygienic carrying solution</li>
              <li>Apparel & Fashion Outlets – Elegant presentation and brand visibility</li>
              <li>Pharmacy & Healthcare Stores – Safe and clean packaging for daily use</li>
              <li>Corporate & Gifting Purposes – Reusable bags as eco-friendly promotional items</li>
            </ul>
          </div>
        </div>

        <section className="intro">
          <h3>Available Styles</h3>
          <p className="alt">
            We offer a variety of non-woven bag styles to meet different retail
            and promotional needs, from simple everyday carry bags to premium
            structured designs.
          </p>
        </section>

        <div className="types-container">
          {/* D-Cut Bags Card */}
          <div className="type-card">
            <h3 className="type-card-title">D-Cut Bags</h3>

            <div className="card-section">
              <h4>Description:</h4>
              <p>
                Simple and lightweight design for daily retail use. The D-shaped
                handle provides comfortable carrying for everyday shopping needs.
              </p>
            </div>

            <div className="card-section">
              <h4>Key Features:</h4>
              <ul className="features">
                <li>Economical and practical for daily use</li>
                <li>Easy to carry with comfortable D-shaped handles</li>
                <li>Ideal for lightweight shopping items</li>
              </ul>
            </div>
          </div>

          {/* W-Cut Bags Card */}
          <div className="type-card">
            <h3 className="type-card-title">W-Cut Bags</h3>

            <div className="card-section">
              <h4>Description:</h4>
              <p>
                Widely used in supermarkets and departmental stores. The W-cut
                design offers maximum convenience for quick shopping trips.
              </p>
            </div>

            <div className="card-section">
              <h4>Key Features:</h4>
              <ul className="features">
                <li>Most popular style for retail environments</li>
                <li>Easy to pack and distribute in bulk</li>
                <li>Versatile for various shopping applications</li>
              </ul>
            </div>
          </div>

          {/* Box Bags Card */}
          <div className="type-card">
            <h3 className="type-card-title">Box Bags (Gusset Bags)</h3>

            <div className="card-section">
              <h4>Description:</h4>
              <p>
                Structured design for enhanced capacity and durability. Perfect
                for heavier items and premium retail applications.
              </p>
            </div>

            <div className="card-section">
              <h4>Key Features:</h4>
              <ul className="features">
                <li>Enhanced load-bearing capacity</li>
                <li>Professional and structured appearance</li>
                <li>Ideal for premium retail and brand promotion</li>
              </ul>
            </div>
          </div>

          {/* Handle Loop Bags Card */}
          <div className="type-card">
            <h3 className="type-card-title">Handle Loop Bags</h3>

            <div className="card-section">
              <h4>Description:</h4>
              <p>
                Comfortable to carry and ideal for premium retail outlets. Features
                reinforced handles for extended durability and user comfort.
              </p>
            </div>

            <div className="card-section">
              <h4>Key Features:</h4>
              <ul className="features">
                <li>Superior handle comfort for extended carrying</li>
                <li>Reinforced stitching for durability</li>
                <li>Perfect for fashion and boutique retail</li>
              </ul>
            </div>
          </div>

          {/* Laminated Non-Woven Bags Card */}
          <div className="type-card">
            <h3 className="type-card-title">Laminated Non-Woven Bags</h3>

            <div className="card-section">
              <h4>Description:</h4>
              <p>
                Glossy finish and additional strength for heavy-duty applications.
                Water-resistant coating adds extra protection and premium appearance.
              </p>
            </div>

            <div className="card-section">
              <h4>Key Features:</h4>
              <ul className="features">
                <li>Premium glossy finish for brand visibility</li>
                <li>Enhanced water resistance</li>
                <li>Suitable for promotional events and corporate gifting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bags-section">
          <h3>Sustainability & Environmental Impact</h3>
          <p className="alt">
            Choosing non-woven shopping bags contributes to global efforts toward
            reducing single-use plastics. Each bag is designed for multiple reuse
            cycles, drastically lowering plastic consumption and landfill waste.
            At the end of its life, the polypropylene material can be completely
            recycled, supporting a circular economy.
          </p>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Reduces Carbon Footprint</h4>
              <p className="p-card">Through reusability and efficient manufacturing processes.</p>
            </div>
            <div className="feature-card">
              <h4>Minimizes Plastic Dependency</h4>
              <p className="p-card">Significantly reduces reliance on single-use plastic bags.</p>
            </div>
            <div className="feature-card">
              <h4>100% Recyclable Material</h4>
              <p className="p-card">Polypropylene can be completely recycled at end of life.</p>
            </div>
            <div className="feature-card">
              <h4>Energy-Efficient Production</h4>
              <p className="p-card">Manufacturing processes designed for minimal environmental impact.</p>
            </div>
          </div>
        </div>

        <section className="intro">
          <h3>Why Choose Us?</h3>
          <p className="alt">
            With years of expertise in polypropylene-based packaging, we are
            dedicated to providing high-quality, customizable, and sustainable
            non-woven bags that enhance brand image while promoting environmental
            responsibility.
          </p>
          <div className="bags-features" style={{ marginTop: '2rem' }}>
            <div className="feature-card">
              <h4>Custom Printing & Design</h4>
              <p className="p-card">Professional design assistance and high-quality printing services.</p>
            </div>
            <div className="feature-card">
              <h4>Wide Color Palette</h4>
              <p className="p-card">Extensive range of colors and fabric GSM options available.</p>
            </div>
            <div className="feature-card">
              <h4>Flexible Order Sizes</h4>
              <p className="p-card">Accommodating both small batches and large volume orders.</p>
            </div>
            <div className="feature-card">
              <h4>Timely Delivery</h4>
              <p className="p-card">Reliable production schedules and on-time delivery guaranteed.</p>
            </div>
          </div>
          <p className="alt" style={{ marginTop: '2rem' }}>
            <strong>Contact us today</strong> to explore our collection of non-woven
            shopping bags — and take the first step toward a greener, smarter,
            and more sustainable packaging future.
          </p>
        </section>
      </main>
    </div>
  );
};

export default NonWovenBags;
  