import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Status from './Status';


const Menu = (props) => {
    const { routes, location } = props;

    const closeAll = () => {
        const subMenuItems = document.querySelectorAll(".menu-sub");

        for (var i = 0; i < subMenuItems.length; i++) {
            subMenuItems[i].classList.remove("toggle")
        }
    }

    const toggleSub = (e) => {
        const target = e.target;
        const sibling = e.target.nextSibling;

        const subMenuItems = document.querySelectorAll(".menu-main > li > a");

        for (var i = 0; i < subMenuItems.length; i++) {
            subMenuItems[i].classList.remove("active")
        }

        target.classList.toggle("active");

        closeAll();
        if( sibling ){
            sibling.classList.toggle("toggle");
        }
        
    }

    return (
        <div className="menu">
            <div className="status">
                <div className="status-title">
                    Master Medical 2018
                </div>
                <div className="status-code">
                    CDSM0118
                </div>
                <div className="status-user">
                    mscott
                </div>
                <div className="status-bar">Development</div>
                <div className="status-edit">
                    <i className="fas fa-cog"></i>
                </div>
                <div className="status-background">  
                </div>
            </div>
            
            <ul className="menu-main">
                {routes.map((route,i) => {
                    return(
                        <li key={i}>
                            <Link 
                                to={route.path || "#"}
                                onClick={toggleSub}
                            >
                                {!route.completed && <i className="menu-status incomplete fas fa-times-circle"></i>}
                                {route.completed && <i className="menu-status complete fas fa-check-circle"></i>}
                                
                                {route.display}
                                {route.routes.length > 0 && <i className="menu-expand fas fa-caret-down"></i>}
                            </Link>
                            {route.routes.length > 0 && 
                                <ul className={"menu-sub" + (route.completed ? " complete " : "")}>
                                    {route.routes.map((route,i) => {
                                        return(
                                            <li key={i}>
                                                <Link className={ route.path === location.pathname ? "active" : "" } to={route.path || "#"}>{route.display}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


export default Menu;
