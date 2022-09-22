// import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = (prod) => {
  const [product, setProduct] = useState("cargando");
  const procesTime = new Promise((resolve, rejected) => {
    resolve(prod);
    rejected("error");
  });

  useEffect(() => {
    procesTime.then((r) => {
      let time = parseInt(r.prod.id) * 2000;
      setTimeout(() => {
        setProduct({
          id: r.prod.id,
          name: r.prod.name,
          categoria: r.prod.categoria,
          price: r.prod.price,
          image: r.prod.image,
          stock: r.prod.stock,
        });
      }, time);
    });
  }, []);
  const mostrar = (val) => {
    if (val) {
      return (
        <div className="--itemPrd" id={product.id}>
          <img src={product.image} className="--imgPrd" />
          <h3 className="--tittlePrd">{product.name}</h3>
          <ul className="--datPrdA">
            {/* <li className="--categ">categoria: {product.categoria}</li> */}
            <li className="--price">Precio: {product.price}$</li>
            <li className="--stock">Stock: {product.stock}</li>
          </ul>
          {/* <ItemCount /> */}
          <Link to={'/productos/'+`${product.categoria}/${product.id}`}><button>ver más detalles</button></Link>
        </div>
      );
    } else {
      return (
        <div className="--itemPrd">
          <h3>{product}</h3>
        </div>
      );
    }
  };
  return <>{product === "cargando" ? mostrar(false) : mostrar(true)}</>;
};

export default ItemList;
