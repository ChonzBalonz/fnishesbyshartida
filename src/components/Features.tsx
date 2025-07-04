import "./Features.css";
import { useEffect, useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";

// A simple placeholder icon component
const FeatureIcon = () => (
  <svg
    className="feature-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM12 21a9 9 0 110-18 9 9 0 010 18z"
    />
  </svg>
);

function Features() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("feature-slide-in-view");
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
    <section className="features">
      <div className="feature-item" ref={(el) => (itemsRef.current[0] = el)}>
        <FeatureIcon />
        <h3>Wide Range of Services</h3>
        <p>From staining to complete restoration, we have you covered.</p>
      </div>
      <div className="feature-item" ref={(el) => (itemsRef.current[1] = el)}>
        <FeatureIcon />
        <h3>
          <AnimatedNumber
            value={15}
            duration={1200}
            className="feature-animated-number"
          />
          + Years of Professional Experience
        </h3>
        <p>Our expertise ensures a perfect finish every time.</p>
      </div>
      <div className="feature-item" ref={(el) => (itemsRef.current[2] = el)}>
        <FeatureIcon />
        <h3>
          <AnimatedNumber
            value={500}
            duration={1200}
            className="feature-animated-number"
          />
          + Grateful Customers
        </h3>
        <p>
          We pride ourselves on customer satisfaction and beautiful results.
        </p>
      </div>
    </section>
  );
}

export default Features;
