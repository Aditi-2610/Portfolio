function Experience() {
  try {
    const experiences = [
      {
        title: "Sr Analyst / Software Engineer",
        company: "Capgemini Technology Services",
        location: "Pune, India",
        duration: "Sep 2021 – Jul 2023",
        type: "Full-time",
        description:
          "Delivered secure, scalable back‑end features on agile teams and participated across the SDLC (requirements through deployment). Refactored SAP systems and improved database performance for enterprise apps.",
        achievements: [
          "Optimized MySQL/MongoDB schemas, improving performance by 40%",
          "Refactored ABAP/SAC Planning/HANA components to align with SDLC standards",
          "Integrated cloud‑native tools and JSON‑based APIs for service communication",
          "Led troubleshooting to reduce system failures; improved uptime by 35%"
        ],
        technologies: [
          "ABAP",
          "SAC Planning",
          "SAP HANA",
          "MySQL",
          "MongoDB",
          "REST API",
          "Git"
        ]
      },
      {
        title: "Researcher / Developer",
        company: "CDAC (Centre for Development of Advanced Computing)",
        location: "Pune, India",
        duration: "Aug 2020 – May 2021",
        type: "Research Internship",
        description:
          "Built a full‑stack flood monitoring application with real‑time geospatial data visualizations, deploying services to the cloud and iterating in an agile environment.",
        achievements: [
          "Developed REST APIs with JSON data handling for river‑basin analytics",
          "Implemented responsive UIs with React, Angular, and Leaflet",
          "Created Node.js/Express backend to process & visualize hydrological data",
          "Deployed on cloud servers to ensure high availability"
        ],
        technologies: [
          "React",
          "Angular",
          "Leaflet",
          "Node.js",
          "Express",
          "REST API",
          "Cloud"
        ]
      },
      {
        title: "Frontend Developer Intern",
        company: "LitmusBlox, India",
        location: "Pune, India",
        duration: "Jun 2020 – Oct 2020",
        type: "Internship",
        description:
          "Refactored and optimized UI components while collaborating with backend and QA in an agile setup to support the full SDLC.",
        achievements: [
          "Improved UI performance by 15% through React/JS/TS refactors",
          "Implemented Redux/Context state management & optimized API integrations",
          "Reduced API response times by 25% via targeted optimizations"
        ],
        technologies: [
          "React",
          "TypeScript",
          "Redux",
          "Context API",
          "JavaScript",
          "REST API"
        ]
      }
    ];

    // Pastel badge colors for each type
      const TYPE_BADGE = {
        'Internship': {
          // Slate Azure (blue)
          bg:   'bg-[rgba(154,178,205,0.18)]',
          text: 'text-[#3b556d]',
        },
        'Research Internship': {
          // Amber Rose (pink)
          bg:   'bg-[rgba(205,154,178,0.18)]',
          text: 'text-[#6d3b55]',
        },
        'Full-time': {
          // Willow Brook (green)
          bg:   'bg-[rgba(178,205,154,0.22)]',
          text: 'text-[#365237]',
        },
      };

      const badgeClasses = (t) =>
        `${(TYPE_BADGE[t]?.bg || 'bg-[rgba(154,178,205,0.18)]')} ${(TYPE_BADGE[t]?.text || 'text-[#3b556d]')}`;


    return (
      <section
        id="experience"
        className="bg-[var(--secondary-color)] section-padding"
        data-name="experience"
        data-file="components/Experience.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Roles and impact across enterprise software, cloud, and front‑end engineering
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Timeline indicator */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--gradient-dark)] rounded-xl flex items-center justify-center">
                      <div className="icon-briefcase text-2xl text-white"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-[var(--primary-color)] mb-1">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                          <span className="flex items-center">
                            <div className="icon-map-pin text-sm mr-1"></div>
                            {exp.location}
                          </span>
                          <span className="flex items-center">
                            <div className="icon-calendar text-sm mr-1"></div>
                            {exp.duration}
                          </span>
                          <span
                            className="px-2 py-1 rounded-full text-xs font-medium border border-[var(--border-color)]"
                            style={
                              exp.type === 'Full-time' ? { backgroundColor: 'rgba(178,205,154,0.22)', color: '#365237' } :
                              exp.type === 'Research Internship' ? { backgroundColor: 'rgba(205,154,178,0.18)', color: '#6d3b55' } :
                              { backgroundColor: 'rgba(154,178,205,0.18)', color: '#3b556d' } // Internship default
                            }
                          >
                            {exp.type}
                          </span>
                            
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[var(--text-secondary)] text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white text-[var(--primary-color)] px-3 py-1 rounded-full text-sm font-medium border border-[var(--primary-color)]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <p className="text-[var(--text-secondary)] mb-6">Interested in my professional background?</p>
            <a href="./assets/files/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
              <div className="icon-download text-lg mr-2"></div>
              View Full Resume
            </a>
            
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Experience component error:", error);
    return null;
  }
}

export default Experience;
