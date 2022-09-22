import {useParams} from 'react-router-dom'
import data from "../../mook-data";
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
const ItemDetail = ()=>{
  const {id} = useParams() 
  const product = data[parseInt(id) - 1]

  const [count, setCount] = useState(0)

  const onAdd =(dat)=>{
    setCount(dat)
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
                  <h3 className='carrito'>En carrito: {count} </h3>
                  <ItemCount onAdd={onAdd}/>
          </div>) 
}

export default ItemDetail 