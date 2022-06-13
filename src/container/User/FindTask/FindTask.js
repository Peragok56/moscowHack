import React, {Component} from 'react'
import classes from './FindTask.module.css'
import Header from '../../../component/Header/Header'
import preview from './help_preview.svg'
import ListItem from "../../../component/ListItem/ListItem";
import loup from './loup.svg'
import axios from "../../../axios/axios";
import { Link } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            info : [],
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
        axios.get('/helpRequest/getList', {headers: {Authorization: localStorage.getItem('token')}})
            .then((res) => {
                console.log(res);
                this.setState({info: res.data.helpRequests})
                console.log(this.state.info)

            })
        this.setState({isLoaded: false})
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
                                    <div className={classes.inp__container} style={{width: '75%'}}>
                                        <img className={classes.img} src={loup} alt=""/>
                                        <input className={classes.search__field}
                                               type="text"
                                               onChange={(e) => this.setState({searchValue: e.target.value})}
                                        />
                                        
                                    </div>



                                    <select className={classes.dropdown__menu} style={{width: '30%'}}>
                                        <option value="">Сортировка</option>
                                        <option value="">По названию</option>
                                        <option value="">По описанию</option>
                                    </select>
                                </div>
                                <div className={classes.first__line}>
                                    <input className={classes.dropdown__menu}
                                           type="date"
                                           style={{width: 275}}
                                    />
                                    <input className={classes.dropdown__menu}
                                           type="text"
                                           placeholder='Адрес'
                                           onChange={e => this.state.setState({adress: e.target.value})}
                                    />

                                </div>
                                <div >


                                </div>
                                <div className={classes.list__block}>
                                {
                                    this.state.info.filter((item) => {
                                        
                                        if (
                                            (this.state.searchValue === "") ||
                                            (this.state.searchValue !== "" && item.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1 )
                                        ) {
                                            {console.log(item)}
                                            return <React.Fragment>
                                                <Link to={{pathname: '/help', state:{title: item.title, description: item.description, id: item._id}}}>
                                                    <ListItem onClick={openMore} title={item.title} adress={item.address}/>
                                                </Link>
                                            </React.Fragment>
                                        }
                                    }).map((item) =>
                                        <Link to={{pathname: '/help', state:{title: item.title, description: item.description, id: item._id}}}>
                                            <ListItem onClick={openMore} title={item.title} adress={item.address}/>
                                        </Link>
                                    )}
                                    {/* {
                                        this.state.info.map((item) => 
                                            <React.Fragment>
                                                {console.log(item)}
                                                <Link to={{pathname: '/help', state:{title: item.title, description: item.description, id: item._id}}}>
                                                    <ListItem onClick={openMore} title={item.title} adress={item.address}/>
                                                </Link>
                                            </React.Fragment>
                                        )
                                    } */}
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