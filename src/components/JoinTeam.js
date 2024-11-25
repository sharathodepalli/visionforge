import React from 'react';
import '../styles/JoinTeam.css';
import Navbar from './Navbar';
import Footer from './Footer';

const JoinTeam = () => {
  return (
    <div className="join-team-page">

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/images/join-team-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1 className="hero-headline">Be Part of an Innovative Team at VisionForge</h1>
          <p className="hero-subheadline">Join us and work on projects that matter, grow your skills, and build the future of technology.</p>
          <button className="cta-button">Apply Now</button>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="content-wrapper">
          <h2>Why Join VisionForge?</h2>
          <div className="two-column-layout">
            <div className="benefits-list">
              <div className="benefit">
                <img src="/icons/growth-icon.png" alt="Growth Icon" />
                <p><strong>Hands-on Experience:</strong> Work on real-world projects that have a real impact.</p>
              </div>
              <div className="benefit">
                <img src="/icons/teamwork-icon.png" alt="Teamwork Icon" />
                <p><strong>Collaborate with Experts:</strong> Be part of a community with experienced mentors.</p>
              </div>
              <div className="benefit">
                <img src="/icons/career-icon.png" alt="Career Icon" />
                <p><strong>Career Growth Opportunities:</strong> Build your portfolio and grow with us.</p>
              </div>
            </div>
            <div className="illustration">
              <img src="/images/community-illustration.png" alt="Community Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="open-roles">
        <div className="content-wrapper">
          <h2>Current Opportunities</h2>
          <div className="roles-list">
            <div className="role-card">
              <h3>Front-End Developer</h3>
              <p>Looking for skilled developers with experience in React.js to help build an intuitive front-end for our platform.</p>
              <ul>
                <li>JavaScript, React, HTML, CSS</li>
                <li>Experience in responsive design</li>
              </ul>
              <button className="apply-button">Apply for this Role</button>
            </div>
            <div className="role-card">
              <h3>Back-End Developer</h3>
              <p>Seeking experienced Node.js developers to help build scalable back-end services.</p>
              <ul>
                <li>JavaScript, Node.js, Express</li>
                <li>Experience with databases like MongoDB or PostgreSQL</li>
              </ul>
              <button className="apply-button">Apply for this Role</button>
            </div>
            <div className="role-card">
              <h3>UI/UX Designer</h3>
              <p>Creative designers needed to help craft user-friendly interfaces and experiences.</p>
              <ul>
                <li>Figma, Sketch, Adobe XD</li>
                <li>Experience in user research and prototyping</li>
              </ul>
              <button className="apply-button">Apply for this Role</button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <div className="content-wrapper">
          <h2>How We Work</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <img src="/icons/application-icon.png" alt="Application Icon" />
              <p><strong>Application:</strong> Submit your application to join the VisionForge team.</p>
            </div>
            <div className="workflow-step">
              <img src="/icons/interview-icon.png" alt="Interview Icon" />
              <p><strong>Initial Interview:</strong> Our team will get in touch to learn more about you.</p>
            </div>
            <div className="workflow-step">
              <img src="/icons/project-icon.png" alt="Project Icon" />
              <p><strong>Project Assignment:</strong> Start collaborating on exciting projects with a team.</p>
            </div>
            <div className="workflow-step">
              <img src="/icons/growth-icon.png" alt="Growth Icon" />
              <p><strong>Grow and Contribute:</strong> Develop your skills and contribute to building real solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="application-form">
        <div className="content-wrapper">
          <h2>Apply to Join VisionForge</h2>
          <form className="join-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="role">Role/Area of Interest</label>
            <select id="role" name="role">
              <option value="frontend">Front-End Developer</option>
              <option value="backend">Back-End Developer</option>
              <option value="design">UI/UX Designer</option>
              <option value="ai">AI Specialist</option>
            </select>

            <label htmlFor="skills">Skills and Experience</label>
            <textarea id="skills" name="skills" rows="4" required></textarea>

            <label htmlFor="portfolio">Portfolio/GitHub/LinkedIn</label>
            <input type="text" id="portfolio" name="portfolio" />

            <label htmlFor="motivation">Motivation</label>
            <textarea id="motivation" name="motivation" rows="4" required></textarea>

            <label htmlFor="availability">Availability</label>
            <select id="availability" name="availability">
              <option value="fulltime">Full-Time</option>
              <option value="parttime">Part-Time</option>
              <option value="contribution">Contribution Basis</option>
            </select>

            <button type="submit" className="submit-button">Submit Application</button>
          </form>
          <p className="form-note">We’ll get back to you within 1-2 weeks. Thanks for applying!</p>
        </div>
      </section>

      {/* FAQ Section (Optional) */}
      <section className="faq-section">
        <div className="content-wrapper">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What kind of projects will I be working on?</h3>
            <p>You will be working on a variety of projects that involve cutting-edge technologies, focusing on impactful real-world solutions.</p>
          </div>
          <div className="faq-item">
            <h3>Is this a full-time commitment?</h3>
            <p>We have opportunities for both full-time and part-time contributors. You can choose the availability that suits you best.</p>
          </div>
          <div className="faq-item">
            <h3>What experience level are you looking for?</h3>
            <p>We welcome developers and designers of all experience levels who are eager to learn and contribute.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default JoinTeam;
