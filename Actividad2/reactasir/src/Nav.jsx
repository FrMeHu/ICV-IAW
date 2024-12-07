import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function BarraNav() {
  return (
    <Navbar>
        <Nav>
        <Nav.Link as={Link} to="/">
          <HomeIcon style={{ color: 'brown' }}/>Inicio
        </Nav.Link>

        <NavDropdown title={<span><AccountCircleIcon style={{ color: 'blue' }}/> Usuario</span>} id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/usuario/pepe">Pepe</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/usuario/alfonso">Alfonso</NavDropdown.Item>
        </NavDropdown>


        </Nav>



    </Navbar>
  );
}

export default BarraNav;





