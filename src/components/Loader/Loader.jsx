import React, { Component } from 'react'
import loader from '../../Asset/Loader/loader.gif';
import "./Loader.css";
import Login from '../Login/Login';

export default class Loader extends Component {

  state={loader:true}


  componentDidMount(){
    setTimeout(() => {
      this.setState({loader:false});
    }, 2000);
  }
  render() {
    return (
      <div>
        {
          this.state.loader? <div className="loader-container">
          <img src={loader} alt="loader-img" />
                          </div>:<Login />
        }
      </div>
    )
  }
}
