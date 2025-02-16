import React from 'react'
import f1 from './../../assets/image/folowsec/6f.png';
import f2 from './../../assets/image/folowsec/1f.png';
import f3 from './../../assets/image/folowsec/2f.png';
import f4 from './../../assets/image/folowsec/3f.png';
import f5 from './../../assets/image/folowsec/4f.png';
import f6 from './../../assets/image/folowsec/5f.png';
import f7 from './../../assets/image/folowsec/7f.png';

const folowImg =[
    f1,f2,f3,f4,f5,f6,f7
];

export default function Follow() {
  return (
    <>
          <div>
  <div className="container my-5">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <h2 className="text-dark mb-3 text-center">Follow Us On Instagram</h2>
        <p className="text-muted text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
      </div>
    </div>
  </div>
  <div className="col-md-12 d-flex justify-content-center align-items-center gap-2 flex-wrap my-5">
    {folowImg.map((img,index)=>(
    <div key={index}>
      <img src={img} className="img-fluid rounded" style={{width: 200}} alt="Image 6" />
    </div>
    ))}
  </div>
</div>

        
       </>
  )
}
