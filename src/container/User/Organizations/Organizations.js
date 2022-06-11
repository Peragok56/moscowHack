import React, {Component} from 'react'
import classes from './Organizations.module.css'

import avatar from './avatar.svg'
import Header from '../../../component/Header/Header'
import axios from '../../../axios/axios'


class Organizations extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
        axios.get('/organization/getList', {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    render(){

        

        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.bubble}/>
                <div className={classes.profileContainer}>
                    <h1>Организации</h1>

                    <div className={classes.containerDown}>
                        
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Organizations