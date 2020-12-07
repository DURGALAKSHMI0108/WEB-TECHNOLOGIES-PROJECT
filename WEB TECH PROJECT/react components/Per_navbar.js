import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Per_navbar extends Component {
  render() {
    return (
    
      
        
          
          <header>
          <br/>
          <br/>
          <b>
          <ul id="headerButtons" >
          
          <li ><Link to="/personal/new">New Booking </Link></li>
          <li ><Link to="/personal/my">My Bookings </Link></li>
          <li ><Link to="/personal/matches">Matches</Link></li>
          <li ><Link to="/personal/my_matches">My Matches</Link></li>
          <li ><Link to="/personal/my_payment">My Payments</Link></li>
          <li ><Link to="/personal/feedback">Feedback</Link></li>
          <li ><Link to="/personal/logout">Logout</Link></li>
          
          <br></br>
          
          </ul>
          </b>
          
          </header>
          
      
    )
    }
  }

  /*
  <li className="navButton2">
          <Link to="/about">About the Club</Link> </li>

 
/*
            

          <li className="navButton3"><Link to="/covid">Covid Regulations</Link></li>
          <li className="navButton4"><Link to="/signup">Sign up</Link></li>
          <li className="navButton5"><Link to="/login">Login</Link></li>*/
  


export default Per_navbar;