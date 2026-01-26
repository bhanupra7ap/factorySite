import headerImg from "../assets/who-we-are-header.png";
import facilitiesImg from "../assets/home-header.png";
import imgSustainability from "../assets/non-woven-header.avif";
import imgCustomers from "../assets/contact-header.avif";
import imgInnovation from "../assets/facilities-header.jpg";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="page">
      <div 
        className="header-image" 
        style={{
          backgroundImage: `url(${headerImg})`
        }}
      >
        <h1 className="header-title">Who We Are</h1>
      </div>
      <div className="content">
        <h2>About Us</h2>
        <div className="content-card with-side-image">
          <p>
            Aries Packtech Pvt. Ltd. is an emerging manufacturer and exporter of FIBC (Flexible
            Intermediate Bulk Containers), also known as Jumbo Bags, Bulk Bags, or Big
            Bags. With a focus on quality craftsmanship and process control, we aim to
            deliver packaging solutions that are safe, reliable, and tailored to diverse
            industrial needs. Our growing expertise and in-house capabilities allow us
            to maintain consistency, optimize resources, and ensure every product meets
            the performance expectations of our customers.
          </p>
          <img
            className="card-side-image"
            src={facilitiesImg}
            alt="Our facilities"
            loading="lazy"
          />
        </div>

        {/* Philosophy & Impact Themes - Alternating Media Rows */}
        <section className="themes-alt" aria-labelledby="themes-heading">
          <h2 id="themes-heading">Our Thoughts</h2>
          <div className="themes-alt-card">

          {/* 1. Philosophy - Text Left, Icon Right */}
          <div className="theme-row">
            <div className="theme-text">
              <div className="theme-logo" aria-hidden={true}>
                {/* small compass logo */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M15.5 8.5l-3 7-7 3 3-7 7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Our Philosophy</h3>
              <p>
                At Aries Packtech Pvt. Ltd., we believe that growth is meaningful only when it is
                responsible and built on trust. Our philosophy is rooted in creating value — not
                just through products, but through the relationships we build, the quality we
                deliver, and the integrity that guides every decision. We strive to evolve with our
                customers, staying adaptable, transparent, and focused on long-term impact over
                short-term gain.
              </p>
            </div>
            <div className="theme-media">
              <div className="media-box" aria-hidden={true}>
                {/* Compass icon */}
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M15.5 8.5l-3 7-7 3 3-7 7-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. Sustainability - Text Right, Image Left */}
          <div className="theme-row reverse">
            <div className="theme-text">
              <div className="theme-logo" aria-hidden={true}>
                {/* small leaf logo */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4c-6 0-10 2-12 4-3 3-4 7-2 9s6 1 9-2c2-2 4-6 4-12z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 15c0-2 2-4 4-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Sustainability at the Core</h3>
              <p>
                Sustainability is not an afterthought for us — it’s part of how we operate every
                day. From efficient energy use and waste recycling to water conservation and solar
                integration, we are committed to minimizing our environmental footprint. Every step
                we take is guided by a practical vision: to balance manufacturing growth with
                respect for the planet and its resources.
              </p>
            </div>
            <div className="theme-media">
              <img src={imgSustainability} alt="Sustainability at work" loading="lazy" />
            </div>
          </div>

          {/* 3. Customers - Text Left, Image Right */}
          <div className="theme-row">
            <div className="theme-text">
              <div className="theme-logo" aria-hidden={true}>
                {/* small handshake logo */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 12l3-3a2 2 0 012.8 0L14 10l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l3-3 4 4M22 12l-3-3-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Commitment to Customers</h3>
              <p>
                We see every customer as a partner in progress. By understanding their unique needs,
                we provide flexible, dependable packaging solutions that add real value to their
                operations. Our focus on quality control, on-time delivery, and responsive service
                reflects our belief that true success lies in customer satisfaction and lasting
                relationships.
              </p>
            </div>
            <div className="theme-media">
              <img src={imgCustomers} alt="Customer partnership" loading="lazy" />
            </div>
          </div>

          {/* 4. Society - Text Right, Icon Left */}
          <div className="theme-row reverse">
            <div className="theme-text">
              <div className="theme-logo" aria-hidden={true}>
                {/* small globe logo */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Responsibility Toward Society</h3>
              <p>
                As a growing company, we recognize our role in contributing to the communities
                around us. Through fair employment practices, safe working environments, and skill
                development initiatives, we aim to create opportunities that empower people. Our
                goal is to grow not just as a business, but as a positive and responsible part of
                society.
              </p>
            </div>
            <div className="theme-media">
              <div className="media-box" aria-hidden={true}>
                {/* Globe icon */}
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* 5. Innovation - Text Left, Image Right */}
          <div className="theme-row">
            <div className="theme-text">
              <div className="theme-logo" aria-hidden={true}>
                {/* small bulb logo */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18h6M9.5 21h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  <path d="M12 3a7 7 0 00-4 12c.6.6 1 1.3 1 2h6c0-.7.4-1.4 1-2A7 7 0 0012 3z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Innovation with Purpose</h3>
              <p>
                Technology and innovation drive our journey forward — but always with purpose. By
                adopting smarter manufacturing systems, digital monitoring tools, and continuous
                process improvements, we aim to produce efficiently while reducing waste. For us,
                progress means being future-ready while staying grounded in ethical and sustainable
                practices.
              </p>
            </div>
            <div className="theme-media">
              <img src={imgInnovation} alt="Modern manufacturing and innovation" loading="lazy" />
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoWeAre;
