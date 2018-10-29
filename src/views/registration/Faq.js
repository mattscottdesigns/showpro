import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Builder from '../../components/Builder';
import Modal from '../../components/Modal';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';


class Faq extends Component {
    state = {
        "showAnswerModal": false
    }

    handleAnswerModal = () => {
        const { showAnswerModal } = this.state;
        this.setState({
            "showAnswerModal": !showAnswerModal
        })
    }
    render() {
        const { showAnswerModal } = this.state;

        return (
            <div className="faq ">
                <ul className="bolt-breadcrumb">
                    <li>Registration</li>
                    <li>Frequently Asked Questions</li>
                </ul>

                <div className="text-center mb-5">
                    <button className="btn btn-primary" onClick={this.handleAnswerModal}><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Question</button>
                </div>

                <Modal
                    active={showAnswerModal}
                    toggle={this.handleAnswerModal}
                    content={
                        <div>
                            <div className="form-group"><label className="required">Question</label><input type="text" className="form-control"/></div>
                            <div className="form-group"><label className="required">Answer</label><textarea type="text" className="form-control"/></div>
                        </div>
                    }
                    heading="Add Question"
                    footer={
                        <div className="text-right"><button className="btn btn-primary">Create</button></div>
                    }
                />

                <table className="bolt-table bordered text-center draggable">
                    <tbody>
                        <tr>
                            <td><i className="fas fa-arrows-alt"></i></td>
                            <td>What can I bring into the event?</td>
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
                            <td><i className="fas fa-arrows-alt"></i></td>
                            <td>Are there ID or minimum age requirements to enter the event?</td>
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
                            <td><i className="fas fa-arrows-alt"></i></td>
                            <td>What is the refund policy?</td>
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
}

export default Faq;
