import "./Home.css";
import headerImg from "../assets/home-header.avif";
import facilitiesImg from "../assets/facilities-header.avif";
import qualityImg from "../assets/quality-header.avif";
import nonWovenImg from "../assets/non-woven-header.avif";
import wppFabricImg from "../assets/wpp-fabric-header.avif";
import { useEffect, useRef, useState } from "react";
import foodLogo from "../assets/industries/food.png";
import agricultureLogo from "../assets/industries/agriculture.png";
import chemicalLogo from "../assets/industries/chemical.png";
import miningLogo from "../assets/industries/mining.png";
import constructionLogo from "../assets/industries/construction.png";
import petrochemicalLogo from "../assets/industries/petrochemical.png";

type TimelineItem = {
  title: string;
  text: string;
  image: string;
};

const Home = () => {
  // Predefined principles data — length is dynamic and will control rendering
  const timeline: TimelineItem[] = [
    {
      title: "Integrated Manufacturing from Tape to FIBC Bags",
      text: "At Varuna Packtech, we believe that control over the process leads to control over quality. \
            Our operations are vertically connected — starting with tape extrusion, followed by weaving high-strength polypropylene fabric, and finally converting it into durable and customizable FIBC bags. \
            This in-house integration allows us to maintain consistent quality, flexible production planning, and better cost efficiency for our customers. \
            Our current capacity supports a wide range of industrial and export-grade FIBC solutions, designed to meet the specific requirements of clients in sectors like agriculture, chemicals, construction, and food processing.",
      image: facilitiesImg,
    },
    {
      title: "Committed to Responsible Manufacturing",
      text: "Sustainability is not an afterthought for us — it's a part of how we operate every day. \
            We focus on reducing waste, optimizing resource usage, and promoting renewable energy within our operations. \
            We have implemented waste segregation and recycling systems to ensure that all process waste is reused effectively. \
            A portion of our energy needs is already met through solar installations, and we continue to expand our renewable energy footprint each year. \
            Our water management practices emphasize reuse and responsible discharge through treatment and rainwater harvesting systems. \
            By taking steady, practical steps, we aim to build a manufacturing environment that balances growth with environmental care.",
      image: qualityImg,
    },
    {
      title: "Adopting Technology for Smarter Production",
      text: "Technology plays a key role in improving our efficiency, consistency, and responsiveness to customer needs. \
            Our manufacturing setup uses modern extrusion, weaving, and conversion machinery, supported by: \
            Digital monitoring and quality control tools to minimize defects and improve accuracy. \
            Data-driven planning systems that help optimize raw material usage and reduce downtime. \
            Continuous upgradation of production lines to meet global standards of FIBC manufacturing. \
            Through these advancements, [Your Company Name] continues to evolve — delivering reliable, cost-effective, and high-performance packaging solutions that meet the expectations of an increasingly demanding market.",
      image: wppFabricImg,
    },
    {
      title: "Integrity",
      text: "We operate transparently and ethically with suppliers, customers, and employees.",
      image: nonWovenImg,
    },
  ];

  const defaultIndex = Math.floor(timeline.length / 2);
  // Auto-advance state: use a separate currentIndex so auto-advance and hover interact cleanly
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex);
  const intervalRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  
  // Track expanded state for mobile cards
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Active index is driven by currentIndex (dots or auto-advance)
  const derivedActiveIndex = currentIndex;

  // Auto-advance the currentIndex unless paused (hover/focus sets pausedRef) or any card is expanded in mobile
  useEffect(() => {
    // set up interval
    intervalRef.current = window.setInterval(() => {
      if (pausedRef.current) return;
      // Pause auto-advance if any card is expanded in mobile view
      if (isMobile && expandedCards.size > 0) return;
      setCurrentIndex((prev) => (prev + 1) % timeline.length);
    }, 3500);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [timeline.length, isMobile, expandedCards]);

  return (
    <div className="page">
      <div
        className="header-image"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        <h1 className="header-title">FIBC manufacturers and exporters</h1>
      </div>

      <div className="content">
        <section className="gallery-section">
          <h2>Our Principles</h2>

          <div className="gallery" role="list" aria-label="Company principles gallery">
            {/* interactive gallery: front card is clear, others are blurred/backdrop */}
            {timeline.map((item, idx) => {
              const isActive = idx === derivedActiveIndex;
              // compute signed circular position so cards wrap smoothly
              const n = timeline.length;
              // modular distance in [0, n-1]
              const modDist = ((idx - derivedActiveIndex) % n + n) % n;
              // convert to signed position: values > n/2 become negative (left side)
              const pos = modDist <= Math.floor(n / 2) ? modDist : modDist - n;
              const distance = Math.abs(pos);
              const translate = pos * 64; // px offset per card (signed)
              const scale = Math.max(0.86, 1 - distance * 0.04);
              const blurPx = distance === 0 ? 0 : distance * 3;
              const opacity = distance === 0 ? 1 : Math.max(0.28, 1 - distance * 0.14);
              
              const isExpanded = expandedCards.has(idx);
              
              const handleCardClick = () => {
                if (isMobile) {
                  setExpandedCards(prev => {
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
                  aria-expanded={isActive}
                  className={`gallery-item ${isActive ? "active" : "inactive"}`}
                  // remove mouse enter/leave swap behavior; clicking dots below will control selection
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translate}px) scale(${scale})`,
                    zIndex: 100 - distance,
                    filter: blurPx ? `blur(${blurPx}px)` : "none",
                    opacity: opacity,
                    // stagger transitions slightly based on distance for smoother movement
                    transitionDelay: `${Math.min(distance, 4) * 60}ms`,
                    willChange: "transform, filter, opacity",
                  }}
                >
                  <div 
                    className={`card gallery-card ${isActive ? 'is-active' : ''} ${isExpanded ? 'expanded' : ''}`}
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
                        width: '320px',
                        height: '240px',
                        zIndex: 10
                      }}
                    />
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className={`card-text ${isActive ? "show" : "hide"}`}>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* dots for manual selection */}
          <div className="gallery-dots" role="tablist" aria-label="Gallery navigation">
            {timeline.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                aria-label={`Show card ${i + 1}`}
                aria-pressed={i === currentIndex}
                onClick={() => {
                  // selecting a dot should set the current index and pause briefly
                  setCurrentIndex(i);
                  // pause auto-advance briefly so user can read
                  pausedRef.current = true;
                  window.setTimeout(() => {
                    pausedRef.current = false;
                  }, 3000);
                }}
              />
            ))}
          </div>
        </section>

        {/* Industries We Serve section */}
        <section className="industries-section" aria-labelledby="industries-heading">
          <h2 id="industries-heading">Industries We Serve</h2>
          <div className="industries-grid" role="list">
            {[
              { name: "Food", icon: foodLogo },
              { name: "Agriculture", icon: agricultureLogo },
              { name: "Chemical", icon: chemicalLogo },
              { name: "Mining", icon: miningLogo },
              { name: "Construction", icon: constructionLogo },
              // Duplicate 'Food' if intentionally requested; otherwise, keep unique entries
              { name: "Petrochemical", icon: petrochemicalLogo },
            ].map((item, idx) => (
              <div className="industry-card" key={`${item.name}-${idx}`} role="listitem">
                <img src={item.icon} alt={`${item.name} industry logo`} className="industry-icon" />
                <span className="industry-label">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
