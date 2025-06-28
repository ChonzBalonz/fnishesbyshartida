import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
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
  );
}

export default Contact;
