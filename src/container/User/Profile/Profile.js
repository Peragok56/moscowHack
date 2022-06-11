import React, {Component} from 'react'
import classes from './Profile.module.css'

import avatar from './avatar.svg'
import Header from '../../../component/Header/Header'
import axios from '../../../axios/axios'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            info: [],
            firstName: '',
            lastName: '',
            id: '',
            roleName: '',
            email: '',
            dateBorn: '',
            isLoad: false,
            phoneNumber: '',
        }
    }

    componentDidMount(){
        axios.get(`account/getInfoById?accountId=${localStorage.getItem('accountId')}`, {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res)
            this.setState({firstName: res.data.account.firstName})
            this.setState({lastName: res.data.account.lastName})
            this.setState({email: res.data.account.email})
            this.setState({dateBorn: res.data.account.dateBorn})

        })
        .catch((err) => console.log(err))
    }

    render(){

        let edit = () => {
            axios.patch('/account/edit', {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dateBorn: this.state.dateBorn, phone: this.state.phoneNumber}, {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                axios.get(`account/getInfoById?accountId=${localStorage.getItem('accountId')}`, {headers: {Authorization: localStorage.getItem('token')}})
                .then((res) => {
                    console.log(res)
                    this.setState({firstName: res.data.account.firstName})
                    this.setState({lastName: res.data.account.lastName})
                    this.setState({email: res.data.account.email})
                    this.setState({dateBorn: res.data.account.dateBorn})

                })
                .catch((err) => console.log(err))
            })
            .catch((err) => {
                console.log(err);
            })
        }

        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.bubble}/>
                <div className={classes.profileContainer}>
                    <h1>Редактирование профиля</h1>
                    <div className={classes.containerDown}>
                        <img src={avatar} style={{width: 200, marginBottom: 20}}/>
                        <div className={classes.infoInp}>
                            <h1>Имя</h1>
                            <input 
                            value={this.state.firstName}
                            onChange={(e) => this.setState({firstName: e.target.value})}
                            />

                            <h1>Фамилия</h1>
                            <input 
                            value={this.state.lastName}
                            onChange={(e) => this.setState({lastName: e.target.value})}
                            />

                            <h1>Почта</h1>
                            <input 
                            value={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})}
                            />


                            <h1>Дата рождения</h1>
                            <input value={this.state.dateBorn} type="date"
                            onChange={(e) => this.setState({dateBorn: e.target.value})}/>

                            <h1>Номер телефона</h1>
                            <input value={this.state.phoneNumber}
                            onChange={(e) => this.setState({phoneNumber: e.target.value})}/>

                            <button className={classes.Save} onClick={edit}>Сохранить</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile