import React, { Component } from 'react';

import "./styles2.css"
class My_Booking extends React.Component
{
  render()
  {
    

    return(
      <div>
        <form action="http://localhost:9000/my_l" method="GET">
          <input type="submit" value="Click here to view your leisure play bookings" name="submit"/>
        </form>
        <form action="http://localhost:9000/my_c" method="GET">
          <input type="submit" value="Click here to view your coaching bookings" name="submit"/>
        </form>
      </div>
    )
}
}
export default My_Booking;