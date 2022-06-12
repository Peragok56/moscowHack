import React, {Component} from 'react'
import classes from './Qestions.module.css'

import avatar from './avatar.svg'
import Header from '../../../component/Header/Header'
import axios from '../../../axios/axios'
import loup from "./loup.svg";
import ListItem from "../../../component/ListItem/ListItem";


class Questions extends Component{
    constructor(props){
        super(props)
        this.state = {
            info: [],
            posts: [
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
            ],
            isLoaded: true,
            searchValue: "",
            date: "12.12.2022",
            adress: "Пр-кт Ленинский дом 56/2"
        }
    }

    componentDidMount(){

        axios.get('/helpRequest/getList', {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            this.setState({info: res.data.helpRequests})
            console.log(this.state.info)

        })
        this.setState({isLoaded: false})
    }


    render(){

        

        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.bubble}/>
                <div className={classes.profileContainer}>
                <h1>Задания</h1>
                    <div className={classes.containerDown}>
                        {this.state.isLoaded?
                            <div className={classes.loader}>Loading...</div>:
                            <React.Fragment>

                                <div >


                                </div>
                                <div className={classes.list__block}>
                                    {
                                        this.state.info.map((item) => <ListItem  title={item.title} adress={item.address}/>)
                                    }
                                </div>
                            </React.Fragment>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Questions