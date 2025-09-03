import React, { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [showFavourites, setShowFavourites] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  function handleFavourite(id) {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favId) => favId !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  }

  const handleShowFavourite = () => {
    setShowFavourites((prev) => !prev);
  };

  if (loading) {
    return <Loader />;
  }

  // Decide which products to show
  const visibleProducts = showFavourites
    ? products.filter((p) => favourites.includes(p.id))
    : products;

  const filteredProducts = selectedCategory
    ? visibleProducts.filter((p) => p.category === selectedCategory)
    : visibleProducts;

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Filter buttons */}
      <div className="flex justify-end mb-10 gap-5">
        <select
          name="Category"
          id="category"
          value={selectedCategory || ""}
          className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" disabled hidden>
            Category
          </option>
          <option value="">All Products</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>

        <button
          className="relative px-3 py-1 text-blue-600 rounded-lg cursor-pointer 
             after:content-[''] after:block after:w-full after:h-[2px] 
             after:bg-blue-600 after:absolute after:bottom-1 after:left-0"
          onClick={handleShowFavourite}
        >
          {showFavourites ? "Show All" : "Favourite"}
        </button>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {showFavourites && favourites.length === 0 ? (
          <p className="text-center text-gray-500 text-lg col-span-full">
            You have no favourite products yet.
          </p>
        ) : (
          filteredProducts.map((product) => {
            const isFavourite = favourites.includes(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="font-semibold text-lg line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 mt-2">${product.price}</p>

                <div className="flex w-full gap-2">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-8/10 mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition cursor-pointer"
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => handleFavourite(product.id)}
                    className="mt-4 w-[30%] flex items-center justify-center rounded-xl cursor-pointer bg-gray-200"
                  >
                    <Heart
                      fill={isFavourite ? "#ff6b81" : "none"}
                      stroke={isFavourite ? "#ff6b81" : "currentColor"}
                    />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
