import React, { useState, useRef, useEffect } from 'react';

const categories = [
  'All',
  'Mobiles',
  'Electronics',
  'Laptops',
  'Televisions',
  'Home Appliances',
  'Kitchen',
  'Home & Kitchen',
  'Travel',
  'Footwear',
  'Wearables',
  'Bags',
  'Food',
  'Grocery',
  'Personal Care'
];

const Filters = ({ onFilter }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('All');
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (cat) => {
    setSelected(cat);
    setOpen(false);
    onFilter(cat);
  };

  return (
    <div className="bg-white p-4 shadow-md mb-8">
      <div className="container mx-auto">
        <label className="mr-4">Category:</label>
        <div className="relative inline-block w-56" ref={dropdownRef}>
          <button
            type="button"
            className="w-full px-4 py-2 border rounded bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-400 flex justify-between items-center"
            onClick={() => setOpen((o) => !o)}
          >
            {selected}
            <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {open && (
            <ul className="absolute left-0 mt-2 w-full bg-white border rounded shadow-lg z-50 max-h-60 overflow-auto">
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => handleSelect(cat)}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${selected === cat ? 'bg-blue-50 font-semibold' : ''}`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;