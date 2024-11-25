import React from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero" style={{ backgroundImage: 'url(/images/hero-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="hero-content">
            <h1 className="hero-headline">Forge the Future with VisionForge</h1>
            <p className="hero-subheadline">Join a team of passionate developers creating cutting-edge solutions to reshape industries.</p>
            <button className="cta-button">Join Us Today</button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us">
          <div className="content-wrapper">
            <h2>About VisionForge</h2>
            <p>VisionForge is building a collaborative community of developers focused on creating innovative, impactful tech solutions. Our mission is to foster collaboration and creativity among tech enthusiasts, delivering technology that shapes the future. Whether you're a coder, designer, or visionary, VisionForge is the platform to make your ideas a reality and grow with a talented team.</p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="our-values">
          <div className="content-wrapper">
            <h2>Our Core Values</h2>
            <div className="values-list">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We embrace creativity and thrive on new ideas. Innovation is the key to making an impactful difference in the tech industry.</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>Teamwork makes the dream work. We believe that collaboration between passionate individuals leads to exceptional results.</p>
              </div>
              <div className="value-card">
                <h3>Growth</h3>
                <p>At VisionForge, growth is part of our DNA. We are dedicated to helping our members learn, grow, and reach new heights in their careers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Overview Section */}
        <section className="projects-overview">
          <div className="content-wrapper">
            <h2>Our Projects</h2>
            <div className="project-list">
              <div className="project-card">
                <h3>Future of Online Shopping</h3>
                <p>We are redefining the online shopping experience using AI and machine learning to create personalized, intuitive user experiences.</p>
              </div>
              <div className="project-card">
                <h3>Smart Home Automation</h3>
                <p>Developing innovative solutions to seamlessly integrate smart devices, making homes more efficient and interconnected.</p>
              </div>
              <div className="project-card">
                <h3>AI-powered Health Solutions</h3>
                <p>Creating cutting-edge health solutions powered by AI to provide accessible and effective healthcare for everyone.</p>
              </div>
              <div className="project-card">
                <h3>Community Engagement Platform</h3>
                <p>Building tools to foster community engagement, connect like-minded individuals, and promote collaborative innovation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonial-section">
          <div className="content-wrapper">
            <h2>What Our Community Says</h2>
            <div className="testimonials">
              <div className="testimonial">
                <p>"VisionForge has provided me with incredible opportunities to work on meaningful projects and grow as a developer. The community is amazing!"</p>
                <h4>- Alex M., Frontend Developer</h4>
              </div>
              <div className="testimonial">
                <p>"I joined VisionForge to be part of a team that values creativity and innovation, and I've never looked back. The culture here is truly inspiring."</p>
                <h4>- Priya R., UX Designer</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="join-us">
          <div className="content-wrapper">
            <h2>Why Join VisionForge?</h2>
            <ul>
              <li>Work on cutting-edge technologies and make an impact in the tech industry.</li>
              <li>Collaborate with industry experts and expand your skillset.</li>
              <li>Enjoy the freedom to innovate, grow, and shape the future.</li>
              <li>Be part of a community that is supportive, motivated, and values continuous learning.</li>
            </ul>
            <button className="join-button">Join Us Now</button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action">
          <div className="content-wrapper">
            <h2>Ready to Start Your Journey?</h2>
            <p>Become part of a vibrant community of innovators and make a difference. Whether you're looking to learn, grow, or lead, VisionForge has a place for you.</p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
