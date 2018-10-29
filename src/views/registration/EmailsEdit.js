import React, { Component } from 'react';
import Modal from '../../components/Modal';
import SampleEmail from '../../components/SampleEmail';




const EmailsGeneral = () => {
    return(
        <React.Fragment>

            <div className="row">
                <div className="col-lg-5">
                    <div className="form-group">
                        <label className="required">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="form-group">
                        <label className="required">Reply Email</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
            </div>

            
            <div className="form-group">
                <label className="required">Subject</label>
                <input type="text" className="form-control"/>
            </div>


            <div className="switch-container compact">
                <div className="switch active">

                    <div className="switch-toggle">
                        <label className="switch-input">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="switch-fields">
                        <div className="switch-label">Active</div>
                        <div className="switch-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                    </div>


                </div>
                
            </div>
        </React.Fragment>
    )
}



class EmailsPreview extends React.Component {

    state = {
        "showPreviewModal": false
    }

    handlePreviewModal = () => {
        const { showPreviewModal } = this.state;
        this.setState({
            "showPreviewModal": !showPreviewModal
        })
    }

    render(){
        const { showPreviewModal } = this.state;
        return(
            <React.Fragment>
        
                <Modal
                    active={showPreviewModal}
                    toggle={this.handlePreviewModal}
                    content={
                        <div>
                            <div className="form-group">
                                <label className="required">Email Address</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    }
                    heading="Send Preview Email"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Save</button></div>
                    }
                />

            <div className="text-center mb-5">
                <button className="btn btn-primary" onClick={this.handlePreviewModal}>Send Preview Email</button>
            </div>

            <SampleEmail/>

            </React.Fragment>
        )
    }
}


class EmailsContent extends React.Component {

    render(){

        return(
            <React.Fragment>

                <div className="bolt-email">


                    <div className="widget-container">
                        <div className="widget-heading">
                            Header
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <img className="img-responsive" src="https://register.xpressreg.net/EventResources/base1217/header.png" />

                            <button className="btn btn-info mt-4">Upload</button>
                        </div>
                    </div>
                    
                    <div className="widget-container">
                        <div className="widget-heading">
                            Introduction
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div className="widget-text"><textarea className="form-control" /></div>

                            <div className="widget-fields">
                                <div className="checkbox"><label><input type="checkbox" defaultChecked/> Visible</label></div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-container">
                        <div className="widget-heading">
                            Contact Information
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div className="widget-text"><textarea className="form-control" /></div>

                            <div className="widget-fields">
                                <div className="checkbox"><label><input type="checkbox" defaultChecked/> Visible</label></div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-container">
                        <div className="widget-heading">
                            Items Purchased
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div className="widget-text"><textarea className="form-control" /></div>

                            <div className="widget-fields">
                                <div className="checkbox"><label><input type="checkbox" defaultChecked/> Visible</label></div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-container">
                        <div className="widget-heading">
                            Account Information
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div className="widget-text"><textarea className="form-control" /></div>

                            <div className="widget-fields">
                                <div className="checkbox"><label><input type="checkbox" defaultChecked/> Visible</label></div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-container">
                        <div className="widget-heading">
                            Terms & Conditions
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div className="widget-text"><textarea className="form-control" /></div>

                            <div className="widget-fields">
                                <div className="checkbox"><label><input type="checkbox" defaultChecked/> Visible</label></div>
                            </div>
                        </div>
                    </div>

                    <div className="widget-container">
                        <div className="widget-heading">
                            Footer
                        </div>
                        <div className="widget-body">
                            <div className="widget-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div className="widget-text"><textarea className="form-control" /></div>

                            <div className="widget-fields">
                                <div className="checkbox"><label><input type="checkbox" defaultChecked/> Visible</label></div>
                            </div>
                        </div>
                    </div>
                </div>


                

                

            </React.Fragment>
        )
    }
}



class EmailsEdit extends Component {

    constructor(){
        super();
        this.state = {
            "displayName": "Show Current Email Name",
            "displaySection": "general",
        }
    }

    handleActive = () => {
        const { displaySection } = this.state;
        const buttons = document.querySelectorAll(".button-setting")
        const node = document.querySelector(".button-setting." + displaySection)
        
        buttons.forEach(element => {
            element.classList.remove("active")
        });
        
        if( node ){
            node.classList.add("active")
        }
    }

    handlePreviewModal = () => {
        const { showPreviewModal } = this.state;
        this.setState({
            "showPreviewModal": !showPreviewModal
        })
    }

    componentDidMount() {
        this.handleActive();
    }

    showSection = () => {
        
        const { displaySection } = this.state;

        this.handleActive();

        switch(displaySection){
            case "general":
                return <EmailsGeneral/>
                break;
            case "email-content":
                return <EmailsContent />
                break;
            case "preview":
                return <EmailsPreview />
                break;
            default:
                return <div>TBD</div>
                break;
        }
    }

    render() {
        const { displayName, isModalActive } = this.state;

        return (
            <div className="items-edit">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Emails</li>
                    <li>Add/Edit</li>
                </ul>
                <h2 className="text-center">{displayName}</h2>
                <div className="bolt-edit">
                    <div className="edit-buttons">
                        <button className="button-setting general" onClick={() => this.setState({"displaySection": "general"})}>
                            <div className="button-icon"><i className="fas fa-cogs"></i></div>
                            <div className="button-text">Settings</div>
                        </button>

                        <button className="button-setting email-content" onClick={() => this.setState({"displaySection": "email-content"})}>
                            <div className="button-icon"><i className="fas fa-edit"></i></div>
                            <div className="button-text">Content</div>
                        </button>

                        <button className="button-setting preview" onClick={() => this.setState({"displaySection": "preview"})}>
                            <div className="button-icon"><i className="fas fa-search"></i></div>
                            <div className="button-text">Preview</div>
                        </button>
                    </div>

                    
                    <div className="edit-fields">
                        
                        {this.showSection()}
                    </div>
                </div>

			</div>
        );
    }
}





export default EmailsEdit;
