import React from 'react'

import { Link } from 'react-router-dom';

 const Navbar=() =>{
  return (<>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <Link className="navbar-brand fs-1 fst-italic" to="#">GOFOOD</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active fs-5">
        <Link className="nav-link" to="#">Home <span className="sr-only"></span></Link>
      </li>  
    </ul>

    <div className='d-flex'>
        <Link className="btn bg-white text-success mx-1" to="/Signup">Login</Link>
        <Link className="btn bg-white text-success mx-1" to="/Signup">SignUp</Link>
        </div>
  </div>
</nav>
    </div>
    </>
  )
}
export default Navbar;


