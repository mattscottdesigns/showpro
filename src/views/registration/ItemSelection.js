import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';

class ItemSelection extends Component {

    
    state = {
        "compact": false
    }

    handleView = () => {
        const { compact } = this.state;

        this.setState({
            "compact": !compact
        })
    }

    render() {
        const { compact } = this.state;
        const { history } = this.props;

        return (
            <div className="contact">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Items</li>
                </ul>
                <div className="text-center mb-5"><Link to={"/registration/items/edit"}><button className="btn btn-primary"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Item</button></Link></div>
                <table className="bolt-table table-middle bordered items">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Display Name</th>
                            <th>Active</th>
                            <th>Printable</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ITM1</td>
                            <td>This is the items display name</td>
                            <td><i className="fas fa-check text-success"></i></td>
                            <td><i className="fas fa-check text-success"></i></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={() => history.push('/registration/items/edit')}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>ITM2</td>
                            <td>This is another item display name</td>
                            <td><i className="fas fa-check text-success"></i></td>
                            <td><i className="fas fa-times text-danger"></i></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={() => history.push('/registration/items/edit')}>Edit</div>,
                                        <div>Remove</div>,
                                    ]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>ITM3</td>
                            <td>This is yet again another item display name</td>
                            <td><i className="fas fa-times text-danger"></i></td>
                            <td><i className="fas fa-times text-danger"></i></td>
                            <td>
                                <ButtonDropdown
                                    items={[
                                        <div onClick={() => history.push('/registration/items/edit')}>Edit</div>,
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

export default withRouter(ItemSelection)
