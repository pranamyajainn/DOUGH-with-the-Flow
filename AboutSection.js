function AboutSection() {
  try {
    return (
      <section id="about" className="section-padding bg-white" data-name="about-section" data-file="components/AboutSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
              Our Sweet Story
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto leading-relaxed">
              Born from a passion for creating memorable moments, DOUGH with the Flow Café brings together 
              traditional recipes with modern artisan techniques in a cozy, vintage-inspired space.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-leaf text-3xl text-[var(--accent-color)]"></div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--text-dark)]">Pure Vegetarian</h3>
              <p className="text-[var(--text-light)] leading-relaxed">
                Every ingredient is carefully selected to ensure our treats are completely vegetarian, 
                without compromising on taste or quality.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-heart text-3xl text-[var(--primary-color)]"></div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--text-dark)]">Made with Love</h3>
              <p className="text-[var(--text-light)] leading-relaxed">
                Our artisan bakers handcraft each donut with passion and attention to detail, 
                creating treats that warm both heart and soul.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-home text-3xl text-[var(--accent-color)]"></div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--text-dark)]">Cozy Atmosphere</h3>
              <p className="text-[var(--text-light)] leading-relaxed">
                Step into our warm, vintage-inspired space where friends gather, 
                conversations flow, and memories are made over delicious treats.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] bg-opacity-20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-[var(--text-dark)] mb-4">
                  Where Quality Meets Comfort
                </h3>
                <p className="text-[var(--text-light)] leading-relaxed mb-6">
                  From our signature glazed donuts to artisan coffee blends, every element of your experience 
                  is designed to bring joy and comfort to your day. We believe in creating not just food, 
                  but moments of happiness.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="icon-clock text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-dark)] font-medium">Fresh Every Morning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="icon-award text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-dark)] font-medium">Award Winning</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Cozy café interior" 
                  className="rounded-2xl card-shadow"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Fresh coffee being poured" 
                  className="rounded-2xl card-shadow mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}