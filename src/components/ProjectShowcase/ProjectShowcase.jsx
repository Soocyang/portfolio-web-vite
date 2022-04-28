import './project-showcase.css';

function ProjectShowcase({currProj, onModalOpen}) {
  return (
    <div className="modal-card">
      <span className="close" onClick={() => onModalOpen()}>&times;</span>
      <div className="card-header">
        <h3>{currProj.title}</h3>
      </div>
      <div className="card-content">
        
      </div>
    </div>
  )
}

export default ProjectShowcase