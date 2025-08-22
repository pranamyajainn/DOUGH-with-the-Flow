function Footer() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleSocialClick = (platform) => {
      const socialLinks = {
        facebook: 'https://facebook.com/doughwiththeflow',
        instagram: 'https://instagram.com/doughwiththeflow',
        twitter: 'https://twitter.com/doughwiththeflow'
      };
      window.open(socialLinks[platform], '_blank');
    };
    return (
      <footer className="bg-[var(--text-dark)] text-white section-padding" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                  <div className="icon-coffee text-xl text-[var(--text-dark)]"></div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">DOUGH with the Flow</h3>
                  <p className="text-sm text-gray-300">Café</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Handcrafted pure vegetarian donuts made with love, served in our cozy vintage-inspired café.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-[var(--primary-color)] transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[var(--primary-color)] transition-colors text-left">About Us</button>
                <button onClick={() => scrollToSection('menu')} className="text-gray-300 hover:text-[var(--primary-color)] transition-colors text-left">Menu</button>
                <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-[var(--primary-color)] transition-colors text-left">Location</button>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Artisan Street</p>
                <p>Sweet City, SC 12345</p>
                <p>(555) 123-DOUGH</p>
                <p>hello@doughwiththeflow.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <button onClick={() => handleSocialClick('facebook')} className="w-10 h-10 rounded-full bg-[var(--primary-color)] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <div className="icon-facebook-outline text-lg text-[var(--primary-color)]"></div>
                </button>
                <button onClick={() => handleSocialClick('instagram')} className="w-10 h-10 rounded-full bg-[var(--primary-color)] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <div className="icon-instagram-outline text-lg text-[var(--primary-color)]"></div>
                </button>
                <button onClick={() => handleSocialClick('twitter')} className="w-10 h-10 rounded-full bg-[var(--primary-color)] bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <div className="icon-twitter text-lg text-[var(--primary-color)]"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 DOUGH with the Flow Café. All rights reserved. Made with ❤️ for donut lovers everywhere.
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