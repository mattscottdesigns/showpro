import React, { Component } from 'react'
import Template1 from './../assets/images/template-1.png'
import Template2 from './../assets/images/template-2.png'
import BackgroundDefault from './../assets/images/bright.jpg'
import CDSLogo from './../assets/images/logo-cds.gif'


class Templates extends Component {
	render(){
		return(
			<React.Fragment>
				<div className="widget-container">
					<div className="widget-heading">Layout</div>
					<div className="widget-body">
						<img className="m-2 img-thumbnail" src={Template1}/>
						<img className="m-2 img-thumbnail" src={Template2}/>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Header</div>
					<div className="widget-body">
						<div className="form-group">
							<div className="checkbox">
								<label>
									<input name="vertical" type="checkbox"/> Display event countdown
								</label>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8">
								<div className="form-group">
									<input type="file" className="form-control mb-2"/>
									<button className="btn btn-primary mr-1">Upload</button>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Alignment</label>
									<div className="radio">
										<label>
											<input name="vertical" type="radio"/> Left
										</label>
									</div>
									<div className="radio">
										<label>
											<input name="vertical" type="radio"/> Center
										</label>
									</div>
									<div className="radio">
										<label>
											<input name="vertical" type="radio"/> Right
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Footer</div>
					<div className="widget-body">
						
						<div className="form-group">
							<label>Message</label>
							<textarea className="form-control" />
						</div>
						<div className="form-group row">
							<div className="col-lg-6">
								<div className="form-group">
									<label>Phone</label>
									<input type="text" className="form-control" />
								</div>
							</div>	
							<div className="col-lg-6">
								<div className="form-group">
									<label>Email</label>
									<input type="text" className="form-control" />
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-lg-8">
								<label>Event Logo</label>
								<input type="file" className="form-control mb-2"/>
								<button className="btn btn-primary">Upload</button>
							</div>
							<div className="col-lg-4">

							</div>
							
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Sponsor Images</div>
					<div className="widget-body">

						<div className="row mb-3">
							<div className="col-lg-8">
								<div className="form-group">
									<div className="input-group mb-2">
										<span className="input-group-addon">https://</span>
										<input type="text" className="form-control" defaultValue="www.cdsreg.com"/>
									</div>
			
									<input type="file" className="form-control mb-2"/>
									<button className="btn btn-primary mr-1">Upload</button>
									<button className="btn btn-danger mr-1">Remove</button>
								</div>
							</div>
							<div className="col-lg-4">
								<img src={CDSLogo} className="img-responsive" />
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-lg-8">
								<div className="form-group">

									<div className="input-group mb-2">
										<span className="input-group-addon">https://</span>
										<input type="text" className="form-control"/>
									</div>
			
									<input type="file" className="form-control mb-2"/>
									<button className="btn btn-primary mr-1">Upload</button>
									<button className="btn btn-danger mr-1">Remove</button>
								</div>
							</div>
							<div className="col-lg-4">
								
							</div>
						</div>
						<div className="row mb-3">
							<div className="col-lg-8">
								<div className="form-group">
									<div className="input-group mb-2">
										<span className="input-group-addon">https://</span>
										<input type="text" className="form-control"/>
									</div>
			
									<input type="file" className="form-control mb-2"/>
									<button className="btn btn-primary mr-1">Upload</button>
									<button className="btn btn-danger mr-1">Remove</button>
								</div>
							</div>
							<div className="col-lg-4">
								
							</div>
						</div>

						
					</div>
				</div>
			</React.Fragment>
		)
	}
}


class Background extends Component {
	render(){
		return(
			<React.Fragment>
				<div className="widget-container widget-md">
					<div className="widget-heading">Background Color</div>
					<div className="widget-body">
						<input type="text" className="form-control" />
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Background Image</div>
					<div className="widget-body">
						<div className="row">
							<div className="col-lg-8">
								<input type="file" className="form-control"/>
								<img src={BackgroundDefault} className="img-responsive my-4" />
								<button className="btn btn-primary mr-1">Upload</button>
								<button className="btn btn-danger mr-1">Remove</button>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Align Vertical</label>
									<div className="checkbox">
										<label>
											<input name="vertical" type="checkbox"/> Top
										</label>
									</div>
									<div className="checkbox">
										<label>
											<input name="vertical" type="checkbox"/> Center
										</label>
									</div>
									<div className="checkbox">
										<label>
											<input name="vertical" type="checkbox"/> Bottom
										</label>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="">Align Horizontal</label>
									<div className="checkbox">
										<label>
											<input name="horizontal" type="checkbox"/> Left
										</label>
									</div>
									<div className="checkbox">
										<label>
											<input name="horizontal" type="checkbox"/> Center
										</label>
									</div>
									<div className="checkbox">
										<label>
											<input name="horizontal" type="checkbox"/> Right
										</label>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="">Repeat</label>
									<div className="radio">
										<label>
											<input name="repeat" type="radio"/> Yes
										</label>
									</div>
									<div className="radio">
										<label>
											<input name="repeat" type="radio"/> X-Axis Only
										</label>
									</div>
									<div className="radio">
										<label>
											<input name="repeat" type="radio"/> Y-Axis Only
										</label>
									</div>
									<div className="radio">
										<label>
											<input name="repeat" type="radio"/> No
										</label>
									</div>
								</div>
							</div>
						</div>                                                                                                                                   
					</div>
				</div>
			</React.Fragment>
		)
	}
}


class Buttons extends Component {
	render(){
		return(
			<React.Fragment>
				<div className="widget-container">
					<div className="widget-heading">Primary</div>
					<div className="widget-body">
						<div className="row">
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Background</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Border</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Text</label>
									<input type="text" className="form-control" />
								</div>
							</div>
						</div>                                                                                                                                 
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Secondary</div>
					<div className="widget-body">
						<div className="row">
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Background</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Border</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Text</label>
									<input type="text" className="form-control" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Link</div>
					<div className="widget-body">
						<div className="row">
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Background</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Border</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="col-lg-4">
								<div className="form-group">
									<label htmlFor="">Text</label>
									<input type="text" className="form-control" />
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</React.Fragment>
		)
	}
}


class Colors extends Component {
	render(){
		return(
			<React.Fragment>
				<div className="widget-container widget-md">
					<div className="widget-heading">Primary</div>
					<div className="widget-body">
						<input type="text" className="form-control" />
					</div>                                                                                                                                   
				</div>
				<div className="widget-container widget-md">
					<div className="widget-heading">Secondary</div>
					<div className="widget-body">
						<input type="text" className="form-control" />
					</div> 
				</div>
				<div className="widget-container widget-md">
					<div className="widget-heading">Text</div>
					<div className="widget-body">
						<input type="text" className="form-control" />
					</div>  
				</div>
				<div className="widget-container widget-md">
					<div className="widget-heading">Required Text</div>
					<div className="widget-body">
						<input type="text" className="form-control" />
					</div> 
				</div>
			</React.Fragment>
		)
	}
}


class Content extends Component {
	render(){
		return(
			<React.Fragment>
				<div className="widget-container">
					<div className="widget-heading">Name & Address</div>
					<div className="widget-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" defaultValue="Step #1: Contact Information"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Message</label>
							<textarea className="form-control" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
						</div>                                                                                                                               
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Demographics</div>
					<div className="widget-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" defaultValue="Step #2: Demographics"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Message</label>
							<textarea className="form-control" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Package Selection</div>
					<div className="widget-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" defaultValue="Step #3: Item Selection"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Message</label>
							<textarea className="form-control" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Review Information</div>
					<div className="widget-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" defaultValue="Step #4: Review"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Message</label>
							<textarea className="form-control" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Payment Information</div>
					<div className="widget-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" defaultValue="Step #5: Payment"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Message</label>
							<textarea className="form-control" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
						</div>
					</div>
				</div>
				<div className="widget-container">
					<div className="widget-heading">Thank You</div>
					<div className="widget-body">
						<div className="form-group">
							<label htmlFor="">Title</label>
							<input type="text" className="form-control" defaultValue="Step #6: Confirmation"/>
						</div>
						<div className="form-group">
							<label htmlFor="">Message</label>
							<textarea className="form-control" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
						</div>
					</div>
				</div>
				
			</React.Fragment>
		)
	}
}


class Design extends Component {

	constructor(){
		super();
		this.state = {
			"displayName": "Current demographic question goes here",
			"displaySection": "templates",
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
		case "templates":
			return <Templates/>
		case "background":
			return <Background/>
		case "buttons":
			return <Buttons/>
		case "colors":
			return <Colors/>
		case "pages":
			return <Content/>
		default:
			return <div>TBD</div>
		}
	}

	render() {
		const { displayName, isModalActive } = this.state;

		return (
			<div className="design-edit">
				<ul className="bolt-breadcrumb">
					<li>Design</li>
				</ul>
				<div className="bolt-edit">
					<div className="edit-buttons">
						<button className="button-setting templates" onClick={() => this.setState({"displaySection": "templates"})}>
							<div className="button-icon"><i className="fas fa-object-group"></i></div>
							<div className="button-text">Template</div>
						</button>

						<button className="button-setting background" onClick={() => this.setState({"displaySection": "background"})}>
							<div className="button-icon"><i className="fas fa-image"></i></div>
							<div className="button-text">Background</div>
						</button>

						<button className="button-setting colors" onClick={() => this.setState({"displaySection": "colors"})}>
							<div className="button-icon"><i className="fas fa-palette"></i></div>
							<div className="button-text">Colors</div>
						</button>

						<button className="button-setting pages" onClick={() => this.setState({"displaySection": "pages"})}>
							<div className="button-icon"><i className="fas fa-layer-group"></i></div>
							<div className="button-text">Content</div>
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

export default Design;
