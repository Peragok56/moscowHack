import {Component} from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'

import avatar from './avatar.svg'
import Exit from './exit.svg'

import king from './king.svg'
import heart from './heart.svg'
import home from './home.svg'
import organization from './organization.svg'
import project from './project.svg'
import search from './search.svg'
import thumbs from './thumbs.svg'

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
                    <Link to={{pathname: '/main'}} className={classes.Link}><span><img src={home}/></span> <p>Главная</p></Link>
                    <Link to={{pathname: '/findtask'}} className={classes.Link}><span><img src={search}/></span> <p>Найти задание</p></Link>
                    <Link to={{pathname: '/volounteers'}} className={classes.Link}><span><img src={heart}/></span> <p>Волонтёры</p></Link>
                    <Link className={classes.Link} to={{pathname: '/organizations'}}><span><img src={organization}/></span> <p>Организаторы</p></Link>
                    <Link className={classes.Link}><span><img src={project}/></span> <p>Проекты</p></Link>
                    <Link className={classes.Link} to={{pathname: '/organization'}}><span><img src={king}/></span> <p>Стать организатором</p></Link>
                </div>
            </div>
        )
    }
}

export default Header