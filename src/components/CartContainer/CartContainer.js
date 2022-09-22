import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const CartContainer = () => {
  const value = useContext(CartContext);
  return (
    <div>
      {value.listProdCar.map((prd) => (
        <p>
            {prd}
        </p>
      ))}
    </div>
  );
};

export default CartContainer;
