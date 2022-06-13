import React from 'react';
import classes from "./RatingComponent.module.css";
import photo from "../PersonItem/photo.svg";
import star from "../PersonItem/star.svg";
import geo from "../PersonItem/geo.svg";

const RatingComponent = ({title, rating, desc}) => {
    return (
        <div className={classes.main}>
            <div className={classes.photo}>
                <img className={classes.photo__img} src={photo} alt="profile photo"/>
            </div>
            <div className={classes.info}>
                <div className={classes.info__name}>{title}</div>
                <div className={classes.info__rating}><img className={classes.star} src={star} alt="geo"/> {rating}</div>
                <div className={classes.info__adress}>{desc}</div>
            </div>

        </div>
    );
};

export default RatingComponent;