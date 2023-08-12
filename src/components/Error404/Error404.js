import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Error404 = () => {
  return (
    <main class="container text-center">
      <h1  className='p-5'>404</h1>
      <h2 className='p-4'>Lo sentimos, no pudimos encontrar esta página.</h2>
      <p  className='p-4'>Pero no te preocupes, puedes encontrar muchos productos en nuestra página de inicio.</p>
      <div className='p-4'>
        <Link to={"/"} className="nav-link active">
          <Button class="btn btn-primary">Ir a la tienda</Button>
        </Link>
      </div>
    </main>
  )
}

export default Error404