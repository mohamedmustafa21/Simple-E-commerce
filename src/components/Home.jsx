import React from 'react'
import img1 from './assets/home/pexels-photo-1042143.webp'
import img2 from './assets/home/pexels-photo-1156684.webp'
import img3 from './assets/home/pexels-photo-788946.webp'
import img4 from './assets/home/pexels-photo-805922.webp'
import img5 from './assets/home/pexels-photo-850360.jpeg'
import img6 from './assets/home/pexels-photo-887751.webp'
import Product from './Product.jsx';


function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>

  
  </div>
    <div className="carousel-inner"> 
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="Iphone" height='500px'/>
    </div> 
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="Iphone" height='500px'/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="Iphone" height='500px'/>
    </div> 
     <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="Iphone" height='500px'/>
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100" alt="Iphone" height='500px'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Product/>
    </div>
    
  )
}

export default Home
