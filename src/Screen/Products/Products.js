import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, setData } from "../../Redux/features/ProductSlice";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  const ProductsData = useSelector((res) => res.ProductSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(dispatch));
  }, []);

  return (
    <div className="flex items-center bg-indigo-100 min-h-screen">
      <div className="container ml-auto mr-auto flex flex-wrap items-start">
        <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
          {/* <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
            Best Sellers
          </h1> */}
        </div>
        {/* Render Product Cards */}
        {ProductsData.data &&
          ProductsData.data.map((item, index) => {
            return (
              <ProductCard item={item} key={index} ActionType={"product"} />
            );
          })}
        {/* Render Loader */}
        {ProductsData.loader.isLoading && !ProductsData.error && (
          <div className="flex flex-row gap-2 mx-auto">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        )}
        {/* Render Error */}
        {ProductsData.error && ProductsData.loader.isLoading && (
          <h3 className="mx-auto bg-red-600 p-4 rounded text-white font-bold">
            {ProductsData.error}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Products;
