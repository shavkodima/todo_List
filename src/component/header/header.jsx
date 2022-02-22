import React from "react";
import classes from "./header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
                <div className="header-item">
                    <div className="header-item__logo">
                        <h1 className={classes.logo}><a href ='/'>Todo list</a></h1>
                    </div>
                </div>
        </header>
    )
}


export default Header;