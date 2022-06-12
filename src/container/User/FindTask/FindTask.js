import React, {Component} from 'react'
import classes from './FindTask.module.css'
import Header from '../../../component/Header/Header'
import preview from './help_preview.svg'
import ListItem from "../../../component/ListItem/ListItem";


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            same: [
                {title: "Помощь бездомным животным", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Пункт приёма крови", adress: "Пр-кт Ленинский дом 56/2"},
                {title: "Отбор волонтёров", adress: "Пр-кт Ленинский дом 56/2"},
            ],
            isLoaded: true,
            searchValue: "",
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
                    <h1>Найти задание</h1>
                    <div className={classes.containerDown}>
                        {this.state.isLoaded?
                            <div className={classes.loader}>Loading...</div>:
                            <React.Fragment>
                                <div className={classes.first__line}>


                                        <input className={classes.search__field}
                                               type="text"
                                               value={this.state.value}
                                               onChange={e => this.state.setState({searchValue: e.target.value})}
                                        />


                                    <select className={classes.dropdown__menu}>
                                        <option disabled value="">Сортировка</option>
                                        <option value="">По названию</option>
                                        <option value="">По описанию</option>
                                    </select>
                                </div>
                                <div className={classes.containerDown}>
                                    <div className={classes.first__line}>
                                        <input className={classes.search__field}
                                               type="text"
                                               value={this.state.value}
                                               onChange={e => this.state.setState({searchValue: e.target.value})}
                                        />

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