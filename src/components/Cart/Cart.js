import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const Cart = () => {
  const {cart, clear, getTotal} = useContext(CartContext)
  
  return (
    <>
      <h2 className='pt-3'>Tu compra</h2>
          { cart.length !== 0 ?
            (
              <div className='container-fluid'>
                <h3>
                  {`Total:  $ ${getTotal()}`}
                </h3>
              <div>
                  <Link to='/checkout'>
                    <button className="btn btn-success">Finalizar Compra</button>
                  </Link>
                  <div className='p-2'>
                  <button className="btn btn-outline-danger" onClick={clear}>Vaciar Carrito</button>
                  </div>
              </div>
              <div className='row justify-content p-4'>
                {cart.map((e) => 
                <ItemCart className='p-3' key={e.id} item={e}/>)
                }
              </div>
              </div>
            ) : (
              <div>
                <h4 className='p-5'>Todavía no agregaste nada</h4>
                <div className='p-4'>
                  <Link to={"/"} className="nav-link active">
                    <Button onClick={clear} class="btn btn-primary">Ir a la tienda</Button>
                  </Link>
                </div>
              </div>
            )
          }
    </>
  )
}
  
  export default Cart