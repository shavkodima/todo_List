import React from "react";
import classes from "./header.module.css";


const Header = () => {

const toggleTheme = (e) =>{
    const body = document.body;
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
    }else{
        body.classList.add('dark')
    }
}


    return (
        <header className={classes.header}>
                <div className={classes.item} >
                    <div className="header-item__logo">
                        <h1 className={classes.logo}><a href ='/'>Todo list</a></h1>
                    </div>
                    <div className={classes.switch} >
                        <input type="checkbox" id="theme-toggle" className={classes.checkbox}/>
                        <label htmlFor="theme-toggle" className={classes.theme} onClick={toggleTheme} >
                            <span className={classes.circle}></span>   
                        </label> 
                    </div>
                </div>
        </header>
    )
}


export default Header;