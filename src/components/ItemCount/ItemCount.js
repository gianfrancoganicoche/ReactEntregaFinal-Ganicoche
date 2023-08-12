import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
    }
  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <button onClick={() => decrementar()} className='btn btn-outline-danger'>-</button>
        </div>
        <div className='col'>
          <h3>{count}</h3>
        </div>
        <div className='col'>
          <button onClick={() => incrementar()} className='btn btn-outline-success'>+</button>
        </div>
      </div>
      <div className='row justify-content p-3'>
        <button className='btn btn-success col-md-4 offset-md-4' onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount