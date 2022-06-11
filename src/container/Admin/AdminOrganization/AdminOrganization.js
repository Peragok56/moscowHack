import React, {Component} from "react";
import axios from "../../../axios/axios";
import classes from './AdminOrganization.module.css'
import {Link} from 'react-router-dom'

class AdminOrganization extends Component{
    constructor(props){
        super(props)
        this.state = {
            organization: [],
            search: ''
        }
    }

    componentDidMount(){
        axios.get('/organization/getList', {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                this.setState({organization: res.data.organization})
                console.log(this.state.organization)
            })
            .catch((err) => console.log(err))
    }

    render(){

        return(
            <div className={classes.App}>
                    <h1>Организации</h1>
                    <div className={classes.SpecList}>
                        <input type="text" onChange={event => {this.setState({search: event.target.value})}} placeholder='Что ищем?'/>
                        {this.state.search === '' ?
                            this.state.organization.map((item) =>
                                <div className={classes.Card}>
                                    <h2>{item.title}</h2>
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
                                    </div>
                                )}
                            </div>
                        }
                    </div>

            </div>
        )
    }
}

export default AdminOrganization