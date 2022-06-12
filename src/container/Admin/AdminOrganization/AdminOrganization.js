import React, {Component} from "react";
import axios from "../../../axios/axios";
import classes from './AdminOrganization.module.css'
import {Link} from 'react-router-dom'

class AdminOrganization extends Component{
    constructor(props){
        super(props)
        this.state = {
            organization: [],
            search: '',
            isLoaded: true,
        }
    }

    componentDidMount(){
        axios.get('/organization/getListNoVerify', {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                this.setState({organization: res.data.organization})
                console.log(this.state.organization)
                this.setState({isLoaded: false})
            })
            .catch((err) => console.log(err))
    }

    render(){
        let addOrganization = (_id) => {
            console.log(_id)
            axios.patch(`/organization/accept?organizationId=${_id}`, {organizationId: _id}, {headers: {Authorization: localStorage.getItem('token')}})
                .then((res) => {
                    console.log(res);
                    axios.get('/organization/getListNoVerify', {headers: {Authorization: localStorage.getItem('token')}})
                        .then((res) => {
                            console.log(res);
                            this.setState({organization: res.data.organization})
                        })
                        .catch((err) => console.log(err))
                })
                .catch((err) => console.log(err))
        }


        return(
            <div className={classes.App}>
                    <h1>Организации</h1>
                    <div className={classes.SpecList}>
                        <input type="text" onChange={event => {this.setState({search: event.target.value})}} placeholder='Что ищем?'/>
                        {this.state.search === '' ?
                            this.state.organization.map((item) =>
                                <div id="listitem" className={classes.Card} key={item._id}>
                                    <h2>{item.title}</h2>
                                    <button onClick={() => addOrganization(item._id)}>Одобрить</button>
                                </div>)
                            :
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                {this.state.organization.filter((val) => {
                                    if (this.state.search === "") {
                                        return ''
                                    } else if (val.title.toLowerCase().includes(this.state.search.toLowerCase())){
                                        return val
                                    }
                                }).map((item) =>
                                    <div className={classes.Card}>
                                        <h2>{item.title}</h2>
                                        <button onClick={() => addOrganization(item._id)}>Одобрить</button>
                                    </div>
                                )}
                            </div>
                        }
                        {this.state.organization.length === 0
                            ?<h1>Заявок на одобрение нет!</h1>
                            :<div></div>
                        }
                    </div>

            </div>
        )
    }
}

export default AdminOrganization