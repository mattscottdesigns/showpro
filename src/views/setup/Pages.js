import React, { Component } from 'react';
import SwitchContainer from '../../components/Switch/SwitchContainer';
import Switch from '../../components/Switch';


class Attendee extends Component {
	render() {
		return (
            <SwitchContainer className="striped compact">
                <Switch label={"Member Lookup"} defaultChecked />
                <Switch label={"Contact Information"} defaultChecked />
                <Switch label={"Demographic Questions"} defaultChecked />
                <Switch label={"Item Selection"} defaultChecked />
                <Switch label={"Review"} defaultChecked />
                <Switch label={"Payment"} defaultChecked />
                <Switch label={"Confirmation"} defaultChecked />
            </SwitchContainer>    
        )
    }
}



class Exhibitor extends Component {
	render() {
		return (
            <React.Fragment>
                <SwitchContainer className="striped compact">
                    <Switch className="active" label={"Exhibitor Registration"} defaultChecked />
                </SwitchContainer>  
            </React.Fragment>
        )
    }
}


class Preview extends Component {

    constructor(){
        super();
        this.state = {
            "displaySection": "attendee",
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
            case "attendee":
                return <Attendee />
            case "exhibitor":
                return <Exhibitor />
            default:
                return <div>TBD</div>
        }
    }

    render() {
        const { displayName, isModalActive } = this.state;

        return (
            <div className="demographics-edit">
                <ul className="bolt-breadcrumb">
                    <li>Setup</li>
                    <li>Features</li>
                </ul>

                <div className="bolt-edit">
                    <div className="edit-buttons">
                        <button className="button-setting attendee" onClick={() => this.setState({"displaySection": "attendee"})}>
                            <div className="button-icon"><i className="fas fa-address-card"></i></div>
                            <div className="button-text">Registration</div>
                        </button>

                        <button className="button-setting exhibitor" onClick={() => this.setState({"displaySection": "exhibitor"})}>
                            <div className="button-icon"><i className="fas fa-user-tie"></i></div>
                            <div className="button-text">Exhibitors</div>
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


export default Preview
