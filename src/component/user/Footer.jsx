import React from 'react'
import { Link } from 'react-router-dom'
import n1 from '../../assets/image/subscribesec/1sub.png'
import n2 from '../../assets/image/subscribesec/2sub.png'
import FASCO from '../../assets/image/FASCO.png'
import { Nav } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
  <div className="container-lg ">
    <div className="row align-items-center ">
      <div className="col-md-4">
        <img src={n1} alt="Newsletter illustration" className="img" />
      </div>
      <div className="col-md-4 shadow p-3 mb-5 bg-body-tertiary rounded ">
        <h5 className="text-center fs-3">Subscribe To Our Newsletter</h5>
        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.</p>
        <form>
          <div className="form-group py-2">
            <input type="email" className="form-control" id="email" placeholder="michael@ymail.com" aria-label="Email address" />
          </div>
          <button type="submit" className="btn  bg-dark text-white">Subscribe Now</button>
        </form>
      </div>
      <div className="col-md-4">
        <img src={n2} alt="Subscribe banner" className="img" />
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary py-2 --bs-secondary-bg-rgb">
    <div className="container-lg d-flex justify-content-between align-items-center">
    <Nav.Link as={Link} to={"/home"}><img src={FASCO} /></Nav.Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Support Center</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Invoicing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contract</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Careers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">FAQs</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="copyright text-center py-2 mb-2 bg-body-tertiary">
    <p className="text-muted fs-6">Copyright © 2022 Xpro. All Rights Reserved.</p>
  </div>
</footer>

  )
}
