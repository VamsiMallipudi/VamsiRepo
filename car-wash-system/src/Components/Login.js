import axios from 'axios';
import React, { Component } from 'react'

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const username = this.username
        const password = this.password
        axios.post('http://localhost:9095/user/authenticate',null,{params: {username, password}})
        .then(res => {
            localStorage.setItem('data',res.data);
        })
        .catch(err => {
            console.log(err)
        })
    };
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>username</label>
          <input type="text" className="form-control" placeholder="username" 
          onChange={(e) => this.username = e.target.value}/>
      </div>
       
      <div className="form-group">
          <label>password</label>
          <input type="password" className="form-control" placeholder="password" 
          onChange={(e) => this.password = e.target.value}/>
      </div>

      <div className='form-group'>
          <button className='btn btn-primary btn-block'>Login</button>
      </div>
      
    </form>
    )
  }
}

export default Login