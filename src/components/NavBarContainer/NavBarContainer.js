//imports icos
//import car from "../../assets/icos/car.svg";
//import user from "../../assets/icos/user.svg";
//import search from "../../assets/icos/search.svg";
import bag from "../../assets/icos/bag.svg"
import contact from "../../assets/icos/contact.svg"
import home from "../../assets/icos/home.svg"
import car from "../../assets/icos/car.svg"

import {NavLink} from 'react-router-dom'
//import functional component-container
import CartWidgetContaier from "./CartWidgetContainer/CartWidgetContainer";


const NavBarContaier = () => {
  return (
    <nav>
      <ul className="nav_ul">
        <li>
          <NavLink to="/" className={({isActive})=>isActive ? "--navOpY" : "--navOpN"}>
            <CartWidgetContaier rutImg={home}>
                <h3>Inicio</h3>
            </CartWidgetContaier>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={({isActive})=> isActive ? "--navOpY" : "--navOpN"}>
            <CartWidgetContaier rutImg={contact}>
                <h3>Contacto</h3>
            </CartWidgetContaier>
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className={({isActive})=> isActive ? "--navOpY" : "--navOpN"}>
            <CartWidgetContaier rutImg={bag}>
                <h3>Productos</h3>
            </CartWidgetContaier>
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrito" className={({isActive})=> isActive ? "--navOpY" : "--navOpN"}>
            <CartWidgetContaier rutImg={car}>
                <h3>Carrito</h3>
            </CartWidgetContaier>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarContaier;
