
//importing all modules

import React, { Component } from 'react'; 

import im from './gan.jpg' // logo
import i from './phone.jpg'

import { BrowserRouter as Router, Route} from 'react-router-dom'; // for react router - to route to different pages

import HomePage from './Home'; // home page
import NavBar from './Navbar'; // to produce navigation bar
import About_club from './About_club'; // for about the club page

import About_coach from './About_coach'; // for about the club page
//import Fee from './Fee'
import Testimonials from './Testimonials'

import Covid from './Covid' // for covid regulations


import Signup from './Signup'; // to sign up or take membership into the club

import Login from './Login'; // to login with credentials

import Personal from './Personal'; // get your personalized page

import Fee from './Fee'

import "./styles2.css" // for styling
import { urlencoded } from 'body-parser';

class App extends Component {
  render() {
    return (
      
      
      <Router>
      
        <img src={im} alt="no" id="i" />
        <h3 id="heading"> Fit Scape Sports Club</h3>
        
        <h4 id="contact">
          Contact:  08024513456
        </h4>
        <img src={i} alt="no" id="d"/>

        

        
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about_club" exact path="/about_club" component={About_club} />
          <Route name="about_coach" exact path="/about_coach" component={About_coach} />
          
          <Route name="covid" exact path="/covid" component={Covid} />
          <Route name="fee" exact path="/fee" component={Fee} />
          <Route name="signup" exact path="/signup" component={Signup} />
          <Route name="login" exact path="/login" component={Login} />
          
          <Route name="testimonials" exact path="/testimonials" component={Testimonials} />
          <Route name="personal" exact path="/personal" component={Personal} />
          
        </div>
      </Router>
      
      
    )
  }
}
export default App;








