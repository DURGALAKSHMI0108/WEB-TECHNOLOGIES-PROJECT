import React from 'react';

import "./styles2.css" // for styling
class Leisure extends React.Component
{
  

 
  render()
  {
    return(
    
    <form action="http://localhost:9000/leisure" method='POST' style={{margin:'50px'}}>
            <label> Sport to play</label> 
            <br/>
            <label> Cricket</label> 
            <input type="checkbox" name="sport" 
                    value="Cricket"
                    />
            
            <label> Badminton</label> 
            <input type="checkbox" name="sport" 
                    value="Badminton"
                    />
        <label> Table Tennis</label> 
            <input type="checkbox" name="sport" 
                    value="Table Tennis"
                    />
        <label> Basketball</label> 
            <input type="checkbox" name="sport" 
                    value="Basketball"
                    />

        <label> Swimming</label> 
            <input type="checkbox" name="sport" 
                    value="Swimming"
                    />

        <label> Zumba</label> 
            <input type="checkbox" name="sport" 
                    value="Zumba"
                    />  
        <label> Yoga</label> 
            <input type="checkbox" name="sport" 
                    value="Yoga"
                    />
            <br/>
            <br/>
            <label> Choose date</label> 
            <input type="date" name="date"/>

            <br/>
            <label> Slot </label>
            <br/>
            <label> 8-10 AM </label>

            <input type="checkbox" name="slot" value='8-10 AM'/>
            <br/>

            <label> 11-12 AM </label>

            <input type="checkbox" name="slot" value='11-12 AM'/>
            <br/>

            <label> 2-4 PM </label>

            <input type="checkbox" name="slot" value='2-4 PM'/>
            <br/>

            <label> 6-7 PM </label>

            <input type="checkbox" name="slot" value='6-7 PM'/>

            <br/>
            <input type="submit" value="Book" name="submit"/>
            </form>
    )
}
}
export default Leisure;