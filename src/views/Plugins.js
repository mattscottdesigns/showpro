import React, { Component } from 'react';
import SwitchContainer from '../components/Switch/SwitchContainer';
import Switch from '../components/Switch/Switch';

class Plugins extends Component {


	render() {
		return (
			<div className="features-general">
				<ul className="bolt-breadcrumb">
                    <li>Plugins</li>
                </ul>

                <SwitchContainer className="striped">

                    <Switch label={"Group Registration"} />

                    <Switch label={"Guests"} />

                    <Switch label={"Housing"} />

                    <Switch label={"Member Lookup"} />

                    <Switch label={"Social Media"}>
                        <div className="switch-option-list">
                            <div className="addthis_inline_share_toolbox my-3"></div>
                        </div>
                        <div className="switch-option-list">
                            <div className="row mt-1">
                                <div className="col-lg-7 pt-1">
                                    <div className="form-group">
                                        <label className="text-muted">Link</label>
                                        <input className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-muted">Message</label>
                                        <textarea className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="switch-option">
                                        <div className="checkbox">
                                            <label><input type="checkbox" value=""/>Facebook</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value=""/>Twitter</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value=""/>Instagram</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value=""/>LinkedIn</label>
                                        </div>
                                        <div className="checkbox">
                                            <label><input type="checkbox" value=""/>Email</label>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Switch>

                    <Switch label={"Translate"} />

                </SwitchContainer>
			</div>
		);
	}
}

export default Plugins;
