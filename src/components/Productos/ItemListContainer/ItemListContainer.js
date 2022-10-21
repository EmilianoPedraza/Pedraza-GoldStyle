import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { where, query, collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/fireBase";
const ItemListContainer = () => {
  const [dt, setDt] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const valid = () => {
      if (categoryId !== undefined) {
        return query(
          collection(db, "items"),
          where("categoria", "==", categoryId)
        );
      }
      return query(collection(db, "items"));
    };

    const getItemFilter = async () => {
      const itemsF = valid();
      const response = await getDocs(itemsF);
      const products = response.docs.map((i) => {
        const element = {
          ...i.data(),
          id: i.id,
        };
        return element;
      });
      setDt(products);
    };
    getItemFilter();
  }, [categoryId]);

  return (
    <div className="catalogo">
      <ul className="categorias">
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? "catOk" : "catNot")}
          >
            ver todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos/SILLA GAMER"
            className={({ isActive }) => (isActive ? "catOk" : "catNot")}
          >
            Sillas Gamer{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos/ESCRITORIO GAMER"
            className={({ isActive }) => (isActive ? "catOk" : "catNot")}
          >
            Escritorios Gamer
          </NavLink>
        </li>
      </ul>
      <div className="--containerProducts">
        {dt.map((item) => {
          return <ItemList key={"-" + item.id} prod={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
