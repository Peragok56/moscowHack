import React, {Component} from 'react'
import classes from './MyRating.module.css'
import Header from '../../../component/Header/Header'
import loup from './loup.svg'
import RatingComponent from "../../../component/RatingComponent/RatingComponent";
import ratingCircle from './rating_circle.svg';
import myself from './myself.svg';



class MyRating extends Component{
    constructor(props){
        super(props)
        this.state = {
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
            adress: "Пр-кт Ленинский дом 56/2",
            cards: [
                {title: "Воробьев Савелий Игоревич", rating: "4.96", desc: "Отличный сервис. Очень помог в нужную минуту!"},
                {title: "Василий Игорь Александрович", rating: "4.99", desc: "Восторг. Приложение просто замечательное!"},
                {title: "Осколкин Евгений Артемович", rating: "5.00", desc: "Спасибо большое, не знаю, что бы я без вас делал)"},
                {title: "Григорий Глеб Никитович", rating: "4.98", desc: "Огонь!"},

            ],
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
                <div className={classes.profileContainer}>
                    <h1>Мой рейтинг</h1>
                    <div className={classes.containerDown}>
                        <div className={classes.main}>
                            <div className={classes.col}>
                                <div className={classes.col__title}>
                                    Отзывы
                                </div>
                                {this.state.cards.map((item) => <RatingComponent title={item.title} rating={item.rating} desc={item.desc}/> )
                                }

                            </div>
                            <div className={classes.col}>
                                <div className={classes.col__title}>
                                    Отзывы
                                </div>
                                <div className={classes.double}>
                                    <div className={classes.double__col}>
                                        <img src={ratingCircle} alt=""/>
                                        <div className={classes.rt__text}>Ваши баллы</div>
                                    </div>
                                    <div className={classes.double__col}>
                                        Баллы формируются за<br/>счёт выполненной работы<br/>волонтёром в какой-либо отрасли. Помогайте<br/>большему количеству<br/>людей, чтобы заработать<br/>баллы.
                                    </div>
                                </div>
                                <hr className={classes.line}/>
                                <div className={classes.static__title}>
                                    Статистика
                                </div>
                                <div className={classes.exp}>
                                    Вы были волантёром уже: 42 разa
                                </div>
                                <div className={classes.exp}>
                                    Ваши часы: 76.5 часов
                                </div>
                                <img src={myself} alt=""/>
                                <div className={classes.static__title}>
                                    Продолжайте в том же духе ! :)
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MyRating;