import React, { useContext } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FruitContext } from "../context/FruitContext";

const Cart = ({ setIsCartOpen }) => {
  const { cart, setCart } = useContext(FruitContext);

  const handleIncrementQuantity = (fId) => {
    const updatedCart = cart.map((fruit) => {
      if (fruit.id === fId) {
        return { ...fruit, quantity: fruit.quantity + 1 };
      }
      return fruit;
    });

    setCart(updatedCart);
  };

  const handleDecrementQuantity = (fId) => {
    // const updatedCart = cart.map((fruit) => {
    //   if (fruit.id === fId && fruit.quantity >= 1) {
    //     return { ...fruit, quantity: fruit.quantity - 1 };
    //   }
    //   return fruit;
    // });

    const updatedCart = cart.map((fruit) => {
      if (fruit.id === fId) {
        return { ...fruit, quantity: fruit.quantity - 1 };
      }
      return fruit;
    });

    setCart(updatedCart.filter((f) => f.quantity > 0));
  };
  return (
    <div className="absolute right-0 top-0 h-screen w-1/3 overflow-y-auto bg-gray-800 bg-opacity-90 p-5 text-white backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl">
          My Cart {cart.length ? `(${cart.length})` : ""}
        </h3>
        <MdKeyboardDoubleArrowRight
          onClick={() => setIsCartOpen(false)}
          className="cursor-pointer text-xl transition-transform hover:translate-x-1"
        />
      </div>

      {!cart.length && (
        <h1 className="mt-8 text-center text-2xl font-bold text-gray-500">
          Empty Cart
        </h1>
      )}

      <div className="mt-5 flex flex-col gap-5">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-md bg-gray-900 p-2 px-5"
          >
            <img src={item.img} className="h-full max-w-28" />
            <div className="flex-1">
              <h4 className="font-bold">{item.name}</h4>
              <p>Price: Tk. {item.price}/kg</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleDecrementQuantity(item.id)}
                  className="h-6 w-10 rounded-full bg-pink-500"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleIncrementQuantity(item.id)}
                  className="h-6 w-10 rounded-full bg-pink-500"
                >
                  +
                </button>
              </div>
            </div>

            <p className="text-lg font-medium">
              ৳ {item.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 left-0 right-0 flex justify-between bg-gray-700 p-2 text-lg font-medium">
        Total Price:{" "}
        <b>
          {cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)}
          Tk
        </b>
      </div>
    </div>
  );
};

export default Cart;
