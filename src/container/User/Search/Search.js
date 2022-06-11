import React, {Component} from 'react'
import classes from './Search.module.css'

class Search extends Component{
    render(){
        return(
            <div className={classes.App}>
                <Header />
                <div className={classes.profileContainer}>
                    <h1>Главная</h1>
                    <div className={classes.containerDown}>
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
                        <div className={classes.infoInp}>
                            {this.state.article.length === 0 ?
                                <h1>Статей нету</h1> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search