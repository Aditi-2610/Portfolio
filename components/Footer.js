function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-primary)] text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Aditi R. Limkar</h3>
              <p className="text-gray-300 mb-4">
                Computer Science graduate passionate about creating innovative software solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/Aditi-2610" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-github text-lg"></div>
                </a>
                <a href="https://www.linkedin.com/in/aditi-limkar-511128193/" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </a>
                <a href="mailto:aditilimkar26@gmail.com"
                   className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-mail text-lg"></div>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} 
                          className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
                          className="text-gray-300 hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })} 
                          className="text-gray-300 hover:text-white transition-colors">
                    Experience
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} 
                          className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} 
                          className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>aditilimkar26@gmail.com</p>
                <p>Milwaukee, WI</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Built with passion, and designed by Aditi R Limkar. 
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}