import React from 'react'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Chatbox from './components/Chatbox/Chatbox';
import CoursePage from './components/CoursePage/CoursePage';
import Dasboard from './components/Dashboard/Dasboard';
import Loader from './components/Loader/Loader'
import Login from './components/Login/Login';
import Schedule from './components/Schedule/Schedule';
import Schedule_student from './components/Schedule_student/Schedule_student';
import Settings from './components/Settings/Settings';

import { ToastContainer,toast } from "react-toastify";
import Community from './components/Community/Community';

const App = () => {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Loader} />
        <Route exact path="/home" component={Dasboard} />
        <Route exact path="/Courses" component={CoursePage} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/profile" component={Settings} />
        <Route exact path="/student_schedule" component={Schedule_student} />
<Route exact path="/chat" component={Chatbox} />
<Route exact path="/community" component={Community} />
<Route exact path="/login" component={Login} />


  
      </Switch>
      <ToastContainer />

     
    </Router>


  );
}

export default App;
