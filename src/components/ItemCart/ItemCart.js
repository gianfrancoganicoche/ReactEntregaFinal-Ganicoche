import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <>
            <div className='card space-between' style={{maxWidth: '350px'}}>
            <div className='d-flex justify-content-center'>
                <img src={item.imagen} className='img-fluid rounded-start p-2' style={{maxWidth: '345px'}} alt={item.name}/>
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{item.nombre}</h5>
                <p className='card-text'>Cantidad: {item.amount}</p>
                <p className='card-text'>Precio unitario: {item.precio}</p>
                <p className='card-text'>Precio: {item.precio * item.amount}</p>
                <button className='btn btn-warning' onClick={() => removeItem(item.id)}>Eliminar Producto</button>
            </div>
            </div>
        </>
    )
}

export default CartItem