import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './../../components/Modal';
import EditRemove from '../../components/Buttons/EditRemove';
import ButtonDropdown from '../../components/Buttons/ButtonDropdown';

class Analytics extends Component {

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
		return (
			<div className="confirm">
				<ul className="bolt-breadcrumb">
					<li>Registration</li>
					<li>Analytics</li>
				</ul>
				<div className="text-center mb-5"><a onClick={this.handleAnswerModal} className="btn btn-primary"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Analytics</a></div>
				<Modal
					active={showModal}
					toggle={this.handleAnswerModal}
					heading="Add Analytics"
					footer={
						<div className="text-right"><button className="btn btn-primary">Create</button></div>
					}
					content={
						<div>
							<div className="form-group">
								<label className="required">Provider</label>
								<select type="text" className="form-control">
									<option>Google Analytics</option>
									<option>Adobe Analytics</option>
									<option>Other</option>
								</select>
							</div>

							<div className="row">
								
								<div className="col-md-4">
									<div className="form-group">
										<label className="required">Tag</label>
										<select type="text" className="form-control">
											<option>Head</option>
											<option>Body</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label className="required">Location</label>
										<select type="text" className="form-control">
											<option>Top</option>
											<option>Bottom</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div className="form-group">
										<label className="required">Order</label>
										<select type="text" className="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
									</div>
								</div>
							</div>

							
							<div className="form-group">
								<label className="required">Script</label>
								<textarea className="form-control"></textarea>
							</div>
							
							
							<div className="form-group">
								<label className="required">Pages</label>
								<div className="row">
									<div className="col-md-6">
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Contact Information
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Demographics
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Item Selction
											</label>
										</div>
									</div>
									<div className="col-md-6">
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Review
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Payment
											</label>
										</div>
										<div className="checkbox">
											<label>
												<input type="checkbox"/> Confirmation
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					}
				/>
				<table className="bolt-table bordered analytics">
					<thead>
						<tr>
							<th>Provider</th>
							<th>Tag</th>
							<th>Location</th>
							<th>Order</th>
							<th>Pages</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Google Analytics</td>
							<td>Head</td>
							<td>Top</td>
							<td>1</td>
							<td>
								<ul>
									<li>All</li>
								</ul>
							</td>
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
							<td>Google Analytics</td>
							<td>Head</td>
							<td>Top</td>
							<td>2</td>
							<td>
								<ul>
									<li>Demographics</li>
									<li>Confirmation</li>
								</ul>
							</td>
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
							<td>Adobe Analytics</td>
							<td>Head</td>
							<td>Bottom</td>
							<td>1</td>
							<td>
								<ul>
									<li>Confirmation</li>
								</ul>
							</td>
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

export default Analytics;
