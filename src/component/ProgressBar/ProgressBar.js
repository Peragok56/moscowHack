import React from 'react';
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
    return (
        <div className={classes.main}>
            <div className={classes.age}>Возраст</div>
            <input className={classes.progress} type="range"/>
            <div className={classes.row__values}>
                <div className={classes.age}>8</div>
                <div className={classes.age}>99</div>
            </div>
        </div>
    );
};

export default ProgressBar;