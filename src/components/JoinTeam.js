import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import emailjs from '@emailjs/browser';
import '../styles/JoinTeam.css';


const JoinTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    skills: '',
    portfolio: '',
    motivation: '',
    availability: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .send(
        'service_b4ybjod', // Replace with your EmailJS service ID
        'template_wmhm6n2', // Replace with your EmailJS template ID
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Use the environment variable for the public key
      )
      .then((response) => {
        setMessage('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: '',
          skills: '',
          portfolio: '',
          motivation: '',
          availability: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setMessage('Failed to submit the application. Please try again.');
      });
  };
  

  return (
    <div className="join-team-page">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/join-team-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1 className="hero-headline">Be Part of an Innovative Team at VisionForge</h1>
          <p className="hero-subheadline">Join us and work on projects that matter, grow your skills, and build the future of technology.</p>
          <HashLink smooth to="/join-team#application-form">
            <button className="cta-button">Apply Now</button>
          </HashLink>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="application-form">
        <div className="content-wrapper">
          <h2>Apply to Join VisionForge</h2>
          <form className="join-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 123 456 7890"
            />

            <label htmlFor="role">Role/Area of Interest</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} required>
              <option value="" disabled>Select your area of interest</option>
              <option value="frontend">Front-End Developer</option>
              <option value="backend">Back-End Developer</option>
              <option value="design">UI/UX Designer</option>
              <option value="ai">AI Specialist</option>
            </select>

            <label htmlFor="skills">Skills and Experience</label>
            <textarea
              id="skills"
              name="skills"
              rows="4"
              value={formData.skills}
              onChange={handleChange}
              required
              placeholder="Briefly describe your skillset and experience"
            ></textarea>

            <label htmlFor="portfolio">Portfolio/GitHub/LinkedIn</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
            />

            <label htmlFor="motivation">Motivation</label>
            <textarea
              id="motivation"
              name="motivation"
              rows="4"
              value={formData.motivation}
              onChange={handleChange}
              required
              placeholder="Why do you want to join VisionForge?"
            ></textarea>

            <label htmlFor="availability">Availability</label>
            <select id="availability" name="availability" value={formData.availability} onChange={handleChange} required>
              <option value="" disabled>Select your availability</option>
              <option value="fulltime">Full-Time</option>
              <option value="parttime">Part-Time</option>
              <option value="contribution">Contribution Basis</option>
            </select>

            <button type="submit" className="submit-button">Submit Application</button>
          </form>
          {message && <p className="form-note">{message}</p>}
        </div>
      </section>
    </div>
  );
};

export default JoinTeam;
