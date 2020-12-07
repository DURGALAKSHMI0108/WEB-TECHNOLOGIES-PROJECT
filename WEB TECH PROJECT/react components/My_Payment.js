import React, { Component } from 'react';

import "./styles2.css"
class My_Payment extends Component
{
  render()
  {
    

    return(
      <div>
        <form action="http://localhost:9000/my_pay" method="GET">
          <input type="submit" value="Click here to view your latest  payments" name="submit"/>
        </form>
        
      </div>
    )
}
}
export default My_Payment;