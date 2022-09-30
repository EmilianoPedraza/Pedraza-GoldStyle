import {useParams} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext, useEffect} from 'react';
import { CartContext } from '../../../context/CartContext';
import {doc, getDoc} from "firebase/firestore"
import { db } from '../../../utils/fireBase';

const ItemDetail = ()=>{
  const {id} = useParams() 
  const [product, setProduct] = useState({})
  const [count, setCount] = useState(0)

  //acceso al contexto
  const {addItem} = useContext(CartContext)

  //
  useEffect(()=>{
    const getProd = async()=>{
      const item = doc(db, "items", id)
      const prod = await getDoc(item)
      const newPrd = {...prod.data(),id: prod.id}
      setProduct(newPrd)
    }
    getProd()
  },[])


  const onAdd =(dat)=>{
    setCount(dat)
    addItem(product, dat)
  }
  
  return(<div className="datos">
                  <img src={product.image} className="--imgPrd" />
                  <h3 className="--tittlePrd-">{product.name}</h3>
                  <ul className="--datPrdA-">
                    <li className="--categ-">categoria: {product.categoria}</li>
                    <li className="--price-">Precio: {product.price}$</li>
                    <li className="--stock-">Stock: {product.stock}</li>
                  </ul>
                  <p className="--especificacines">Lorem ipsum dolor sit amet consectetur adipisicingelit. Inventore fugit, quasi praesentium, quam ducimus magni, impedit voluptatibus omnis iure laudantium excepturi earum ratione. Fugit harum quis perspiciatis! Rerum, provident recusandae!</p>
                  {/* <h3 className='carrito'>En carrito: {count} </h3> */}
                  <ItemCount onAdd={onAdd}/>
          </div>) 
}

export default ItemDetail 