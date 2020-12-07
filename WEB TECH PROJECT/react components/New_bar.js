import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class New_bar extends Component {
  render() {
    return (
    
      
        
          
          <header>
          <br/>
          <br/>
          <b>
          <ul id="headerButtons" >
          
          <li className="n1"><Link to="/personal/leisure">To play for leisure </Link></li>
          <li className="n1"><Link to="/personal/coaching">To get coaching </Link></li>
          
          
          <br></br>
          
          </ul>
          </b>
          
          </header>
          
      
    )
    }
  }

  export default New_bar;