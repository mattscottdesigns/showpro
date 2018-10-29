import React, { Component } from 'react';

const SwitchContainer = (props) =>{
    const { children, className, ...rest} = props;
    return (
        <div className={"switch-container " + className} {...rest}>{props.children}</div>
    );
}

export default SwitchContainer;
