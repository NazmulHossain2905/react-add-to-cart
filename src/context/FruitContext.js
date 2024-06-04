import { createContext, useContext } from "react";

export const FruitContext = createContext({ cart: [], setCart: () => {} });

// export const FruitProvider = FruitContext.Provider;

// export const useFruitContext = useContext(FruitContext);
