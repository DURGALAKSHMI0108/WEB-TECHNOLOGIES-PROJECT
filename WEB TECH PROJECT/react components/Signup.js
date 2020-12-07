import React  from 'react';

import "./styles2.css" // for styling , some done as inline also
class Signup extends React.Component
{
  constructor()
  {
    super(); 
    this.state = { name: '' , age: '',login_id: '', password:'', phone:'',gender:'' }; 
    
    
  }

 
  render()
  {
    

    return(
    
    <form action="http://localhost:9000/submit" method='POST' style={{marginLeft:'20px'}}>
                <label> Name </label> 
                <br/>
                <input type="text" name="name" title="name of member" required pattern="[a-zA-Z]{1,}"
                    value={this.state.name} 
                    onChange={(e) => this.setState( 
                    { name: e.target.value })}/> 

                <br/>

                <label> Age </label> 
                <br/>
                <input type="tel" name="age" title="age of member" required patern="[0-9]{2}"
                    value={this.state.age} 
                    onChange={(e) => this.setState( 
                    { age: e.target.value })}/> 
                <br/>

                <label> Login id</label> 
                
                <br/>
                <input type="text" name="login_id" title="enter login id to create membership" required pattern="[A-Z]{1}[0-9a-zA-Z]{6,}"
                    value={this.state.login_id} 
                    onChange={(e) => this.setState( 
                    { login_id: e.target.value })}/> 
                <label style={{color:"red",textDecoration:'bold'}}> *Should start with a capital letter, then can have any alphanumeric value (no symbols).Must be at least 7 values long</label>

                <br/>

                <label> Password </label> 
              
                <br/>
                <input type="password" name="password" title="password for your account" required pattern="[0-9a-zA-Z]{7,}"
                    value={this.state.password} 
                    onChange={(e) => this.setState( 
                    { password: e.target.value })}/>
                <label style={{color:"red",textDecoration:'bold'}}> *Can start with a number or letter but must be at least 7 letters long</label>

                <br/>

                <label>Phone </label>
                
                 <br/>   
                <input type="tel" name="phone" title="phone number" required pattern="[0-9]{10}"
                    value={this.state.phone} 
                    onChange={(e) => this.setState( 
                    { phone: e.target.value })}/>
                <label style={{color:"red",textDecoration:'bold'}}> *Should be 10 digits long</label>


                <br/>

                

            <label>Gender </label>

            <br/>   
            <input type="text" name="gender" title="gender" required pattern="(m|f|M|F|male|female|MALE|FEMALE|Male|Female)"
            value={this.state.gender} 
            onChange={(e) => this.setState( 
            {gender: e.target.value })}/>
             <label style={{color:"red",textDecoration:'bold'}}> *Can be male,female,m,f,Male,Female or all in caps</label>

            <br/>






            <input type="submit" name ="submit" value="Submit" style={{width:'80px', height:'50px'}} />
            </form>
    )
}
}
export default Signup;