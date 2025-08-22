function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleOrderNow = () => {
      alert('🍩 Thank you for your interest! Online ordering will be available soon. Please visit us in store or call (555) 123-DOUGH to place your order.');
    };

    return (
      <header className="sticky top-0 z-50 bg-[var(--background-cream)] bg-opacity-95 backdrop-blur-sm border-b border-[var(--primary-color)] border-opacity-20" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                <div className="icon-coffee text-xl text-[var(--text-dark)]"></div>
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-[var(--text-dark)]">DOUGH with the Flow</h1>
                <p className="text-sm text-[var(--text-light)] font-medium">Café</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('menu')} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors">Menu</button>
              <button onClick={() => scrollToSection('location')} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors">Location</button>
              <button onClick={handleOrderNow} className="btn-primary">Order Now</button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--secondary-color)] transition-colors"
            >
              <div className="icon-menu text-xl text-[var(--text-dark)]"></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[var(--primary-color)] border-opacity-20">
              <nav className="flex flex-col space-y-4 pt-4">
                <button onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors text-left">Home</button>
                <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors text-left">About</button>
                <button onClick={() => { scrollToSection('menu'); setIsMenuOpen(false); }} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors text-left">Menu</button>
                <button onClick={() => { scrollToSection('location'); setIsMenuOpen(false); }} className="text-[var(--text-dark)] hover:text-[var(--primary-color)] font-medium transition-colors text-left">Location</button>
                <button onClick={() => { handleOrderNow(); setIsMenuOpen(false); }} className="btn-primary self-start">Order Now</button>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}