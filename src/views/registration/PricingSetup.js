import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';


class PricingSetup extends Component {
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
                    <li>Pricing</li>
                    <li>Setup</li>
                </ul>
                
                <div className="mb-5">
                    <div className="">
                        <div className="widget-container mt-4">
                            <div className="widget-datepicker">
                                <div className="datepicker-title">Early</div>
                                <div className="datepicker-input">
                                    <div className="input-group">
                                    <input type="text" className="form-control" defaultValue="5/1/2018"/>
                                    <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
									</div>

                                </div>
                            </div>
                            <div className="widget-datepicker">
                                <div className="datepicker-title">Advanced</div>
                                <div className="datepicker-input">
                                    <div className="input-group">
                                    <input type="text" className="form-control" defaultValue="6/1/2018"/>
                                    <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
									</div>
                                </div>
                            </div>
                            <div className="widget-datepicker">
                                <div className="datepicker-title">Onsite</div>
                                <div className="datepicker-input">
                                    <div className="input-group">
                                    <input type="text" className="form-control" defaultValue="7/1/2018"/>
                                    <span className="input-group-addon"><i className="far fa-calendar-alt"></i></span>
									</div>
                                </div>
                            </div>
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
                                    <input type="text" className="form-control" defaultValue="$50" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$75" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$100" />
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
                                    <input type="text" className="form-control" defaultValue="$50" />
                                </div>                                
                            </td>
                        </tr>
                        <tr>
                            <td>ITM3</td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$500" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$575" />
                                </div>                                
                            </td>
                            <td>
                                <div className="">
                                    <input type="text" className="form-control" defaultValue="$650" />
                                </div>                                
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

                
			</div>
        );
    }
}

export default PricingSetup;
