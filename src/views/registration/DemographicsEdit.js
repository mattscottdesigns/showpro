import React, { Component } from 'react';
import Modal from '../../components/Modal';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';


const DemographicsGeneral = () => {
    return(
        <React.Fragment>
            <div className="form-group">
                <label className="required">Question</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="required">Answer Type</label>
                <select className="form-control">
                    <option value="0" >Please Select</option>
                    <option value="1">Text</option>
                    <option value="2">Dropdown</option>
                    <option value="3">Checkbox</option>
                    <option value="4">Radio</option>
                </select>
            </div>
            <div className="switch-container compact">
                <div className="switch required">

                    <div className="switch-toggle">
                        <label className="switch-input">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="switch-fields">
                        <div className="switch-label">Required</div>
                        <div className="switch-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                    </div>


                </div>
                <div className="switch disabled">

                    <div className="switch-toggle">
                        <label className="switch-input">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="switch-fields">
                        <div className="switch-label">Admin Only</div>
                        <div className="switch-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

class DemographicsVisibility extends React.Component {

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
            <div>
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
                <div className="switch-container striped compact">
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

                </div>
            </div>
        )
    }
}


class DemographicsAnswers extends React.Component {

    state = {
        "showAnswerModal": false
    }

    handleAnswerModal = () => {
        const { showAnswerModal } = this.state;
        this.setState({
            "showAnswerModal": !showAnswerModal
        })
    }

    render(){
        const { showAnswerModal } = this.state;
        
        return(
            <React.Fragment>
                <div className="text-center mb-5">
                    <button className="btn btn-primary" onClick={this.handleAnswerModal}><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Answer</button>
                </div>

                <Modal
                    active={showAnswerModal}
                    toggle={this.handleAnswerModal}
                    content={
                        <div>
                            <div className="form-group"><label className="required">Answer Text</label><input type="text" className="form-control"/></div>
                            <div className="switch-container compact">

                                <div className="switch other">

                                    <div className="switch-toggle">
                                        <label className="switch-input">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>

                                    <div className="switch-fields">
                                        <div className="switch-label">Other Answer</div>
                                        <div className="switch-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>

                                </div>

                                <div className="switch admin">

                                    <div className="switch-toggle">
                                        <label className="switch-input">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>

                                    <div className="switch-fields">
                                        <div className="switch-label">Admin Only</div>
                                        <div className="switch-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                    heading="Add Demographics Answer"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Create</button></div>
                    }
                />
            
                
                <div className="demographics-answers">
                    <table className="bolt-table bordered text-center draggable">
                        <tbody>
                            <tr>
                                <td><i className="fas fa-arrows-alt"></i></td>
                                <td>Display Full Answer</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleAnswerModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-arrows-alt"></i></td>
                                <td>Display Full Answer</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleAnswerModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-arrows-alt"></i></td>
                                <td>Display Full Answer</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleAnswerModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-arrows-alt"></i></td>
                                <td>Display Full Answer</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleAnswerModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><i className="fas fa-arrows-alt"></i></td>
                                <td>Display Full Answer</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleAnswerModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}


class DemographicsEdit extends Component {

    constructor(){
        super();
        this.state = {
            "displayName": "Current demographic question goes here",
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
                return <DemographicsGeneral/>
                break;
            case "answers":
                return <DemographicsAnswers/>
                break;
            case "rules":
                return <div>Rules goes here</div>
                break;
            case "visibility":
                return <DemographicsVisibility/>
                break;
            default:
                return <div>TBD</div>
                break;
        }
    }

    render() {
        const { displayName, isModalActive } = this.state;



        return (
            <div className="demographics-edit">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Demographics</li>
                    <li>Add/Edit</li>
                </ul>
                <h2 className="text-center mb-5">{displayName}</h2>
                <div className="bolt-edit">
                    <div className="edit-buttons">
                        <button className="button-setting general" onClick={() => this.setState({"displaySection": "general"})}>
                            <div className="button-icon"><i className="fas fa-cogs"></i></div>
                            <div className="button-text">Settings</div>
                        </button>

                        <button className="button-setting answers" onClick={() => this.setState({"displaySection": "answers"})}>
                            <div className="button-icon"><i className="fas fa-pencil-alt"></i></div>
                            <div className="button-text">Answers</div>
                        </button>

                        <button className="button-setting rules" onClick={() => this.setState({"displaySection": "rules"})}>
                            <div className="button-icon"><i className="fas fa-list-alt"></i></div>
                            <div className="button-text">Rules</div>
                        </button>

                        <button className="button-setting visibility" onClick={() => this.setState({"displaySection": "visibility"})}>
                            <div className="button-icon"><i className="fas fa-lock"></i></div>
                            <div className="button-text">Advanced</div>
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

export default DemographicsEdit;
