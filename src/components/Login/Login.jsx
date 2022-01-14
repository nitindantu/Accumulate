import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { withRouter } from 'react-router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ToastContainer,toast } from "react-toastify";

// 894853708055-huopnn0ok748isfvqrj5d7slsc94atpa.apps.googleusercontent.com

export class Login extends Component {

  
  state = {
    user: {
      username: null,
      password: null,
    },
    open: false,
    color: null,
    msg: null,
    error:false,
    opt:null
  };

 




  handlechange = (type, val) => {
    var t = this.state.user;
    t[type] = val;
    this.setState({
      user: t,
    });
  };

  handleSignup = (e) => {
    const rememberMe=true;
    e.preventDefault();
          console.log(this.state.user);
      axios
        .post(`${process.env.REACT_APP_APILINK}/signup`, this.state.user)
        .then(res=> {
          console.log(res);
          if (res.data!=null) {
            toast("Signed Up successfully", { type: "success" });
            this.props.history.push("/login");

         } else {
          toast("Signed Up successfully", { type: "success" });
        }
        })
        
    
  };
  handleSignin = (e) => {
    const rememberMe=true;
    console.log(this.state.user);
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_APILINK}/login`,this.state.user)
        .then(res=>{
          console.log(res);
       if (res.data!=null) {
        localStorage.setItem('rememberMe', rememberMe);
        const user={username:this.state.user["username"],password:this.state.user["password"]}
        localStorage.setItem('user', rememberMe ? JSON.stringify(user) : '');
this.props.history.push("/home");
      } else {
this.setState({error:true})
      }
        })
  };

  signUp = (e) => {
    console.log("signUp");
    this.setState({
      user: {},
    });
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.add("lright-panel-active");
  };

  signIn = (e) => {
    console.log("signIn");
    e.preventDefault();
    this.setState({
      user: {},
    });
    const container = document.getElementById("container");
    container.classList.remove("lright-panel-active");
  };
  handleOption=(e) => {
    this.setState({opt:parseInt(e.target.value, 10)})
    var t = this.state.user;
    if (e.target.value==="1") {
      t["level"] = "Student";
    } else {
      t["type"] = "Mentor";

    }
    this.setState({
      user: t,
    });
  }
  render() {
  
    return (
      <div>

            <div style={{width: "100%", height: "100vh"}} class="lcontainer" id="container">
              <div  class="lform-container lsign-up-container">
              <div style={{ margin:"20px",margnBottom: "0px" }}>
              <img style={{width:"100px",objectFit:"contain"}} src={require('../../../src/Asset/Images/logo.png')} alt="" />

                </div>
                <form className="lform">
                <i style={{ fontSize:"33px"}}class="fas fa-graduation-cap"></i>

                  <h1 className="lh1">
                    Sign <span style={{ color: "#ef476f" }}>Up</span>
                  </h1>
                  <span className="rspan">Please enter valid email id</span>
                  <input
                    className="linput"
                    onChange={(e) => {
                      this.handlechange("username", e.target.value);
                    }}
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="linput"
                    onChange={(e) => {
                      this.handlechange("email", e.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                    required
                  />
                   <input
                    className="linput"
                    onChange={(e) => {
                      this.handlechange("phone", e.target.value);
                    }}
                    type="number"
                    placeholder="Mobile Number"
                    max="999999999"
                    min="100000000"
                    required
                  />
                  <input
                    className="linput"
                    onChange={(e) => {
                      this.handlechange("password", e.target.value);
                    }}
                    type="password"
                    placeholder="Password"
                    required
                  />
                   <input
                    className="linput"
                    onChange={(e) => {
                      this.handlechange("password", e.target.value);
                    }}
                    type="password"
                    placeholder="Re-type Password"
                    required
                  />
                    <RadioGroup onChange={this.handleOption} row aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="1" control={<Radio />} label="Student" />
    <FormControlLabel value="2" control={<Radio />} label="Mentor" />
  </RadioGroup>
                  


                  
                  <button
                    style={{ margiBottom: "20px" }}
                    className="lbutton"
                    onclick="return false;"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                  >
                    Sign Up
                  </button>
                  <div style={{marginTop:"10px"}}>

                                </div>

                </form>
              </div>
              <div class="lform-container lsign-in-container">
                <div style={{ padding:"20px",margnBottom: "0px",backgroundColor:"white" }}>
              <img style={{width:"100px",objectFit:"contain"}} src={require('../../../src/Asset/Images/logo.png')} alt="" />
                </div>
             
                <form className="lform">
                <i style={{ fontSize:"33px"}}class="fas fa-graduation-cap"></i>
                  <h1 className="lh1">
                    Sign <span style={{ color: "#ef476f" }}>In</span>
                  </h1>
                  {
                    this.state.error?     <div style={{ margin:"20px",transition: "all 300ms ease-in"}}>
                    <span className="lspan">Incorrect email or password</span>
       
                    </div>: <div></div>
                  }
        
                  <input
                    onChange={(e) => {
                      this.handlechange("username", e.target.value);
                    }}
                    className="linput"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    onChange={(e) => {
                      this.handlechange("password", e.target.value);
                    }}
                    className="linput"
                    type="password"
                    placeholder="Password"
                    required
                  />
  <RadioGroup onChange={this.handleOption} row aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="1" control={<Radio />} label="Student" />
    <FormControlLabel value="2" control={<Radio />} label="Mentor" />
  </RadioGroup>
                  <Link className="link" to="#">
                    Forgot your password?
                  </Link>
                  <button
                    style={{ margiBottom: "20px" }}
                    onClick={this.handleSignin}
                    className="lbutton"
                    onclick="return false;"
                  >
                    Sign Inn
                  </button>
                  <div style={{marginTop:"10px"}}>
                 
                  </div>
                </form>
               
              </div>
              <div class="loverlay-container">
                <div class="loverlay">
                  <div class="loverlay-panel loverlay-left">
                    <h1 style={{ color: "#faf5f0" }} className="lh1">
                      <span style={{ color: "#ef476f" }}>Welcome</span> Back!
                    </h1>
                    <p className="lp">Please login with your personal info</p>
                    <button
                      onClick={this.signIn}
                      className="lbutton ghost"
                      id="signIn"
                    >
                      Sign In
                    </button>
                  </div>
                  <div class="loverlay-panel loverlay-right">
                    <h1 style={{ color: "#faf5f0" }} className="lh1">
                      <span style={{ color: "#ef476f" }}>Hello</span>, Friend!
                    </h1>
                    <p className="lp">
                      Enter your personal details and start your journey with us
                    </p>
                    <button
                      onClick={this.signUp}
                      className="lbutton ghost"
                      id="signUp"
                    >
                      
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
 
      <div class="modal-body">
  
<div class="container">
  <div class="plans">
    <div style={{fontSize:"30px",color:"#2b2d42",marginBottom:"2px"}} class="title"> Pick your level of standing in the <span style={{color: "#ef2332",textDecoration:"underline" }}>Blockchain</span></div>
    <div style={{color:"#8d99ae",marginBottom:"20px"}} class="title">It will help us to recommend to you the most appropriate stuffs 😇</div>
    <label class="plan basic-plan" for="basic">
      <input onClick={()=>{
        var t=this.state.user
        t["type"]="Easy";
        this.setState({user:t})
        }} type="radio" name="plan" id="basic" />
      <div class="plan-content">
      <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
        <div class="plan-details">
          <span>Basic</span>
          <p>Need to kick start the blockchain from Scratch</p>
        </div>
      </div>
    </label>



    <label class="plan basic-plan" for="intermediate">
      <input onClick={()=>{
        var t=this.state.user
        t["level"]="Intermediate";
        this.setState({user:t})
        }} type="radio" name="plan" id="intermediate" />
      <div class="plan-content">
        <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg" alt="" />
        <div class="plan-details">
          <span>Intermediate</span>
          <p>Known the basics of Blockchain but need to integrate it into real world applications</p>
        </div>
      </div>
    </label>

    <label style={{marginTop:"25px"}} class="plan complete-plan" for="complete">
      <input onClick={()=>{
        var t=this.state.user
        t["level"]="Advanced";
        this.setState({user:t})
        }}  type="radio" id="complete" name="plan" />
      <div class="plan-content">
        <img loading="lazy" src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg" alt="" />
        <div class="plan-details">
          <span>Advanced</span>
          <p>Want to know the Blockchain to the next level and integrate with your applications</p>
        </div>
      </div>
    </label>
  </div>
</div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button style={{background:"#2f2332",color:"#fff"}} type="button" class="btn" data-bs-dismiss="modal"                     onClick={this.handleSignup}
>Sign Up</button>
      </div>
    </div>
  </div>
</div>
          </div>
       
    );
  }
}

export default withRouter(Login);
