import React, { Component } from "react";
import classes from './AddTask.module.css'
import { Link } from "react-router-dom";
import {auth} from '../../../store/auth'
import Vector from './Vector.svg'
import axios from "../../../axios/axios";
import Modal from "../../../component/Modal/Modal";


class AddTask extends Component{
    constructor(props){
        super(props)
        this.state = {
            specifications: [],
            select: [],
            modalVisible: false,
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

        let send = (e) => {
            e.preventDefault()
            let title = document.getElementById('title').value
            let description = document.getElementById('description').value
            let address = document.getElementById('address').value
            let datefrom = document.getElementById('dateFrom').value
            let dateTo = document.getElementById('dateTo').value
            let select = document.getElementById('select').value
            let ageFrom = document.getElementById('ageFrom').value
            let ageTo = document.getElementById('ageTo').value
            let addSkil = document.getElementById('additionalSkills').value

            axios.post('/helpRequest/create', 
            {title: title, description: description, dateTime: {from: datefrom, to: dateTo}, address: address, specificationsIds: this.state.select, isOnline: select, ageCategory: {from: ageFrom, to: ageTo}, additionalSkills: addSkil},
            {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

        }
        const showModal = () => {
            this.setState({modalVisible: true});
        }

        const hide = (e) => {
            e.preventDefault();
            this.setState({modalVisible: false});
        }


        return(
            <div className={classes.Auth}>
                <div className={classes.Buble}>
                </div>
                    <div className={classes.authForm}>
                        <h1>Добавление задачи</h1>
                        <form>
                            <input placeholder="Название" type='text' id="title"/>
                            <input placeholder="Описание" type='text' id="description"/>
                            <input placeholder="Адрес" type='text' id="address"/>
                            <h1 style={{color: 'rgb(0, 34, 121)'}}>Временные промежутки</h1>
                            <div className={classes.ageCateg}>
                                <input placeholder="От" type='date' id="dateFrom"/>
                                <input placeholder="До" type='date' id='dateTo'/>
                            </div>
                            <h1 onClick={showModal} style={{color: '#002279', cursor: "pointer"}}> Добавить направления</h1>
                            <Modal visible={this.state.modalVisible}>
                                <div className={classes.main__modal}>
                                    {this.state.specifications.map((item) =>
                                        <h3 onClick={() => addSelect(item._id, item)} className={classes.li_it}>{item.name}</h3>
                                    )}
                                </div>
                                <button className={classes.ready} onClick={hide}>Готово</button>

                            </Modal>
                            {this.state.select.map((item) =>
                                <h3>{item.name}</h3>
                            )}

                            <h1 style={{color: 'rgb(0, 34, 121)'}}>Тип задачи</h1>
                            <select id="select">
                                <option value={true}>Онлайн</option>
                                <option value={false}>Не онлайн</option>
                            </select>
                            <h1 style={{color: 'rgb(0, 34, 121)'}}>Возрастные категории</h1>
                            <div className={classes.ageCateg}>
                                <input placeholder="От" type='number'min="14" value='14' id="ageFrom"/>
                                <input placeholder="До" type='number' max='65' value='65' id='ageTo'/>
                            </div>
                            <h1 style={{color: 'rgb(0, 34, 121)'}}>Дополнительные навыки</h1>
                            <input placeholder="Дополнительные навыки" type='text' id="additionalSkills"/>

                            <button onClick={send}>Добавить</button>
                        </form>
                    </div>
                    <div className={classes.Vector}></div>
            </div>
        )
    }
}

export default AddTask