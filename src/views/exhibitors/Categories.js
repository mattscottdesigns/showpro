import React, { Component } from 'react';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';

const Categories = (props) =>{

    return (
        <div className="faq ">
            <ul className="bolt-breadcrumb">
                <li>Exhibitors</li>
                <li>Categories</li>
            </ul>

            <table className="bolt-table bordered">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Allotment</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Exhibitor</td>
                        <td>4</td>
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
    );
}

export default Categories;
