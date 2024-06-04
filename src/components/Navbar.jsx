import React, { useContext, useEffect, useState } from "react";
import { IoMdHeart, IoMdCart } from "react-icons/io";
import Cart from "./Cart";
import { FruitContext } from "../context/FruitContext";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useContext(FruitContext);

  useEffect(() => {
    if (cart.length === 1) setIsCartOpen(true);
  }, [cart]);

  return (
    <div className="flex items-center justify-between py-6">
      <h1 className="cursor-pointer text-3xl text-orange-400">
        <span className="font-bold text-red-600">Context</span> Shop
      </h1>

      <ul className="flex gap-6 text-lg">
        <li>
          <a className="text-slate-500 hover:text-orange-500" href="#">
            Shop
          </a>
        </li>
        <li>
          <a className="text-slate-500 hover:text-orange-500" href="#">
            Plant Care
          </a>
        </li>
        <li>
          <a className="text-slate-500 hover:text-orange-500" href="#">
            Workshops
          </a>
        </li>
        <li>
          <a className="text-slate-500 hover:text-orange-500" href="#">
            Blogs
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <div className="flex size-9 items-center justify-center rounded-full bg-slate-200">
          <IoMdCart
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="size-5 cursor-pointer transition-colors hover:text-orange-500"
          />
          {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
        </div>
        <div className="flex size-9 items-center justify-center rounded-full bg-slate-200">
          <IoMdHeart className="size-5 cursor-pointer transition-colors hover:text-red-600" />
        </div>

        <div>
          <img
            className="size-11 rounded-full border-2 border-orange-400"
            src="https://xsgames.co/randomusers/assets/avatars/male/5.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
