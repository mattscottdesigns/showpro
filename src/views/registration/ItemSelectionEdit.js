import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';


const ItemSelectionGeneral = () => {
    return(
        <React.Fragment>

            <div className="row">
                
                <div className="col-lg-4">
                    <div className="form-group">
                        <label className="required">Item Code</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="form-group">
                        <label className="required">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label className="required">Display Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
            </div>


            <div className="form-group">
                <label>Description</label>
                <textarea type="text" className="form-control"/>
            </div>
            

            <div className="switch-container compact">
                <div className="switch printable">
                    <div className="switch-toggle">
                        <label className="switch-input">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="switch-fields">
                        <div className="switch-label">Active</div>
                        <div className="switch-description">Indicates if the field is active (available to the registrant) or is not used on the registration form.</div>
                    </div>
                </div>
               
            </div>

        </React.Fragment>
    )
}


class ItemSelectionTickets extends React.Component{

    state = {
        "showWaitlist": false,
        "showTicket": false,
    }

    handleToggle = (toggle) =>{
        const nextState = !this.state[toggle];

        this.refs[toggle].classList.toggle("active")

        this.setState({
            [toggle]: nextState
        })
    }

    render(){
        return (
            <React.Fragment>
                <div className="switch-container compact striped">

                    <div className="switch active quota">
                        <div className="switch-toggle">
         
                        </div>

                        <div className="switch-fields">
                            <div className="switch-label">
                                Quantity Per Registrant
                            </div>
                            <div className="switch-description">
                                This is the maximum number of the item that a single registrant can select.
                            </div>
                            <div className="switch-option-list">
                                <div className="switch-option number">
                                    <div className="switch-option-field">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fas fa-minus"></i></span>
                                            <input type="text" className="form-control" defaultValue="1"/>
                                            <span className="input-group-addon"><i className="fas fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="switch waitlist" ref="showWaitlist">
                        <div className="switch-toggle">
                            <label className="switch-input">
                                <input type="checkbox" onClick={() => this.handleToggle("showWaitlist")}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="switch-fields">
                            <div className="switch-label">Waitlist</div>
                            <div className="switch-description">Indicates if the field is active (available to the registrant) or is not used on the registration form.</div>
                            <div className="switch-option-list">
                                <div className="switch-option number">
                                    <div className="switch-option-field">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-minus"></i></span>
                                            </div>
                                            <input type="text" className="form-control" defaultValue="1"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i className="fas fa-plus"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     
                    <div className="switch ticket" ref="showTicket">
                        <div className="switch-toggle">
                            <label className="switch-input">
                                <input type="checkbox" onClick={() => this.handleToggle("showTicket")}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        
                        <div className="switch-fields">
                            <div className="switch-label">Printable </div>
                            <div className="switch-description">Indicates whether or not the item is one that should be allowed to be printed. Each item can have up to 5 lines of ticket text with each line a maximum of 50 characters. If a ticket for this item is printed, indicate the text to be printed on each line.</div>
                            <div className="switch-option-list">
                                <div className="switch-option">
                                    <div className="switch-option-field">
                                        <input type="text" className="form-control" placeholder="Ticket Text #1"/>
                                    </div>
                                </div>
                                <div className="switch-option">
                                    <div className="switch-option-field">
                                        <input type="text" className="form-control" placeholder="Ticket Text #2"/>
                                    </div>
                                </div>
                                <div className="switch-option">
                                    <div className="switch-option-field">
                                        <input type="text" className="form-control" placeholder="Ticket Text #3"/>
                                    </div>
                                </div>
                                <div className="switch-option">
                                    <div className="switch-option-field">
                                        <input type="text" className="form-control" placeholder="Ticket Text #4"/>
                                    </div>
                                </div>
                                <div className="switch-option">
                                    <div className="switch-option-field">
                                        <input type="text" className="form-control" placeholder="Ticket Text #5"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <ItemSelectionVisibility/>
                </div>
            </React.Fragment>
        )
    }
}


class ItemSelectionSession extends React.Component{

    render(){
        return(
            <React.Fragment>

                <div className="row">
                    <div className="col-lg-7">
                        <div className="form-group">
                            <label>Session Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="form-group">
                            <label>Track</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label>Speakers</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <label>Session Date</label>
                        <div className="form-group">
                            <div className="input-group">
                            <input type="text" className="form-control" defaultValue="6/1/2018 - 7/1/2018"/>
                            <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <label>Session Time</label>
                        <div className="form-group">
                            <div className="input-group">
                            <input type="text" className="form-control" defaultValue="6/1/2018 - 7/1/2018"/>
                            <span className="input-group-addon"><i className="far fa-clock"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                
            </React.Fragment>
        )
    }
}


class ItemSelectionVisibility extends React.Component {

    state = {
        "showVisibilityModal": false
    }

    handleVisibilityModal = () => {
        const { showVisibilityModal } = this.state;
        this.setState({
            "showVisibilityModal": !showVisibilityModal
        })
    }

    render(){
        const { showVisibilityModal } = this.state;
        return(
            <React.Fragment>
                <Modal
                    active={showVisibilityModal}
                    toggle={this.handleVisibilityModal}
                    content={
                        <div>
                            <div className="mb-4">Please select the Registration Categories that will <b className="text-danger"><u>NOT</u></b> see this question.</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Blogger
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Daily
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Duplicate
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Exhibitor
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Expo Only
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Main Mailer
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Press
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Premium
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Speaker
                                        </label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/> Staff
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    heading="Restrict Visibility"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Save</button></div>
                    }
                />


                    <div className="switch email">

                        <div className="switch-toggle">
                            <button className="btn btn-link text-info" onClick={this.handleVisibilityModal}><i className="fas fa-cog fa-2x"></i></button>
                        </div>

                        <div className="switch-fields">
                            <div className="switch-label">
                                Registration Category
                            </div>
                            <div className="switch-description">
                                Hide/show demographic questions based on applicable Registration Categories
                            </div>
                        </div>

                    </div>

                    <div className="switch email">

                        <div className="switch-toggle">
                            <button className="btn btn-link text-info" onClick={this.handleVisibilityModal}><i className="fas fa-cog fa-2x"></i></button>
                        </div>

                        <div className="switch-fields">
                            <div className="switch-label">
                                Promotional Code
                            </div>
                            <div className="switch-description">
                                Hide/show demographic questions based on the Promotional Code that the user enters
                            </div>
                        </div>
                    </div>

            </React.Fragment>
        )
    }
}




class ItemSelectionEdit extends Component {

    constructor(){
        super();
        this.state = {
            "displayName": "Show Current Item Display Name",
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

    handleVisibilityModal = () => {
        const { showVisibilityModal } = this.state;
        this.setState({
            "showVisibilityModal": !showVisibilityModal
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
                return <ItemSelectionGeneral/>
                break;
            case "ticket":
                return <ItemSelectionTickets/>
                break;
            case "session":
                return <ItemSelectionSession/>
                break;
            case "rules":
                return <div>Rules goes here</div>
                break;
            case "visibility":
                return <ItemSelectionVisibility/>
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
                    <li>Items</li>
                    <li>Add/Edit</li>
                </ul>
                <h2 className="text-center mb-5">{displayName}</h2>
                <div className="bolt-edit">
                    <div className="edit-buttons">
                        <button className="button-setting general" onClick={() => this.setState({"displaySection": "general"})}>
                            <div className="button-icon"><i className="fas fa-cogs"></i></div>
                            <div className="button-text">Settings</div>
                        </button>

                        <button className="button-setting ticket" onClick={() => this.setState({"displaySection": "ticket"})}>
                            <div className="button-icon"><i className="fas fa-lock"></i></div>
                            <div className="button-text">Advanced Details</div>
                        </button>

                        <button className="button-setting session" onClick={() => this.setState({"displaySection": "session"})}>
                            <div className="button-icon"><i className="fas fa-sliders-h"></i></div>
                            <div className="button-text">Session Details</div>
                        </button>   

                        <button className="button-setting rules" onClick={() => this.setState({"displaySection": "rules"})}>
                            <div className="button-icon"><i className="fas fa-list-alt"></i></div>
                            <div className="button-text">Rules</div>
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

export default ItemSelectionEdit;
