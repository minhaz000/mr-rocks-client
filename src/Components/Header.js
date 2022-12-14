import React from 'react';
import { useContext } from 'react';
import { Link, NavLink} from 'react-router-dom'
import { AuthContext } from '../context/UserContext';
import toast from 'react-hot-toast';
function Header(props) {
  const {setDarkMood , darkMood, user , logOut} =useContext(AuthContext)
  const HandleDark = (event)=>{ 
    setDarkMood(event.target.checked)
  }
  const HandleLogOut = (event)=>{
    logOut().then( toast.success(" Log Out Succssfully !!!" ))
  }
  const handleProfile = (event)=>{
    toast("Hello, " +user.displayName);
  }
    return (<div >
        <nav className={darkMood? "navbar navbar-dark  navbar-expand-md border border-dark" : "navbar navbar-expand-lg bg-light "}>
  <div className="container">
    <Link className="navbar-brand" to="/">
     <img className='logo' src="/img/logoFinal.png" alt="" />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="fa-solid fa-ellipsis-vertical" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
        Home 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/course">
        Courses 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">
            Blog 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/faq">
            FAQ 
          </NavLink>
        </li>
       {user ?  <li className="nav-item">
          <NavLink onClick={HandleLogOut} className="nav-link" to="/">
            Logout 
          </NavLink>
        </li> : 
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login 
          </NavLink>
        </li> }
         
        
        
      </ul>
      <div className="nav-item  form-switch d-flex ms-1 float-end">
         <input className="form-check-input pointer" type="checkbox" id="flexSwitchCheckDefault" onChange={(e)=>{ HandleDark(e)}} />
       { darkMood ?  <i className=" nav-link fa-solid fa-moon mt-1 ms-2"></i> : <i className=" nav-link fa-solid fa-sun mt-1 ms-2 "></i>
       } 
        </div>
        <div className="nav-item  ms-3 d-flex  float-end">
        <img onMouseOver={handleProfile} style={{ height:"40px"}} className='img-fluid rounded-circle pointer' src={user? user.photoURL : ""} alt="" />
        
        </div>
        

    </div>
  </div>
</nav>
{/* <Toaster position="top-right"reverseOrder={false}/> */}

</div>    
    );
}

export default Header;