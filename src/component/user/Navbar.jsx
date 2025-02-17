import React, { Children, createContext, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import FASCO from '../../assets/image/FASCO.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";
import { CartContext } from '../context/CartContext.jsx';

export default function CustomNavbar() {

    const { cartCount } = useContext(CartContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src={FASCO} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/categories"}>Categories</Nav.Link>
                        <Nav.Link as={Link} to={"/product"}>Products</Nav.Link>
                        <Nav.Link as={Link} to={"/auth/signup"} className="btn btn-dark text-white bg-dark p-2">
                            Register
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/search"}>
                            <FontAwesomeIcon className="text-dark" icon={faMagnifyingGlass} />
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/auth/signup"}>
                            <FontAwesomeIcon className="text-dark" icon={faUser} />
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/wishlist"}>
                            <FontAwesomeIcon className="text-dark" icon={faStar} />
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/cart"}>
                            <FontAwesomeIcon className="text-dark" icon={faBagShopping} /> <sup><div style={{ color: "red", padding: "5px", borderRadius: "100%", fontSize: "80%" }}>{cartCount}</div> </sup>
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

