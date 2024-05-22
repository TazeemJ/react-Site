import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeImage } from "../../Redux/features/imageSlice";
// Import your removeImage action from Redux

const ImageCard = ({ item }) => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const dispatch = useDispatch();

  const handleImageLoaded = () => {
    setLoading(false); // Set loading state to false when image is loaded
  };

  return (
    <div
      className="my-1 w-full"
      onClick={() => dispatch(removeImage(item.uniqueId))}
    >
      <article className="overflow-hidden rounded-lg shadow-lg h-56">
        {loading && (
          // Render loader while image is loading
          <div className="w-full h-full  my-3">
            <div className="flex flex-col bg-neutral-300 w-full h-full animate-pulse rounded-xl p-4 gap-4">
              <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
              <div className="flex flex-col gap-2">
                <div className="bg-neutral-400/50 w-full h-3 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-4/5 h-3 animate-pulse rounded-md"></div>
                <div className="bg-neutral-400/50 w-full h-3 animate-pulse rounded-md"></div>
              </div>
            </div>
          </div>
        )}
        <a>
          <img
            alt="Placeholder"
            className={`block h-full w-full object-cover ${
              loading ? "hidden" : "block"
            }`}
            src={item.url ? item.url : "https://picsum.photos/600/400/?random"}
            onLoad={handleImageLoaded} // Call handleImageLoaded when image is loaded
          />
        </a>
      </article>
    </div>
  );
};

export default ImageCard;
