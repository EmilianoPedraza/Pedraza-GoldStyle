import "./App.css";
//Importacion de metodos necesarios para router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Contextos
import { CartProvider } from "./context/CartContext";
//Components
import NavBarContaier from "./components/NavBarContainer/NavBarContainer";
import ItemListContainer from "./components/Productos/ItemListContainer/ItemListContainer";
import Homee from "./components/Homee/Homee";
import Contacto from "./components/Contacto/Contacto";
import ItemDetail from "./components/Productos/ItemDetail/ItemDetail";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="app-header">
            <h1>Gold Style</h1>
            <NavBarContaier />
            <Routes>
              <Route path="/" element={<Homee />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route
                path="/productos/:categoryId"
                element={<ItemListContainer />}
              />
              <Route
                path="/productos/:categoryId/:id"
                element={<ItemDetail />}
              />
              <Route path="/carrito" element={<CartContainer />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
