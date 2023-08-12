import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert'

export const Checkout = () => { 
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: ""
    })
    const { Nombre, Email, RepetirEmail, Telefono } = buyer
    const { cart, clear } = useContext(CartContext)
    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Email !== RepetirEmail) {
            swal('','Los correos electrónicos no coinciden. Por favor, verifica.','warning');
            return}
        const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
        const dia = new Date()
        const data = { buyer, cart, total, dia }
        generateOrder(data)
    }
    const generateOrder = async (data) => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders")
        const order = await addDoc(queryCollection, data)
        setOrderId(order.id)
    }

    return (
        <>
            <h2>Ingresá tus datos y confirmá la compra!</h2>
                <div class="mb-3">
                    <hr />
                {!orderId && <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="Nombre"
                        placeholder='Nombre completo'
                        value={Nombre}
                        onChange={handleInputChange}
                        required
                    />
                <br /><br />
                    <input type="email"
                        name="Email"
                        placeholder='Email'
                        value={Email}
                        onChange={handleInputChange}
                        required
                    />
                <br /><br />
                    <input type="email"
                        name="RepetirEmail"
                        placeholder='Repetir Email'
                        value={RepetirEmail}
                        onChange={handleInputChange}
                        required
                    />
                <br /><br />
                    <input type="number"
                        name="Telefono"
                        placeholder='Telefono'
                        value={Telefono}
                        onChange={handleInputChange}
                        required
                    />
                <br /><br />
                    <input className='btn btn-success p-2' type="submit" value="Confirmar Compra" />
                </form>
                }       
            {orderId && <>
                <h1>Gracias por comprar en PizzaClub!</h1>
                <h3 className='p-5'>Tu ID de Compra es: {orderId}</h3>
                <div className='p-4'>
                    <NavLink to={"/"} className="nav-link active">
                    <Button  onClick={clear} class="btn btn-primary">Volver al Inicio</Button>
                    </NavLink>
                </div>
            </>}
                </div>  
        </> 
    )
}