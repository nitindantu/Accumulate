import React, { Component } from 'react'
import "./CoursePage.css"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { course } from '../../Datastore/Course';
import { mentor } from '../../Datastore/Mentor';

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export class CoursePage extends Component {

  state = {
    course: [], num: 0, sc: {},
    mentor: [], mc: {},payment: 0,user:{}
  }
  handleFilter = () => {
    var filtericon = document.getElementById('filtericon');
    var fpart = document.getElementById('fpart');

    if (filtericon.classList.contains('active')) {
      filtericon.classList.remove('active');
      fpart.style.height = "0px";
      setTimeout(() => {

      }, 1500);
      fpart.style.opacity = "0";
    }
    else {
      filtericon.classList.add('active');
      fpart.style.height = "200px";
      fpart.style.opacity = "1";


    }
  }
  handleSearch = (e) => {
    this.setState({ course: [],mentor:[] })
    const search = e.target.value;
    course.map((id, index) => {
      if (id["name"].toUpperCase().includes(search.toUpperCase())) {
        this.setState(prevState => ({
          course: [...prevState.course, id],
        }))
      } else {
      }
    })

    mentor.map((id, index) => {
      var j=0;
      id.coffer.map((id1, index) => {
        if (id1.toUpperCase().includes(search.toUpperCase()) && j==0) {
          console.log(id1);
          j=j+1;
          this.setState(prevState => ({
            mentor: [...prevState.mentor, id],
          }))
        } else {
          console.log(id["name"]);
        }
      })

      
    })
    

  }


  componentDidMount() {
    this.setState({ course: course })
    this.setState({ mentor: mentor })
    console.log();
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
  handleToken=(token, addresses)=>{
    this.setState({ payment: 1 })
  }
  render() {
    const d = new Date();
    console.log(d);

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
              <Link to="/Courses" className="app-sidebar-link active">
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

            <div style={{ paddingBottom: "18px" }} className="projects-section">

              <div className="projects-section-line">
                <div className="search-wrapper">
                  <input onChange={this.handleSearch} className="search-input" type="text" placeholder="Search for courses" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-search" viewBox="0 0 24 24">
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                  </svg>
                </div>

                <div className="view-actions">
                  <button style={{ zIndex: 50 }} onClick={this.handleFilter} id="filtericon" className="view-btn list-view" title="List View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                  </button>

                </div>

              </div>
              <div id="fpart" className="filterpart" >
                <h3>Filter Menu</h3>
                <div style={{ display: 'flex', justifyContent: "space-around", marginBottom: "15px" }}>

                  <h2 style={{ flex: 0.1, fontWeight: "300", fontSize: "16px", paddingTop: "8px" }}>Ratings</h2>
                  <div className="filteritem" style={{ padding: "10px", borderRadius: "22px", fontSize: "15px", margin: "0px 10px", cursor: "pointer" }}><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> 4.5 & up</div>
                  <div className="filteritem" style={{ padding: "10px", borderRadius: "22px", fontSize: "15px", margin: "0px 10px", cursor: "pointer" }}><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i> 3.5 & up</div>
                  <div className="filteritem" style={{ padding: "10px", borderRadius: "22px", fontSize: "15px", margin: "0px 10px", cursor: "pointer" }}><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i> 2.5 & up</div>

                </div>
                <div style={{ display: 'flex', marginLeft: "6px" }}>

                  <h2 style={{ flex: 0.1, fontWeight: "300", fontSize: "16px", paddingTop: "8px" }}>Duration</h2>
                  <div className="filteritem" style={{ padding: "10px", borderRadius: "22px", fontSize: "15px", margin: "0px 18px", cursor: "pointer" }}><i class="far fa-play-circle"></i> 45+ hours</div>
                  <div className="filteritem" style={{ padding: "10px", borderRadius: "22px", fontSize: "15px", margin: "0px 18px", cursor: "pointer" }}><i class="far fa-play-circle"></i> 35+ hours</div>
                  <div className="filteritem" style={{ padding: "10px", borderRadius: "22px", fontSize: "15px", margin: "0px 18px", cursor: "pointer" }}><i class="far fa-play-circle"></i> 25+ hours</div>

                </div>
              </div>

                {this.state.course.length>0?
                           <div className="project-boxes jsGridView">

 {this.state.course.map((id, index) => (
                  <div className="project-box-wrapper">

                    <article class="card">
                      <header class="card__thumb">
                        <a href="#" onClick={(index) => {
                          this.setState({ sc: id })
                        }} data-bs-toggle="modal" data-bs-target="#exampleModal"><img style={{ objectFit: "contain", width: "370px", height: "245px" }} src={id["image"]} /></a>
                      </header>
                      <date class="card__date">
                        <span class="card__date__day">{id["date"]}</span>
                        <br />
                        <span class="card__date__month">{id["month"]}</span>
                      </date>

                      <div class="card__body">
                        <div class="card__category"><a href="#">Photos</a></div>
                        <h2 class="card__title"><a href="#">{id["name"]}</a></h2>
                        <div class="card__subtitle">{id["author"]}</div>
                        <p class="card__description">{id["description"]}</p>
                      </div>

                      <footer class="card__footer">
                        <i class="far fa-play-circle"></i> {id["hrs"]}
                        <div style={{ display: "inline-block", paddingLeft: "30px" }}>   <i class="fas fa-graduation-cap"></i> 42 comments</div>
                      </footer>
                    </article>
                  </div>

                ))}
                </div>:<div>
                  <h5>No course found for your search</h5>
                </div>
                }
               



              </div>

            <div className="messages-section">
              <button className="messages-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" /></svg>
              </button>
              <div className="projects-section-header">
                <p>Top Instructors</p>
              </div>
              {this.state.mentor.length>0?
              <div className="messages">
              {this.state.mentor.map((id, index) => (
                <div className="message-box">
                  <img style={{ width: "100px", height: "100px" }} src={id["image"]} alt="profile image" />
                  <div className="message-content">
                    <div className="message-header">
                      <div data-bs-toggle="modal" data-bs-target="#mentorModal" onClick={() => {
                        this.setState({ sc: id })
                        console.log(this.state.sc);
                      }} style={{ cursor: "pointer" }} className="name">{id["name"]}</div>
                      <div className="star-checkbox">
                        <input type="checkbox" id="star-1" />
                        <label for="star-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                        </label>
                      </div>
                    </div>

                    <p style={{ margin: "0px" }} className="message-line">
                      {id["workplace"]}
                    </p>
                    <p className="message-line">
                      #{id["coffer"][0]} #{id["coffer"][1]} #{id["coffer"][2]}
                      #{id["coffer"][3]}
                    </p>
                    <p className="message-line">
                      Experience of {id["Experience"]} years
                    </p>
                    <p className="message-line time booknow">
                      <i class="fas fa-sign-out-alt"></i> Book now
                    </p>
                  </div>

                </div>

              ))}


            </div>: <div><h3 style={{marginLeft:"15px",fontSize:"20px"}}>No mentors found for your search</h3></div>
            }
              
            </div>



          </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{this.state.sc["name"]}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: "0.3" }}>
                    <img style={{ height: "300px" }} src={this.state.sc["image"]} alt="" />
                  </div>
                  <div style={{ flex: "0.7", marginLeft: "20px " }}>
                    <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "#2B2B2B" }}>{this.state.sc["name"]}</h1>
                    <h1 style={{ fontSize: "17px", color: "#716F81" }}>{this.state.sc["description"]}</h1>
                    <h1 style={{ fontSize: "15px", color: "#716F81" }}>created by <span style={{ color: "#334257" }}>{this.state.sc["author"]}</span> </h1>
                    <div style={{ marginTop: "20px" }}>
                      <h4 style={{ fontSize: "20px", color: "#334257" }}>What you'll learn : </h4>
                      <ul>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Create a Blockchain</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Understand the theory behind Cryptocurrency Transactions</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Understand the theory behind Smart Contracts</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Understand the theory behind Cryptocurrency's</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Understand the theory behind Cryptocurrency's</li>
                      </ul>

                    </div>
                    <div>
                      <h4 style={{ fontSize: "20px", color: "#334257" }}>Course content</h4>
                      <p style={{ color: "grey", fontSize: "10px", margin: "8px 0px" }}>{this.state.sc["sessions"]} sessions </p>
                      <ul>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Introduction</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Blockchain Intuition</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Cryptocurrency Intution</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Smart Contract Intution</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Create a smart contract</li>
                      </ul>
                    </div>

                    <div>
                      <button style={{ minWidth: "150px" }} type="button" class="btn btn-dark" data-bs-target="#paymentModel" data-bs-toggle="modal">Buy now</button>
                    </div>


                  </div>






                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="modal fade" id="mentorModal" tabindex="-1" aria-labelledby="mentorModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{this.state.sc["name"]}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: "0.3" }}>
                    <img style={{ height: "300px" }} src={this.state.sc["image"]} alt="" />
                  </div>
                  <div style={{ flex: "0.7", marginLeft: "20px " }}>
                    <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "#2B2B2B" }}>{this.state.sc["name"]}</h1>
                    <h1 style={{ fontSize: "13px", color: "#716F81" }}>{this.state.sc["about"]}</h1>
                    <h1 style={{ fontSize: "15px", color: "#716F81" }}>Working in <span style={{ color: "#334257" }}>{this.state.sc["workplace"]}</span> </h1>
                    <h1 style={{ fontSize: "13px", color: "#343A40" }}>Experience of {this.state.sc["Experience"]} years</h1>

                    <div style={{ marginTop: "20px" }}>
                      <h4 style={{ fontSize: "20px", color: "#334257" }}>Courses Offered: </h4>
                      <ul>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Blockchain</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Web design</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> Machine learning</li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fas fa-check"></i> IOT</li>

                      </ul>
                      
</div>
                    <div>
                      <h4 style={{ fontSize: "20px", color: "#334257" }}>Course Sessions</h4>
                      <p style={{ color: "grey", fontSize: "10px", margin: "8px 0px" }}>{this.state.sc["sessions"]} sessions </p>
                      <ul>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Blockchain <br /> <span style={{marginLeft:"18px"}}> Slot-A(09.00 am - 10.00am)</span><br /></li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Web design <br /> <span style={{marginLeft:"18px"}}> Slot-A(10.00 am - 11.00am)</span><br /></li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> Artificial Intelligence <br />  <span style={{marginLeft:"18px"}}> Slot-A(11.00 am - 12.00am)</span><br /></li>
                        <li style={{ marginLeft: "10px", fontSize: "13px", color: "#423F3E", margin: "10px" }}> <i class="fab fa-youtube"></i> IOT <br /> <span style={{marginLeft:"18px"}}> Slot-A(12.30 pm - 13.30pm)</span><br /></li>
                      </ul>
                    </div>

                    <div>
                      <button style={{ minWidth: "150px" }} type="button" class="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Book now</button>
                    </div>


                  </div>






                </div>
              </div>

            </div>
          </div>
        </div>



    
        <div class="modal fade" id="paymentModel" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              {this.state.payment===0?

   <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} class="modal-body">
                Payment Portal <br />
                <div style={{ fontSize: "15px", color: "grey" }}>
                  Course Name : {this.state.sc["name"]}
                </div>
                <div style={{ fontSize: "15px", color: "grey" }}>
                  Date of Purchase : {JSON.stringify(d)}
                </div>
                <div style={{ fontSize: "15px", color: "grey" }}>
                  Purchase Amount : $499
                </div>

                <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={this.handleToken}
        amount={499}
        name={this.state.sc["name"]}
        billingAddress
        shippingAddress
      />
              </div>:
<div>
               <div style={{ display: "flex", justifyContent: "center" }}>
               <div class="icon">
                 <i class="fa fa-check"></i>
               </div>
             </div>

             <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} class="modal-body">
               Payment Successfully Finished <br />
               <div style={{ fontSize: "15px", color: "grey" }}>
                 Course Name : {this.state.sc["name"]}
               </div>
               <div style={{ fontSize: "15px", color: "grey" }}>
                 Date of Purchase : {JSON.stringify(d)}
               </div>
               <div style={{ fontSize: "15px", color: "grey" }}>
                 Enjoy your Learning..!!
               </div>
             </div></div>

            }
             
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
}

export default CoursePage
