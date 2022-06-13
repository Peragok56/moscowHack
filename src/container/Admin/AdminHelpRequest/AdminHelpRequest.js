import React, {Component} from "react";
import axios from "../../../axios/axios";
import classes from './AdminHelpRequest.module.css'

class AdminHelpRequest extends Component{
    constructor(props){
        super(props)
        this.state = {
            specific: [],
            search: ''
        }
    }

    componentDidMount(){
        axios.get('/helpRequest/getListNoVerify', {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            // this.setState({specific: res.data.specifications})
        })
        .catch((err) => console.log(err))
    }

    render(){

        let removeSpec = (id) => {
            axios.delete(`/specification/remove?specificationId=${id}`, {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                axios.get('/specification/getList', {headers: {Authorization: localStorage.getItem('token')}})
                .then((res) => {
                    console.log(res);
                    this.setState({specific: res.data.specifications})
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        }

        let addSpec = () => {
            let title = document.getElementById('nameSpec').value
            console.log(title);

            axios.post('/specification/create', {name: title}, {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                document.getElementById('nameSpec').value = ''
                console.log(res);
                axios.get('/specification/getList', {headers: {Authorization: localStorage.getItem('token')}})
                .then((res) => {
                    console.log(res);
                    this.setState({specific: res.data.specifications})
                })
                .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
        }

        return(
            <div className={classes.App}>
                <div className={classes.Buble}/>
                <div style={{zIndex: 5, width: 450, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    <h1>Спецификации</h1>
                    <div className={classes.SpecList}>
                            <input type="text" onChange={event => {this.setState({search: event.target.value})}} placeholder='Что ищем?'/>
                        {this.state.search === '' ?
                            this.state.specific.map((item) => 
                            <div className={classes.Card}>
                                <h2 id="nameOrganization">{item.name}</h2>
                                <button onClick={() => removeSpec(item._id)}>Удалить</button>
                            </div>)
                             :
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        {this.state.specific.filter((val) => {
                                if (this.state.search === "") {
                                    return ''
                                } else if (val.name.toLowerCase().includes(this.state.search.toLowerCase())){
                                    return val
                                }
                            }).map((item) => 
                                <div className={classes.Card}>
                                    <h2>{item.name}</h2>
                                    <button onClick={() => removeSpec(item._id)}>Удалить</button>
                                </div>
                            )}
                        </div>
                        }
                            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 15}}>
                                <input placeholder="Введите название спецификации" id="nameSpec" className={classes.addInput}/>
                                <button className={classes.AddSpec} onClick={addSpec}>Добавить</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminHelpRequest