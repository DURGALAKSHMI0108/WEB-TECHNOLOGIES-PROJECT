import React, { Component } from 'react';


class Logout extends Component
{
  

 
  render()
  {
    

    return(
        <div>
    
        <form action='http://localhost:9000/logout/yes'>
            <label> Are you sure you want to logout </label>
            <br/>
            <input type="submit" value='yes' name='yes' ></input>

        </form>
        <form action="http://localhost:9000/logout/no">
            <input type="submit" value='no' name='no'></input>
        </form>
    </div>
    )
}
}
export default Logout;