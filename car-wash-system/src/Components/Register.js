import React, { Component } from 'react'
import axios from  'axios';

class Register extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            name: this.name,
            gmail: this.gmail,
            password: this.password,
            location: this.location,
            username: this.username
        };
        axios.post('http://localhost:9095/user/adduser',data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h3>Sign up</h3>
          <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" placeholder="Name" 
                onChange={(e) => this.name = e.target.value}/>
          </div>
        <div className="form-group">
            <label>gmail</label>
            <input type="email" className="form-control" placeholder="Email" 
                onChange={(e) => this.gmail = e.target.value}/>
        </div>
        <div className="form-group">
            <label>password</label>
            <input type="password" className="form-control" placeholder="password" 
            onChange={(e) => this.password = e.target.value}/>
        </div>
        <div className="form-group">
            <label>location</label>
            <input type="text" className="form-control" placeholder="location" 
            onChange={(e) => this.location = e.target.value}/>
        </div>
        <div className="form-group">
            <label>username</label>
            <input type="text" className="form-control" placeholder="username" 
            onChange={(e) => this.username = e.target.value}/>
        </div>

        <div className='form-group'>
            <button className='btn btn-primary btn-block'> Sign up </button>
        </div>
        
      </form>
    )
  }
}

export default Register