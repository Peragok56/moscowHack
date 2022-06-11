import React from 'react';
import classes from "./ListItem.module.css";

const ListItem = ({title, adress}) => {
    return (
        <div className={classes.main}>
            <div className={classes.info}>
                <div className={classes.info__title}>{title}</div>
                <div className={classes.info__adress}>{adress}</div>
            </div>
        </div>
    );
};

export default ListItem;