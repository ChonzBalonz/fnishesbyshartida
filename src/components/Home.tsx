import Hero from "./Hero";
import Features from "./Features";
import FAQTable from "./FAQTable";
import { useEffect, useRef } from "react";

function Home() {
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = serviceRefs.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-slide-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    items.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <FAQTable />
      <div className="services-page">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>
            We provide a wide range of furniture finishing and restoration
            services with meticulous care and an eye for detail.
          </p>
        </div>
        <div className="services-grid">
          <div
            className="service-card"
            ref={(el) => (serviceRefs.current[0] = el)}
          >
            <h3>Wood Staining</h3>
            <p>
              Enhance the natural beauty of your wood furniture with our
              professional staining services. We offer a variety of colors and
              finishes to match your style.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (serviceRefs.current[1] = el)}
          >
            <h3>Professional Painting</h3>
            <p>
              Give your furniture a new life with a fresh coat of paint. We use
              high-quality, durable paints for a flawless, long-lasting finish.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (serviceRefs.current[2] = el)}
          >
            <h3>Antique Restoration</h3>
            <p>
              We specialize in the delicate process of restoring antique
              furniture, preserving its integrity and history while bringing
              back its original charm.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (serviceRefs.current[3] = el)}
          >
            <h3>Varnishing & Sealing</h3>
            <p>
              Protect your furniture from wear and tear with our professional
              varnishing and sealing services, providing a durable and beautiful
              protective layer.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (serviceRefs.current[4] = el)}
          >
            <h3>Damage Repair</h3>
            <p>
              From scratches and dents to water marks, we can expertly repair
              damages to restore your furniture's appearance.
            </p>
          </div>
          <div
            className="service-card"
            ref={(el) => (serviceRefs.current[5] = el)}
          >
            <h3>Custom Finishes</h3>
            <p>
              Have a unique vision? We work with you to create custom finishes,
              including distressed, high-gloss, and matte looks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
