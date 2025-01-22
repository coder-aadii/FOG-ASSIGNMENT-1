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
        const response = await fetch('http://localhost:5000/api/products'); // Assuming this fetches all products initially
        const data = await response.json();
        setProducts(data.products);
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
