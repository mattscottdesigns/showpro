import React, { Component } from 'react';

class Modal extends Component {
 
    render() {

        const { active, heading, footer, content, children, toggle } = this.props;

        if( active ){
            return (
                <div className="bolt-modal-overlay">
                    <div className="bolt-modal">
                        <div className="bolt-modal-header">{heading} <span className="bolt-modal-toggle" onClick={toggle}><i className="fas fa-times"></i></span></div>
                        <div className="bolt-modal-content">{content || children}</div>
                        <div className="bolt-modal-footer">{footer}</div>
                    </div>
                </div>
            )
        } else {
            return false;
        }
    }
}

export default Modal;