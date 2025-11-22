import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleSearch = (value) => {
    
    if (typeof value === "string" && value.length === 24) {
      const selected = products.filter(p => p._id === value);
      setFilteredProducts(selected);
      return;
    }

   
    if (typeof value === "string") {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      return;
    }

   
    setFilteredProducts(products);
  };

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(products.filter(p => p.category === category));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onSearch={handleSearch} />
      <Hero />
      <div id="products">
        <ProductsGrid products={filteredProducts} onFilter={handleFilter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
