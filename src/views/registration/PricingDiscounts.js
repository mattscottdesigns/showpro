import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from '../../components/Modal';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';


class DiscountCodes extends React.Component {

    state = {
        "showAnswerModal": false,
        "showQuota": false,
        "showTicket": false,
    }


    handleToggle = (toggle) =>{
        const nextState = !this.state[toggle];

        this.refs[toggle].classList.toggle("active")

        this.setState({
            [toggle]: nextState
        })
    }

    handleAnswerModal = () => {
        const { showAnswerModal } = this.state;
        this.setState({
            "showAnswerModal": !showAnswerModal
        })
    }

    
    render(){
        const { showAnswerModal } = this.state;
        const { children, history } = this.props;
        
        return(
            <React.Fragment>
                <div className="text-center">
                    <button className="btn btn-primary mb-5" onClick={this.handleAnswerModal}><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Discount Code</button>
                </div>
                
                <Modal
                    active={showAnswerModal}
                    toggle={this.handleAnswerModal}
                    content={
                        <div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Code</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
    
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Grouping</label>
                                        <select className="form-control">
                                            <option>Please Select</option>
                                            <option>Tracking Only</option>
                                            <option>50% Off</option>
                                            <option>Flash Sale (75% Off)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="switch-container compact">
                                <div className="switch quota" ref="showQuota">
                                    <div className="switch-toggle">
                                        <label className="switch-input">
                                            <input type="checkbox" onClick={() => this.handleToggle("showQuota")}/>
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="switch-fields">
                                        <div className="switch-label">Quota</div>
                                        <div className="switch-description">Indicates the maximum number of registrants who are able to use the discount</div>
                                        <div className="switch-option-list">
                                            <div className="switch-option number">
                                                <div className="switch-option-field">
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fas fa-minus"></i></span>
                                                        <input type="text" class="form-control" value="1" />
                                                        <span class="input-group-addon"><i class="fas fa-plus"></i></span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    }

                    heading="Add Discount Code"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Create</button></div>
                    }
                />
            
                <div className="demographics-answers">
                    <table className="bolt-table discount-code bordered text-center mb-5">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                                <th>Quota</th>
                                <th>Group</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TEST1</td>
                                <td>This is a discount code description</td>
                                <td>N/A</td>
                                <td>1</td>
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
                                <td>TEST2</td>
                                <td>This is an even longer discount code description</td>
                                <td>100</td>
                                <td>2</td>
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
                                <td>TEST3</td>
                                <td>This is a a really long discount code description to show what it would look like</td>
                                <td>50</td>
                                <td>3</td>
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


class DiscountGroups extends React.Component {

    state = {
        "showModal": false
    }

    handleModal = () => {
        const { showModal } = this.state;
        this.setState({
            "showModal": !showModal
        })
    }

    render(){
        const { showModal } = this.state;
        
        return(
            <React.Fragment>
                <div className="text-center mb-5">
                    <button className="btn btn-primary" onClick={this.handleModal}><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Group</button>
                </div>

                <Modal
                    active={showModal}
                    toggle={this.handleModal}
                    content={
                        <div>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Start Date</label>
                                        <div className="input-group">
                                        <input type="text" className="form-control" defaultValue="6/1/2018"/>
                                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>End Date</label>
                                        <div className="input-group">
                                        <input type="text" className="form-control" defaultValue="7/1/2018"/>
                                        <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            

                            <div className="form-group mt-2">
                                <label>Items</label>
                                <p className="text-muted">Link your items to this discount group</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> ITM1
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> ITM2
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> ITM3
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> ITM4
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> ITM5
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> ITM6
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    heading="Add Discount Group"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Create</button></div>
                    }
                />
            
                
                <div className="demographics-answers">
                    <table className="bolt-table discount-group bordered text-center">
                        <thead>
                            <tr>
                                <th>Group</th>
                                <th>Name</th>
                                <th>Start</th>
                                <th>End</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tracking Only</td>
                                <td>5/29/2018</td>
                                <td>10/9/2018</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>50% Off</td>
                                <td>5/29/2018</td>
                                <td>10/9/2018</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleModal}>Edit</div>,
                                            <div>Remove</div>,
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Flash Sale (75% Off)</td>
                                <td>10/8/2018</td>
                                <td>10/9/2018</td>
                                <td>
                                    <ButtonDropdown
                                        items={[
                                            <div onClick={this.handleModal}>Edit</div>,
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


class DiscountPricing extends Component {

    render(){
        return(
            <React.Fragment>

                <div className="row mb-3">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h4 className="text-muted">Select a Discount Group</h4>
                        <div className="form-group">
                            <select className="form-control" defaultValue="1">
                                <option></option>
                                <option value="1">Tracking Only</option>
                                <option value="2">50% Off</option>
                                <option value="3">Flash Sale (75% Off)</option>
                            </select>
                        </div>
                    </div>

                </div>

                

                <table className="bolt-table bordered pricing mb-5">
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Early</th>
                            <th>Advanced</th>
                            <th>Onsite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ITM1</td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                        </tr>
                        <tr>
                            <td>ITM2</td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                        </tr>
                        <tr>
                            <td>ITM3</td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$0" />
                                </div>                                
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}


class PricingDiscounts extends Component {

    constructor(){
        super();
        this.state = {
            "displayName": "Current demographic question goes here",
            "displaySection": "groups",
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
            case "groups":
                return <DiscountGroups/>
                break;
            case "codes":
                return <DiscountCodes/>
                break;
            case "discounts":
                return <DiscountPricing/>
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
                    <li>Pricing</li>
                    <li>Discounts</li>
                </ul>
                <div className="bolt-edit">
                    <div className="edit-buttons">
                        <button className="button-setting groups" onClick={() => this.setState({"displaySection": "groups"})}>
                            <div className="button-icon"><i className="fas fa-users"></i></div>
                            <div className="button-text">Groups</div>
                        </button>

                        <button className="button-setting codes" onClick={() => this.setState({"displaySection": "codes"})}>
                            <div className="button-icon"><i className="fas fa-ticket-alt"></i></div>
                            <div className="button-text">Codes</div>
                        </button>

                        <button className="button-setting discounts" onClick={() => this.setState({"displaySection": "discounts"})}>
                            <div className="button-icon"><i className="fas fa-dollar-sign"></i></div>
                            <div className="button-text">Discounts</div>
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

export default PricingDiscounts;
