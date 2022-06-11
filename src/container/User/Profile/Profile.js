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
        }
    }

    componentDidMount(){
        axios.get(`account/getInfoById?accountId=${localStorage.getItem('accountId')}`, {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res)
            this.setState({info: res.data.account})
            this.setState({firstName: res.data.account.firstName})
            this.setState({lastName: res.data.account.lastName})
            this.setState({id: res.data.role.id})
            this.setState({roleName: res.data.role.name})
            this.setState({email: res.data.account.email})
        })
        .catch((err) => console.log(err))
    }

    render(){

        let edit = () => {
            
        }

        return(
            <div className={classes.App}>
                <Header />
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


                            <h1>Район</h1>
                            <input />

                            <h1>Личная информация</h1>
                            <textarea />

                            <h1>Направления</h1>
                            

                            <h1>Телефон</h1>
                            <input />
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile