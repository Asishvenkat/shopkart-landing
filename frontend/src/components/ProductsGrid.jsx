import React from 'react';
import { ShoppingCart, Package2, Star } from 'lucide-react';
import Filters from './Filters';

function ProductsGrid({ products = [], onAddToCart = () => {}, onFilter }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <Package2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16">
     
      <div className="mb-4">
        <Filters onFilter={onFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id || product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
        >
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x250?text=Product+Image';
              }}
            />
            <div className="absolute top-2 right-2">
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 min-h-[48px]">{product.name}</h3>
            <div className="min-h-[40px] mb-4 flex items-end">
              {product.description && (
                <p className="text-gray-600 text-sm line-clamp-2 w-full">{product.description}</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString('en-IN')}</span>
              <div className="flex items-center ml-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={
                    `w-4 h-4 ${i <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`
                  } fill={i <= Math.round(product.rating) ? 'currentColor' : 'none'} />
                ))}
                <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">Stock: {product.stock || 10}</span>
            </div>
            <div className="mt-auto">
              <button
                onClick={() => onAddToCart(product._id || product.id)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ProductsGrid;