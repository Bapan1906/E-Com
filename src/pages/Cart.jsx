import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cartitems from "../components/Cartitems";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Carts");
  console.log(cart);
  // create totalAmount --> and calculate totalAmount.
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        // True
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Left Section - Cart Items */}
            <div className="flex-1 h-[500px] sm:h-[550px] md:h-[600px] lg:h-[610px] overflow-y-auto overflow-x-hidden border rounded-md p-4">
              {cart.map((item, index) => {
                return (
                  <Cartitems key={item.id} item={item} itemIndex={index} />
                );
              })}
            </div>

            {/* Right Section - Cart Summary */}
            <div className="w-full sm:w-[80%] md:w-1/2 lg:w-1/3 h-[500px] sm:h-[550px] md:h-[600px] lg:h-[610px] p-4 border rounded-md shadow-md">
              <div className="flex justify-center items-center font-semibold text-xl sm:text-2xl text-green-600 uppercase">
                Your Cart
              </div>
              <br />
              <div className="flex justify-center items-center font-bold text-2xl sm:text-3xl md:text-4xl text-green-600 uppercase mb-4">
                Summary
              </div>
              <p className="mt-[300px] sm:mt-[320px] md:mt-[350px] lg:mt-[360px]">
                <span className="font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
              <div>
                <p className="font-medium">Total Amount: ₹{totalAmount}</p>
                <button className="border bg-green-600 text-white rounded-md w-full md:w-[250px] h-[40px] mt-4 ml-0 md:ml-11">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // False
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1>Your Cart is empty!</h1>
            <Link to={"/"}>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md mt-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
