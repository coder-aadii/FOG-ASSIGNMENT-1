import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterSorting from './components/FilterSorting';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fog-assignment-1.onrender.com/api/products');
        
        // Check if the response is successful (status 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Try to parse the JSON data
        const data = await response.json();

        // Check if 'products' is available in the response
        if (data && data.products) {
          setProducts(data.products);
        } else {
          throw new Error('Products data is missing in response');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <FilterSorting />
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
};

export default App;
