function Skills() {
  try {
    const skillCategories = [
      {
        title: "Frontend",
        icon: "monitor",
        skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "ExpressJS", "Bootstrap"]
      },
      {
        title: "Backend",
        icon: "server",
        skills: ["Node.js", "Python", "Express.js", "RESTful APIs", "Database Design"]
      },
      {
        title: "Tools & Technologies",
        icon: "wrench",
        skills: ["Git/GitHub", "VS Code", "Docker", "AWS Basics", "Linux/Unix"]
      },
      {
        title: "Programming Languages",
        icon: "code-2",
        skills: ["JavaScript", "Python", "Java", "C++", "SQL"]
      },
      {
        title: "SAP",
        icon: "code-2",
        skills: ["ABAP", "SAC Planning", "HANA"]
      },
      {
        title: "Database",
        icon: "code-2",
        skills: ["MySQL", "MongoDB", "Relational Database", , "NoSQL"]
      }
    ];

    return (
      <section id="skills" className="bg-[var(--secondary-color)] section-padding" data-name="skills" data-file="components/Skills.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I'm proficient in
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div className={`icon-${category.icon} text-2xl text-white`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-[var(--text-secondary)] text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Machine Learning", "100 Days of Python"].map((skill, index) => (
                <span key={index} className="bg-white px-4 py-2 rounded-full text-[var(--text-primary)] border-2 border-[var(--primary-color)] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    return null;
  }
}