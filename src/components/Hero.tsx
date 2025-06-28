import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* The video element is added here */}
      <video
        className="hero-video"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <p className="hero-welcome">WELCOME TO FINISHES BY SHARTIDA</p>
        <h1 className="hero-title">
          Expert <span className="highlight">Furniture</span> Finishing Provider
        </h1>
        <p className="hero-services">
          <span>Staining</span> • <span>Painting</span> •{" "}
          <span>Restoration</span>
        </p>
        <button className="hero-button">VIEW MORE DETAILS</button>
      </div>
    </section>
  );
}

export default Hero;
