import React from 'react';
import test1 from './../../assets/image/testemonial/2test.png';
import test2 from './../../assets/image/testemonial/3test.png';
import test3 from './../../assets/image/testemonial/1test.png';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Testemonial() {
  const testimonials = [
    {
      image: test1,
      quote: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 5, 
      name: "James K.",
      role: "Traveler",
    },
    {
      image: test2,
      quote: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 4, 
      name: "Megen W.",
      role: "UI Designer",
    },
    {
      image: test3,
      quote: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      rating: 3, 
      name: "Suzan B.",
      role: "UI Designer",
    },
  ];

  return (
    <Carousel>

      {testimonials.map((testimonial, index) => (
        
        <div key={index}>
        <Carousel.Item >
            
          <Carousel.Caption>
            
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-auto">
                <img
                  src={testimonial.image}
                  className="img-fluid rounded"
                  style={{ width: 150 }}
                  alt={`Testimonial ${index + 1}`}
                />
              </div>
              <div className="col-md-6">
                <q className="text-muted fs-5 mb-0">{testimonial.quote}</q>
                <div className="d-flex align-items-center justify-content-center mt-2 mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStar}
                      className={starIndex < testimonial.rating ? 'text-warning' : 'text-secondary'}
                    />
                  ))}
                </div>
                <hr className="w-75 mx-auto" />
                <p className="text-dark fs-3">{testimonial.name}</p>
                <p className="text-muted">{testimonial.role}</p>
              </div>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        </div>
      ))}
    </Carousel>
  );
}