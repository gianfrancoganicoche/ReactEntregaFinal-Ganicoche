import React, { useState,useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


  const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0)
    const {addItem} = useContext(CartContext)    
    const handleOnAdd = (count) =>{ 
      setCantidad(count) 
        if (count > 1) {
          swal('Genial!',`Se agregaron ${count} items del producto ${item.nombre} al carrito`,'success')
          addItem(item, count)}
        else {
          swal('Genial!',`Se agregó ${count} item del producto ${item.nombre} al carrito`,'success')
          addItem(item, count)}
        } 

  return (
    <div className='text-black row p-5'>
      <div className='col-md-4 offset-md-4 p-5'>
        <img src={item.imagen} className='rounded img-fluid' alt={item.nombre}/>
          <div className='card text-center'>
            <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
                <p> Precio: $ {item.precio}</p>
                  <p> Stock: {item.stock}</p>
                    <div className='row justify-content-md-center'>
                      <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                    </div>
                  {cantidad>0 && <Link to="/cart" className='btn btn-primary'>Ir al carrito</Link>}
          </div>
      </div>
    </div>
  )
}

export default ItemDetail