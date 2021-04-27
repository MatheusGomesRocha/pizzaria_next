import { createContext, ReactNode, useState } from 'react';
import { MdShowChart } from 'react-icons/md';

type CartContextProvider = {
    children: ReactNode;
}

type CartContextData = {
    showCart: boolean;
    userWantsToBuy: () => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({children}: CartContextProvider) {
    const [showCart, setShowCart] = useState(false);

    function userWantsToBuy() {
        setShowCart(!showCart);
    }

    return(
        <CartContext.Provider value={{showCart, userWantsToBuy}}>
            {children}
        </CartContext.Provider>
    )
}