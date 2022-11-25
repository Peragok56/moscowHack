import React, { Component } from "react";
import classes from './Organizate.module.css'
import { Link } from "react-router-dom";
import axios from "../../../axios/axios";
import Modal from "../../../component/Modal/Modal";


class Organization extends Component{
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

        let create = (e) => {
            e.preventDefault()
            let select = document.getElementById('select').value
            let title = document.getElementById('title').value
            let addres = document.getElementById('address').value

            axios.post('/organization/create', {title: title, isCommerical: select, address: addres, specifications: this.state.select}, {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                window.location.pathname='/main'
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
                        <h1>Стать организатором</h1>
                        <form>
                            <input placeholder="Название" type='text' id="title"/>
                            <select id="select">
                                <option value={true}>Комерческая</option>
                                <option value={false}>Не комерческая</option>
                            </select>
                            <input placeholder="Введите адрес" type='text' id='address'/>
                            <div>
                            </div>

                            <div className={classes.SecList}>
                                <h1 onClick={showModal} style={{cursor: "pointer"}}>Добавить направление</h1>
                                <Modal visible={this.state.modalVisible}>
                                    <div className={classes.main__modal}>
                                        {this.state.specifications.map((item) =>
                                            <h3 className={classes.li_it} onClick={() => addSelect(item._id)}>{item.name}</h3>
                                        )}
                                    </div>
                                    <button className={classes.ready} onClick={hide}>Готово</button>

                                </Modal>
                                {this.state.select.map((item) =>
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