import headerImg from "../assets/fibc-header.png";
import "./MissionAndVision.css";

const MissionAndVision = () => {
  return (
    <div className="mission-page">
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Vision & Mission</h1>
      </div>

      <div className="content">
        <h2 className="mission-heading">Vision & Mission</h2>

        <div className="mission-grid">
          <div className="mission-card">
            <div className="card-body">
              <h3>Our Vision</h3>
              <p>
                To be a distinguished name in industrial packaging known for
                reliability, precision, and forward-thinking innovation.
              <br /> <br />
                At Aries Packtech Pvt. Ltd., our vision is to contribute to the global
                packaging ecosystem through sustainable, technology-enabled,
                and performance-oriented solutions that add measurable value to
                every client partnership. We aim to create an organization that
                evolves continuously, adapts responsibly to industrial trends,
                and maintains excellence as its enduring identity.
              </p>
            </div>
          </div>

          <div className="mission-card">
            <div className="card-body">
              <h3>Our Mission</h3>
              <p>
                Our mission is to consistently deliver superior packaging
                solutions that meet the diverse and dynamic needs of our
                customers while maintaining the highest standards of quality,
                safety, and ethics.
              </p>

              <h3 className="muted">We are committed to:</h3>
              <p>
                <ul className="card-list">
                  <li>
                    Driving innovation through research, process improvement, and
                    advanced material applications.
                  </li>
                  <li>
                    Creating customized solutions that enhance operational
                    efficiency and reduce total cost for our clients.
                  </li>
                  <li>Maintaining transparency and accountability at every level of operation.</li>
                  <li>Promoting sustainable practices that balance productivity with environmental responsibility.</li>
                  <li>Building partnerships based on trust, long-term value, and mutual growth.</li>
                  <li>Pursuing excellence through disciplined manufacturing, continuous learning, and adherence to international quality norms.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="mission-card">
            <div className="card-body">
              <h3>Our Core Values</h3>
              <p>
                <ul className="card-list">
                  <li>
                    <strong>Integrity:</strong> Conducting every business activity
                    with honesty, fairness, and ethical responsibility.
                  </li>
                  <li>
                    <strong>Commitment:</strong> Honoring every promise made to our
                    customers, employees, and stakeholders.
                  </li>
                  <li>
                    <strong>Quality:</strong> Treating precision, durability, and
                    consistency as non-negotiable standards.
                  </li>
                  <li>
                    <strong>Innovation:</strong> Constantly seeking smarter ways to
                    manufacture, optimize, and serve.
                  </li>
                  <li>
                    <strong>Sustainability:</strong> Respecting the environment by
                    minimizing waste and promoting efficient use of resources.
                  </li>
                  <li>
                    <strong>Customer Focus:</strong> Understanding client
                    objectives deeply to deliver meaningful and measurable outcomes.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="mission-card">
            <div className="card-body">
              <h3>Our Purpose</h3>
              <p>
                To strengthen industries through packaging that protects,
                performs, and preserves — aligning every product we create with
                the core principles of reliability, efficiency, and
                sustainability.
              <br /> <br />
                Every effort at Aries Packtech Pvt. Ltd. is directed toward shaping a
                future where industrial packaging supports both business
                success and environmental balance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
