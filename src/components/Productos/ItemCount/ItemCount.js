import { useState } from "react";
//dato:sin estar entre corchetes el parametro(funcion) onAdd no funciona :[
const ItemCount = ({onAdd}) => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  return (
    <div className="--botonContar">
      <input type="submit" className="--operationSum" value="+" onClick={sumar} />
      <h3 className="--cantidad">{contador}</h3>
      <input type="submit" className="--operationRest" value="-" onClick={restar} />
      <input type="submit" className="--addCar" value="Agregar Al Carrito" onClick={()=>onAdd(contador)}/>
    </div>
  );
};
export default ItemCount;
