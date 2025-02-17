import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getData = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_BURL}/products`);
          setData(response.data);
          setError(null);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
  };
  if (loading) {
    return <h1>Loading...</h1>;
}

if (error) {
    return <h1>Error</h1>;
}

  useEffect(() => {
      getData();
  }, []);

 
  return (
    <div className="container-lg py-5">
       
        <div className="row g-4">
            {data.products?.map((product) => (
                <div key={product._id} className="col-md-4">
                    <div className="card p-3 bg-white rounded shadow-sm h-100">
                        <img
                            src={product.mainImage.secure_url}
                            className="img-fluid rounded w-100 mb-3"
                            alt={product.title}
                        />
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
                        <Nav.Link as={Link} to={`/details/${product._id}`} className="btn btn-sm btn-dark bg-dark text-white p-2">More Details</Nav.Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}
