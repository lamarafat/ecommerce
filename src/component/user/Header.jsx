import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import p1 from './../../assets/image/firstsec/1p.png'
import p2 from './../../assets/image/firstsec/2p.png'
import p3 from './../../assets/image/firstsec/3p.png'
import p4 from './../../assets/image/firstsec/4p.png'
import chanel from './../../assets/image/logo/logoChanel.png'
import louis from './../../assets/image/logo/logoLouis.png'
import prada from './../../assets/image/logo/logoPrada.png'
import denim from './../../assets/image/logo/logoDenim.png'
import calvin from './../../assets/image/logo/logoCalvin.png'

export default function Header() {
    return (
        <>
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-4">
                        <img src={p1} alt="Home section illustration" className="img bg-body-tertiary rounded" />
                    </div>
                    <div className="col-md-4" style={{ maxHeight: 570, overflow: 'hidden' }}>
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                            <img src={p3} alt="Home section illustration" className="img bg-body-tertiary rounded " />
                            <p className="text-muted fw-semibold mb-0" style={{ fontSize: 56, fontFamily: '"Poppins"' }}>
                                ULTIMATE</p>
                            <p className="fw-semibold mb-0" style={{ fontSize: 96, fontFamily: '"Poppins"', WebkitTextStroke: '2px rgb(48, 48, 48)', color: 'transparent' }}>
                                SALE</p>
                            <p className="text-muted text-center mb-0" style={{ fontSize: 20, fontFamily: '"Poppins"' }}>
                                NEW COLLECTION</p>
                            <Nav.Link
                                as={Link}
                                to="/shop"
                                className="btn btn-dark text-white mb-0 shadow p-2 bg-dark"
                                style={{ width: 250 }}
                            >
                                SHOP NOW
                            </Nav.Link>
                            <img src={p4} alt="Home section illustration" className="img bg-body-tertiary rounded mg-0" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={p2} alt="Home section illustration" className="img bg-body-tertiary rounded px-5" />
                    </div>
                </div>
            </div>
            <div className="container-lg my-5">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center flex-nowrap gap-5">
                        <img src={chanel} className="img" alt="Chanel logo" />
                        <img src={louis} className="img" alt="Louis logo" />
                        <img src={prada} className="img" alt="Prada logo" />
                        <img src={calvin} className="img" alt="Calvin logo" />
                        <img src={denim} className="img" alt="Denim logo" />
                    </div>
                </div>
            </div>
        </>

    )
}
