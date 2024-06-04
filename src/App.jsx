import React, { useState } from "react";
import Navbar from "./components/Navbar";
import FruitContent from "./components/FruitContent";

import { FruitContext } from "./context/FruitContext";
import { randomUid } from "rand-uid";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <FruitContext.Provider value={{ cart, setCart }}>
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
        <FruitContent />
      </div>
    </FruitContext.Provider>
  );
};

export default App;
