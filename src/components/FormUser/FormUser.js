import { useContext, useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/fireBase";
import { CartContext } from "../../context/CartContext";

const FormUser = ({ close }) => {
  const { listProdCar, totales, clear } = useContext(CartContext);
  const [codId, setCodId] = useState("");

  const dates = (ev) => {
    ev.preventDefault();

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

    const datUsr = collection(db, "orders");
    addDoc(datUsr, datesUser).then((response) => {
      setCodId(response.id);
    });
  };
  useEffect(() => {
    if (codId !== "") {
      new Promise((res) => {
        setTimeout(() => {
          res(false);
        }, 4000);
      })
        .then((r) => {
          close();
          return true;
        })
        .then((r) => {
          clear();
        });
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
    <div
      onClick={() => {
        close(false);
        if (codId !== "") {
          clear();
        }
      }}
      className="boxForm"
    >
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