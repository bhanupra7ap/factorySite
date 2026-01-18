import headerImg from "../assets/fibc-header.jpg";
import facilitiesImg from "../assets/facilities-header.jpg";
import qualityImg from "../assets/quality-header.avif";
import wppFabricImg from "../assets/wpp-fabric-header.avif";
import "./WhyUs.css";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "Overview",
    text: `At Aries Packtech Pvt. Ltd., excellence is not an option — it is an ongoing pursuit. We are an emerging manufacturer of industrial packaging products, dedicated to delivering dependable and high-performance solutions for diverse industries. Our focus lies in maintaining superior quality standards, ensuring consistency across production, and building relationships founded on trust and integrity.`,
    image: facilitiesImg,
  },
  {
    title: "Commitment to Quality",
    text: `Quality defines every process within Aries Packtech Pvt. Ltd.. Each stage — from extrusion and weaving to finishing and inspection — is governed by stringent internal benchmarks that guarantee structural strength, dimensional accuracy, and product uniformity. We have implemented systematic quality control procedures, ensuring that every batch adheres to both customer specifications and global industrial norms. Our organization is currently in the process of acquiring recognized certifications to further formalize and strengthen our quality management systems.`,
    image: qualityImg,
  },
  {
    title: "Integrated Manufacturing Excellence",
    text: `Our operations are built on a vertically integrated structure that gives us complete command over raw materials, production flow, and final output. From the creation of tapes to the weaving of fabric and conversion into finished packaging products, every process is executed within a controlled environment. This integration not only minimizes dependency on external sources but also allows us to maintain consistency, traceability, and cost efficiency throughout the production chain.`,
    image: wppFabricImg,
  },
  {
    title: "Customization and Design Flexibility",
    text: `We recognize that every client’s requirement is distinct. Our design and development team works closely with customers to engineer packaging solutions that align perfectly with their handling, storage, and transportation needs. Whether the requirement involves specific dimensions, lifting configurations, or fabric specifications, Aries Packtech Pvt. Ltd. provides complete flexibility to adapt and innovate.`,
    image: facilitiesImg,
  },
  {
    title: "Operational Reliability",
    text: `We take pride in our ability to deliver commitments with precision and punctuality. Efficient planning, streamlined logistics, and real-time production monitoring enable us to execute orders within the promised timelines. Our infrastructure is designed to handle varying order volumes while maintaining uncompromised quality, making us a dependable partner for both domestic and international clients.`,
    image: qualityImg,
  },
  {
    title: "Innovation and Continuous Improvement",
    text: `Aries Packtech Pvt. Ltd. constantly seeks new methods to enhance performance and productivity. We invest time and effort into improving process efficiency, adopting advanced weaving techniques, and exploring eco-friendly materials. Our commitment to innovation allows us to remain relevant and responsive in a continuously evolving market.`,
    image: wppFabricImg,
  },
  {
    title: "Customer Partnership",
    text: `For us, every client relationship is a long-term collaboration built on understanding, responsiveness, and accountability. We prioritize transparent communication, prompt service, and post-delivery support to ensure complete satisfaction. Our growing base of recurring customers reflects the trust we have earned through consistent performance and professional conduct.`,
    image: facilitiesImg,
  },
  {
    title: "Sustainability and Responsibility",
    text: `We are conscious of our environmental footprint and actively strive to optimize material usage and reduce waste generation. By adopting sustainable practices and responsible manufacturing principles, Aries Packtech Pvt. Ltd. aims to contribute positively to the environment while meeting modern packaging demands.`,
    image: qualityImg,
  },
  {
    title: "Our Vision Forward",
    text: `Our vision is to become a recognized and respected name in the industrial packaging sector by combining technical competence, operational discipline, and customer-centric innovation. As we expand our capabilities and move toward achieving formal certifications, we remain steadfast in our mission — to provide packaging solutions that are reliable, efficient, and aligned with our clients’ business goals.`,
    image: wppFabricImg,
  },
];

const WhyUs = () => {
  const defaultIndex = Math.floor(sections.length / 2);
  // Auto-advance state and refs (mirror Home.tsx behavior)
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex);
  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  // Mobile expansion state (match Home.tsx behavior)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Auto-advance: pause when hovered (pausedRef) or when any card is expanded on mobile
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      if (pausedRef.current) return;
      // Pause auto-advance if any card is expanded in mobile view
      if (isMobile && expandedCards.size > 0) return;
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 3500);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [sections.length, isMobile, expandedCards]);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const derivedActiveIndex = currentIndex;

  return (
    <div className="page whyus-page">
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <h1 className="header-title">Why Choose Aries Packtech Pvt. Ltd.</h1>
      </div>

      <div className="content">
        <h2 className="whyus-heading">Why Choose Aries Packtech Pvt. Ltd.</h2>

        {/* Reuse Home's gallery layout so cards position exactly like the home principles */}
        <section className="gallery-section">
          <div
            className="gallery"
            role="list"
            aria-label="Why Choose Aries Packtech Pvt. Ltd. gallery"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {sections.map((item, idx) => {
              // compute circular signed position relative to active index
              const n = sections.length;
              const modDist = ((idx - derivedActiveIndex) % n + n) % n;
              const pos = modDist <= Math.floor(n / 2) ? modDist : modDist - n;
              const distance = Math.abs(pos);
              const translate = pos * 64; // px offset per card
              const scale = Math.max(0.86, 1 - distance * 0.04);
              const blurPx = distance === 0 ? 0 : distance * 3;
              const opacity = distance === 0 ? 1 : Math.max(0.28, 1 - distance * 0.14);
              const isExpanded = expandedCards.has(idx);

              const handleCardClick = () => {
                if (isMobile) {
                  setExpandedCards((prev) => {
                    const newSet = new Set(prev);
                    if (newSet.has(idx)) {
                      newSet.delete(idx);
                    } else {
                      newSet.add(idx);
                    }
                    return newSet;
                  });
                }
              };

              return (
                <div
                  key={idx}
                  role="listitem"
                  tabIndex={0}
                  className={`gallery-item ${distance === 0 ? "active" : "inactive"}`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translate}px) scale(${scale})`,
                    zIndex: 100 - distance,
                    filter: blurPx ? `blur(${blurPx}px)` : "none",
                    opacity: opacity,
                    transitionDelay: `${Math.min(distance, 4) * 60}ms`,
                    willChange: "transform, filter, opacity",
                  }}
                >
                  <div
                    className={`card gallery-card ${distance === 0 ? 'is-active' : ''} ${isExpanded ? 'expanded' : ''}`}
                    onClick={handleCardClick}
                    role={isMobile ? "button" : undefined}
                    aria-expanded={isMobile ? isExpanded : undefined}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="gallery-thumb"
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10
                      }}
                    />
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className={`card-text ${distance === 0 ? "show" : "hide"}`}>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* dots for manual selection */}
          <div className="gallery-dots" role="tablist" aria-label="Gallery navigation">
            {sections.map((_, i) => {
              const n = sections.length;
              const modDist = ((i - derivedActiveIndex) % n + n) % n;
              const pos = modDist <= Math.floor(n / 2) ? modDist : modDist - n;
              const distance = Math.abs(pos);

              // scale the dot: center = 1, others shrink progressively
              const scale = Math.max(0.45, 1 - distance * 0.18);
              // reduce gap as dots get further from center
              const horizontalGap = Math.max(4, 10 - distance * 2);
              const opacity = distance === 0 ? 1 : Math.max(0.32, 1 - distance * 0.18);

              return (
                <button
                  key={i}
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  aria-label={`Show card ${i + 1}`}
                  aria-pressed={i === currentIndex}
                  onClick={() => {
                    setCurrentIndex(i);
                    // pause auto-advance briefly so user can read
                    pausedRef.current = true;
                    window.setTimeout(() => {
                      pausedRef.current = false;
                    }, 3000);
                  }}
                  style={{
                    transform: `scale(${scale})`,
                    margin: `0 ${horizontalGap}px`,
                    opacity: opacity,
                    transition: 'transform 220ms ease, opacity 220ms ease, margin 220ms ease',
                  }}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
