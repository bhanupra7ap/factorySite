import { useEffect, useState } from "react";
import "./Home.css";
import headerImg from "../assets/home-header.avif";

const Home = () => {
  const cards = [
    {
      title: "Quality Materials",
      text: "We use industry-grade polypropylene and performance fabrics to manufacture durable FIBC solutions for demanding applications.",
    },
    {
      title: "Custom Designs",
      text: "Custom capacities, lifting loops, linings and discharge options to suit your handling and storage requirements.",
    },
    {
      title: "Global Shipping",
      text: "Reliable export logistics and international compliance to deliver our products to customers worldwide.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % cards.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

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
        <div>
          <h2>About Us</h2>
          <p>
            We are one of the leading manufacturers and exporters of FIBC (Flexible
            Intermediate Bulk Containers) also known as Jumbo Bags, Bulk Bags, or
            Big Bags. Our products are designed to meet the highest standards of
            quality and safety, ensuring reliable storage and transportation
            solutions for various industries.
          </p>
        </div>

        {/* Carousel: horizontally sliding 3 cards, one visible at a time */}
        <div
          className="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
        >
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cards.length}%)`,
              ['--slides' as any]: cards.length,
            }}
          >
            {cards.map((c, idx) => (
              <div className="carousel-card card" key={idx} role="group" aria-roledescription="slide" aria-label={`${idx + 1} of ${cards.length}`}>
                <h2 className="card-title">{c.title}</h2>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <div className="carousel-dots" aria-hidden={false}>
            {cards.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
