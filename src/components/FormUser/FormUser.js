import { useContext, useEffect, useState } from "react";
//metodo para subir un documento a mi colección en firebase
import { addDoc, collection } from "firebase/firestore";
//referencia de mi firebase
import { db } from "../../utils/fireBase";
import { CartContext } from "../../context/CartContext";

const FormUser = ({ close }) => {
  //Tengo que recibir un array con los productos
  const { listProdCar, totales, clear } = useContext(CartContext);
  const [codId, setCodId] = useState("");
  //en una funcion cuando es llamada por un evento autamaticamente recivo un parametro
  const dates = (ev) => {
    ev.preventDefault();
    //Opción alternativa:

    // const name = document.querySelector("#name")
    // const surname = document.querySelector("#surname")
    // const correo = document.querySelector("#correo")
    // const tel = document.querySelector("#phone")
    // datesUser.buyer.name = name.value
    // datesUser.buyer.surname = surname.value
    // datesUser.buyer.email = correo.value
    // datesUser.buyer.tel = tel.value
    // console.warn(datesUser)

    const fechaAndHours = new Date();
    const datesUser = {
      buyer: {
        name: ev.target[0].value,
        surname: ev.target[1].value,
        email: ev.target[2].value,
        tel: ev.target[3].value,
      },
      items: listProdCar,
      dates: fechaAndHours.toLocaleString(),
      total: totales.totalPrices,
    };
    //creamos la referencia, si la coleción orders no existe se creara
    const datUsr = collection(db, "orders");
    //subo mi documento(el objeto que cree) mediante addDoc que recibe dos parametros: la referencia y la información que vamos a enviar.la función retornara una promesa con el Id del documento creado en nuestra colección.Por ende podemos mostras esa respuesta por consola mediante then
    addDoc(datUsr, datesUser).then((response) => {
      setCodId(response.id);
    });
  };
  useEffect(() => {
    if(codId !== ""){
      const salir = new Promise(res=>{
        setTimeout(()=>{res(false)},4000)
      }).then( r=>{
        close()
        return true
      }
      ).then(r=>{
        clear()
      })
    }
  }, [codId]);



  const form = () => {
    return (
      <form onSubmit={dates} className="--form">
        <input type="text" id="name" name="name" placeholder="Nombre" />

        <input type="text" id="surname" name="surname" placeholder="Apellido" />

        <input type="email" id="correo" name="correo" placeholder="email" />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Número de telefono"
        />
        <button type="submit" id="submit">
          Enviar
        </button>
        <button onClick={() => close(false)} id="cancel">
          Cancelar
        </button>
      </form>
    );
  };

  return (
    <div onClick={() => {
      close(false)
      if(codId!==""){
        clear()
      }
      }} className="boxForm">
      <div
        onClick={(ev) => {
          ev.stopPropagation();
        }}
        className="boxForm__div"
      >
        {codId !== "" ? (
          <h2>
            Pedido realizado con exito.
            <br />
            ID: {codId}
          </h2>  

        ) : (
          form()
        )}
      </div>
    </div>
  );
};

export default FormUser;
