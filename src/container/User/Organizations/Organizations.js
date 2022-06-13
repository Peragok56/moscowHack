import React, {Component} from 'react'
import classes from './Organizations.module.css'

import avatar from './avatar.svg'
import Header from '../../../component/Header/Header'
import axios from '../../../axios/axios'
import loup from "../Volounteers/loup.svg";
import PersonItem from "../../../component/PersonItem/PersonItem";
import OrgsItem from "../../../component/OrgsItem/OrgsItem";


class Organizations extends Component{
    constructor(props){
        super(props)
        this.state = {
            organizations: [],
            isLoaded: true,
        }
    }

    componentDidMount(){
        axios.get('/organization/getList', {headers: {Authorization: localStorage.getItem('token')}})
        .then((res) => {
            console.log(res);
            this.setState({organizations: res.data.organization})
            console.log(this.state.organizations)
        })
        .catch((err) => {
            console.log(err);
        })
        setTimeout(() => {
            this.setState({isLoaded: false});
        }, 1000)

    }


    render(){

        

        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.bubble}/>
                <div className={classes.profileContainer}>
                    <h1>Организаторы</h1>

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
                                <div >


                                </div>
                                <div className={classes.list__block}>
                                    {
                                        this.state.organizations.map((item) => <OrgsItem title={item.title} adress={item.adress}/>)
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

export default Organizations