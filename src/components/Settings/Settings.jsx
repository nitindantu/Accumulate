import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import "./Settings.css"
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import TimePicker from '@mui/lab/TimePicker';


export class Settings extends Component {
  state={user:{},
option:0,
content:[],
link:[],
date:null,
c:null,
l:null
}
    componentDidMount(){

      // document.getElementById("open-popup-btn").addEventListener("click",function(){
      //   document.getElementById("open-popup-btn").style.display = "none";
      //   document.getElementById("app-container").style.opacity = "0.3";
      //   document.getElementsByClassName("popup")[0].classList.add("active");
      // });
       
      // document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
      //   document.getElementById("open-popup-btn").style.display = "block";
      //   document.getElementById("app-container").style.opacity = "1";
      //   document.getElementsByClassName("popup")[0].classList.remove("active");
      // });
      // document.getElementById("dismiss-popup-btn1").addEventListener("click",function(){
      //   document.getElementById("open-popup-btn").style.display = "block";
      //   document.getElementById("app-container").style.opacity = "1";
      //   document.getElementsByClassName("popup")[0].classList.remove("active");
      // });
      const user = JSON.parse(localStorage.getItem('user'));
            axios.post(`${process.env.REACT_APP_APILINK}/login`,user)
            .then(res=>{
              console.log(res);
           if (res.data!=null) {
    this.setState({user:res.data})

          } else {
    this.props.history.push("/");
          }
            })
    }

    handleOption=(e)=>{
if (e.target.value==="1") {
  this.setState({option:1,link:[]})
} else {
  this.setState({option:2,content:[]})

}
    }

    handleContent=(e)=>{
      this.setState(prevState => ({
        content: [...prevState.content, this.state.c],
        c:null
      }))
      console.log(this.state.content);
      
    }
    handleC=(e)=>{
this.setState({c:e.target.value})
    }


    handleLink=(e)=>{
      this.setState(prevState => ({
        link: [...prevState.link, this.state.l],
        l:null
      }))
      
    }
    handlel=(e)=>{
this.setState({l:e.target.value})
    }
    render() {
       

        return (
            <div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add course</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
  

  <div style={{display: 'flex', justifyContent: 'center',flexDirection:"column"}} class="description">
  <div style={{margin:"15px"}}><TextField id="outlined-basic" label="Enter Course Name" variant="outlined" /></div>
  <div style={{margin:"15px"}}><TextField id="outlined-basic" label="Enter Course Image" variant="outlined" /></div>
  <div style={{margin:"15px"}}><TextField id="outlined-basic" label="Enter Course Image" variant="outlined" /></div>
  <div style={{margin:"15px"}}><TextField id="outlined-basic" label="Enter Course Image" variant="outlined" /></div>
  <RadioGroup onChange={this.handleOption} row aria-label="gender" name="row-radio-buttons-group">
    <FormControlLabel value="1" control={<Radio />} label="Individual Course" />
    <FormControlLabel value="2" control={<Radio />} label="Course Video" />
  </RadioGroup>
{this.state.option===1 ? <div>
  {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Basic example"
        value={this.state.date}
        onChange={(newValue) => {
          this.setState({date:newValue})
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
  <div style={{margin:"15px"}}><TextField id="outlined-basic" label="Enter Course Image" variant="outlined" /></div>
{this.state.content.map((id,index)=>(
  <h3>{id}</h3>
))}
         <div>
         <TextField value={this.state.c} onChange={this.handleC} style={{margin:"15px",marginLeft:"50px"}} id="outlined-basic" label="Enter course content" variant="outlined" /><i onClick={this.handleContent} style={{fontSize:"30px",marginLeft:"10px",marginTop:"25px"}} class="fas fa-plus-circle"></i>
           </div> 

</div>:<div>
{this.state.link.map((id,index)=>(
  <h3>{id}</h3>
))}
         <div>
         <TextField value={this.state.l} onChange={this.handlel} style={{margin:"15px",marginLeft:"50px"}} id="outlined-basic" label="Enter course content" variant="outlined" /><i onClick={this.handleLink} style={{fontSize:"30px",marginLeft:"10px",marginTop:"25px"}} class="fas fa-plus-circle"></i>
           </div> 
</div> }

  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-dark">Add Course</button>
      </div>
    </div>
  </div>
</div>





         <div id="app-container" className="app-container">
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
      {this.state.user["type"] === "Mentor"?
       <Link to="/Schedule" className="app-sidebar-link">
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
      <Link to="/profile" className="app-sidebar-link active">
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
      
   <div className="projects-section">
     <div style={{display: 'flex',alignItems: 'center'}}>
    <div style={{flex:"0.3"}}>
      {this.state.user["type"]==="Mentor"?
         <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src="https://speakers.acm.org/binaries/content/gallery/speakers/photo/u-z/vasudevan_13509" alt="profile image" />
:    <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src="https://media-exp1.licdn.com/dms/image/C4D03AQF0mgRT6ztH-A/profile-displayphoto-shrink_800_800/0/1605830380960?e=1647475200&v=beta&t=B258G1N2vj7VpTlibFkISs66l360j98DrWBoe_NVsR4" alt="profile image" />
 
    }
    </div>
    <div style={{flex:"0.4"}}>
        <div >
        <h1 style={{display:"inline-block", color:"#2B2B2B"}}>{this.state.user["username"]} <i style={{color:"#34BE82",fontSize:"20px"}} class="fas fa-check-circle"></i></h1>
        </div>
<div style={{color:"#CDD0CB"}}>Joined as {this.state.user["type"]}</div>

    </div>
    <div style={{flex:"0.3"}}>
<div style={{display:"flex",justifyContent:"flex-end"}}>
    <button  className="editbutton">
      Edit Profile
    </button>
</div>
    </div>
    </div> 
    {this.state.user["type"]==="Student"?
        <div style={{padding:"10px"}}>
        <h2 style={{display:"inline-block", color:"#222831",fontWeight:"300",fontSize:"18px",margin:"20px"}}>Learning By self</h2>
        <div className="project-boxes jsGridView">
            <div className="project-box-wrapper">
              <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
                <div className="project-box-header">
                  <span>December 10, 2020</span>
                  <div className="more-wrapper">
                   
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Blockchain</p>
              <p className="box-content-subheader">Prototyping</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Progress</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{width: "60%", backgroundColor: "#ff942e"}}></span>
              </div>
              <p className="box-progress-percentage">60%</p>
            </div>
        
          </div>
        </div>
        <div className="project-box-wrapper">
          <div className="project-box" style={{backgroundColor: "#e9e7fd"}}>
            <div className="project-box-header">
              <span>December 10, 2020</span>
              <div className="more-wrapper">
               
              </div>
            </div>
            <div className="project-box-content-header">
              <p className="box-content-header">Accumulate Blockchain</p>
              <p className="box-content-subheader">Prototyping</p>
            </div>
            <div className="box-progress-wrapper">
              <p className="box-progress-header">Progress</p>
              <div className="box-progress-bar">
                <span className="box-progress" style={{width: "50%", backgroundColor: "#4f3ff0"}}></span>
              </div>
              <p className="box-progress-percentage">50%</p>
            </div>
          
          </div>
        </div>
      </div>
    
        </div>
    :<div></div>
  }

    <div>
    <h2 style={{display:"inline-block", color:"#222831",fontWeight:"300",fontSize:"18px",margin:"20px"}}>Learning By Instructor</h2>
    <div className="project-boxes jsGridView">
    <div className="project-box-wrapper">
      <div className="project-box" style={{backgroundColor: "#ffd3e2"}}>
        <div className="project-box-header">
          <span>December 10, 2020</span>
          <div className="more-wrapper">
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Blockchain Introduction</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "20%" ,backgroundColor: "#df3670"}}></span>
          </div>
          <p className="box-progress-percentage">20%</p>
        </div>
       
      </div>
    </div>
  </div>

    </div>
     
</div>
{this.state.user["type"] === "Mentor"?
<div style={{display: "flex",justifyContent: "center",paddingTop:"10px",flexDirection: "column",justifyContent: "center",alignItems: "center"}} className="messages-section addcourse">
 <div className="capicon" style={{width:"150px",height:"150px",backgroundColor:"#f3f6fd",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 <i style={{fontSize:"80px"}} class="fas fa-graduation-cap"></i>
 </div>
 <h2 style={{color:"#343A40",fontWeight:"400",fontSize:"13px",padding:"15px",textAlign:"center"}}>Proper teaching is recognized with ease. You can know it without fail because it awakens within you that sensation which tells you this is something you have always known.</h2>
 <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="editbutton">
     Add course
    </button>
</div>:<div></div>
}



</div>
</div>
            </div>
        )
    }
}

export default Settings;
