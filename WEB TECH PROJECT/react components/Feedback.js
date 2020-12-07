import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';




class Feedback extends Component
{
    constructor(props) {
        super(props);
     
        this.state = {rating_s:0};
      }
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating_s: nextValue}) 
      }

        
        
  render()
  {
      return(
        <div>
         
        <form action='http://localhost:9000/feedback' method='POST'> 
            <label> Feedback </label>
            <br/>
            <input type="text" name="feedback" required style={{width:500 , height:100}}/>
            <br/>

            
            <label> Rate the Sports Club</label>
            <br/>
            
            <StarRatingComponent  name="rate_s" value={this.state.rating_s}
          onStarClick={this.onStarClick.bind(this)}  />
          
      


          
      

            <br/>
            <input type="submit" value='submit' name='submit'/>

        </form>
        </div>
    
    )
}
}
export default Feedback;