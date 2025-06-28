import "./Contact.css";
import { useEffect, useRef } from "react";

function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a class to body to dim background when Contact is mounted
    document.body.classList.add("contact-dimmed");
    return () => {
      document.body.classList.remove("contact-dimmed");
    };
  }, []);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("slide-in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-overlay">
      <div className="contact-page" ref={formRef}>
        <h1>Contact Us</h1>
        <p>
          Have a question or want to request a quote? Fill out the form below or
          email us at{" "}
          <a href="mailto:info@finishesbyshartida.com">
            info@finishesbyshartida.com
          </a>
          .
        </p>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
