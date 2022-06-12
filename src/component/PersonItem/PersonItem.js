import React from 'react';
import classes from "./PersonItem.module.css";
import photo from "./photo.svg";
import star from './star.svg';
import geo from './geo.svg';

const PersonItem = () => {
    return (
        <div className={classes.main}>
            <div className={classes.photo}>
                <img clas src={photo} alt="profile photo"/>
            </div>
            <div className={classes.info}>
                <div className={classes.info__name}><img className={classes.star} src={star} alt="star"/> Иван Иванович Иванов</div>
                <div className={classes.info__rating}><img className={classes.star} src={geo} alt="geo"/> 4.95</div>
                <div className={classes.info__adress}>Пр-кт Ленинский дом 56/2</div>
                <button className={classes.btn}>Написать</button>
            </div>

        </div>
    );
};

export default PersonItem;