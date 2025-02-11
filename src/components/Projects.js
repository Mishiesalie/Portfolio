import '../styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Habit Tracker',
      description: 'A React habit tracker using Firebase',
      tech: ['React', 'Firebase', 'Sass'],
      image: '/images/habit-tracker.png'
    },
    // Add more projects...
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 