import React, { Component } from "react";
import classes from './AddTask.module.css'
import { Link } from "react-router-dom";
import {auth} from '../../../store/auth'
import Vector from './Vector.svg'
import axios from "../../../axios/axios";


class AddTask extends Component{
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

        let addSelect = (id, itm) => {
            let state = this.state.select
            let select = state.push(id)
            console.log(this.state.select);
        }


        return(
            <div className={classes.Auth}>
                <div className={classes.Buble}>
                </div>
                    <div className={classes.authForm}>
                        <h1>Добавления задачи</h1>
                        <form>
                            <input placeholder="Название" type='text' id="title"/>
                            <input placeholder="Описание" type='text' id="description"/>
                            <input placeholder="Дата" type='date' id="dateTimr"/>
                            <input placeholder="address" type='text' id="address"/>
                            <h1>Направления: </h1>
                                {this.state.specifications.map((item) => 
                                    <h3 onClick={() => addSelect(item._id, item)} className='nameItem'>{item.name}</h3>
                                )}   
                            <button>Добавить</button>
                        </form>
                    </div>
                    <div className={classes.Vector}></div>
            </div>
        )
    }
}

export default AddTask