import React, { Component } from 'react';

import "./styles2.css"
class My_Matches extends Component
{
  render()
  {
    

    return(
      <div>
        <form action="http://localhost:9000/my_mat" method="GET">
          <input type="submit" value="Click here to view your latest match booking" name="submit"/>
        </form>
        
      </div>
    )
}
}
export default My_Matches;