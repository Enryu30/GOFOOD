import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../index.css';

export const CustomCarousel = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-caption" style={{zIndex:"10"}}>
              <form className="form-inline">
                <input className="form-control mr-sm-2 " style={{display:"inline",width:"70%"}} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            
          </div>
        <div className="carousel-item active caros-img">
          <img src="/pancake.jpg" className="d-block w-100 caros-img" alt="Pancake"/>
          
        </div>
        <div className="carousel-item caros-img">
          <img src="/ramen.jpg" className="d-block w-100 caros-img" alt="Ramen"/>
        </div>
        <div className="carousel-item caros-img">
          <img src="/cereal.jpg" className="d-block w-100 caros-img" alt="Cereal"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
