import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();



    const response = await fetch("http://localhost:5000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        email:credentials.email, password:credentials.password,location:credentials.geolocation})
    });

    //its a post request so we have to send the body.

    const json = await response.json();
    console.log(json);

    if(!json.success){ alert("Enter Valid Credentials");}
  };

  let Change = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter name"
              name="name"
              value={credentials.name}
              onChange={Change}
            />
          </div>
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
          <div class="form-group form-check">
            <label htmlFor="exampleInputPassword1">GeoLocation</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="geolocation"
              name="geolocation"
              onChange={Change}
              value={credentials.geolocation}
            />
          </div>
          <button type="submit" class="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
};
