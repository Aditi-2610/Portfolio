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
        icon: "code-xml",
        skills: ["JavaScript", "Python", "Java", "C++", "SQL"]
      },
      {
        title: "SAP",
        icon: "box",
        skills: ["ABAP", "SAC Planning", "HANA"]
      },
      {
        title: "Database",
        icon: "rows-4",
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
                
                <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => {
                      const palette = [
                        { bg: 'rgba(154,178,205,0.18)', text: '#3b556d' }, // blue
                        { bg: 'rgba(205,154,178,0.18)', text: '#6d3b55' }, // pink
                        { bg: 'rgba(178,205,154,0.22)', text: '#365237' }, // green
                      ];
                      const c = palette[skillIndex % palette.length];
                      return (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium border"
                          style={{ backgroundColor: c.bg, color: c.text, borderColor: 'var(--border-color)' }}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Machine Learning", "100 Days of Python"].map((skill, index) => {
                  const c = index % 2 === 0
                    ? { bg: 'rgba(154,178,205,0.18)', text: '#3b556d' }   // blue
                    : { bg: 'rgba(205,154,178,0.18)', text: '#6d3b55' };  // pink
                  return (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium border"
                      style={{ backgroundColor: c.bg, color: c.text, borderColor: 'var(--border-color)' }}
                    >
                      {skill}
                    </span>
                  );
                })}
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