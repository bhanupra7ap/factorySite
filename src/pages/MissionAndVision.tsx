import headerImg from "../assets/fibc-header.png";
import "./bags.css";

const MissionAndVision = () => {
  return (
    <div className="bags-page">
      <div
        className="bags-hero"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <div className="bags-hero-content">
          <h1>Vision & Mission</h1>
          <p className="bags-hero-subtitle">Building Excellence Through Purpose and Values</p>
        </div>
      </div>

      <main className="content">
        <section className="intro">
          <h3>Our Guiding Principles</h3>
          <p className="alt">
            At Aries Packtech Pvt. Ltd., we are committed to contributing to the global packaging ecosystem through sustainable, 
            technology-enabled, and performance-oriented solutions that add measurable value to every client partnership.
          <br /> <br />
            We aim to create an organization that evolves continuously, adapts responsibly to industrial trends, and maintains 
            excellence as its enduring identity.
          </p>
        </section>

        <div className="bags-section">
          <h3>Our Vision</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Excellence in Packaging</h4>
              <p className="p-card">To be a distinguished name in industrial packaging known for reliability, precision, and forward-thinking innovation.</p>
            </div>
            <div className="feature-card">
              <h4>Global Impact</h4>
              <p className="p-card">Contributing to the global packaging ecosystem with sustainable solutions that create measurable value.</p>
            </div>
            <div className="feature-card">
              <h4>Continuous Evolution</h4>
              <p className="p-card">Building an organization that adapts responsibly to industrial trends while maintaining excellence.</p>
            </div>
          </div>
        </div>

        <div className="bags-list">
          <h3>Our Mission</h3>
          <p>Our mission is to consistently deliver superior packaging solutions that meet the diverse and dynamic needs of our customers while maintaining the highest standards of quality, safety, and ethics.</p>
          <h4 style={{ marginTop: '2rem', color: '#34495e' }}>We are committed to:</h4>
          <ul>
            <li><strong>Innovation:</strong> Driving innovation through research, process improvement, and advanced material applications</li>
            <li><strong>Efficiency:</strong> Creating customized solutions that enhance operational efficiency and reduce total cost for our clients</li>
            <li><strong>Transparency:</strong> Maintaining transparency and accountability at every level of operation</li>
            <li><strong>Sustainability:</strong> Promoting sustainable practices that balance productivity with environmental responsibility</li>
            <li><strong>Partnership:</strong> Building partnerships based on trust, long-term value, and mutual growth</li>
            <li><strong>Excellence:</strong> Pursuing excellence through disciplined manufacturing, continuous learning, and adherence to international quality norms</li>
          </ul>
        </div>

        <div className="bags-section">
          <h3>Our Core Values</h3>
          <div className="bags-features">
            <div className="feature-card">
              <h4>Integrity</h4>
              <p className="p-card">Conducting every business activity with honesty, fairness, and ethical responsibility.</p>
            </div>
            <div className="feature-card">
              <h4>Commitment</h4>
              <p className="p-card">Honoring every promise made to our customers, employees, and stakeholders.</p>
            </div>
            <div className="feature-card">
              <h4>Quality</h4>
              <p className="p-card">Treating precision, durability, and consistency as non-negotiable standards.</p>
            </div>
            <div className="feature-card">
              <h4>Innovation</h4>
              <p className="p-card">Constantly seeking smarter ways to manufacture, optimize, and serve.</p>
            </div>
            <div className="feature-card">
              <h4>Sustainability</h4>
              <p className="p-card">Respecting the environment by minimizing waste and promoting efficient use of resources.</p>
            </div>
            <div className="feature-card">
              <h4>Customer Focus</h4>
              <p className="p-card">Understanding client objectives deeply to deliver meaningful and measurable outcomes.</p>
            </div>
          </div>
        </div>

        <div className="sustainability-section">
          <h3>Our Purpose</h3>
          <p>
            To strengthen industries through packaging that protects, performs, and preserves — aligning every product we create 
            with the core principles of reliability, efficiency, and sustainability.
          </p>
          <div className="sustainability-grid">
            <div className="sustainability-card">
              <h4>Business Success</h4>
              <p className="p-card">Supporting our clients' business growth with reliable and efficient packaging solutions</p>
            </div>
            <div className="sustainability-card">
              <h4>Environmental Balance</h4>
              <p className="p-card">Promoting sustainable practices that minimize environmental impact</p>
            </div>
            <div className="sustainability-card">
              <h4>Industry Leadership</h4>
              <p className="p-card">Setting benchmarks in quality, innovation, and customer service</p>
            </div>
            <div className="sustainability-card">
              <h4>Future Forward</h4>
              <p className="p-card">Shaping a future where industrial packaging supports both business success and environmental responsibility</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MissionAndVision;
