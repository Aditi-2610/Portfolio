function Projects() {
  try {
    const projects = [
      {
        title: "COLORIZATION OF HISTORICAL BLACK-AND-WHITE PHOTOS",
        description: "A deep learning model using PyTorch and TensorFlow to restore and colorize historical grayscale images with realistic color mapping.",
        technologies: ["PyTorch", "TensorFlow", "CNN", "OpenCV", "MatPlotLib"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "./assets/images/Project1.png"
      },
      {
        title: "SIEM INTEGRATION WITH ARTIFICIAL INTELLIGENCE",
        description: "A Security Information and Event Management (SIEM) solution using Microsoft Sentinel for automating workflows and responding to cybersecurity incidents efficiently ",
        technologies: ["Microsoft Sentinel", "Azure", "Open AI", "Automated Incident Response"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "./assets/images/Project2.jpg"
      },
      {
        title: "AGILECART WITH CI/CD PIPELINE",
        description: "Designed and implemented a robust CI/CD pipeline for a shopping application.",
        technologies: ["AWS(Lambda, EC2, S3, CodePipeline, CodeBuild, CodeDeploy)", "Buildspec.yml", "Appspec.yml", "GitHub Webhooks"],
        github: "https://github.com",
        demo: "https://example.com",
        image: "./assets/images/Project3.jpg"
      }
    ];
    const CHIP_PALETTE = [
        { bg: 'rgba(154,178,205,0.18)', text: '#3b556d' }, // Slate Azure
        { bg: 'rgba(205,154,178,0.18)', text: '#6d3b55' }, // Amber Rose
        { bg: 'rgba(178,205,154,0.22)', text: '#365237' }, // Willow Brook
      ];
      const chipStyle = (i) => {
        const c = CHIP_PALETTE[i % CHIP_PALETTE.length];
        return { backgroundColor: c.bg, color: c.text, borderColor: 'var(--border-color)' };
      };
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
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
                      style={chipStyle(techIndex)}
                    >
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
                    View Code
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