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
  const [renderValid, setRenderValid] = useState({
    formValid: false,
  });

  
  const formValidState = (val) => {
    setRenderValid({...renderValid, ["formValid"]: val });
  };

  const mensajeState = (val) => {
    setRenderValid({ ...renderValid, ["mensaje"]: val });
  };


  useEffect(() => {
    listProdCar.length > 0
      ? mensajeState(
          <>
            <button className="--btnVaciarCar" onClick={() => clear()}>
              Vaciar Carrito
            </button>
            <button
              className="--btnFinalCom"
              onClick={() => formValidState(true)}
            >
              Finalizar Compra
            </button>
          </>
        )
      : mensajeState(1);
  }, [listProdCar]);

  return (
    <>
      {renderValid.mensaje === 1 && (
        <div className="--NotCarContainer">
          <h2 className="--notProd">
            No se encuentran productos disponibles en el carrito
          </h2>
        </div>
      )}
      <div
        className={
          "--conteinerCar " + `${renderValid.formValid ? "opacityOn" : ""}`
        }
      >
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
        <>{renderValid.mensaje}</>
      </div>
      <>{renderValid.formValid && <FormUser close={setRenderValid} />}</>
    </>
  );
};

export default CartContainer;
