import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


import i1 from './i1.JPG' 
import i2 from './i2.JPG'
import i3 from './i3.JPG'
import i4 from './i4.JPG'
import i5 from './i5.JPG'
import i6 from './i6.JPG'

 class Testimonials extends Component {
  render() {
    return (
        
      <Carousel>
          
        <div>
        
          <img src={i1} alt="no"/>
          
        </div>
        <div>
          <img src={i2}  alt="no"/>
          
        </div>

        <div>
          <img src={i3}  alt="no"/>
          
        </div>

        <div>
          <img src={i4}  alt="no"/>
          
        </div>

        <div>
          <img src={i5}  alt="no"/>
          
        </div>

        <div>
          <img src={i6}  alt="no"/>
          
        </div>
        

        <div>
          <form action="http://localhost:9000/chart">
            <input type="submit" value="Click here to view to the chart on ratings given by users"/>
          </form>
        </div>
      </Carousel>
    );
  }
}

export default Testimonials;