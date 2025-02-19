import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdSearchOff } from "react-icons/md";

const Pro1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const updatedProducts = data.map((product) => ({
          ...product,
          quantity: Math.floor(Math.random() * 5) + 1,
        }));

        setProducts(updatedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex justify-end mb-4">
        <input
          placeholder="Search..."
          className="p-3 rounded-xl border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
        <FaShoppingCart /> Product List
      </h2>
      
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <MdSearchOff className="text-6xl text-gray-300" />
          <p className="text-lg mt-2 text-gray-300">Product Not Found</p>
        </div>
      ) : (
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex space-x-6 p-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-300 min-w-[250px] text-gray-800"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 object-contain bg-gray-200 p-2 rounded-md"
                />
                <div className="mt-2 text-center text-sm">
                  <h4 className="font-semibold truncate">{product.title.substring(0, 15)}...</h4>
                  <p className="text-gray-600">₹{product.price}</p>
                  <p className="text-gray-600">Qty: {product.quantity}</p>
                  <p className="text-green-500 font-semibold">
                    Total: ₹{(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pro1;
