import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addImage, removeImage } from "../../Redux/features/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../../Components/ImageCard/ImageCard";

const Home = () => {
  const dispatch = useDispatch();
  const res = useSelector((imagesData) => imagesData.imageSlice);

  const SubMited = (e) => {
    e.preventDefault();
    dispatch(addImage(e.target[0].value));
  };
  return (
    <div className=" bg-[#f6e58d] pb-4">
      <h2 className="text-5xl text-center font-extrabold text-[#3742fa] py-10">
        Paste Url image
      </h2>
      <div className="flex items-center justify-center font-sans text-black ">
        <div className="rounded overflow-hidden flex w-1/2 mx-auto">
          <form className="w-full" onSubmit={SubMited}>
            <input
              type="url"
              className="px-4 py-2 w-full"
              placeholder="Search..."
              defaultValue={"https://picsum.photos/600/400/?randomddkkd"}
            />
            <button
              className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg mt-3
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Generate image
            </button>
          </form>
        </div>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="grid grid-cols-3 gap-6 -mx-1 lg:-mx-4">
          {res.map((item, index) => (
            <ImageCard item={item} key={index} removeImage={removeImage} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link
            to={"/images"}
            className="cursor-pointer transition-all w-64 bg-blue-500 text-white px-6 py-2 ms-4 rounded-lg 
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-center"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
