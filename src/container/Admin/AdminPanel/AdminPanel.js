import React, {Component} from "react";
import classes from './AdminPanel.module.css'
import {Link} from 'react-router-dom'

class AdminPanel extends Component{
    render(){
        return(
        <div className={classes.App}>
            <div className={classes.Buble}></div>
            <div className={classes.card}>
                <h1>Админ-панель</h1>
                <div className={classes.LinkList}>
                    <Link to={{pathname: '/adminSpecification'}}>Настройка спецификаций</Link>
                    <Link>Модерация пользователей</Link>
                    <Link to={{pathname: '/adminOrganization'}}>Список не подтвержденных организаций</Link>
                    <Link to={{pathname: '/adminHelpRequest'}}>Список заданий</Link>
                </div>
            </div>
            <div className={classes.Vector}></div>
        </div>
        )
    }
}

export default AdminPanel