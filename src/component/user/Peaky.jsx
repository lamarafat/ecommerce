import React from 'react'
import i1 from './../../assets/image/peaky/1i.png';
import i2 from './../../assets/image/peaky/2i.png';
import i3 from './../../assets/image/peaky/3i.png';
import i4 from './../../assets/image/peaky/4i.png';
import peaky from './../../assets/image/peaky/peaky.png';


export default function Peaky() {
  return (
    <div className="shadow">
  <div className="row align-items-center my-5" style={{backgroundColor: '#DADADA'}}>
    <div className="col-md-6">
      <img src={peaky} className="img-fluid" alt="Peaky Blinders Outfit" id="productImage" />
    </div>
    <div className="col-md-5">
      <span className="text-muted">Women Collection</span>
      <h2 className="text-dark" id="productName">Peaky Blinders</h2> 
      <a href="#" className="text-dark">DESCRIPTION</a>
      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.</p>
      <p className="text-dark fs-3" id="productPrice">$100.00</p>
      <a href="#" className="btn btn-dark text-white shadow" onclick="addToCart(event)">Buy Now</a>
    </div>
  </div>
  <div className="container py-3">
    <div className="row align-items-center d-flex flex-wrap">
      <div className="col-auto">
        <img className="img-fluid" style={{width: 56}} src={i1} alt="High Quality Icon" />
      </div>
      <div className="col">
        <h4 className="text-dark mb-1">High Quality</h4>
        <p className="text-muted mb-0">Crafted from top materials</p>
      </div>
      <div className="col-auto">
        <img className="img-fluid" style={{width: 56}} src={i2} alt="High Quality Icon" />
      </div>
      <div className="col">
        <h4 className="text-dark mb-1">Warrany Protection</h4>
        <p className="text-muted mb-0">Over 2 years</p>
      </div>
      <div className="col-auto">
        <img className="img-fluid" style={{width: 56}} src={i3} alt="High Quality Icon" />
      </div>
      <div className="col">
        <h4 className="text-dark mb-1">Free Shippingy</h4>
        <p className="text-muted mb-0">Order over 150 $</p>
      </div>
      <div className="col-auto">
        <img className="img-fluid" style={{width: 56}} src={i4} alt="High Quality Icon" />
      </div>
      <div className="col">
        <h4 className="text-dark mb-1">24 / 7 Support</h4>
        <p className="text-muted mb-0">Dedicated support</p>
      </div>
    </div>
  </div>
</div>

  )
}
