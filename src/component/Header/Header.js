import {Component} from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'

import Exit from './exit.svg'

class Header extends Component{
    render(){

        const exit = () => {
            localStorage.clear()
            window.location.pathname = '/'
        }

        return(
            <div className={classes.Header}>
                <Link style={{textDecoration: 'none'}} to='/mainTask'>
                    <h1 style={{color: 'grey'}}>PROGRESS.<span style={{color: '#336BD8'}}>IO</span></h1>
                </Link>
                <div className={classes.Login}>
                    <h1>{localStorage.getItem('name')}</h1>
                    <button onClick={() => exit()}>
                        <img src={Exit}/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header