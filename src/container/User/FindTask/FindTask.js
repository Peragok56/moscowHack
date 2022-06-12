import React, {Component} from 'react'
import classes from './FindTask.module.css'
import Header from '../../../component/Header/Header'
import preview from './help_preview.svg'
import ListItem from "../../../component/ListItem/ListItem";
import loup from './loup.svg'

class Main extends Component{
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
            adress: "Пр-кт Ленинский дом 56/2"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoaded: false})
        }, 1000)
    }


    render(){
        const openMore = () => {
            window.location.pathname = '/help'
        }

        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.Buble}/>
                <div className={classes.profileContainer}>
                    <h1>Найти задание</h1>
                    <div className={classes.containerDown}>
                        {this.state.isLoaded?
                            <div className={classes.loader}>Loading...</div>:
                            <React.Fragment>
                                <div className={classes.first__line}>
                                    <div className={classes.inp__container}>
                                        <img className={classes.img} src={loup} alt=""/>
                                        <input className={classes.search__field}
                                               type="text"
                                               value={this.state.searchValue}
                                               onChange={e => this.state.setState({searchValue: e.target.value})}
                                        />
                                    </div>



                                    <select className={classes.dropdown__menu}>
                                        <option disabled value="">Сортировка</option>
                                        <option value="">По названию</option>
                                        <option value="">По описанию</option>
                                    </select>
                                </div>
                                <div className={classes.first__line}>
                                    <input className={classes.dropdown__menu}
                                           type="text"
                                           value={this.state.date}
                                           onChange={e => this.state.setState({date: e.target.value})}
                                    />
                                    <input className={classes.dropdown__menu}
                                           type="text"
                                           value={this.state.adress}
                                           onChange={e => this.state.setState({adress: e.target.value})}
                                    />

                                </div>
                                <div >


                                </div>
                                <div className={classes.list__block}>
                                    {
                                        this.state.posts.map((item) => <ListItem onClick={openMore} title={item.title} adress={item.adress}/>)
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

export default Main;