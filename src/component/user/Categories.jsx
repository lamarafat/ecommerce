import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useGet from './hooks/useGet';

export default function Categories() {
    const { data: categoriesData, loading: categoriesLoading, error: categoriesError } = useGet(`${import.meta.env.VITE_BURL}/categories/active`);

    const { data: productsData, loading: productsLoading, error: productsError } = useGet(`${import.meta.env.VITE_BURL}/products?limit=9`);

    if (categoriesLoading || productsLoading) {
        return <h1>Loading...</h1>;
    }

    if (categoriesError) {
        return <div>Error loading categories: {categoriesError}</div>;
    }
    if (productsError) {
        return <div>Error loading products: {productsError}</div>;
    }

    const categories = categoriesData.categories;
    const products = productsData.products;

    const {id} = useParams();

    return (
        <>
            <div className="container-lg py-5">
                <div className="row d-flex justify-content-center align-items-center mb-5">
                    <div className="col-md-6 text-center">
                        <h2 className="text-dark">New Arrivals</h2>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-3 bg-body-tertiary py-4 px-3 rounded mb-5">
                    {categories.map((category) => (
                        <div key={category._id}>
                            <Nav.Link as={Link} to={`/cateprod/${category._id}`} className="btn shop-btn btn-transparent text-muted bg-body-tertiary text-bold" >
                                {category.name}
                            </Nav.Link>
                        </div>
                    ))}
                </div>
                <div className="row g-4 category">
                    {products.map((product) => (
                        <div key={product._id} className="col-md-4">
                            <div className="card p-3 bg-white rounded shadow-sm h-100">
                                <img src={product.mainImage.secure_url} className="img-fluid rounded w-100 mb-3" alt={product.title} />
                                <h3 className="text-dark fw-semibold mb-1">{product.title}</h3>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fa-solid fa-star text-warning"></i>
                                        ))}
                                    </div>
                                    <span className="text-muted">({product.rating} Reviews)</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className="text-dark fw-semibold mb-0">&#36; {product.price}</h3>
                                    <span className="text-danger">Limited Stock</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center d-flex justify-content-center my-5">
                    <Nav.Link className="btn text-white w-25 shadow bg-dark p-2" as={Link} to={'/shop'}>View More</Nav.Link>
                </div>
            </div>
        </>
    );
}