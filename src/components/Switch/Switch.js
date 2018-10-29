import React, { Component } from 'react';
import SwitchToggle from './SwitchToggle';
import SwitchFields from './SwitchFields';

const Switch = (props) =>{
    const { label, description, onClick, hideToggle, className } = props;

    return (
        <div className={"switch " + (className || "") + " " + (hideToggle ? "active" : "")}>
            <SwitchToggle hideToggle={hideToggle} onClick={onClick ? onClick : false} {...props}/>
            <SwitchFields
                label={label}
                description={description}
            >
                {props.children}
            </SwitchFields>
        </div>
    );
}

export default Switch;
