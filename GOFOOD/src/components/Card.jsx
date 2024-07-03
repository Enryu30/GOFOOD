import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = () => {
  return (
    <div>
      <div>
        <div className=" mt-3" style={{width: "18rem",textAlign:"center",borderStyle:"solid"}}>
          <img className="card-img-top" src="/cereal.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title m-2">Card title</h5>
            <p className="card-text ">
              IMportant text
            </p>
            <div className="  container ">
                <select className="m-2 h-100 bg-success">

                {
  Array.from({ length: 5 }, (v, i) => (
    <option key={i + 1} value={i + 1}>{i + 1}</option>
  ))
}

                </select> 
                <select className="m-2 h-100 bg-success">
                   <option value="half">Half</option>
                   <option value="full">full</option>
                </select>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
