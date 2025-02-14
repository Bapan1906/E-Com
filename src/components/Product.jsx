import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";
import{toast} from "react-hot-toast";

const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const diapatch = useDispatch();

    const addToCart = () =>{
        diapatch(add(post));
        toast.success(" Item added to Cart");
    }

    const removeFromCart =()=>{
        diapatch(remove(post.id));
        toast.error(" Item removed from Cart");
    }
  return (
    <div className="flex flex-col items-center justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)]
    hover:scale-110 hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
        <div >
            <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
        </div>
        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px]">
            <img src={post.image} alt=""  className="h-full w-full"/>
        </div>

        <div className="flex justify-between gap-12">
            <div>
                <p className="text-gray-800 font-semibold items-center w-full mt-5 ">₹{post.price}</p>
            </div>
            {
                cart.some((p) => p.id === post.id) ? 
                // cart is exist show remove button.
                (
                    <button
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease-in"
                     onClick={removeFromCart}>
                        Remove Item
                    </button>
                ) :
                // cart is not exist show Add to cart
                (
                    <button
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease-in"
                    onClick={addToCart}>
                        Add to Cart 
                    </button>
                )
            }
        </div>
        
    </div>
  );
};

export default Product;
