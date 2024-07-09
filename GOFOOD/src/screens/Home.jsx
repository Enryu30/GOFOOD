import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";

const Home = () => {
  const [ search,setSearch]=useState('');
  const [foodCat, setFoodCat]=useState([]);
  const [foodItem, setFoodItem]=useState([]);

  const loadData = async()=>{
    let response = await fetch('http://localhost:5000/api/foodData',{
      method:"Post",
      headers: {
        "Content-Type": "application/json",
      }
    });

    response = await response.json();

    setFoodCat(response[1]);
    setFoodItem(response[0]);

/*     console.log(response[0],response[1]);
 */  }


  useEffect(()=>{

      loadData();
  },[])

  return (
    <>
      <Navbar />
      <div>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-caption" style={{zIndex:"10"}}>
              <div className="form-inline">
                <input className="form-control mr-sm-2 " style={{display:"inline",width:"70%"}} type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
{/*                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
 */}              </div>
            
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
      </div>

      <div className='container'>
  {
    foodCat.length > 0 ? 
      foodCat.map((data) => {
        return (
          <div  className='row mb-3'>
            <div key={data._id} className='fs-3 m-3'>
              {data.CategoryName}
              </div>
            <hr  />
            {foodItem.length > 0 ?
              foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map((filteredItem) => {
                return (
                <div key={filteredItem._id} className='col-12 col-md-6 col-lg-4'><Card foodDetails={filteredItem}></Card></div>
                )
      })
              :
              <div>No such Data Found</div>
            }
          </div>
        );
      })
      : <div>No categories available</div>
  }
</div>




      
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
