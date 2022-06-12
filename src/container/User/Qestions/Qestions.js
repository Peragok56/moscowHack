import React, {Component} from 'react'
import classes from './Qestions.module.css'

import avatar from './avatar.svg'
import Header from '../../../component/Header/Header'
import axios from '../../../axios/axios'


class Questions extends Component{
    constructor(props){
        super(props)
        this.state = {
            info: [],
        }
    }

    componentDidMount(){
        axios.get('/helpRequest/getList', {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            // this.setState({info: res.data})
        })
    }


    render(){

        

        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.bubble}/>
                <div className={classes.profileContainer}>
                <h1>Задания</h1>
                    <div className={classes.containerDown}>
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Questions