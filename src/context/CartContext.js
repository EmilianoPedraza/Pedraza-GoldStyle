import React from "react";
import { useState, useEffect } from "react";
export const CartContext = React.createContext();

//Componente proveedor con funciones incorporadas

export const CartProvider = ({ children }) => {
  const [listProdCar, setListProdCar] = useState([]);

  //agregar productos
  const addItem = (item, cant) => {
    let con = 0
    const newArray = [...listProdCar]
    if(listProdCar.length>0){
      newArray.map(e=>{
        e.id === item.id ? e.cantidad = cant : con += 1
      })
    }
    if(con === listProdCar.length){
      const itemCar = [
        {
          ...item,
          cantidad: cant,
        },
      ];
      // newArray = [...listProdCar, ...itemCar];
      setListProdCar([...newArray,...itemCar]);
    }
    else{
      setListProdCar(newArray)
    }
  };

  //eliminar un producto
  const removeItem = (itemId) => {
    const arrowDifrnt = listProdCar.filter(
      (producto) => producto.id !== itemId
    );
    setListProdCar(arrowDifrnt);
  };
  //eliminar todos los productos
  const clear = () => {
    setListProdCar([]);
  };
  return (
    <CartContext.Provider value={{ listProdCar, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
