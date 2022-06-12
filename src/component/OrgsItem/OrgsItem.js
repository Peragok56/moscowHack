import React from 'react';
import classes from './OrgsItem.module.css';
import photo from "../PersonItem/photo.svg";
import star from "../PersonItem/star.svg";
import geo from "../PersonItem/geo.svg";

const OrgsItem = ({title, adress}) => {
    return (
        <div className={classes.main}>
            <div className={classes.photo}>
                <img clas src={photo} alt="profile photo"/>
            </div>
            <div className={classes.info}>
                <div className={classes.info__name}><img className={classes.star} src={star} alt="star"/> {title}</div>
                <div className={classes.info__rating}><img className={classes.star} src={geo} alt="geo"/> 4.95</div>
                <div className={classes.info__adress}>{adress}</div>
                <div className={classes.btns__container}>
                    <button className={classes.btn}>Написать</button>
                    <button className={classes.btn}>Хочу помочь</button>
                </div>

            </div>

        </div>
    );
};

export default OrgsItem;