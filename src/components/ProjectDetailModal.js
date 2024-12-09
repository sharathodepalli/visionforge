import React from 'react';
import '../styles/ProjectDetailModal.css';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <h3>Project Overview</h3>
          <p>{project.description}</p>
          <h3>Technologies Used</h3>
          <div className="tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-icon">{tech}</span>
            ))}
          </div>
          <h3>Team Involved</h3>
          <div className="team-list">
            {project.team && project.team.length > 0 ? (
              project.team.map((member, index) => (
                <div key={index} className="team-member">
                  <img src={member.image} alt={member.name} className="team-member-photo" />
                  <p>{member.name}</p>
                </div>
              ))
            ) : (
              <p>Team information not available.</p>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <button className="join-project-button" onClick={() => alert('Thank you for showing interest! We will get back to you soon.')}>Join This Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
