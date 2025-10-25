import "./Home.css";
import headerImg from "../assets/home-header.jpg";
import facilitiesImg from "../assets/facilities-header.jpg";
import qualityImg from "../assets/quality-header.avif";
import wppFabricImg from "../assets/wpp-fabric-header.avif";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
      text: "Varuna Packtech is a vertically integrated manufacturer of high-strength FIBC bags — from tape extrusion to fabric weaving and bag conversion — ensuring consistent quality, flexible production, and cost-efficient solutions for diverse industrial needs.",
      image: facilitiesImg,
    },
    {
      title: "Committed to Responsible Manufacturing",
      text: "At Varuna Packtech, sustainability drives every process, with focused efforts on recycling, renewable energy, and water management to achieve responsible and efficient manufacturing.",
      image: qualityImg,
    },
    {
      title: "Adopting Technology for Smarter Production",
      text: "Technology powers Varuna Packtech’s efficiency and precision — with digitally monitored, data-driven production lines that ensure consistent quality and globally competitive FIBC solutions.",
      image: wppFabricImg,
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
        <div className="header-cta">
          <h1 className="header-title">FIBC Packaging Materials</h1>
          <Link to="/contact" className="hero-cta-btn">GET A QUOTE</Link>
        </div>
      </div>

      {/* Full-bleed auto-scrolling bags slider (appears right before Our Principles) */}
      <BagsSlider />

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

// --- Bags Slider Component ---
type BagItem = { url: string; caption: string };

const BagsSlider = () => {
  // Load all images from assets/bags and create captions from filenames
  const items: BagItem[] = useMemo(() => {
    // Vite glob import for static assets as URLs (updated to use query/import per deprecation notice)
    const modules = import.meta.glob("../assets/bags/*", {
      eager: true,
      query: "?url",
      import: "default",
    }) as Record<string, string>;

    const list = Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, url]) => {
        const file = path.split("/").pop() || "";
        const base = file.replace(/\.[^/.]+$/, "");
        const caption = base.replace(/[-_]+/g, " ").toUpperCase();
        return { url, caption };
      });
    return list;
  }, []);

  if (!items.length) return null;

  // Determine how many repetitions are needed to ensure each lane is wider than the viewport
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(3);

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const row = rowRef.current;
      if (!container || !row) return;
      const containerWidth = container.clientWidth;
      const rowWidth = row.scrollWidth; // width for a single set of items
      if (containerWidth && rowWidth) {
        // Aim for each lane to be at least 1.5x container width for safe coverage
        const needed = Math.ceil((containerWidth * 1.5) / rowWidth);
        const clamped = Math.max(2, Math.min(8, needed));
        setRepeatCount(clamped);
      }
    };
    measure();
    const ro = new ResizeObserver(() => measure());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [items.length]);

  const laneItems = useMemo(() => {
    const list: BagItem[] = [];
    for (let i = 0; i < repeatCount; i++) list.push(...items);
    return list;
  }, [items, repeatCount]);

  // Render helper for cards
  const renderCards = (list: BagItem[], keyPrefix: string) => (
    list.map((it, idx) => (
      <figure className="bag-card" key={`${keyPrefix}-${idx}`}>
        <div className="bag-media">
          <img src={it.url} alt={it.caption} className="bag-img" />
        </div>
        <figcaption className="bag-caption">{it.caption}</figcaption>
      </figure>
    ))
  );

  // Two-lane marquee: two identical lanes slide left; the second starts offset,
  // ensuring a continuous loop without any blank gaps at the seam.
  return (
    <section className="bags-slider full-bleed" aria-label="Product bags showcase">
      <div className="bags-slider-inner" aria-hidden="true" ref={containerRef}>
        {/* Measurement row (one copy) to compute widths; visually identical to lane rows */}
        <div className="bags-row bags-row-measure" ref={rowRef} style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none' }}>
          {renderCards(items, "measure")}
        </div>

        <div className="bags-lane">
          <div className="bags-row">
            {renderCards(laneItems, "lane-a")}
          </div>
        </div>
        <div className="bags-lane clone">
          <div className="bags-row">
            {renderCards(laneItems, "lane-b")}
          </div>
        </div>
      </div>
    </section>
  );
};
