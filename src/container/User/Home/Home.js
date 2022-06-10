import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from './Home.module.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            Loggin: null,
        }
    }

    render(){    
        return(
            <div className={classes.main}>
                <div className={classes.info}>
                    <h1>Добро пожаловать!</h1>
                    <h2>Рады вас видеть</h2>
                    {localStorage.getItem('token') === null ? 
                        <Link
                            to={{
                                pathname: '/auth'
                            }}
                        > 
                            Авторизация
                        </Link>
                    : <Link
                        to={{
                            pathname: '/mainTask'
                        }}
                        >
                        Начать
                      </Link>}
                </div>
            </div>
        )
    }
}

export default Home