import React from "react";

export const CartContext = React.createContext();


//Componente proveedor con funciones incorporadas

export const CartProvider = ({children})=>{
    const listProdCar = [1,2,3]
    
    return(
        <CartContext.Provider value={{listProdCar}}>      
        {children}
        </CartContext.Provider>
    )
}