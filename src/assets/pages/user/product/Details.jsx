import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import useGet from '../../../../component/user/hooks/useGet';

export default function Details() {
    const { id } = useParams();
    const { data, error, loading } = useGet(`${import.meta.env.VITE_BURL}/products/${id}`);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error</h1>;
    }

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
                    <Nav.Link as={Link} to={"/cart"} id="addToCartButton" className="btn btn-dark text-white w-50 bg-dark p-2">Add to Cart</Nav.Link>
                </div>
                <hr />
            </div>
        </div>






    )
}
