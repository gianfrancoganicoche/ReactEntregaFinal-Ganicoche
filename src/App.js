import React from "react"
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer"
import Error404 from "../src/components/Error404/Error404"
import Cart from "./components/Cart/Cart"
import CartProvider from "./components/Context/CartContext"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checkout } from "./components/Checkout/Checkout"


function App() {


  return (
    <CartProvider>
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path={"/"} element = {<ItemListContainer/>} />
          <Route path={"/category/:id"} element = {<ItemListContainer />} />
          <Route path={"/item/:id"} element = {<ItemDetailContainer />} />
          <Route path={"/checkout"} element = {<Checkout />} />
          <Route path={"/cart"} element = {<Cart />} />
          <Route path={"*"} element = {<Error404 />} />

        </Routes>
      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;