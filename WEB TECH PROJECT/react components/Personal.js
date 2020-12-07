import React, { Component } from 'react';
import Per_navbar from './Per_navbar';
import New_Booking from './New_Booking';
import My_Booking from './My_Booking';
import Logout from './Logout';
import Feedback from './Feedback';
import Matches from './Matches';
import My_Matches from './My_Matches';
import My_Payment from './My_Payment';

import { BrowserRouter as Router, Route} from 'react-router-dom';

class Personal extends Component {
  render() {
    return (
        <Router>
        <div >
        <marquee> <b style={{fontSize:'12px'}}>WELCOME TO YOUR PERSONALIZED PROFILE PAGE!!! </b></marquee>
          <Per_navbar />
          <Route name="new" exact path="/personal/new" component={New_Booking} />
          <Route name="my" exact path="/personal/my" component={My_Booking} />
          <Route name="logout" exact path="/personal/logout" component={Logout} />
          <Route name="feedback" exact path="/personal/feedback" component={Feedback} />
          <Route name="matches" exact path="/personal/matches" component={Matches} />
          <Route name="my_matches" exact path="/personal/my_matches" component={My_Matches} />
          <Route name="my_payment" exact path="/personal/my_payment" component={My_Payment} />
          
        </div>
      </Router>
    )
  }
}
export default Personal;
