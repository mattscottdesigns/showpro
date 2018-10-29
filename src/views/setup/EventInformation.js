import React, { Component } from 'react';
import SwitchContainer from '../../components/Switch/SwitchContainer';
import Switch from './../../components/Switch';

const TestRecords = () => {
    return(
        <React.Fragment>
            <div className="text-center">
                <button className="btn btn-danger btn-lg">Clear Test Records</button>
            </div>
        </React.Fragment>
    )
}

const Steps = () => {
    return(
        <React.Fragment>
            <div>
                <SwitchContainer className="compact striped">
                    <Switch label={"Member Lookup"} />
                    <Switch label={"Contact Information"} />
                    <Switch label={"Demographic Questions"} />
                    <Switch label={"Item Selection"} />
                    <Switch label={"Review"} />
                    <Switch label={"Payment"} />
                    <Switch label={"Confirmation"} />
                </SwitchContainer>
            </div>
        </React.Fragment>
    )
}

class Copy extends React.Component{

    handleChange = (e) => {
        if( e.target.value !== "" ){
            document.querySelector(".switch-container").style.display = "block";
        } else {
            document.querySelector(".switch-container").style.display = "none";
        }
    }

    componentDidMount() {
        document.querySelector(".switch-container").style.display = "none";
    }

    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center">
                        <h4 className="text-muted">Select an event to copy from</h4>
                        <div className="form-group">
                            <select className="form-control" onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="base1218">ShowPro Base Event 2018</option>
                            </select>
                        </div>
                    </div>

                </div> 
                <SwitchContainer className="striped compact mt-5">
                    <Switch label={"Registration Categories"} defaultChecked />
                    <Switch label={"Form Fields"} defaultChecked />
                    <Switch label={"Plugins"} defaultChecked />
                    <Switch label={"Design"} defaultChecked />
                    <Switch label={"Items"} />
                    <Switch label={"Pricing"} />
                    <Switch label={"Discounts"} />
                </SwitchContainer>
            </React.Fragment>
        )
    }
}

const Basic = () => {
    return(
        <React.Fragment>
            <div className="form-group">
                <label>Event Title</label>
                <input type="text" className="form-control" />
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Event Code</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Event Time Zone</label>
                        <select className="form-control">
                            <option>Please Select</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label>Unavailable Message</label>
                <textarea className="form-control" />
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <label>Event Dates</label>
                    <div className="form-group">
                        <div className="input-group">
                        <input type="text" className="form-control"/>
                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                        <input type="text" className="form-control"/>
                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <label>Registration Dates</label>
                    <div className="form-group">
                        <div className="input-group">
                        <input type="text" className="form-control"/>
                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                        <input type="text" className="form-control"/>
                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

class EventInformation extends Component {

    constructor(){
		super();
		this.state = {
			"displaySection": "basic",
		}
	}

	handleActive() {
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

	handleVisibilityModal() {
		const { showVisibilityModal } = this.state;
		this.setState({
			"showVisibilityModal": !showVisibilityModal
		})
	}

	componentDidMount() {
		this.handleActive();
	}

	showSection() {
		
		const { displaySection } = this.state;

		this.handleActive();

		switch(displaySection){
        case "basic":
            return <Basic />
        case "steps":
            return <Steps />
        case "copy":
            return <Copy />
        case "test":
            return <TestRecords />
		default:
			return <div>TBD</div>
		}
	}

	render() {

		return (
            <React.Fragment>
                <ul className="bolt-breadcrumb">
                    <li>Setup</li>
                    <li>Event Information</li>
                </ul>
                <div className="design-edit">
		
				<div className="bolt-edit">
					<div className="edit-buttons">
						<button className="button-setting basic" onClick={() => this.setState({"displaySection": "basic"})}>
							<div className="button-icon"><i className="fas fa-cogs"></i></div>
							<div className="button-text">Settings</div>
						</button>

						<button className="button-setting copy" onClick={() => this.setState({"displaySection": "copy"})}>
							<div className="button-icon"><i className="fas fa-clone"></i></div>
							<div className="button-text">Copy</div>
						</button>

						<button className="button-setting test" onClick={() => this.setState({"displaySection": "test"})}>
							<div className="button-icon"><i className="fas fa-pencil-ruler"></i></div>
							<div className="button-text">Test Records</div>
						</button>

					</div>
					
					<div className="edit-fields">
						{this.showSection()}
					</div>
				</div>

			</div>
            </React.Fragment>
			
		);
	}
}

export default EventInformation;
