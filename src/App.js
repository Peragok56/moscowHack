import {Component} from 'react'
import Layout from './hoc/layout/layout';
import {Switch, Route} from 'react-router-dom'
import './fonts.css'
import './App.css'
import axios from './axios/axios';

import Auth from './container/User/Auth/Auth';
import Regist from './container/User/Regist/Regist';
import Home from './container/User/Home/Home';
import Profile from './container/User/Profile/Profile';
import Main from './container/User/Main/Main';
import Search from './container/User/Search/Search'
import Help from './container/User/Help/Help'
import FindTask from './container/User/FindTask/FindTask'
import Organization from './container/User/Organizate/Organizate';
import AddTask from './container/User/AddTask/AddTask';
import Questions from './container/User/Qestions/Qestions';
import Volounteers from "./container/User/Volounteers/Volounteers";
import MyRating from "./container/User/MyRating/MyRating";

import AdminPanel from './container/Admin/AdminPanel/AdminPanel';
import AdminSpecification from './container/Admin/AdminSpecification/AdminSpecification';
import AdminOrganization from "./container/Admin/AdminOrganization/AdminOrganization";
import Organizations from './container/User/Organizations/Organizations';

class App extends Component{

  componentDidMount(){
    function checkAuth(){
      if (localStorage.getItem('exp')) {
        if (Date.now()/1000 > parseInt(localStorage.getItem('exp'))) {
            localStorage.clear()
            // console.log(window.location.pathname);
            if (window.location.pathname !=='/auth') {
              window.location.href='/auth'
            }
        }
      }
      
      setTimeout(checkAuth, 1000);
  }
  checkAuth()
  }

  render(){
    function router(role) {
      console.log(role);
      switch(role){
        case 'root':
          return (
            <Switch>
                <Route path='/adminSpecification' exact component={AdminSpecification}/>
                <Route path='/adminPanel' exact component={AdminPanel}/>
                <Route path='/adminOrganization' exact component={AdminOrganization}/>
            </Switch>
          );
        case 'user':
          return (
            <Switch>
              <Route path='/questions' exact component={Questions}/>
              <Route path='/addTask' exact component={AddTask}/>
              <Route path='/organizations' exact component={Organizations}/>
              <Route path='/organization' exact component={Organization}/>

              <Route path='/findtask' exact component={FindTask}/>
                <Route path='/help' exact component={Help}/>
                <Route path='/volounteers' exact component={Volounteers}/>
                <Route path='/myrating' exact component={MyRating}/>
              <Route path='/search' exact component={Search}/>
              <Route path='/main' exact component={Main}/>
              <Route path='/profile' exact component={Profile}/>
              <Route path='/' exact component={Home}/>

            </Switch>
          );
        case null:
          return(
            <Switch>  
              <Route path='/regist' exact component={Regist}/>
              <Route path='/auth' exact component={Auth}/>
              <Route path='/' exact component={Home}/>
            </Switch>
          )
          default: 
          break
      }
    }

    return(
      <Layout>
        {router(localStorage.getItem('role'))}
      </Layout>
    )
  }
}

export default App