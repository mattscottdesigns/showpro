import React from 'react';
import Modal from '../../components/Modal';
import IconTrue from '../../components/Icons/IconTrue';
import IconFalse from '../../components/Icons/IconFalse';
import EditRemove from '../../components/Buttons/EditRemove';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';


class RegistrationCategory extends React.Component {

    state = {
        "showCategoryModal": false
    }

    handleCategoryModal = () => {
        
        const { showCategoryModal } = this.state;
        this.setState({
            "showCategoryModal": !showCategoryModal
        })
    }

    render() {

        const { showCategoryModal } = this.state;

        return (
            <React.Fragment>

                <Modal
                    heading="Add Registration Category"
                    active={showCategoryModal}
                    toggle={this.handleCategoryModal}
                    content={
                        <div>
           
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group"><label className="required">Category Code</label><input type="text" className="form-control" /></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group"><label className="required">Email Type</label>
                                        <select type="text" className="form-control">
                                            <option>Attendee</option>
                                            <option>Exhibitor</option>
                                            <option>Main Mailer</option>
                                        </select>    
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group"><label className="required">Name</label><input type="text" className="form-control" /></div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group"><label>Badge Text</label><input type="text" className="form-control" /></div>
                                </div>
                            </div>

                            <div className="form-group"><label>Description</label><textarea type="text" className="form-control"></textarea></div>
                            <div className="switch-container compact">
                                <div className="switch demographics">
                                    <div className="switch-toggle"><label className="switch-input"><input type="checkbox" /><span className="slider round"></span></label></div>
                                    <div className="switch-fields">
                                        <div className="switch-label">Demographics</div>
                                        <div className="switch-description">Indicates whether or not demographic questions are required to be answered.</div>
                                    </div>
                                </div>
                                <div className="switch admin">
                                    <div className="switch-toggle"><label className="switch-input"><input type="checkbox" /><span className="slider round"></span></label></div>
                                    <div className="switch-fields">
                                        <div className="switch-label">Admin Only</div>
                                        <div className="switch-description">Indicates whether this Registration Category is only available through the admin section.</div>
                                    </div>
                                </div>
                                <div className="switch printable">
                                    <div className="switch-toggle"><label className="switch-input"><input type="checkbox" /><span className="slider round"></span></label></div>
                                    <div className="switch-fields">
                                        <div className="switch-label">Printable</div>
                                        <div className="switch-description">Indicates whether or not this Registration Category should be allowed to be printed.</div>
                                    </div>
                                </div>
                            </div>
 
                        </div>
                    }
                    
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Save</button></div>
                    }
                />

                <ul className="bolt-breadcrumb">
                    <li>Setup</li>
                    <li>Registration Categories</li>
                </ul>

                <div className="text-center mb-5"><button className="btn btn-primary" onClick={this.handleCategoryModal}><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Category</button></div>

                <table className="bolt-table table-middle bordered categories">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Badge Text</th>
                            <th>Email Type</th>
                            <th>Demographics</th>
                            <th>Admin Only</th>
                            <th>Printable</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AT</td>
                            <td>Attendee</td>
                            <td>Attendee Registration</td>
                            <td>Attendee</td>
                            <td><IconTrue/></td>
                            <td><IconFalse/></td>
                            <td><IconTrue/></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={this.handleCategoryModal}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>EX</td>
                            <td>Exhibitor</td>
                            <td>Exhibitor Registration</td>
                            <td>Exhibitor</td>
                            <td><IconFalse/></td>
                            <td><IconFalse/></td>
                            <td><IconTrue/></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={this.handleCategoryModal}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>MM</td>
                            <td>Main Mailer</td>
                            <td>Main Mailer Contact</td>
                            <td>Main Mailer</td>
                            <td><IconFalse/></td>
                            <td><IconFalse/></td>
                            <td><IconFalse/></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={this.handleCategoryModal}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default RegistrationCategory
