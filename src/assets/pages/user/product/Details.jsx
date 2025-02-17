import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import useGet from '../../../../component/user/hooks/useGet';
import { CartContext } from '../../../../component/context/CartContext';

export default function Details() {
  
        const { id } = useParams();
        const navigate = useNavigate();
        const {cartCount, setCartCount} = useContext(CartContext);
        const { data, error, loading } = useGet(`${import.meta.env.VITE_BURL}/products/${id}`);
    
        if (loading) {
            return <h1>Loading...</h1>;
        }
    
        if (error) {
            return <h1>Error</h1>;
        }
    
        const addProductToCart = async () => {
            try {
                const token = localStorage.getItem("useToken");
                const response = await axios.post(
                    `${import.meta.env.VITE_BURL}/cart`,
                    {
                        productId: id,
                    },
                    {
                        headers: {
                            'Authorization': `Tariq__${token}`,
                        },
                    }
                );
    
                if (response.status === 201) {
                    toast.success('Product added to your cart successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: toast.Bounce,
                    });
                    setCartCount(cartCount + 1);
                    navigate('/cart');
                }
            } catch (error) {
                console.error(error);
                toast.error('Failed to add product to cart', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: toast.Bounce,
                });
            }
        };
    
        const product = data.product;
    
       

    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                        {product.subImages.map((img, index) => (
                                <div key={index}>
                                    <img className="img-fluid" style={{ width: 48 }} src={img.secure_url} alt={`Sub Image ${index}`} />
                                </div>
                            ))}
                        </div>
                        <div className="col-md-10">
                            <img id="productImage" src={product.mainImage.secure_url} className="img-fluid rounded" alt="Product Image" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <span className="text-dark">Fasco</span>
                    <h1 id="productName" className="text-dark fw-bold" />
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                            {[...Array(5)].map((_, i) => (
                                <i key="{i}" classname="fa-solid fa-star text-warning" />
                            ))}
                        </div>
                        <span className="text-muted">{product.avgRating}</span>
                    </div>
                    <p id="productPrice" className="text-dark fw-semibold mb-3 fs-2">$ {product.price}</p>
                    <p className="text-dark fw-semibold">Size</p>
                    <div className="row">
                        <div className="col">
                            <button className="size-option btn btn-outline-dark w-100 mb-2 p-2" data-size="S">S</button>
                        </div>
                        <div className="col">
                            <button className="size-option btn btn-outline-dark w-100 mb-2 p-2" data-size="M">M</button>
                        </div>
                        <div className="col">
                            <button className="size-option btn btn-outline-dark w-100 mb-2 p-2" data-size="L">L</button>
                        </div>
                        <div className="col">
                            <button className="size-option btn btn-outline-dark w-100 mb-2 p-2" data-size="XL">XL</button>
                        </div>
                    </div>
                    <p className="text-dark fw-semibold">Color</p>
                    <div className="row d-flex gap-2">
                        <div className="rounded-circle bg-danger-subtle mb-2 p-2" style={{ height: 24, width: 24 }}>
                        </div>
                        <div className="rounded-circle bg-info-subtle mb-2 p-2" style={{ height: 24, width: 24 }}>
                        </div>
                    </div>
                    <Button onClick={()=>addProductToCart(product._id)}  id="addToCartButton" className="btn btn-dark text-white w-50 bg-dark p-2">Add to Cart</Button>
                </div>
                <hr />
            </div>
        </div>






    )
}
