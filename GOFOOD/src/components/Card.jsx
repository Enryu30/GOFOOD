import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = ({foodDetails}) => {

  let options = foodDetails.options[0];
  let priceOptions = Object.keys(options);


  return (
    <div>
      <div>
        <div className=" mt-3" style={{width: "18rem",textAlign:"center",borderStyle:"solid"}}>
          <img className="card-img-top" src={foodDetails.img} alt="Card image cap" style={{height:"120px", objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title m-2">{foodDetails.name}</h5>
            
            <div className="  container ">
                <select className="m-2 h-100 bg-success">

                {
  Array.from({ length: 5 }, (v, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ))
}

                </select> 
                <select className="m-2 h-100 bg-success">
                   {priceOptions.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                   })}
                </select>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
