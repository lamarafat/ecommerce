import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import FASCO from '../../assets/image/FASCO.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser, faStar } from "@fortawesome/free-regular-svg-icons";

export default function CustomNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><img src={FASCO} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/shop"}>Shop</Nav.Link>
                        <Nav.Link as={Link} to={"/product"}>Products</Nav.Link>

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
                            <FontAwesomeIcon className="text-dark" icon={faBagShopping} />
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

