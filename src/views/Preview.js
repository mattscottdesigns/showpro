import React, { Component } from 'react';

class Preview extends Component {


	render() {
		return (
            <React.Fragment>
                <ul className="bolt-breadcrumb">
                    <li>Preview</li>
                </ul>


                <ul className="list-group list-group-striped">
                    <li className="list-group-item">
                        <div className="preview">
                            
                            <div className="preview-content mr-4">
                                <h5>Attendee Registration</h5>
                                <a className="d-none d-lg-block" href="">https://stg.register.xpressreg.net/Bolt/Attendee</a>
                            </div>

                            <div className="preview-actions">
                                <button className="btn btn-primary btn-xs btn-block">Start</button>
                                <button className="btn btn-default btn-xs btn-block">Copy URL</button>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="preview">

                            <div className="preview-content mr-4">
                                <h5>Exhibitor Registration</h5>
                                <a className="d-none d-lg-block" href="">https://stg.register.xpressreg.net/Bolt/Exhibitor</a>
                            </div>
                            <div className="preview-actions">
                                <button className="btn btn-primary btn-xs btn-block">Start</button>
                                <button className="btn btn-default btn-xs btn-block">Copy URL</button>
                            </div>
                        </div>
                    </li>
                    
                    <li className="list-group-item">
                        <div className="preview">

                            <div className="preview-content pr-2">
                                <h5>Registration Resource Center</h5>
                                <a className="d-none d-lg-block" href="">https://stg.register.xpressreg.net/Bolt/RRC</a>
                            </div>
                            <div className="preview-actions">
                                <button className="btn btn-primary btn-xs btn-block">Start</button>
                                <button className="btn btn-default btn-xs btn-block">Copy URL</button>
                            </div>
                        </div>
                    </li>
                </ul>


            </React.Fragment>
		);
	}
}

export default Preview;
