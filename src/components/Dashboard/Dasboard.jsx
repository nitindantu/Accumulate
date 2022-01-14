import axios from 'axios';
import React from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Chatbox from '../Chatbox/Chatbox';
import "./Dashboard.css"

export class Dasboard extends React.Component {

state={
  user:[], swetha:null,
}



  state={user:{},date:{month:null,date:null},month:["January", "February", "March", "April", "May","June","July","August","September","October","November","December"]}
    componentDidMount(){
      const d = new Date();
      const t={
        month:this.state.month[d.getMonth()],
        date:d.getDate()
      }
this.setState({date:t})

            var modeSwitch = document.querySelector('.mode-switch');
            modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
              modeSwitch.classList.toggle('active');
            });
            
            var listView = document.querySelector('.list-view');
            var gridView = document.querySelector('.grid-view');
            var projectsList = document.querySelector('.project-boxes');
            
            listView.addEventListener('click', function () {
              gridView.classList.remove('active');
              listView.classList.add('active');
              projectsList.classList.remove('jsGridView');
              projectsList.classList.add('jsListView');
            });
            
            gridView.addEventListener('click', function () {
              gridView.classList.add('active');
              listView.classList.remove('active');
              projectsList.classList.remove('jsListView');
              projectsList.classList.add('jsGridView');
            });
            
            document.querySelector('.messages-btn').addEventListener('click', function () {
              document.querySelector('.messages-section').classList.add('show');
            });
            
            document.querySelector('.messages-close').addEventListener('click', function() {
              document.querySelector('.messages-section').classList.remove('show');
            });
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
      <Link to="/home" className="app-sidebar-link active">
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
      <Link to="/community" className="app-sidebar-link">
      <i style={{ fontSize:"22px"}} class="fas fa-users"></i>
      </Link>

    </div>
      
   <div className="projects-section">
      <div className="projects-section-header">
        <p>Outcomes</p>
        <p className="time">{this.state.date["month"]}, {this.state.date["date"]}</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">2</span>
            <span className="status-type">Courses In Progress</span>
          </div>
          {this.state.user["type"]==="Mentor"?
           <div className="item-status">
           <span  className="status-number">3</span>
           <span className="status-type">Total students</span>
         </div>:<div></div>
        }
         
        </div>
        <div className="view-actions">
          <button className="view-btn list-view" title="List View">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
          </button>
          <button className="view-btn grid-view active" title="Grid View">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /></svg>
          </button>
        </div>
      </div>
      <h4>Top courses in Live <img style={{width:"15px"}} src={require('../../Asset/Images/heat.png')} alt="" /></h4>

      <div className="project-boxes jsGridView">

        <div className="project-box-wrapper">
          <div className="project-box" style={{backgroundColor: "#fee4cb"}}>
            <div className="project-box-header">
              <span>December 10, 2021</span>
              <div className="more-wrapper">
                <button className="project-btn-more">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" /></svg>
                </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Blockchain Introduction</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "60%", backgroundColor: "#ff942e"}}></span>
          </div>
          <p className="box-progress-percentage">60%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />
            <button className="add-participant" style={{color: "#ff942e"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#ff942e"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    <div className="project-box-wrapper">
      <div className="project-box" style={{backgroundColor: "#e9e7fd"}}>
        <div className="project-box-header">
          <span>December 13, 2021</span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Blockchain for Business</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "50%", backgroundColor: "#4f3ff0"}}></span>
          </div>
          <p className="box-progress-percentage">50%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant" />
            <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant" />
            <button className="add-participant" style={{color: "#4f3ff0"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#4f3ff0"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    <div className="project-box-wrapper">
      <div className="project-box">
        <div className="project-box-header">
          <span>December 3, 2021</span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Accumulate Blockchain</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "80%", backgroundColor: "#096c86"}}></span>
          </div>
          <p className="box-progress-percentage">80%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant " />
            <img src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant" />
            <button className="add-participant" style={{color: "#096c86"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#096c86"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    <div className="project-box-wrapper">
      <div className="project-box" style={{backgroundColor: "#ffd3e2"}}>
        <div className="project-box-header">
          <span>November 26, 2021</span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Blockchain in NodeJs</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "20%" ,backgroundColor: "#df3670"}}></span>
          </div>
          <p className="box-progress-percentage">20%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
            <img src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />
            <button className="add-participant" style={{color: "#df3670"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#df3670"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    <div className="project-box-wrapper">
      <div className="project-box" style={{backgroundColor: "#c8f7dc"}}>
        <div className="project-box-header">
          <span>December 31, 2021</span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Smart Contract & solidity</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "60%", backgroundColor: "#34c471"}}></span>
          </div>
          <p className="box-progress-percentage">60%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant" />
            <button className="add-participant" style={{color: "#34c471"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#34c471"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
    <div className="project-box-wrapper">
      <div className="project-box" style={{backgroundColor: "#d5deff"}}>
        <div className="project-box-header">
          <span>January 3, 2022</span>
          <div className="more-wrapper">
            <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">Ethereum Introduction</p>
          <p className="box-content-subheader">Prototyping</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span className="box-progress" style={{width: "40%", backgroundColor: "#4067f9"}}></span>
          </div>
          <p className="box-progress-percentage">40%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant" />
            <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant" />
            <button className="add-participant" style={{color: "#4067f9"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{color: "#4067f9"}}>
            2 Days Left
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div style={{height:"255px"}} className="messages-section">
  <button className="messages-close">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" /></svg>
  </button>
  <div className="projects-section-header">
    {this.state.user["type"]==="Mentor"?
        <p>Student Messages</p>
:    <p>Instructor messages</p>

  }
  </div>
  <div className="messages">
    {this.state.user["type"]==="Mentor"?
    <div>
  <div className="message-box">
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF0mgRT6ztH-A/profile-displayphoto-shrink_800_800/0/1605830380960?e=1647475200&v=beta&t=B258G1N2vj7VpTlibFkISs66l360j98DrWBoe_NVsR4" alt="profile image" />
      <div className="message-content">
        <div className="message-header">
          <div className="name">Sujan</div>
          <div className="star-checkbox">
            <input type="checkbox" id="star-1" />
            <label for="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p className="message-line">
          I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.
        </p>
        <p className="message-line time">
          Jan, 1
        </p>
      </div>
    </div>
    <div className="message-box">
      <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />
      <div className="message-content">
        <div className="message-header">
          <div className="name">Mark</div>
          <div className="star-checkbox">
            <input type="checkbox" id="star-2" />
            <label for="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p className="message-line">
          Hey, can tell me about progress of project? I'm waiting for your response.
        </p>
        <p className="message-line time">
          Dec, 12
        </p>
      </div>
    </div>
   
   
   
    </div>:<div >
    <div style={{marginBottom:"1px solid rgb(195, 207, 244)"}} className="message-box">
      <img src="https://speakers.acm.org/binaries/content/gallery/speakers/photo/u-z/vasudevan_13509" alt="profile image" />
      <div className="message-content">
        <div className="message-header">
          <div className="name">Shriram</div>
          <div className="star-checkbox">
            <input type="checkbox" id="star-3" />
            <label for="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </label>
          </div>
        </div>
        <p className="message-line">
          Happy 2022 new year to all.Have a great year ahead
        </p>
        <p className="message-line time">
          Dec, 12
        </p>
      </div>

    </div>
  
    </div>
  }
  
   
 

  </div>
</div>

</div>
</div>
<Chatbox name={this.state.user["username"]} />
{/* <div className="popupmsg" id="popup" >Hey {this.state.user["username"]}, May I help you.?</div>

<div className="chatbot">
<img style={{height:"50px",width:"55px",objectFit:"contain"}} src={require('../../Asset/Images/robot.png')} alt="" />
</div> */}
            </div>
        )
    }
}

export default Dasboard
