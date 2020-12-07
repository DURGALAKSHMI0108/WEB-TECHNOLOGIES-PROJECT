import React, { Component } from 'react';

import "./styles3.css"





var obj1={'vs':'tiger sports club', 'age':'15-20','date':'19 December 2020', 'venue':'SPORTS CLUB', 'time':'10AM', 'sport':'Cricket'}

var obj2={'vs':'koramangala sports club', 'age':'30-40','date':'26 December 2020', 'venue':'SPORTS CLUB', 'time':'10AM', 'sport':'Tennis'}

var obj3={'vs':'EC sports club', 'age':'10-25','date':'2 January 2021', 'venue':'SPORTS CLUB', 'time':'10AM', 'sport':'Basketball'}


class Matches extends Component
{
  
  render()
  {
    return(
    <div>
        <marquee> SELECT ANY 1 MATCH YOU WISH TO PARTICIPATE IN </marquee>
        <marquee> 1500 PAYABLE</marquee>
        <form method='POST' action="http://localhost:9000/matches">
        <input type="checkbox" name="match" 
                    value={JSON.stringify(obj1)}
                    />
        <br/>
        <p>
            <label>  MATCH 1:  SPORTS CLUB VS TIGER SPORTS CLUB <br/> SPORT:  CRICKET <br/> AGE:  15-20 <br/> VENUE:  SPORTS CLUB <br/> DATE:  19TH DECEMBER 2020 <br/> TIME:  10AM  </label>
        </p>
        <br/>
        <br/>
        <input type="checkbox" name="match" 
                    value={JSON.stringify(obj2)}
                    />
        <br/>

        <p>
            <label>  MATCH 2:  SPORTS CLUB VS KORAMANGALA SPORTS CLUB <br/> SPORT:  TENNIS <br/> AGE:  30-40 <br/> VENUE:  SPORTS CLUB <br/> DATE:  26TH DECEMBER 2020 <br/> TIME:  10AM  </label>
        </p>  

        <br/>
        <br/> 

        <input type="checkbox" name="match" 
                    value={JSON.stringify(obj3)}
                    />
        <br/>
        <p>
            <label>  MATCH 3:  SPORTS CLUB VS EC SPORTS CLUB <br/> SPORT:  Basketball <br/> AGE:  10-25 <br/> VENUE:  SPORTS CLUB <br/> DATE:  2ND JANUARY 2020 <br/> TIME:  10AM  </label>
        </p>    
            <br/>
            <br/>
            <input type='submit' value='Submit' name='submit'/>
        </form>
    </div>
        
    )
}
}
export default Matches;

