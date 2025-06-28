import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Shartida</h1>
      <div className="about-photo-frame">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80"
          alt="Artist or Workshop"
          className="about-photo"
        />
      </div>
      <div className="about-content">
        <p>
          My journey with furniture finishing began in my early years,
          surrounded by the scent of wood shavings and the warm glow of a
          well-worn workbench. Growing up, I watched my family transform tired,
          old pieces into beautiful, cherished heirlooms. It was in those
          moments that I discovered my love for the craft.
        </p>
        <p>
          Over the years, my passion for furniture finishing has only grown. I
          find joy in every step of the process—from carefully sanding and
          staining to the final brushstroke of varnish. Each project is a new
          opportunity to bring out the unique character and beauty of every
          piece.
        </p>
        <p>
          For me, furniture finishing is more than a job—it's a calling. I pour
          my heart into every project, treating each item as if it were my own.
          My goal is to help others rediscover the potential in their furniture,
          creating pieces that will be loved for generations to come.
        </p>
        <p>
          Thank you for letting me share my passion with you. I look forward to
          helping you transform your furniture into something truly special.
        </p>
      </div>
    </div>
  );
}

export default About;
