import React from "react";
import { NavLink } from 'react-router-dom';
import aboutUs from './assets/Refund-pana.png'

function About() {
  return (
    <div>
      <div className="container py-5  ">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us </h1>
            <p className="lead mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              distinctio id ipsum eveniet dicta suscipit exercitationem itaque
              consequatur commodi impedit. Voluptatibus rerum, recusandae
              tempore sit quo consequatur ipsum alias consectetur, cumque natus,
              adipisci ullam tenetur quas. Vel mollitia qui natus temporibus
              ipsa quidem nisi tempora eius unde, cumque perspiciatis est
              cupiditate nesciunt debitis quae saepe. Earum magni numquam soluta
              ipsum dolores, voluptatem molestiae nisi, maxime ipsam at vitae
              exercitationem accusantium consequatur voluptas, neque quidem nemo
              eligendi impedit. Adipisci velit consequatur numquam assumenda
              aliquid. Officia ab quaerat accusamus quod ipsam, dolorem
              voluptates ea voluptatum dolor illo laudantium ut, rerum
              temporibus odit.
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary px-3'>Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center ">
            <img src={aboutUs} alt="About US"
              height='500px' width='500px'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
