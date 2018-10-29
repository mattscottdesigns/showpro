import React, { Component } from 'react';
import Switch from '../../components/Switch';


class Payment extends Component {

    handleToggle = (toggle) =>{
        const el = document.querySelector("."+toggle);

        if( el ){
            el.classList.toggle("active")
        }
    }

    render() {
      
        return (
            <div className="payment">
				<ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Payment</li>
                </ul>
				<div className="switch-container striped">
                    
                    <Switch
                        hideToggle
                        className=""
                        label="Locale/Currency"
                        description="Select the locale/currency you want your website to display"
                    >
                        <div className="switch-option-list">
                            <div className="switch-option">
                                <div className="switch-option-field">
                                    <select className="form-control" >
                                        <option value="1033">English - United States</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Switch>

                    <Switch
                        className="showCredit"
                        label="Credit Cards"
                        description="Allow Credit Cards to be used for payments for your event"
                        onClick={() => this.handleToggle("showCredit")}
                    >
                        <div className="switch-option-list">
                            <div className="switch-option">
                                <div className="switch-option-title">
                                    EFT Processor:
                                </div>
                                <div className="switch-option-field">
                                    <select className="form-control" />
                                </div>
                            </div>
                            <div className="switch-option">
                                <div className="switch-option-title">
                                    EFT Partner:
                                </div>
                                <div className="switch-option-field">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="switch-option">
                                <div className="switch-option-title">
                                    EFT User Name:
                                </div>
                                <div className="switch-option-field">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="switch-option-list">
                            <div className="switch-option">
                                <div className="switch-option-title">Allowed Payment Types</div>
                                <div className="switch-option-field">
                                    <div className="switch-checkbox">
                                        <input type="checkbox" />&nbsp;
                                        <label>American Express</label>
                                    </div>
                                    <div className="switch-checkbox">
                                        <input type="checkbox" />&nbsp;
                                        <label>Discover</label>
                                    </div>
                                    <div className="switch-checkbox">
                                        <input type="checkbox" />&nbsp;
                                        <label>Diners club</label>
                                    </div>
                                    <div className="switch-checkbox">
                                        <input type="checkbox" />&nbsp;
                                        <label>Master Card</label>
                                    </div>
                                    <div className="switch-checkbox">
                                        <input type="checkbox" />&nbsp;
                                        <label>Visa</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Switch>

                    <Switch
                        className="showChecks"
                        label="Checks"
                        description="Allow Checks to be used for payments for your event"
                        onClick={() => this.handleToggle("showChecks")}
                    >
                        <div className="switch-option-list">
                            <div className="switch-option">
                                <div className="switch-option-title">
                                    Mailing Address:
                                </div>
                                <div className="switch-option-field">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </Switch>
                    
                    <Switch
                        className="showPurchaseOrder"
                        label="Purchase Order"
                        description="Allow Purchase Orders to be used for payments for your event"
                        onClick={() => this.handleToggle("showPurchaseOrder")}
                    >
                        <div className="switch-option-list">
                            <div className="switch-option">
                                <div className="switch-option-title">
                                    Mailing Address:
                                </div>
                                <div className="switch-option-field">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </Switch>

                    <Switch
                        className="showPayPal"
                        label="PayPal"
                        description="Allow Purchase Orders to be used for payments for your event"
                        onClick={() => this.handleToggle("showPayPal")}
                    >
                        <div className="switch-option-list">
                            <div className="switch-option">
                                <div className="switch-option-title">
                                    Account Information:
                                </div>
                                <div className="switch-option-field">
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Payment;
