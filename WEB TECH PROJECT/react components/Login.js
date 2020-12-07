import React from 'react';

import "./styles2.css" // for styling
class Login extends React.Component
{
  constructor()
  {
    super(); 
    this.state = { login_id: '', password:''}; 
}

 
  render()
  {
    return(
    
    <form action="http://localhost:9000/login" method='POST' style={{margin:'50px'}}>
            <label> Login id</label> 

                <input type="text" name="login_id" required
                    value={this.state.login_id} 
                    onChange={(e) => this.setState( 
                    { login_id: e.target.value })}/> 

                <br/>

            <label> Password </label> 

            <input type="password" name="password" required
                    value={this.state.password} 
                    onChange={(e) => this.setState( 
                    { password: e.target.value })}/>

            <br/>

            <input type="submit" value="Submit" name="submit"></input>
            </form>
    )
}
}
export default Login;