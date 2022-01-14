import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Chatbox.css"
import axios from 'axios';

export class Chatbox extends Component {
	state={user:{}}
	componentDidMount(){
		
		var user = JSON.parse(localStorage.getItem('user'));
		console.log(user);
		axios.post(`${process.env.REACT_APP_APILINK}/login`,user)
		.then(res=>{
		 user=res.data
	   if (res.data!=null) {
		localStorage.setItem('data', JSON.stringify(this.state.user));
this.setState({user:res.data})

	  } else {
this.props.history.push("/");
	  }
	})
		document.getElementById("chatbot_toggle").onclick = function () {
			if (document.getElementById("chatbot").classList.contains("collapsed")) {
			  document.getElementById("chatbot").classList.remove("collapsed")
			  document.getElementById("chatbot_toggle").children[0].style.display = "none"
			  document.getElementById("chatbot_toggle").children[1].style.display = ""
			  setTimeout(addResponseMsg("Good morning...Welcome to Acculearn"),1000)
			}
			else {
			  document.getElementById("chatbot").classList.add("collapsed")
			  document.getElementById("chatbot_toggle").children[0].style.display = ""
			  document.getElementById("chatbot_toggle").children[1].style.display = "none"
			}
			function addResponseMsg(msg){
				var div = document.createElement("div");
				div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
				div.className = "chat-message-div-send";
				document.getElementById("message-box").appendChild(div);
				document.getElementById("message-box").scrollTop = document.getElementById(
				  "message-box"
				).scrollHeight;
			  }
			
		  }
		  



	}
	addResponseMsg=(msg)=>{
		var div = document.createElement("div");
		div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
		div.className = "chat-message-div-send";
		document.getElementById("message-box").appendChild(div);
		document.getElementById("message-box").scrollTop = document.getElementById(
		  "message-box"
		).scrollHeight;
	  }

	send=()=>{
		var running = false;
		if (running == true) return;
		var msg = document.getElementById("message").value;
		if (msg == "") return;
	
		running = true;
		addMsg(msg);
		//DELEAY MESSAGE RESPOSE Echo
		if (msg.includes("courses")) {
			msg="Please visit <a href='/Courses' target='_blank'>Acculearn.courses</a> for more courses"
		}
		if (msg.includes("schedules")) {
			msg="Please visit <a href='/student_schedule' target='_blank'>Acculearn.myschedule</a> for your schedule"
		}
		if (msg.includes("doubts")) {
			msg="Please visit <a href='/community' target='_blank'>Acculearn.community</a> to discuss your doubts"
		}
		window.setTimeout(this.addResponseMsg, 1000, msg);

		function addMsg(msg) {
			var div = document.createElement("div");
			div.innerHTML =
			  "<span></span><div class='chat-message-sent'>" +
			  msg +
			  "</div>";
			div.className = "chat-message-div";
			document.getElementById("message-box").appendChild(div);
			//SEND MESSAGE TO API
			document.getElementById("message").value = "";
			document.getElementById("message-box").scrollTop = document.getElementById(
			  "message-box"
			).scrollHeight;
		  }
		
	  }
	
    render() {
        return (
            <div>
              <div id="chatbot" class="main-card collapsed">
				  
  <button id="chatbot_toggle">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/></svg>
      <svg style={{marginTop:"5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
  </button>
  <div class="main-title">
    <div>
      <svg viewBox="0 0 640 512" title="robot">
        <path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
      </svg>
    </div>
    <span>Chatbot</span>

  </div>
  <div class="chat-area" id="message-box">
  </div>
  <div class="line"></div>
  <div class="input-div">
    <input class="input-message" name="message" type="text" id="message" placeholder="Type your message ..." />
    <button class="input-send" onClick={this.send}>
      <svg style={{width:"24px",height:"24px"}}>
        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
      </svg>
    </button>
  </div>
</div>
			</div>
        )
    }
}

export default Chatbox
