import React, { Component } from 'react';
import Builder from './../../components/Builder';


class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Contact Information</li>
                </ul>
                
                
                <Builder items={["Registration Field #1","Registration Field #2","Registration Field #3"]}/>

            </div>  
        );
    }
}

export default Contact;
