function Hero() {
  try {
    return (

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[var(--secondary-color)] pt-16" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto section-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] flex items-center justify-center">
                <img
                  src="./assets/images/MyImage.jpg"              
                  alt="Portrait of Aditi R. Limkar"
                  className="w-full h-full rounded-full object-cover bg-white shadow-lg"
                  loading="eager"
                  width={128}
                  height={128}
                />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Hi, I'm <span className="text-[var(--primary-color)]">Aditi R. Limkar</span>
            </h1>
            
            {/* <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8">
              Computer Science Graduate & Aspiring Software Developer
            </p> */}
            <p class="text-2xl md:text-3xl mb-4">
              <span class="text-[var(--text-secondary)]">Hello, I’m a </span>
              <span id="tw-text" class="font-bold" style="color: var(--primary-color)"></span>
              <span id="tw-caret" aria-hidden="true" style="margin-left:4px;opacity:.85">|</span>
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
              <a href="https://github.com/Aditi-2610" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="icon-github text-xl text-[var(--text-primary)]"></div>
              </a>
              <a href="https://www.linkedin.com/in/aditi-limkar-511128193/" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
              </a>
              <a href="mailto:aditilimkar26@gmail.com"
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