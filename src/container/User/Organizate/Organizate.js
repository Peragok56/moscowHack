import React, { Component } from "react";
import classes from './Organizate.module.css'
import { Link } from "react-router-dom";
import axios from "../../../axios/axios";


class Organization extends Component{
    constructor(props){
        super(props)
        this.state = {
            specifications: [],
            select: []
        }
    }

    componentDidMount(){
        axios.get('/specification/getList', {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            this.setState({specifications: res.data.specifications})
        })
    }

    render(){

        let addSelect = (id) => {
            let state = this.state.select
            let select = state.push(id)
            console.log(this.state.select);
        }

        let create = (e) => {
            e.preventDefault()
            let select = document.getElementById('select').value
            let title = document.getElementById('title').value
            let addres = document.getElementById('address').value

            axios.post('/organization/create', {title: title, isCommerical: select, address: addres, specifications: this.state.select}, {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        }

        return(
            <div className={classes.Auth}>
                <div className={classes.Buble}>
                </div>
                    <div className={classes.authForm}>
                        <h1>Стать организатором</h1>
                        <form>
                            <input placeholder="Название" type='text' id="title"/>
                            <select id="select">
                                <option value={true}>Комерческая</option>
                                <option value={false}>Не комерческая</option>
                            </select>
                            <input placeholder="Введите адрес" type='text' id='address'/>
                            <div className={classes.SecList}>
                                <h1>Направления: </h1>
                                {this.state.specifications.map((item) => 
                                    <h3 onClick={() => addSelect(item._id)}>{item.name}</h3>
                                )}
                            </div>
                            <button onClick={create}>Стать организатором</button>
                        </form>
                    </div>
                    <div className={classes.Vector}></div>
            </div>
        )
    }
}

export default Organization