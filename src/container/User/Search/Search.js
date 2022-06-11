import React, {Component} from 'react'
import classes from './Search.module.css'
import Header from '../../../component/Header/Header'

class Search extends Component{
    render(){
        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.profileContainer}>
                    <h1>Главная</h1>
                    <div className={classes.containerDown}>
                        
                            
                        </div>
                        <div className={classes.infoInp}>
                            
                        </div>
                    </div>
                </div>
        )
    }
}

export default Search