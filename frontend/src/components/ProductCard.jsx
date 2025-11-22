const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded shadow-md p-4 hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
        loading="lazy"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'; }}
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">₹{product.price.toLocaleString('en-IN')}</p>
      <div className="flex mb-2">
        {renderStars(Math.floor(product.rating))}
        <span className="ml-2 text-sm">({product.rating})</span>
      </div>
    </div>
  );
};

export default ProductCard;