function Hero() {
  try {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[var(--secondary-color)] pt-16" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center">
              <div className="icon-user text-4xl text-white"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Hi, I'm <span className="text-[var(--primary-color)]">Alex Johnson</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8">
              Computer Science Graduate & Aspiring Software Developer
            </p>
            
            <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative software solutions and turning ideas into reality. 
              I'm eager to contribute my skills and fresh perspective to a dynamic development team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex justify-center space-x-6 mt-12">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="icon-github text-xl text-[var(--text-primary)]"></div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
              </a>
              <a href="mailto:alex.johnson@email.com"
                 className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="icon-mail text-xl text-[var(--text-primary)]"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}