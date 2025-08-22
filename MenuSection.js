function MenuSection() {
  try {
    const [cart, setCart] = React.useState([]);

    const addToCart = (item) => {
      setCart(prevCart => [...prevCart, item]);
      alert(`🍩 ${item.name} added to your order! Total items: ${cart.length + 1}`);
    };

    const menuItems = [
      {
        name: "Classic Glazed",
        description: "Our signature soft donut with a perfect vanilla glaze",
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "signature"
      },
      {
        name: "Chocolate Bliss",
        description: "Rich chocolate donut with dark chocolate ganache",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "chocolate"
      },
      {
        name: "Strawberry Dream",
        description: "Fresh strawberry glaze with real strawberry pieces",
        price: "$4.25",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "fruity"
      },
      {
        name: "Cinnamon Sugar",
        description: "Warm spiced donut rolled in cinnamon sugar",
        price: "$3.75",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "classic"
      },
      {
        name: "Matcha Green Tea",
        description: "Delicate matcha flavor with white chocolate drizzle",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "specialty"
      },
      {
        name: "Caramel Delight",
        description: "Salted caramel glaze with caramelized sugar crystals",
        price: "$4.25",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "caramel"
      }
    ];

    return (
      <section id="menu" className="section-padding bg-[var(--background-cream)]" data-name="menu-section" data-file="components/MenuSection.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[var(--text-dark)] mb-6">
              Our Delicious Menu
            </h2>
            <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto leading-relaxed">
              Each donut is handcrafted with premium ingredients and made fresh daily. 
              Discover your new favorite flavor combination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[var(--primary-color)] text-[var(--text-dark)] px-3 py-1 rounded-full font-bold text-lg">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[var(--text-light)] mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <button 
                    onClick={() => addToCart(item)} 
                    className="w-full bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] hover:bg-opacity-20 text-[var(--text-dark)] py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 card-shadow">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold text-[var(--text-dark)] mb-4">
                Perfect Pairings
              </h3>
              <p className="text-[var(--text-light)] leading-relaxed">
                Complete your donut experience with our carefully curated beverage selection
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className="icon-coffee text-2xl text-[var(--text-dark)]"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-dark)]">Artisan Coffee</h4>
                <p className="text-sm text-[var(--text-light)]">Freshly roasted, perfectly brewed</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className="icon-milk text-2xl text-[var(--text-dark)]"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-dark)]">Fresh Milk Tea</h4>
                <p className="text-sm text-[var(--text-light)]">Creamy and aromatic blends</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className="icon-zap text-2xl text-[var(--text-dark)]"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-dark)]">Fresh Juices</h4>
                <p className="text-sm text-[var(--text-light)]">100% natural, no added sugar</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className="icon-snowflake text-2xl text-[var(--text-dark)]"></div>
                </div>
                <h4 className="font-semibold text-[var(--text-dark)]">Iced Beverages</h4>
                <p className="text-sm text-[var(--text-light)]">Cool and refreshing options</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('MenuSection component error:', error);
    return null;
  }
}