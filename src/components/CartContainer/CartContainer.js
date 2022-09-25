import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//icono de eliminar
import trashDelete from "../../assets/icos/trashDelete.svg";

const CartContainer = () => {
  const { listProdCar, removeItem, clear } = useContext(CartContext);

  //estado para mensaje o boton de vaciar carrito
  const [msj, setMsj] = useState();

  useEffect(() => {
    listProdCar.length > 0
      ? setMsj(<button onClick={() => clear()}>Vaciar Carrito</button>)
      : setMsj(<h3>No se encuentran productos disponibles en el carrito</h3>);
  }, [listProdCar]);

  return (
    <div>
      {listProdCar.map((prd) => (
        <div key={prd.id + "c"}>
          <img src={prd.image} />
          <ul>
            <li>Nombre-{prd.name}</li>
            <li>Cantidad-{prd.cantidad}</li>
          </ul>
          <button
            className="--deleteItemCar"
            onClick={() => removeItem(prd.id)}
          >
            <img src={trashDelete} />
          </button>
        </div>
      ))}
      <>{msj}</>
    </div>
  );
};

export default CartContainer;
