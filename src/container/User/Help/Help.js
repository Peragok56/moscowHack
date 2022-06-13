import React, {Component} from 'react'
import classes from './Help.module.css'
import Header from '../../../component/Header/Header'
import preview from './help_preview.svg'
import ListItem from "../../../component/ListItem/ListItem";
import axios from '../../../axios/axios';


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            same: [
                {title: "Пункт приёма крови", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Пункт приёма крови", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Пункт приёма крови", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Пункт приёма крови", adress: "Пр-кт Ленинский дом 56/2"},
            ],
            info:[],
            isLoaded: true,
        }
    }

    componentDidMount() {
        console.log(this.props.location.state.id);
        axios.get(`/helpRequest/getInfo?helpRequestId=${this.props.location.state.id}`, {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            this.setState({info: res.data.healpRequest})
            this.setState({isLoaded: false})
            
        })
    }


    render(){
        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.Buble}/>
                <div className={classes.profileContainer}>
                    <h1>Главная</h1>
                    <div className={classes.containerDown}>
                        {this.state.isLoaded?
                            <div className={classes.loader}>Loading...</div>
                            : <React.Fragment>
                                <div className={classes.container}>
                                    <div className={classes.columnone}>
                                        <img src={preview} alt="Preview"/>
                                    </div>
                                    <div className={classes.columnone}>
                                        <div className={classes.info__title}>Основная информация</div>
                                        <div className={classes.info__block}>
                                            Организация:Минестрество добрых дел<br/>
                                            Дата:24 - 26 Июня 2022, 10:00 - 19:30<br/>
                                            Район:Пр-кт Ленинский
                                        </div>
                                        <div className={classes.info__title}>Описание</div>
                                        <div className={classes.info__block}>
                                            {this.props.location.state.description}
                                        </div>
                                        <div className={classes.btns}>
                                            <button className={classes.btn}>Написать</button>
                                            <button className={classes.btn}>Хочу помочь</button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>

                        }

                    </div>
                    <h1>Похожие задачи</h1>
                    <div className={classes.containerDown}>
                        <div className={classes.container}>
                            {this.state.isLoaded
                                ?<div className={classes.loader}>Loading...</div>
                                :<div className={classes.same__posts}>
                                    {this.state.same.map(post => <ListItem title={post.title} adress={post.adress}/>)}
                                </div>

                            }
                        </div>
                        <div className={classes.buttons}>
                            <button className={classes.show__more}>Показать</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;