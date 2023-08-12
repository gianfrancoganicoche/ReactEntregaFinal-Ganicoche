import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className= "me-auto my-2 my-lg-0"
              style={{ maxHeight: '120px' }}
              navbarScroll
            >
          <Link className="navbar-brand" to={"/"}><img src="https://www.freepnglogos.com/uploads/pizza-png/derwent-park-pizza-5.png" alt="logoPizzaclub" width={60} /></Link>
            <NavLink to={"/category/Hamburguesa"} className="navbar-brand">Hamburguesas</NavLink>
            <NavLink to={"/category/Pasta"} className="navbar-brand">Pastas</NavLink>
            <NavLink to={"/category/Pizza"} className="navbar-brand">Pizzas</NavLink>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;