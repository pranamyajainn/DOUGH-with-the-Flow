function HeroSection() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[var(--background-cream)] to-[var(--secondary-color)]" data-name="hero-section" data-file="components/HeroSection.js">
        <div className="max-w-7xl mx-auto section-padding grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[var(--accent-color)] bg-opacity-20 px-4 py-2 rounded-full">
                <div className="icon-leaf text-sm text-[var(--accent-color)]"></div>
                <span className="text-[var(--text-dark)] text-sm font-medium">100% Pure Vegetarian</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-dark)] leading-tight">
                Artisan Donuts with a 
                <span className="text-[var(--primary-color)]"> Cozy Twist</span>
              </h1>
              <p className="text-lg text-[var(--text-light)] leading-relaxed max-w-lg">
                Handcrafted pure vegetarian donuts made fresh daily with love, served in our warm and inviting café atmosphere. Every bite tells a story of quality and care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('menu')} className="btn-primary">Explore Our Menu</button>
              <button onClick={() => scrollToSection('location')} className="btn-outline">Visit Our Café</button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="icon-star text-lg text-[var(--primary-color)]"></div>
                <span className="text-[var(--text-dark)] font-medium">4.9 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="icon-users text-lg text-[var(--primary-color)]"></div>
                <span className="text-[var(--text-dark)] font-medium">1000+ Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Delicious artisan donuts display" 
                className="w-full rounded-3xl card-shadow"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--primary-color)] rounded-full flex items-center justify-center card-shadow">
                <div className="text-center">
                  <div className="icon-coffee text-3xl text-white mb-1"></div>
                  <span className="text-white text-sm font-bold">Fresh Daily</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[var(--accent-color)] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--secondary-color)] rounded-full opacity-40"></div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}