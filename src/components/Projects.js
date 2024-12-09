import React, { useState } from 'react';
import '../styles/Projects.css';
import ProjectDetailModal from './ProjectDetailModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Future of Online Shopping',
      description: 'Redefining the online shopping experience using AI and machine learning to create personalized, intuitive user experiences.',
      techStack: ['React', 'Node.js', 'Python'],
      progress: 60,
    },
    {
      id: 2,
      title: 'Smart Home Automation',
      description: 'Developing solutions to seamlessly integrate smart devices into everyday life, making homes more efficient and interconnected.',
      techStack: ['IoT', 'Node.js', 'AWS'],
      progress: 80,
    },
    {
      id: 3,
      title: 'AI-powered Health Solutions',
      description: 'Creating AI-based solutions to improve healthcare and wellness for everyone.',
      techStack: ['TensorFlow', 'Python', 'AWS'],
      progress: 50,
    },
  ];

  const spotlightProject = {
    title: 'Community Engagement Platform',
    description:
      'Building tools to foster community engagement, connect like-minded individuals, and promote collaborative innovation. This project focuses on creating a platform that empowers communities to share ideas and grow together.',
    image: '/images/community-project.jpg',
  };

  const completedProjects = [
    {
      title: 'Eco-Friendly Delivery Solutions',
      description: 'A successful project aimed at reducing carbon footprints by optimizing delivery routes and promoting eco-friendly transportation.',
      image: '/images/eco-delivery.jpg',
    },
    {
      title: 'Virtual Reality Education',
      description: 'An immersive VR-based education platform providing engaging and interactive learning experiences.',
      image: '/images/vr-education.jpg',
    },
  ];

  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-page">


      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(./images/hero-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1 className="hero-headline">Explore Our Innovative Projects</h1>
          <p className="hero-subheadline">Discover the exciting projects that VisionForge is bringing to life through technology and collaboration.</p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="current-projects">
        <div className="content-wrapper">
          <h2>Our Current Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card" onClick={() => openProjectDetail(project)}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-icon">{tech}</span>
                  ))}
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${project.progress}%` }}></div>
                </div>
                <button className="learn-more-button">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Spotlight Section */}
      <section className="project-spotlight">
        <div className="content-wrapper spotlight-wrapper">
          <div className="spotlight-image">
            <img src={spotlightProject.image} alt={spotlightProject.title} />
          </div>
          <div className="spotlight-content">
            <h2>Project Spotlight</h2>
            <h3>{spotlightProject.title}</h3>
            <p>{spotlightProject.description}</p>
            <button className="join-project-button">Join the Project</button>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="completed-projects">
        <div className="content-wrapper">
          <h2>Our Completed Projects</h2>
          <div className="completed-carousel">
            {completedProjects.map((project, index) => (
              <div key={index} className="completed-project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <div className="content-wrapper">
          <h2>Ready to Get Involved?</h2>
          <p>Whether you want to contribute to our ongoing projects or have your own idea, VisionForge is the place to grow, collaborate, and innovate.</p>
          <button className="cta-button">Join Our Team</button>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal project={selectedProject} onClose={closeProjectDetail} />
      )}


    </div>
  );
};

export default Projects;
