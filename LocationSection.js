function LocationSection() {
  try {
    const handleGetDirections = () => {
      const address = "123 Artisan Street, Cozy Corner District, Sweet City, SC 12345";
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      window.open(mapsUrl, '_blank');
    };
    return (
      <section id="location" className="section-padding bg-white" data-name="location-section" data-file="components/LocationSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
              Visit Our Cozy Café
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto leading-relaxed">
              Come experience the warmth and comfort of our café. We can't wait to serve you 
              our freshly made donuts and artisan coffee in person.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                    <div className="icon-map-pin text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-2">Address</h3>
                    <p className="text-[var(--text-light)]">123 Artisan Street<br />Cozy Corner District<br />Sweet City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                    <div className="icon-clock text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-2">Hours</h3>
                    <div className="text-[var(--text-light)] space-y-1">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 9:00 PM</p>
                      <p>Sunday: 8:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                    <div className="icon-phone text-xl text-[var(--primary-color)]"></div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-2">Contact</h3>
                    <div className="text-[var(--text-light)] space-y-1">
                      <p>(555) 123-DOUGH</p>
                      <p>hello@doughwiththeflow.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-opacity-20 rounded-2xl p-6">
                <h3 className="font-display text-2xl font-bold text-[var(--text-dark)] mb-4">Special Events</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="icon-calendar text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-dark)]">Donut Making Classes - Every Saturday</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="icon-music text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-dark)]">Live Acoustic Sessions - Friday Evenings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="icon-users text-lg text-[var(--primary-color)]"></div>
                    <span className="text-[var(--text-dark)]">Private Party Bookings Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[var(--secondary-color)] rounded-3xl p-8 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-[var(--primary-color)] flex items-center justify-center mb-6">
                  <div className="icon-map text-4xl text-white"></div>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--text-dark)] mb-4">Find Us Easily</h3>
                <p className="text-[var(--text-light)] mb-6">
                  Located in the heart of the artisan district, just a 5-minute walk from Central Park. 
                  Free parking available behind the building.
                </p>
                <button onClick={handleGetDirections} className="btn-primary">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('LocationSection component error:', error);
    return null;
  }
}
