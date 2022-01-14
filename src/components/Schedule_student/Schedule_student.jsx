import React, { Component } from 'react'
import "../Schedule/Schedule.css"
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import ReactYouTube from '../Youtubeplayer/Youtubeplayer'
import TextField from '@mui/material/TextField';    
import emailjs from 'emailjs-com';
import axios from 'axios';
import YouTube from 'react-youtube'


export class Schedule_student extends Component {
    state={opt:2,val:null,user:{},play:0,
  varray:["RCHvt6KCcUk","a0izTK9tVvc","CGHHhcpx3x8","8QEPimlOX_8","egrp6YxN4Sc","8sDQPAeHeiU","DKclA3T5q6g"]
  }
    videoOnReady (event) {
      // access to player in all event handlers via event.target
      // event.target.playVideoAt(50) // 50 seconds
      const player = event.target
      this.setState({
        playerObj: player
      })
      player.seekTo(50)
      console.log(event.target)
    }
  
  
    handlenotes=(e)=>{
        this.setState({val:e.target.value})
    }
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
    handleMail=()=>{
        var date=new Date();
        var template={
            name:this.state.user["username"],
            to:this.state.user["email"],
            message:this.state.val,
            date:date
        }
        // var template = {
        //     name: 'James',
        //     notes: 'Check this out!'
        // };
        emailjs.send('service_9su2w3z', 'template_y5o0ewe',template , 'user_0Ri3RYRpL7xQ3tHk5nA9H')
        .then((result) => {
            console.log("mail sent");
        }, (error) => {
            alert(error.text);
        });
    }
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      }
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
      <Link to="/Schedule" className="app-sidebar-link active">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" /></svg>
      </Link>
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

  {this.state.opt===2?
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
         <label for="item-1">
         Blockchain intution
         </label>
         <span class="tag approved">Finished</span>
       </div>
       <div class="task">
         <label for="item-2">
         Simple cryptocurrency creation
         </label>
         <span class="tag approved">Finished</span>
       </div>
       <div class="task">
         <label for="item-3">
           Smart Contract creation
         </label>
         <span class="tag progress">In Progress</span>
       </div>
       <div style={{transition: 'all 300ms ease-in-out'}} id="review-head" class="header upcoming">Give review for today class</div>
     
      
       <div id="app" class="app">
   <p>Let us know how he did</p>
 
   <div class="container">
     <div class="item">
       <label for="0">
       <input class="radio" type="radio" name="feedback" id="0" value="0" />
       <span>🤬</span>
       <p>Very Poor</p>
     </label>
     </div>
 
     <div class="item">
       <label for="1">
       <input class="radio" type="radio" name="feedback" id="1" value="1" />
       <span>🙁</span>
       <p style={{textAlign: 'center'}}>Poor</p>
 
     </label>
     </div>
 
     <div class="item">
       <label for="2">
       <input class="radio" type="radio" name="feedback" id="2" value="2" />
       <span>🙂</span>
       <p style={{textAlign: 'center'}}>Okay</p>
     </label>
     </div>
 
     <div class="item">
       <label for="3">
       <input class="radio" type="radio" name="feedback" id="3" value="3" />
       <span>😁</span>
       <p style={{textAlign: 'center'}}>Good</p>
     </label>
     </div>
 
     <div class="item">
       <label for="4">
       <input class="radio" type="radio" name="feedback" id="4" value="4" />
       <span>😍</span>
       <p style={{textAlign: 'center'}}>Excellent</p>
 
     </label>
     </div>
 
   </div>
   <div style={{width: '100%', display: 'flex',justifyContent: 'center',marginTop:"20px"}}> 
   <button onClick={()=>{
       document.getElementById("app").style.display="none";
       document.getElementById("review-head").innerHTML = "Review given";
   }} type="button" class="btn btn-outline-dark">Save Review</button>
 
   </div>
 </div>
       
     </div>
   </div>
  :
  this.state.opt===1?
  <div>
      <h2 style={{fontSize: '20px',color:"#444444",textAlign:"center",marginBottom:"30px"}}>Blockchain Challenges and Fundamentals</h2>
      <div style={{ margin:"0px 55px"}}>
<YouTube
        videoId={this.state.varray[this.state.play]}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
        </div>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <i onClick={()=>{
          this.setState({play: 0})}} style={{fontSize:"40px", color:"grey",margin:"20px",cursor: 'pointer'}} class="fas fa-chevron-circle-left"></i>
                <
                  
                  i onClick={()=>{
                  this.setState({
                    play:this.state.play +1 
                  })
                  console.log(this.state.play);

                  console.log(this.state.varray[this.state.play]);
      
                  }} style={{fontSize:"40px", color:"grey",margin:"20px",cursor: 'pointer'}} class="fas fa-chevron-circle-right"></i>
        </div>
      <TextField style={{marginTop:"20px"}}
          id="standard-textarea"
          label="Note Taker"
          placeholder="Take your notes here"
          multiline
          variant="standard"
          fullWidth
          onChange={this.handlenotes}
        />  
           <div style={{width: '100%', display: 'flex',justifyContent: 'center',marginTop:"20px"}}> 
           <button onClick={this.handleMail}  type="button" class="btn btn-outline-dark">Mail the notes</button>

</div>  
          </div> : <div>
  <h2 style={{fontSize: '20px',color:"#444444",textAlign:"center",marginBottom:"30px"}}>Blockchain Challenges and Fundamentals</h2>
      <div style={{ margin:"0px 55px"}}>
<YouTube
        videoId="Ibspm-vPido"
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
        </div>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <i onClick={()=>{
          this.setState({play: 0})}} style={{fontSize:"40px", color:"grey",margin:"20px",cursor: 'pointer'}} class="fas fa-chevron-circle-left"></i>
                <
                  
                  i onClick={()=>{
                  this.setState({
                    play:this.state.play +1 
                  })
                  console.log(this.state.play);

                  console.log(this.state.varray[this.state.play]);
      
                  }} style={{fontSize:"40px", color:"grey",margin:"20px",cursor: 'pointer'}} class="fas fa-chevron-circle-right"></i>
        </div>
        <a href="https://docs.accumulatenetwork.io/accumulate/" target="_blank"><h5 style={{textAlign:"center",fontSize:"1rem"}}>Need help ?</h5></a>
      <TextField style={{marginTop:"20px"}}
          id="standard-textarea"
          label="Note Taker"
          placeholder="Take your notes here"
          multiline
          variant="standard"
          fullWidth
          onChange={this.handlenotes}
        />  
           <div style={{width: '100%', display: 'flex',justifyContent: 'center',marginTop:"20px"}}> 
           <button onClick={this.handleMail}  type="button" class="btn btn-outline-dark">Mail the notes</button>

</div>  
          </div>
  }
 
  <div class="right-bar">
  
    <div class="header">Schedule</div>
    <div class="right-content">
      <div onClick={()=>{this.setState({opt:2})}} class="task-box yellow">
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
      {this.state.user["type"]==="Student"?
    <div>
  <div onClick={()=>{this.setState({opt:1})}} class="task-box blue">
        <div  class="description-task">
          <div class="time">10:00 - 11:00 AM</div>
          <div class="task-name">Block Chain</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
          <img
          style={{width:"50px"}}
            src="https://cdn-icons-png.flaticon.com/512/400/400425.png"
            alt="member" />

        </div>
      </div>
    
      <div onClick={()=>{this.setState({opt:3})}} class="task-box green">
        <div class="description-task">
          <div class="time">03:00 - 04:00 PM</div>
          <div class="task-name">Accumulate Blockchain</div>
        </div>
        <div class="more-button"></div>
        <div class="members">
        <img
          style={{width:"50px"}}
            src="https://cdn-icons-png.flaticon.com/512/400/400425.png"
            alt="member" />
        </div>
      </div>
  
    </div>  : <div></div>
    
    }
    
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

export default Schedule_student
