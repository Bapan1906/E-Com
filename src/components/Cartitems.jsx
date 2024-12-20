import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Cartitems = ({ item, intemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="border-b-2 border-gray-300 flex items-center p-4 space-x-4 mx-auto ">
      {/* Left Side: Image */}
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w-40 h-40 object-contain rounded-md"
        />
      </div>

      {/* Right Side: Content */}
      <div>
        {/* Title and Description */}
        <div className="mb-2">
          <h1 className="text-gray-700 font-semibold text-lg truncate ">
            {item.title}
          </h1>
          <p className="text-gray-500 text-sm max-w-[400px] ">
            {item.description.split(" ").slice(0, 10).join(" ")}
          </p>
          <p className="text-gray-500 text-sm max-w-[400px]">
            {item.description.split(" ").slice(11, 20).join(" ") + "..."}
          </p>
        </div>

        {/* Price and Delete Button */}
        <div className="flex items-center gap-80">
          <p className="text-gray-800 font-medium">₹{item.price}</p>
          <div
            className="text-red-500 cursor-pointer hover:text-red-700 transition"
            onClick={removeFromCart}
          >
            <AiTwotoneDelete className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
