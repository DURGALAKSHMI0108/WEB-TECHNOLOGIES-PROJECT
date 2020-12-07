import React from 'react';

import dist from './dist.jpeg' 
import cough from './cough.jpeg'
import tissue from './tissue.jpeg'
import hand from './hand.jpeg'
import shake from './shake.jpeg'
import mask from './mask.jpeg'
import lift from './lift.jpeg'
import surface from './surface.jpeg'
import crowd from './crowd.jpeg'
import home from './home.jpeg'
import slot from './slot.jpeg'





class Covid extends React.Component {
    render() {
      return <div>
      <br/> <br/>
      <div style={ {fontSize:"10px",backgroundColor:'peachpuff'}}>
              <h1 align="center"><u>COVID 19 REGULATIONS </u></h1> 
              <ul>
                 <li><h2>Keep minimum 1.5 meters distance<img src={dist} alt="distance" width="80" heigt="80"></img></h2></li>
                <br/>
                 <li><h2>Cough and sneeze into your elbow<img src={cough} alt="cough" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Use tissues only once and dispose in closed bins<img src={tissue} alt="tissue" width="80" heigt="80"></img></h2></li>
                 <br/>
                  <li><h2>Wash your hands with water and soap frequently<img src={hand} alt="hand" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Do not shake hands and no hugs<img src={shake} alt="shake" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Consider wearing a face mask<img src={mask}alt="mask" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Do not use crowded lifts<img src={lift} alt="lift" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Bring your own equipments,if possible<img src={surface} alt="surface" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Get your own yoga mat,water bottle and towel</h2></li>
                 <br/>
                 <li><h2>Avoid crowded spaces<img src={crowd} alt="crowd" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>If ill,stay at home<img src={home}alt="home" width="80" heigt="80"></img></h2></li>
                 <br/>
                 <li><h2>Limited people per batch is permitted and number of slots are reduced to avoid crowd<img src={slot} alt="slot" width="80" heigt="80"></img></h2></li>
                 
               </ul>
   
   </div>
   </div>
    }
  }

  export default Covid