import React, { Component } from 'react';

const SwitchToggle = (props) =>{
    const { onClick, hideToggle, children, ...rest } = props;

    return (
        <div className="switch-toggle">
            { !hideToggle && (
                <label className="switch-input">
                    <input {...rest} onClick={onClick ? onClick : function(){return false}} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            )}
        </div>
    );
}

export default SwitchToggle;
