import React from 'react'

import { Link ,useNavigate} from 'react-router-dom';

 const Navbar=() =>{

  const navigate = useNavigate();

const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
}

  return (<>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <Link className="navbar-brand fs-1 fst-italic" to="#">GOFOOD</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-2">
      <li className="nav-item active fs-5">
        <Link className="nav-link" to="#">Home <span className="sr-only"></span></Link>
        </li>


    {/*   logic for logging in  */}
      { (localStorage.getItem("authToken")) ?
           <li className="nav-item ">
        <Link className="nav-link" to="#">MyOrders <span className="sr-only"></span></Link>
      </li> : ""}  
    </ul>

    { !(localStorage.getItem("authToken")) ?

    <div className='d-flex'>
        <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
        <Link className="btn bg-white text-success mx-1" to="/Signup">SignUp</Link>
        </div>
        :
        <div>
         <div className='btn bg-white text-success mx-2'>
          My Cart
           </div>
         <div className='btn bg-white text-danger mx-2'
         onClick={handleLogout}>
          Logout
           </div>
           </div>  
                    }
  </div>
</nav>
    </div>
    </>
  )
}
export default Navbar;


