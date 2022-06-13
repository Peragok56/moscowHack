import React, {Component} from 'react'
import classes from './Main.module.css'
import Header from '../../../component/Header/Header'
import {Link} from 'react-router-dom'

import search from './search.svg'
import direactive from "./direactives.svg"
import rating from "./rating.svg"
import star from './start.svg'
import ListItem from "../../../component/ListItem/ListItem";


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            recomendations: [
                {title: "Помощь бездомным животным", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Пункт приёма крови", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
            ],
            events : [
                {title: "Помощь бездомным животным", adress: "Пр-кт Ленинский дом 56/2"},
            ],
            tasks: [
                {title: "Помощь бездомным животным", adress: "Пр-кт Ленинский дом 56/2"},
            ],
            isLoaded: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoaded: false})
        }, 1000)
    }

    render(){
        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.Buble}/>
                <div className={classes.profileContainer}>
                    <div className={classes.UpBlockWLink}>
                        <h1>Главная</h1>
                        <Link to={{pathname: '/addTask'}}>Добавить задачу</Link>
                    </div>
                    <div className={classes.containerDown}>
                        {this.state.isLoaded?
                            <div className={classes.loader}>Loading...</div>
                            :
                            <React.Fragment>
                                <div className={classes.col__blocks}>
                                    <div className={classes.Block}>
                                        <div style={{display: 'flex'}}>
                                            <img src={search}/>
                                            <div style={{marginLeft: 15}}>
                                                <h1>Найти задачу</h1>
                                                <h2>По вашим тегам</h2>
                                            </div>
                                        </div>
                                        <div className={classes.ButtonList}>
                                            <button>Животные</button>
                                            <button>Здравоохронение</button>
                                            <button>Здравоохронение</button>
                                            <button>Другое</button>
                                        </div>
                                    </div>
                                    <div className={classes.Block}>
                                        <div style={{display: 'flex'}}>
                                            <img className={classes.block__img} src={direactive}/>
                                            <div style={{marginLeft: 15}}>
                                                <h1>Интересные проекты</h1>
                                                <h2>По направлениям</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.Block}>
                                        <div style={{display: 'flex'}}>
                                            <img className={classes.block__img__rating} src={rating}/>
                                            <div style={{marginLeft: 15}}>
                                                <h1>Ваш рейтинг помощи</h1>
                                                <h2>Ты молодец :)</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.col__blocks}>
                                    <div className={classes.infoInp}>
                                        {this.state.recomendations.length === 0
                                            ?
                                            <h1>Статей нет</h1>
                                            :
                                            <div className={classes.lists}>
                                                <h2 className={classes.list__title}>Рекомендованные</h2>
                                                {this.state.recomendations.map(post =>
                                                    <ListItem title={post.title} adress={post.adress}/>
                                                )}
                                                <button className={classes.show__more}>
                                                    Показать
                                                </button>
                                            </div>
                                        }
                                    </div>
                                    <div className={classes.infoInp}>
                                        {this.state.events.length === 0
                                            ?
                                            <h1>Статей нету</h1>
                                            :
                                            <div>
                                                <h2 style={{marginTop: 20}} className={classes.list__title}>Мероприятия</h2>
                                                {this.state.events.map(post =>
                                                    <ListItem title={post.title} adress={post.adress}/>
                                                )}
                                                <button className={classes.show__more}>
                                                    Показать
                                                </button>
                                            </div>
                                        }
                                    </div>
                                    <div className={classes.infoInp}>
                                        {this.state.tasks.length === 0
                                            ?
                                            <h1>Статей нету</h1>
                                            :
                                            <div>
                                                <h2 style={{marginTop: 20}} className={classes.list__title}>Ваши задачи</h2>
                                                {this.state.tasks.map(post =>
                                                    <ListItem title={post.title} adress={post.adress}/>
                                                )}
                                                <button className={classes.show__more}>
                                                    Показать
                                                </button>
                                            </div>
                                        }
                                    </div>

                                </div>
                            </React.Fragment>
                        }


                    </div>
                </div>
            </div>
        )
    }
}

export default Main;