import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},
});

export default DataContext;