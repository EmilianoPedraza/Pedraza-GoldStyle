import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//icono de eliminar
import trashDelete from "../../assets/icos/trashDelete.svg";

//formulario de finalización
import FormUser from "../FormUser/FormUser";

const CartContainer = () => {
  const { listProdCar, removeItem, clear, totales } = useContext(CartContext);

  //estado para mensaje o boton de vaciar carrito
  const [msj, setMsj] = useState();
  const [desOn, setDesOn] = useState(false);

  const desplegar = () => {
    setDesOn(true);
  };

  useEffect(() => {
    listProdCar.length > 0
      ? setMsj(
          <>
            <button onClick={() => clear()}>Vaciar Carrito</button>
            <button onClick={() => desplegar()}>Finalizar Compra</button>
          </>
        )
      : setMsj(<h2>No se encuentran productos disponibles en el carrito</h2>);
  }, [listProdCar]);

  return (
    <>
      <div className={`${desOn ? "opacityOn" : ""}`}>
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
        <>
          {listProdCar.length > 0 && (
            <h3>Total calculado: {totales.totalPrices}$</h3>
          )}
        </>
        <>{msj}</>
      </div>
      <>{desOn && <FormUser close={setDesOn} />}</>

    </>
  );
};

export default CartContainer;
