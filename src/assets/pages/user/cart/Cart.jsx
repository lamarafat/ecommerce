import axios from 'axios';
import React from 'react'
import { Nav } from 'react-bootstrap';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const getCart = async ()=> {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.get(`${import.meta.env.VITE_BURL}/cart`,
        {
          headers: {
            Authorization: `Tariq__ ${token}`
          },
        }
      );
      setCart(response.data.products);
      console.log(response.data.products);
    }catch(error){console.log("error", error);

    }finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    getCart();
  }, [])
  if(loading) {<h2>Loading...</h2>};

  
  const incQty = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/incraseQuantity`,
      {
        productId:productId
      },
      {
        headers: {
          Authorization: `Tariq__ ${token}`
        }
      }
    )
    
  };
  const decQty = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/decraseQuantity`,
      {
        productId:productId
      },
      {
        headers: {
          Authorization: `Tariq__ ${token}`
        }
      }
    )
    
  };
  const deleteProduct = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/removeItem`,
      {
        productId:productId
      },
      {
        headers: {
          Authorization: `Tariq__ ${token}`
        }
      }
    )
    
  };
  const clearAll = async (productId) => {
    const token = localStorage.getItem('userToken');
    const response = await axios.patch(`${import.meta.env.VITE_BURL}/cart/clear`,
      {
        productId:productId
      },
      {
        headers: {
          Authorization: `Tariq__ ${token}`
        }
      }
    )
    
  };
  useEffect(()=>{
    incQty();
    decQty();
    deleteProduct();
    clearAll();
  }, [])

  return (
    <>
  <div className="container-lg">
    <div className="row">
      <div className="col-md-12">
        <h1 className="fs-4 text-center">Shopping Cart</h1>
      </div>
      <p className="text-muted fs-6 text-center">
        Home &gt; Your Shopping Cart
      </p>
      <div className="container p-2 d-flex justify-content-between">
        <p className="text-dark fs-6">Product</p>
        <p className="text-dark fs-6">Price</p>
        <p className="text-dark fs-6">Quantity</p>
        <p className="text-dark fs-6">Total</p>
      </div>
      <hr className="text-muted" />
      <div className="container p-2" id="cart-items-container">
        {cartItems.map(item => (
          <div key={item._id} className="container p-2 col-md-8 d-flex justify-content-between flex-wrap">
            <img src={item.details.mainImage.secure_url} alt={item.details.name} />
            <p className="fs-6">{item.details.name}</p>
            <p className="fs-6">${item.details.finalPrice}</p>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-dark btn-sm" onClick={() => {decQty(item.productId)}}>-</button>
              <p className="fs-6">{item.details.quantity}</p>
              <button className="btn btn-outline-dark btn-sm" onClick={() => {incQty(item.productId)}}>+</button>
            </div>
            <p className="fs-6">${item.details.finalPrice * item.details.quantity}</p>
            <button className="btn btn-outline-dark btn-sm" onClick={() => {deleteProduct(item.productId)}}>Delete</button>
          </div>
        ))}
      </div>
      <hr className="text-muted" />
      <div className="container p-2 col-md-4 d-flex justify-content-center flex-wrap">  
        
      <Button className="btn btn-dark text-white w-100 mb-2" onClick={() => {clearAll()}}>Clear Cart</Button>
        <div className="form-check"> 
          <input type="checkbox" className="form-check-input" id="wrapProduct" />
          <label className="form-check-label fs-6 text-muted" htmlFor="wrapProduct">
            For <span className="text-dark">$10.00</span>, please wrap the product
          </label>
        </div>
        <div className="container col-md-8 p-2 d-flex justify-content-between">
          {/* <p className="text-dark fs-6 mb-0">Subtotal:</p> 
          <span id="subtotal" className="fs-6">{cart.reduce((total, item) => total + item.details.finalPrice * item.details.quantity, 0)}</span>
        </div> */}
        <div className="container col-md-8 p-2 d-flex justify-content-center flex-wrap">
          <Nav.Link href="#" className="btn btn-dark text-white w-100 mb-2">Checkout</Nav.Link>
        </div>
      </div>
    </div>
  </div>
  </div>
</>

  )
}
