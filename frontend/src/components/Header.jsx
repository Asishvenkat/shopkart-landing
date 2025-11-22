import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';

function Header({ cartItemCount = 0, onCartClick = () => {}, onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const desktopSearchRef = useRef(null);

  useEffect(() => {
    if (query.trim().length > 0) {
      fetch(`http://localhost:5000/api/search?q=${query}`)
        .then(res => res.json())
        .then(data => {
          setSuggestions(data);
          setShowSuggestions(true);
        });
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (productId, productName) => {
    setQuery(productName);
    setShowSuggestions(false);
    onSearch(productId);   
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="flex items-center justify-between h-20">

          
          <div className="flex items-center space-x-3 cursor-pointer">
            <img src="/shopping-bag.png" className="w-11 h-11 bg-white rounded-full p-1 shadow" />
            <span className="text-3xl font-extrabold text-white">ShopKart</span>
          </div>

          
          <div ref={desktopSearchRef} className="relative flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 py-2 text-gray-800 bg-transparent h-12 outline-none"
                placeholder="Search for products, brands and more..."
              />
              <button className="h-12 px-4 bg-blue-600 text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white rounded shadow-lg mt-1 overflow-hidden z-20">
                {suggestions.map((p) => (
                  <li
                    key={p._id}
                    onClick={() => handleSelect(p._id, p.name)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

        
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-blue-800/40 text-white font-medium">
              <User className="w-5 h-5" /> <span>Sign In</span>
            </button>

            <button className="relative px-3 py-2 rounded-full hover:bg-blue-800/40 text-white">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </button>

            
            <button className="md:hidden p-2 rounded-full hover:bg-blue-800/40 text-white">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

       
        <div className="block md:hidden mt-2 mb-2">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 h-12"
              placeholder="Search for products..."
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
              <Search className="w-5 h-5" />
            </button>

            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full bg-white rounded shadow-lg mt-1 z-20">
                {suggestions.map((p) => (
                  <li
                    key={p._id}
                    onClick={() => handleSelect(p._id, p.name)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
