import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles1.css"

class NavBar extends Component {
  render() {
    return (
    
      
        
          
          <header>
          <ul id="headerButtons">
            <b>
          <li className="navButton1"><Link to="">Home</Link></li>
          
          <li >
          <Link to="/about_club">About the club</Link> </li>

          <li >
          <Link to="/about_coach">About the coaches</Link> </li>

            

          <li ><Link to="/covid">Covid Regulations</Link></li>
          <li ><Link to="/fee">Fee Structure</Link></li>
          <li ><Link to="/signup">Sign up</Link></li>
          <li ><Link to="/login">Login</Link></li>
          <li ><Link to="/testimonials">Testimonials</Link></li>
          <br></br>
          </b>
          </ul>
       
      
          
          </header>
          
      
    )
    }
  }
  


export default NavBar;
