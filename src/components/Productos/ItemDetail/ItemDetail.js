import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils/fireBase";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const getProd = async () => {
      const item = doc(db, "items", id);
      const prod = await getDoc(item);
      const newPrd = { ...prod.data(), id: prod.id };
      setProduct(newPrd);
    };
    getProd();
  }, [id]);

  const onAdd = (dat) => {
    addItem(product, dat);
  };

  return (
    <div className="--totalData">
      <div className="--divImgBox">
        <img src={product.image} className="--imgPrd" alt={product.categoria + product.name}/>
      </div>
      <div className="--divDataBox">
        <h3 className="--tittlePrd-">{product.name}</h3>
        <ul className="--datPrdA-">
          <li className="--categ-">categoria: {product.categoria}</li>
          <li className="--price-">Precio: {product.price}ARS</li>
          <li className="--stock-">Stock: {product.stock}</li>
        </ul>
        <p className="--especificacines">{product.detail}</p>
        <ItemCount onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
