import React from 'react';

// Define ProductCard component before using it
function ProductCard({ title, description, imageSrc }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}


export default function CatalogPage() {
  return (
    <div className="catalog-container">
      <h1 className="catalog-header text-xl">Products Catalog</h1>
      <div className="product-list">
        <ProductCard
          title="Product 1"
          description="Keyboard"
          imageSrc="https://images.unsplash.com/photo-1634245482259-edd9f5786050?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8cExvT1VaWHlna3N8fGVufDB8fHx8fA%3D%3D"
        />
        <ProductCard
          title="Product 2"
          description="Camera"
          imageSrc="https://images.unsplash.com/photo-1549706779-09d2e17a51c4?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODk5NDM5OHx8ZW58MHx8fHx8"
        />
        <ProductCard
          title="Product 3"
          description="Bhoot mask"
          imageSrc="https://images.unsplash.com/photo-1618513847270-992347f2c59c?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODg1OTIxMXx8ZW58MHx8fHx8"
        />
      </div>
    </div>
  );
}


// ReactDOM.render(<CatalogPage />, document.getElementById('root'));
