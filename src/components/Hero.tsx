import "./Hero.css";
// Consider using an optimized and compressed video for better performance.
// Optionally, provide multiple formats for broader browser support.
import sandingHeroVideoMp4 from "./Sanding Hero video.mp4";
import sandingHeroVideoWebm from "./Sanding Hero video.webm"; // Add a .webm version if available

function Hero() {
  return (
    <section className="hero">
      {/* The video element is added here */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        {/* Provide multiple sources for better compatibility */}
        <source src={sandingHeroVideoWebm} type="video/webm" />
        <source src={sandingHeroVideoMp4} type="video/mp4" />
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
