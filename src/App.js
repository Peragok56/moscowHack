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
        case 'user':
          return (
            <Switch>
                <Route path='/help' exact component={Help}/>
                <Route path='/findtask' exact component={FindTask}/>
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