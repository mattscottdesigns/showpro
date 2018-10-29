import React, { Component } from 'react';
import logoCds from './../../assets/images/logo-cds.gif'
import logoCdsFlat from './../../assets/images/logo-cds-flat.png'

const QuickLinks = (props) => {
    

    return (
        <div className="quick-links">
            <div className="quick-links-item">
                <i className="fas fa-code"></i>&nbsp;Admin
            </div>
            <div className="quick-links-item">
                <i className="fas fa-chart-bar"></i>&nbsp;Reports
            </div>
            <div className="quick-links-item">
                <i className="fas fa-question-circle"></i>&nbsp;Help
            </div>
            <div className="quick-links-logo">
                <img src={logoCdsFlat} />
            </div>
            
        </div>
    );
}


export default QuickLinks;
