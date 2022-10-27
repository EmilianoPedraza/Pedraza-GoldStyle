import React from "react";
import { useState, useEffect } from "react";
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [listProdCar, setListProdCar] = useState([]);
  const [totales, setTotales] = useState({});
  
  useEffect(() => {
    const newTotal = {
      totalPrices : 0,
      cantidadItems: 0
    }
    listProdCar.forEach((item) => {
      newTotal.totalPrices += item.totalPrice;
      newTotal.cantidadItems += item.cantidad;
    });
    setTotales(newTotal);
  }, [listProdCar]);


  const addItem = (item, cant) => {
    let con = 0;
    const newArray = [...listProdCar];
    if (listProdCar.length > 0) {
      newArray.forEach((e) => {
        if (e.id === item.id) {
          e.cantidad += cant;
          e.totalPrice = e.cantidad * e.price;
        } else {
          con += 1;
        }
      });
    }
    if (con === listProdCar.length) {
      const itemCar = [
        {
          ...item,
          cantidad: cant,
          totalPrice: cant * item.price,
        },
      ];
      setListProdCar([...newArray, ...itemCar]);
    } else {
      setListProdCar(newArray);
    }
  };

  const removeItem = (itemId) => {
    const arrowDifrnt = listProdCar.filter(
      (producto) => producto.id !== itemId
    );
    setListProdCar(arrowDifrnt);
  };

  const clear = () => {
    setListProdCar([]);
  };
  return (
    <CartContext.Provider
      value={{ listProdCar, addItem, removeItem, clear, totales }}
    >
      {children}
    </CartContext.Provider>
  );
};
