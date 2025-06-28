import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide a wide range of furniture finishing and restoration
          services with meticulous care and an eye for detail.
        </p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <h3>Wood Staining</h3>
          <p>
            Enhance the natural beauty of your wood furniture with our
            professional staining services. We offer a variety of colors and
            finishes to match your style.
          </p>
        </div>
        <div className="service-card">
          <h3>Professional Painting</h3>
          <p>
            Give your furniture a new life with a fresh coat of paint. We use
            high-quality, durable paints for a flawless, long-lasting finish.
          </p>
        </div>
        <div className="service-card">
          <h3>Antique Restoration</h3>
          <p>
            We specialize in the delicate process of restoring antique
            furniture, preserving its integrity and history while bringing back
            its original charm.
          </p>
        </div>
        <div className="service-card">
          <h3>Varnishing & Sealing</h3>
          <p>
            Protect your furniture from wear and tear with our professional
            varnishing and sealing services, providing a durable and beautiful
            protective layer.
          </p>
        </div>
        <div className="service-card">
          <h3>Damage Repair</h3>
          <p>
            From scratches and dents to water marks, we can expertly repair
            damages to restore your furniture's appearance.
          </p>
        </div>
        <div className="service-card">
          <h3>Custom Finishes</h3>
          <p>
            Have a unique vision? We work with you to create custom finishes,
            including distressed, high-gloss, and matte looks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
