import React, { Component } from "react";
import classes from './Regist.module.css'
import { Link } from "react-router-dom";
import axios from '../../../axios/axios'
import Swal from "sweetalert2";


class Regist extends Component{
    render(){

        const registration = (e) => {
            e.preventDefault()
            let name = document.getElementById('name').value
            let fname = document.getElementById('fname').value
            let email = document.getElementById('email').value
            let password = document.getElementById('password').value

            axios.post('/account/register', {firstName: name, lastName: fname, email: email, password: password})
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Отлично',
                    text: 'Успешная регистрация!',
                  })
                  .then((result) => {if (result.isConfirmed) {
                    window.location.href='/auth'
                  }})
            })
            .catch((e) => {
                console.log(e);
            })
        }

        return(
            <div className={classes.Auth}>
                <div className={classes.Card}>
                    <div style={{display: 'flex', flexWrap: 'wrap', width: '40%', textAlign: 'center', color: 'white'}}>
                        <h1 style={{width: '100%', color: 'white', fontSize: 64, marginBottom: 25}}>Регистрация</h1>
                        <p style={{width: '100%', color: 'white', fontSize: 24}}>Привет!</p>
                        <p style={{width: '100%', color: 'white', fontSize: 24}}>Будем знакомиться :)</p>
                    </div>
                </div>
                <div className={classes.authForm}>
                    <form>
                        <h1>Личные данные</h1>
                        <h2>Имя</h2>
                        <input type='text' id="name"/>
                        <h2>Фамилия</h2>
                        <input type='text' id="fname"/>
                        <h2>Почта</h2>
                        <input type='email' id="email"/>
                        <h2>Пароль</h2>
                        <input type='password' id="password"/>
                        <button onClick={registration}>Регистрация</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Regist