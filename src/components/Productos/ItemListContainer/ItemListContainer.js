import data from "../../mook-data";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  // const [dt, setDt] = useState('')
  const [dt, setDt] = useState([]);
  const { categoryId } = useParams();
  const getItem = new Promise((resolve, rejected) => {
    data !== [] ? resolve(data) : rejected("");
  });
  useEffect(() => {
    getItem.then((r) => {
      let categoria = r;
      if (categoryId !== undefined) {
        categoria = r.filter((item) => item.categoria === categoryId);
      }
      setDt(categoria);
    });
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
      {dt.map((item) => {
        return <ItemList key={"-" + item.id} prod={item} />;
      })}
    </div>
  );
};

export default ItemListContainer;
