import React from 'react';
import '../styles/ContactUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="contact-us-page">

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/contact-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1 className="hero-headline">Get In Touch with VisionForge</h1>
          <p className="hero-subheadline">We’d love to hear from you. Whether you’re interested in joining, have a partnership in mind, or just have a question, reach out to us below.</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-information">
        <div className="content-wrapper">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <img src="/icons/email-icon.png" alt="Email Icon" />
              <p><strong>Email:</strong> contact@visionforge.com</p>
            </div>
            <div className="contact-item">
              <img src="/icons/phone-icon.png" alt="Phone Icon" />
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <img src="/icons/map-icon.png" alt="Map Icon" />
              <p><strong>Office Address:</strong> 123 Tech Street, Innovation City, TX 75001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <div className="content-wrapper">
          <h2>Send Us a Message</h2>
          <form className="contact-form-fields">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <p className="form-note">Thank you for contacting us! We’ll get back to you shortly.</p>
        </div>
      </section>

      {/* Map Location Section (Optional) */}
      <section className="map-location">
        <div className="content-wrapper">
          <h2>Our Location</h2>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.913136458193!2d-122.08424948469244!3d37.4219997798216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6b5c4f0e3b1%3A0x4204fbb5ed6ed5e5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616565655680!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* FAQ Section (Optional) */}
      <section className="faq-section">
        <div className="content-wrapper">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How long does it take to receive a reply?</h3>
            <p>We usually respond within 1-2 business days.</p>
          </div>
          <div className="faq-item">
            <h3>What kind of inquiries can I make?</h3>
            <p>You can reach out for general inquiries, partnership opportunities, or interest in joining VisionForge.</p>
          </div>
          <div className="faq-item">
            <h3>Do you have a physical office I can visit?</h3>
            <p>Yes, we are located at 123 Tech Street, Innovation City, TX 75001.</p>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="social-media-links">
        <div className="content-wrapper">
          <h2>Connect with Us</h2>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
