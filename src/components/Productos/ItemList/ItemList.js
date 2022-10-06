import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = (prod) => {
  //si el producto no existe o algo se ejecuta rejected
  const [product, setProduct] = useState("cargando");

  const mensajeError = "error en la carga del producto";

  const procesTime = new Promise((resolve, rejected) => {
    const prd = prod || mensajeError;
    if (prd !== mensajeError) {
      resolve(prd);
    } else {
      rejected(prd);
    }
  });

  useEffect(() => {
    procesTime.then((r) => {
      setProduct({
        id: r.prod.id,
        name: r.prod.name,
        categoria: r.prod.categoria,
        price: r.prod.price,
        image: r.prod.image,
        stock: r.prod.stock,
      });
    });

    procesTime.catch((r) => {
      setProduct(false);
    });
  }, []);

  const mostrar = (val) => {
    if (val) {
      return (
        <div className="--itemPrd" id={product.id}>
          <img src={product.image} className="--imgPrd" />
          <h3 className="--tittlePrd">{product.name}</h3>
          <ul className="--datPrdA">
            <li className="--price">Precio: {product.price} ARS</li>
            <li className="--stock">Stock: {product.stock}</li>
          </ul>

          <Link to={"/productos/" + `${product.categoria}/${product.id}`}>
            <button className="--btnDetails">ver más detalles</button>
          </Link>
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

  const rendering = () => {
    return product === "cargando" ? mostrar(false) : mostrar(true);
  };

  return <>{product && rendering()}</>;
};

export default ItemList;
