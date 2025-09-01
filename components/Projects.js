function Projects() {
  try {
    const projects = [
      {
        title: "Task Management App",
        description: "A full-stack web application for managing tasks and projects with user authentication, real-time updates, and responsive design.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Weather Dashboard",
        description: "Interactive weather application that displays current conditions and forecasts using external APIs with beautiful data visualizations.",
        technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "E-Learning Platform",
        description: "Educational platform with course management, video streaming, progress tracking, and interactive quizzes for students and instructors.",
        technologies: ["Python", "Django", "PostgreSQL", "Bootstrap"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ];

    return (
      <section id="projects" className="bg-white section-padding" data-name="projects" data-file="components/Projects.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A selection of projects that demonstrate my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[var(--secondary-color)] text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <div className="icon-github text-lg mr-2"></div>
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                  >
                    <div className="icon-external-link text-lg mr-2"></div>
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <div className="icon-github text-lg mr-2"></div>
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    return null;
  }
}