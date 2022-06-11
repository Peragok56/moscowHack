import React, { Component } from "react";
import classes from './Auth.module.css'
import { Link } from "react-router-dom";
import {auth} from '../../../store/auth'
import Vector from './Vector.svg'


class Auth extends Component{
    render(){
        return(
            <div className={classes.Auth}>
                <div className={classes.Buble}>
                </div>
                    <div className={classes.authForm}>
                        <h1>Авторизация</h1>
                        <p>Войдите в аккаунт и начните делать мир лучше! :)</p>
                        <form>
                            <input placeholder="Почта" type='email' id="login"/>
                            <input placeholder="Пароль" type='password' id="password"/>
                            <button onClick={(e) => 
                            auth(e,
                                document.getElementById('login').value,
                                document.getElementById('password').value    
                            )}>Войти</button>
                        </form>
                        <span><p>Нет аккаунта? </p> <Link to={{pathname: '/regist'}}> Зарегистрироваться</Link></span>
                    </div>
                    <div className={classes.Vector}></div>
            </div>
        )
    }
}

export default Auth