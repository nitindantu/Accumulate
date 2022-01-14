import axios from 'axios';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
export class Community extends Component {
    state={user:{},date:{month:null,date:null},month:["January", "February", "March", "April", "May","June","July","August","September","October","November","December"]}
      componentDidMount(){
        const d = new Date();
        const t={
          month:this.state.month[d.getMonth()],
          date:d.getDate()
        }
  this.setState({date:t})
  
              
             
            
              const user = JSON.parse(localStorage.getItem('user'));
              console.log(user);
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
                <img style={{width:"120px",objectFit:"contain",margin:"0px 30px"}} src={require('../../../src/Asset/Images/logo.png')} alt="" />
        <div className="search-wrapper">
          <input className="search-input" type="text" placeholder="Search for courses" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
            <defs></defs>
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
        </div>
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
        <Link to="/home" className="app-sidebar-link">
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
        {this.state.user["type"] === "Mentor"?<div>
        <Link to="/Schedule" className="app-sidebar-link">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
           <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
           <line x1="16" y1="2" x2="16" y2="6" />
           <line x1="8" y1="2" x2="8" y2="6" />
           <line x1="3" y1="10" x2="21" y2="10" /></svg>
       </Link>
        </div>
        : <Link to="/student_schedule" className="app-sidebar-link">
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
        <Link to="/community" className="app-sidebar-link active">
      <i style={{ fontSize:"22px"}} class="fas fa-users"></i>
      </Link>
  
      </div>
        
     <div className="projects-section">
     <div style={{display: 'flex',marginBottom:"20px", justifyContent: 'center',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
         <img style={{objectFit:"contain",width:"90%"}} src="https://aws1.discourse-cdn.com/github/original/2X/c/c0e0f8a6eae69b57a7465cdc578fc63874783f8d.png" alt="" />
    <h1 style={{marginTop:"30px",textAlign:"center",fontWeight:"bold",color:"#2d2b42"}}> <span > Acculearn</span> Community.</h1>
     <h3 style={{textAlign:"center",fontSize:"20px",color:"#8a8f98"}}>We're here to help. Find <span style={{ color:"#ef2332"}}>solutions</span>, share <span style={{ color:"#548CFF"}}>ideas</span>, and follow <span style={{ color:"#A3DA8D"}}>discussions</span> .</h3>
     </div>
     <hr />
 <div style={{display:"flex",margin:"20px" ,justifyContent:"space-evenly"}}>
 <div class="card">
  <div class="card-header">
Top Featured discussions
  </div>
  <div class="card-body">
    <h5 class="card-title">Democracy Through Ethical Technology & Communication</h5>
    <p style={{ color:"grey"}}class="card-text">#Blockchain #democracy #ethical #ethereum</p>
    <a style={{backgroundColor:"#2b2d42",color:"#fff"}} href="#" class="btn">Discuss now</a>
  </div>
</div>
<div class="card">
  <div class="card-header">
    Hot discussions
  </div>
  <div class="card-body">
    <h5 class="card-title">BLOCKCHAIN.COMMUNITY PARTNERSHIP WITH 51ASIC</h5>
    <p style={{ color:"grey"}} class="card-text">Blockchain.community announces....</p>
    <a style={{backgroundColor:"#2b2d42",color:"#fff"}} href="#" class="btn">Discuss now</a>
  </div>
</div>
<div class="card">
  <div class="card-header">
   Top Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">BITNATION-BLOCKCHAIN CONSITUTION</h5>
    <p style={{ color:"grey"}}class="card-text">The Bitnation community is in the process..</p>
    <a style={{backgroundColor:"#2b2d42",color:"#fff"}} href="#" class="btn">Discuss now</a>
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

export default Community
