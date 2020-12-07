import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import New_bar from './New_bar';
import Leisure  from './Leisure';
import Coaching from './Coaching';

import "./styles2.css"
class New_Booking extends Component
{
  

 
  render()
  {
    

    return(
      <Router>
      <div> 
        <New_bar/>
        
        <Route name="l" exact path="/personal/leisure" component={Leisure} />
        <Route name="c" exact path="/personal/coaching" component={Coaching} />
  
      </div> 
  </Router>
        
    )
}
}
export default New_Booking;