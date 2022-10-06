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
            <button className="--btnVaciarCar" onClick={() => clear()}>
              Vaciar Carrito
            </button>
            <button className="--btnFinalCom" onClick={() => desplegar()}>
              Finalizar Compra
            </button>
          </>
        )
      : setMsj(1);
  }, [listProdCar]);

  return (
    <>
      {msj === 1 && (
        <div className="--NotCarContainer">
          <h2 className="--notProd">
            No se encuentran productos disponibles en el carrito
          </h2>
        </div>
      )}
      <div className={"--conteinerCar " + `${desOn ? "opacityOn" : ""}`}>
        <div className="--itemContainer">
          {listProdCar.map((prd) => (
            <div key={prd.id + "c"} className="--item">
              <img className="--imgCar" src={prd.image} />
              <ul className="--datesUl">
                <li>Nombre: {prd.name}</li>
                <li>Cantidad: {prd.cantidad}</li>
              </ul>
              <button
                className="--deleteItemCar"
                onClick={() => removeItem(prd.id)}
              >
                <img src={trashDelete} />
              </button>
            </div>
          ))}
        </div>
        <>
          {listProdCar.length > 0 && (
            <h3 className="--total">Total: {totales.totalPrices} ARS</h3>
          )}
        </>
        <>{msj}</>
      </div>
      <>{desOn && <FormUser close={setDesOn} />}</>
    </>
  );
};

export default CartContainer;
