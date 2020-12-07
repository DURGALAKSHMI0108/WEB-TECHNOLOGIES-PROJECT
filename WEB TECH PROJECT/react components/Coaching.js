import React from 'react';

import "./styles2.css" // for styling
class Coaching extends React.Component
{
 

 
  render()
  {
    return(
    
    <form action="http://localhost:9000/coaching" method='POST' style={{margin:'50px'}}>
            <label> Sport to play</label> 
        
            <br/>
            <br/>
            <label> Cricket</label>
            
            <input type="checkbox" name="sport" 
                    value="Cricket"
                    />
        <br/>
            <label> Tennis</label>
            
            <input type="checkbox" name="sport" 
                    value="Tennis"
                    />
                <br/>
            <label> Badminton</label>
            

            <input type="checkbox" name="sport" 
                    value="Badminton"
                    />
         <br/>
            <label>Table Tennis </label>
            
                
            <input type="checkbox" name="sport" 
                    value="Table Tennis"
                    />
                <br/>
            <label> Swimming</label>
            
        
        <input type="checkbox" name="sport" 
                    value="Swimming"
                    />
        <br/>
            <label> Basketball</label>
            

        
        <input type="checkbox" name="sport" 
                    value="Basketball"
                    />
         <br/>
            <label> Zumba</label>
            

        
        <input type="checkbox" name="sport" 
                    value="Zumba"
                    />
         <br/>
            <label> Yoga</label>
            

        
        <input type="checkbox" name="sport" 
                    value="Yoga"
                    />
                    
        

        
            <br/>
            
            
            <input type="submit" value="Submit" name="submit"/>
            </form>
    )
}
}
export default Coaching;