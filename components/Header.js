function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    };

    return (
      <header className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-[var(--primary-color)]">
              Aditi Limkar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className={`icon-menu text-xl ${isMenuOpen ? 'text-[var(--primary-color)]' : 'text-[var(--text-secondary)]'}`}></div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('skills')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Skills
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}