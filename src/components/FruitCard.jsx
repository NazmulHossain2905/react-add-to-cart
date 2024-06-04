import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FruitContext } from "../context/FruitContext";

const FruitCard = ({ fruit }) => {
  const { cart, setCart } = useContext(FruitContext);

  const handleAddToCart = () => {
    setCart((prev) => [{ ...fruit, quantity: 1 }, ...prev]);
  };

  const handleRemoveToCart = () => {
    setCart(cart.filter((f) => f.id !== fruit.id));
  };
  return (
    <div className="w-60 rounded-lg border-[1px] border-slate-200 p-4">
      <div className="h-40 w-full">
        <img className="h-full w-full object-contain" src={fruit.img} alt="" />
      </div>

      <h3 className="text-lg font-bold">{fruit.name}</h3>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {Array(fruit.rating)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} className="size-3 text-orange-300" />
            ))}
        </div>
        <span className="text-sm">({fruit.review})</span>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <p className="font-medium">Price</p>
        <b>Tk. {fruit.price}kg</b>
      </div>

      {cart.findIndex((item) => item.id === fruit.id) > -1 ? (
        <button
          onClick={handleRemoveToCart}
          className="mt-4 w-full rounded-lg bg-red-500 p-1.5 font-semibold text-white transition-colors hover:bg-red-700"
        >
          Remove to cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full rounded-lg bg-green-500 p-1.5 font-semibold text-white transition-colors hover:bg-green-700"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default FruitCard;
