import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemList = (prod) => {
  const [product, setProduct] = useState("cargando");

  const mensajeError = "error en la carga del producto";
  const promsa = new Promise((resolve, rejected) => {
    const prd = prod || mensajeError;
    if (prd !== mensajeError) {
      resolve(prd);
    } else {
      rejected(prd);
    }
  })
  
  useEffect(() => {
    promsa.then((r) => {
      setProduct({
        id: r.prod.id,
        name: r.prod.name,
        categoria: r.prod.categoria,
        price: r.prod.price,
        image: r.prod.image,
        stock: r.prod.stock,
      });
    })
    .catch((r) => {
      setProduct(false);
      console.warn("Error en prop, prop:", r)
    });
  },[]);

  const mostrar = (val) => {
    if (val) {
      return (
        <div className="--itemPrd" id={product.id}>
          <img src={product.image} className="--imgPrd" alt={product.categoria + product.name}/>
          <h3 className="--tittlePrd">{product.name}</h3>
          <ul className="--datPrdA">
            <li className="--price">Precio: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(product.price)}</li>
            <li className="--stock">Stock: {product.stock}</li>
          </ul>

          <Link to={`/productos/${product.categoria}/${product.id}`}>
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
