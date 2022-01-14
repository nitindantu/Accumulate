import React, { Component } from 'react'
import "./Schedule.css"
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import axios from 'axios';

export class Schedule extends Component {

state={user:{}}
componentDidMount(){
  const user = JSON.parse(localStorage.getItem('user'));
  axios.post(`${process.env.REACT_APP_APILINK}/login`,user)
  .then(res=>{
    console.log(res);
 if (res.data!=null) {
  localStorage.setItem('data', JSON.stringify(this.state.user));
this.setState({user:res.data})

} else {
this.props.history.push("/");
}
  })
}
    render() {
        return (
            <div>
<div className="app-container"> 
    
<div className="app-header">
    <div className="app-header-left">
      <span className="app-icon"></span>
      <p className="app-name">Acculearn</p>
      
    </div>
    <div className="app-header-right">
      <button className="mode-switch" title="Switch Theme">
        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
     
      <button className="notification-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
      </button>
      <button className="profile-btn">
      <img src={this.state.user["image"]} />
        <span>{this.state.user["username"]}</span>
      </button>
      <i onClick={()=>{localStorage.setItem("user", {});
    this.props.history.push("/login");
    }} style={{marginLeft:"10px",cursor:"pointer"}} class="fas fa-sign-out-alt"></i>
    </div>
    <button className="messages-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    </button>
  </div>
  
  <div className="app-content">
  <div className="app-sidebar">
      <Link to="/home" className="app-sidebar-link ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" /></svg>
      </Link>
      <Link to="/Courses" className="app-sidebar-link">
        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-pie-chart" viewBox="0 0 24 24">
          <defs />
          <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
        </svg>
      </Link>
      {this.state.user["type"] === "Mentor"?
       <Link to="/Schedule" className="app-sidebar-link active">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
         <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
         <line x1="16" y1="2" x2="16" y2="6" />
         <line x1="8" y1="2" x2="8" y2="6" />
         <line x1="3" y1="10" x2="21" y2="10" /></svg>
     </Link>: <Link to="/student_schedule" className="app-sidebar-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" /></svg>
      </Link>
    }
      <Link to="/profile" className="app-sidebar-link">
        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-settings" viewBox="0 0 24 24">
          <defs />
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </Link>
      <Link to="/community" className="app-sidebar-link">
      <i style={{ fontSize:"22px"}} class="fas fa-users"></i>
      </Link>

    </div>
     
    <div style={{paddingBottom:"18px"}} className="projects-section">
<div class="task-manager">

  
  <div class="page-content">
  <div style={{position:"relative"}} class="header"><h3>Blockchain Introduction <span style={{color:"GrayText",fontSize:"13px"}}>(9.00am - 11.00am)</span> <span style={{position:"absolute",right:"5px",marginTop:"10px"}}><img style={{width:"34px",height:"34px",borderRadius:"50%",margin:"5px"}}
            src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            alt="member" />
          <img style={{width:"34px",height:"34px",borderRadius:"50%",margin:"5px"}}
            src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
            alt="member-2" />
          <img style={{width:"34px",height:"34px",borderRadius:"50%",margin:"5px"}}
            src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="member-3" /></span> </h3></div>
  <div ><a className="meetlink" href="https://meet.google.com/nur-unkk-sxq" target="_blank"><i class="fas fa-link"></i> https://meet.google.com/nur-unkk-sxq</a></div>
    <div class="header"><h3>Today Tasks</h3></div>
   
    <div class="tasks-wrapper">
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-1" checked />
        <label for="item-1">
          <span class="label-text">Blockchain Intuition</span>
        </label>
        <span class="tag approved">Finished</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-2" checked />
        <label for="item-2">
          <span class="label-text">Cryptocurrency Introduction</span>
        </label>
        <span class="tag approved">Finished</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-3" />
        <label for="item-3">
          <span class="label-text">Smart Contract Introduction</span>
        </label>
        <span class="tag progress">In Progress</span>
      </div>
      <div class="header upcoming">Upcoming Tasks</div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-7" />
        <label for="item-7">
          <span class="label-text">Ethereum Introduction</span>
        </label>
        <span class="tag waiting">Waiting</span>
      </div>
      <div class="task">
        <input class="task-item" name="task" type="checkbox" id="item-8" />
        <label for="item-8">
          <span class="label-text">Solidity Introduction</span>
        </label>

      <span class="tag waiting">Waiting</span>
      </div>
    
    </div>
  </div>
  
  <div class="right-bar">
  
    <div class="header">Schedule</div>
    <div class="right-content">
      <div class="task-box yellow">
        <div class="description-task">
          <div class="time">08:00 - 09:00 AM</div>
          <div class="task-name">Blockchain Introduction</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
          <img
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="member" />
          <img
            src="https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&auto=format&fit=crop&w=2210&q=80"
            alt="member-2" />
          <img
            src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="member-3" />
          <img
            src="https://images.unsplash.com/photo-1455504490126-80ed4d83b3b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            alt="member-4" />
        </div>
      </div>

    </div>
  </div>
</div>
           </div>
            </div>
            </div>


     </div>
        )
    }
}

export default Schedule
