import React, { Component } from 'react';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';


  class Exhibitors extends Component {

	state = {
        "showModal": false
    }

    handleAnswerModal = () => {
        const { showModal } = this.state;
        this.setState({
            "showModal": !showModal
        })
    }

    render(){
        const { showModal } = this.state;
        return(
            <div className="faq ">
                <ul className="bolt-breadcrumb">
                    <li>Exhibitors</li>
                    <li>Manage</li>
                </ul>

                <div className="text-center mb-5"><a onClick={this.handleAnswerModal} className="btn btn-primary"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Exhibitor</a></div>

                <table className="bolt-table bordered">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th className="text-center">Booth #</th>
                            <th className="text-center">Booth Area</th>
                            <th className="text-center">Staff Allotment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Convention Data Services</td>
                            <td>Matthew Scott</td>
                            <td className="text-center">123</td>
                            <td className="text-center">10x10</td>
                            <td className="text-center">4</td>
                            <td className="text-center">
                                <ButtonDropdown
                                    items={[
                                        <div>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                    </tbody> 
                </table>
                
                <Modal
                    active={showModal}
                    toggle={this.handleAnswerModal}
                    heading="Add Exhibitor"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Create</button></div>
                    }
                    content={
                        <div>
                            <div className="widget-container">
                                <div className="widget-heading">Booth Information</div>
                                <div className="widget-body">
                                    <div className="row"> 
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="required">Booth #</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="required">Booth Size</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="required">Staff Allotment</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label className="required">Company</label>
                                <input type="text" className="form-control"/>
                            </div>
                            
                            <div className="form-group">
                                <label className="required">Title</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">First Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Last Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Address 1</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Address 2</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Zipcode</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">City</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">State</label>
                                        <select className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Country</label>
                                        <select className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row"> 
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Phone</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="required">Fax</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="required">Email</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label className="required">Website</label>
                                <input type="text" className="form-control"/>
                            </div>
                            
                        </div>
                    }
                />

            </div>
    )}
}

export default Exhibitors;
