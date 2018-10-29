import React from 'react';

const SwitchFields = (props) =>{

    const { label, description, children } = props;

    return(
        <div className="switch-fields">
            <div className="switch-label">
                {label}
            </div>
            <div className="switch-description">
                {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."}
            </div>
            <div className="switch-option-list">
                {children}
            </div>
            
        </div>
    )
}

export default SwitchFields;
