import axios from 'axios'
import React, { Component } from 'react'

class Home extends Component {

    componentDidMount() {
        const a = localStorage.getItem('data')
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${a}`;
                return config;
            },
            error => {
            return Promise.reject(error);
            });
        axios.get('http://localhost:9095/user/allusers').then(
            res => {
                console.log(res.data);
            },
            err => {
                console.log(err)
            }
        )
    }
  render() {
    return (
      <h2>You are not logged in</h2>
    )
  }
}

export default Home