import React, { useState} from "react";
import { Link,useNavigate } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();


  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();



    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        email:credentials.email, password:credentials.password
      })
    });

    //its a post request so we have to send the body.

    const json = await response.json()
    console.log(json);
    
    if(json.success){
      localStorage.setItem("authToken",json.authToken);
      localStorage.getItem("authToken");
      navigate("/"); }

  };



  let Change = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>

          <div class="form-group mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={Change}
              value={credentials.email}
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={Change}
              value={credentials.password}
            />
          </div>
          
          <button type="submit" class="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/Signup" className="m-3 btn btn-danger">
            I am a User
          </Link>
        </form>
      </div>
    </>
  );
};




//html, object, input fields , onchange f(), submit f();