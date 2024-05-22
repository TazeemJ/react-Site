import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { Link } from "react-router-dom";

const Images = () => {
  const res = useSelector((imagesData) => imagesData.imageSlice);

  return (
    <div className="bg-[#f6e58d]">
      <div className="container py-12 mx-auto px-4 md:px-12 ">
        <div className="grid grid-cols-4 gap-6 flex-wrap  ">
          {res.map((item, index) => (
            <ImageCard item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-center py-5">
        <Link
          to={"/"}
          className="cursor-pointer transition-all w-64 bg-blue-500 text-white px-6 py-2 ms-4 rounded-lg 
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-center"
        >
          Add images
        </Link>
      </div>
    </div>
  );
};

export default Images;
