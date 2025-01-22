import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/ProductGrid.css';
import Pagination from './Pagination';

const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 16; // Number of products per page

  useEffect(() => {
    // Fetch the products from the API whenever currentPage changes
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products?page=${currentPage}&limit=${limit}`);
        setTotalProducts(response.data.total);
      } catch (error) {
        console.error('There was an error fetching the products:', error);
      }
    };

    fetchProducts();
  }, [currentPage]); // Refetch total products when currentPage changes

  const currentProducts = products.slice((currentPage - 1) * limit, currentPage * limit);

  return (
    <div>
      <div className="product-grid-container">
        {currentProducts.map(product => (
          <div className="product-card" key={product._id}>
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-overlay">
                <div className="icon-btn">
                  <button className="icon-btn-like">
                    <img src="https://img.icons8.com/?size=100&id=24816&format=png&color=FFFFFF" alt="Like" />
                    <span>Like</span>
                  </button>
                  <button className="icon-btn-share">
                    <img src="https://img.icons8.com/?size=100&id=98959&format=png&color=FFFFFF" alt="Share" />
                    <span>Share</span>
                  </button>
                  <button className="icon-btn-compare">
                    <img src="https://img.icons8.com/?size=100&id=78566&format=png&color=FFFFFF" alt="Compare" />
                    <span>Compare</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="product-details">
              <h4 className="product-name">{product.name}</h4>
              <p className="product-description">{product.description}</p>
              <span className="product-price">${product.price}</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalProducts={totalProducts}
        limit={limit}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductGrid;
