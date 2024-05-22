import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/features/ProductSlice";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { RemoveAllData } from "../../Redux/features/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const CartData = useSelector((res) => res.CartSlice);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(dispatch));
  }, []);

  return (
    <div className="bg-indigo-100 min-h-screen">
      <div className="container  ml-auto mr-auto">
        {CartData.length > 0 && (
          <button
            onClick={() => dispatch(RemoveAllData())}
            className="cursor-pointer transition-all w-64 bg-red-500 text-white px-6 py-2 ms-4 rounded-lg 
     border-red-600
     border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
     active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-center my-4 mx-auto"
          >
            Remove all Cart
          </button>
        )}
        {!CartData.length && (
          <button
            onClick={() => navigator("/products")}
            className="cursor-pointer transition-all w-64 bg-blue-500 text-white px-6 py-2 ms-4 rounded-lg 
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-center my-4 mx-auto"
          >
            Add Item
          </button>
        )}

        {!CartData.length && (
          <h2 className="text-2xl text-white bg-red-500 w-fit p-5 rounded-xl">
            Empty Card Add Some Card
          </h2>
        )}
        <div className="flex flex-wrap items-start ">
          {/* Render Product Cards */}
          {CartData &&
            CartData.map((item, index) => {
              return (
                <ProductCard item={item} key={index} ActionType={"cart"} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
