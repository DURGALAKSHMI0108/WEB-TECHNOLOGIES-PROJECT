import React, { Component } from 'react';

import c from './bad.jpg'
import s from './sw.jpg'

class HomePage extends Component {
  render() {
    return (
      <div>
        
        <marquee> 10% OFF ON COACHING FOR ALL SPORTS</marquee>
        <marquee> We are open with new COVID-19 regulations!!</marquee>
        <h4 style={{textAlign:"center",border:"2px white solid" ,backgroundColor:"peachpuff" , fontSize:'16px',lineHeight:"1.5em"}}>Welcome to Fit Scape
        <br/>
        The Fitscape sports club is another hot-spot or a friends' adda among the E-city folks. Over these years this club has been the most prefered destination for learning, indulging young sports enthusiasts and maintaining a happy-healthy life routine. Anyone who enters this club can definitely see infinite happy and satisfactory smiles on both peepy kids and office-going adults. This is an asset to FItscape and will continue to serve best-in-class services and strive to maintain the spits of sportsmanship alive.  
        <br/>
        <br/>
        </h4>
        <div style={{display:'inline'}}>
          <br/> <br/>
          <img src={c} alt='no' style={{display:'inline-block', width:'500px' , height:'300px'}}/>

          
          <img src={s} alt='no' style={{display:'inline', width:'500px',marginLeft:'100px' ,height:'300px'}}/> 

        </div>
        <br/>
        <br/>

      <div style={{backgroundColor:"peachpuff"}}>
       
      <ol style={{lineHeight:"1.5em", fontSize:'16px', textAlign:'center'}}>
        <b>
      Our Facilities<br/>

      <li> Spacious Indoor and outdoor courts,</li> 
      <li> Ample Parking space,</li> 
      <li>  Secure Locker system,</li> 
      <li> Luxurious changing rooms and shower room,</li> 
      <li> 1:1 training facility,</li> 
      <li>  Women trainers on board,</li> 
      <li> Separate pools for male and female with respective coaches,</li> 
      <li> Flexible time slots,</li> 
      <li> Well-equipped studio for Zumba/aerobics class,</li> 
      <li> Large open space for yoga and separate jogging track ,</li> 
      </b>
      </ol>
    </div> 


        <br/>
        <br/>
      <div style={{backgroundColor:'black', color:'white', margin:'50px'}}>
        <br/>
        
        Address: Street No:14, 8th Cross, 1st Block, Electronic City,
        Bangalore - 560042, Karnataka, India.
        <br/>
        Email : sprt123@gmail.com
        <br/>
        Landline: +91 80 2451 3456
        <br/>

        Fax: +91 80 1222 3434
        <br/>
        <br/>
      </div>
      </div>
    )
  }
}
export default HomePage;
