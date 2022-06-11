import {Component} from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'

import avatar from './avatar.svg'
import Exit from './exit.svg'

class Header extends Component{
    render(){

        const exit = () => {
            localStorage.clear()
            window.location.pathname = '/'
        }

        return(
            <div className={classes.Header}>
                <div className={classes.HeaderUp}>
                    <Link style={{textDecoration: 'none'}} to='/profile'>
                        <img src={avatar}/>
                    </Link>
                    <h1>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h1>
                </div>
            
                <div className={classes.navLink}>
                    <Link to='/main'>Главная</Link>
                    <Link>Найти задание</Link>
                    <Link>Волонтёры</Link>
                    <Link>Организаторы</Link>
                    <Link>Проекты</Link>
                </div>
            </div>
        )
    }
}

export default Header