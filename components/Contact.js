function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState('');

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    };

    return (
      <section id="contact" className="bg-[var(--secondary-color)] section-padding" data-name="contact" data-file="components/Contact.js">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              I'm actively seeking new opportunities. Let's connect and discuss how I can contribute to your team!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Email</h4>
                    <a href="mailto:alex.johnson@email.com" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                      aditilimkar26@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="icon-linkedin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">LinkedIn</h4>
                    <a href="https://linkedin.com/in/aditi-limkar-511128193" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                      www.linkedin.com/in/aditi-limkar-511128193
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="icon-github text-xl text-[var(--text-primary)]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">GitHub</h4>
                    <a href="https://github.com/Aditi-2610" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                      github.com/aditi-2610
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mr-4">
                    <div className="icon-phone text-xl text-green-600"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)]">Phone</h4>
                    <a href="tel:+14143176039" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                      +1 (414) 317-6039
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Send Me a Message
              </h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent resize-none"
                    placeholder="Tell me about the opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="icon-loader-2 text-lg mr-2 animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <div className="icon-send text-lg mr-2"></div>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}
