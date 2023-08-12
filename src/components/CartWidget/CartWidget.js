import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { FcPaid } from 'react-icons/fc'
import { IconContext } from 'react-icons'

const CartWidget = () => {
const {getQuantity} = useContext(CartContext)    

  return (
  <>
    {
      <Link to={"/cart"} style={{border: 'none', padding:10 }}>
        <IconContext.Provider value={{size: 35 }}>
          <>
            <FcPaid />
          </>
        </IconContext.Provider>
      {
        getQuantity()>0&&<button style={{border: 'none'}}>{getQuantity()}</button>
      }
      </Link>
    }
  </>
  )
}

export default CartWidget