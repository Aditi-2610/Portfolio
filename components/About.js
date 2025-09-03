function About() {
  try {
    return (
      <section id="about" className="bg-white section-padding" data-name="about" data-file="components/About.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              About Me
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Learn more about my journey and what drives my passion for software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                My Journey
              </h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Recently graduated with a Bachelor's degree in Computer Science from University of Wisconsin - Milwaukee. 
                Throughout my academic journey, I've developed a strong foundation in programming, 
                algorithms, and software engineering principles.
              </p>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                I'm passionate about problem-solving and creating efficient, user-friendly applications. 
                My experience includes working with modern web technologies, contributing to open-source projects, 
                and completing several personal projects that showcase my abilities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-graduation-cap text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Education</h4>
                    <p className="text-[var(--text-secondary)]">M.S. Computer Science, University of Wisconsin - Milwaukee (2025)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-map-pin text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Location</h4>
                    <p className="text-[var(--text-secondary)]">Milwaukee, WI</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center mr-4">
                    <div className="icon-coffee text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Interests</h4>
                    <p className="text-[var(--text-secondary)]">Web Development, AI/ML, Open Source</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--tone-green)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-code text-xl text-white"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                      Full-Stack Development
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      Experience building end-to-end web applications using modern frameworks and technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--tone-pink)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-lightbulb text-xl text-white"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                      Problem Solving
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      Strong analytical skills and ability to break down complex problems into manageable solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--tone-blue)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="icon-users text-xl text-white"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                      Team Collaboration
                    </h4>
                    <p className="text-[var(--text-secondary)]">
                      Experience working in team environments using Git, Agile methodologies, and code reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}