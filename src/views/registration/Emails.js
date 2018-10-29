import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';


class Emails extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="emails">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Emails</li>
                </ul>

                <div className="text-center mb-5"><Link to={"/registration/emails/edit"}><button className="btn btn-primary"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Email</button></Link></div>
                <table className="bolt-table table-middle bordered emails">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Reply Email</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Attendee</td>
                            <td>Thank you for registering!</td>
                            <td>AT@reply.com</td>
                            <td><i className="fas fa-check text-success"></i></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={() => history.push("/registration/emails/edit")}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Exhibitor</td>
                            <td>Thank you for registering!</td>
                            <td>EX@reply.com</td>
                            <td><i className="fas fa-check text-success"></i></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={() => history.push("/registration/emails/edit")}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Main Mailer</td>
                            <td>Thank you for registering!</td>
                            <td>MM@reply.com</td>
                            <td><i className="fas fa-times text-danger"></i></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={() => history.push("/registration/emails/edit")}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Emails);
