import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterSorting from './components/FilterSorting';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

// Assuming you want to fetch products from the API and display them
const App = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(16); // Number of products per page

  // Fetch products on page change
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products?page=${currentPage}&limit=${limit}`);
      const data = await response.json();
      setProducts(data.products);
      setTotalProducts(data.total); // This can be used for pagination logic
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, [currentPage, limit]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);  // Re-fetch products when fetchProducts or currentPage changes

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
