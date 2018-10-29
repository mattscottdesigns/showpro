import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ButtonDropdown from '../components/Buttons/ButtonDropdown';

const routes = [
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-cogs"></i> Setup</React.Fragment>,
		"completed": true,
		"routes": [
			{
				"display": "Login",
				"path": "/exhibitor/",
				"completed": false,
				"component": undefined
			},
		]
    }
];


const Main = () => {
    return(
        <React.Fragment>
            <div className="exhibitor">
                <div className="container">
                    <header>
                        <img className="img-responsive" src="https://via.placeholder.com/1200x150"/>
                    </header>
                    <div className="session hidden-print my-3">
                        <div className="session__user text-right">
                            <div className="session__user--logout">
                                <div>You are currently logged in as:</div>
                                <b>Convention Data Services</b>
                            </div>
                            <div className="session__user--logout">
                                <a href="login.html"><span className="label label-danger">Logout</span></a>
                            </div>
                        </div>
                    </div>
                    <nav id="menu" className="hidden-print quickmenu quickmenu-banner quickmenu-border quickmenu-stretch affix-top">
                        <div className="quickmenu__mobile"><i className="fa fa-bars" aria-hidden="true"></i></div>
                        <div className="quickmenu__item"><a href="#home" className="quickmenu__item--nav" data-toggle="tab">Home</a></div>
                        <div className="quickmenu__item">
                            <div className="quickmenu__item--nav">Register<span className="more"><i className="fa fa-caret-down" aria-hidden="true"></i></span></div>
                            <div className="quickmenu__item--submenu"><a href="#add" className="quickmenu__item--nav" data-toggle="tab">New Booth Staff</a><a href="#addbulk" className="quickmenu__item--nav" data-toggle="tab">Multiple Booth Staff</a><a href="#previous" className="quickmenu__item--nav" data-toggle="tab">Previous Staff</a><a href="#receipt" className="quickmenu__item--nav" data-toggle="tab">View Receipt</a><a href="#roster" className="quickmenu__item--nav" data-toggle="tab">View Booth Roster</a></div>
                        </div>
                        <div className="quickmenu__item"><a href="#services" className="quickmenu__item--nav" data-toggle="tab">Customer Invitations</a></div>
                        <div className="quickmenu__item"><a href="#housing" className="quickmenu__item--nav" data-toggle="tab">Hotel &amp; Travel</a></div>
                        <div className="quickmenu__item"><a href="#lrs" className="quickmenu__item--nav" data-toggle="tab">Lead Retrieval</a></div>
                        <div className="quickmenu__item"><a href="#faq" className="quickmenu__item--nav" data-toggle="tab">FAQ</a></div>
                    </nav>

                    <main>
                        <div className="row">
                            <div className="col-md-7">
                                <h2>Welcome to Exhibitor Registration</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                
                                
                                <div className="row text-center mt-5">
                                    <div className="col-sm-6"><a href="#add" className="btn btn-info btn-lg btn-block mb-3" data-toggle="tab"><i className="fa fa-user-plus"></i>Add New Booth Staff</a></div>
                                    <div className="col-sm-6"><a href="#previous" className="btn btn-info btn-lg btn-block mb-3" data-toggle="tab"><i className="fa fa-retweet"></i>Add Previous Staff</a></div>
                                </div>
                                
                            </div>
                            <div className="col-md-5">
                                <div className="panel panel-default">
                                    <h4 className="panel-heading">Company Information</h4>
                                    <div className="panel-body">
                                        <dl>
                                            <dt>Convention Data Services</dt>
                                            <dd>Street1</dd>
                                            <dd>Street2</dd>
                                            <dd>City, ON  Canada  A1B2C3</dd>
                                        </dl>
                                        <dl>
                                            <dt>Primary Contact</dt>
                                            <dd>Firstname Lastname</dd>
                                            <dd>mscott@cdsreg.com</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <h4 className="panel-heading">Booth Staff Allotment</h4>
                                    <div className="panel-body">
                                        <table className="table table-striped text-center">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Used</th>
                                                    <th>Purchased</th>
                                                    <th>Available</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-left">Exhibitor</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            
                            <table className="bolt-table booth-staff bordered striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Badge Type</th>
                                        <th>Email Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Firstname1 Lastname1</td>
                                        <td>Exhibitor</td>
                                        <td>N/A</td>
                                        <td><ButtonDropdown items={["Edit","Send Email","Delete"]}/></td>
                                    </tr>
                                    <tr>
                                        <td>Firstname2 Lastname2</td>
                                        <td>Exhibitor</td>
                                        <td>N/A</td>
                                        <td><ButtonDropdown items={["Edit","Send Email","Delete"]}/></td>
                                    </tr>
                                    <tr>
                                        <td>Firstname3 Lastname3</td>
                                        <td>Exhibitor</td>
                                        <td>N/A</td>
                                        <td><ButtonDropdown items={["Edit","Send Email","Delete"]}/></td>
                                    </tr>
                                    <tr>
                                        <td>Firstname4 Lastname4</td>
                                        <td>Exhibitor</td>
                                        <td>N/A</td>
                                        <td><ButtonDropdown items={["Edit","Send Email","Delete"]}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>

                    <footer className="footer hidden-print">
                        <div className="footer__content">
                            <div className="row">
                                <div className="col-sm-3 mb-4">
                                    <div>
                                        <i className="fab fa-facebook-square fa-2x text-primary"></i>&nbsp;
                                        <i className="fab fa-twitter-square fa-2x text-primary"></i>&nbsp;
                                        <i className="fab fa-linkedin fa-2x text-primary"></i>
                                    </div>

                                    <div className="pb-1 pt-3">
                                        <b>Phone:</b> 123.123.123
                                    </div>
                                    <div className="pb-3">
                                        <b>Email:</b> cds@xpressreg.net
                                    </div>

                                </div>
                                <div className="col-sm-3 mb-4">
                                    <div className="pb-1"><b>Register</b></div>
                                    <div className="pt-1">Add New Booth Staff</div>
                                    <div className="pt-1">Add Previous Staff</div>
                                    <div className="pt-1">View Receipt</div>
                                    <div className="pt-1">View Booth Roster</div>
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <div className="pb-1"><b>Services</b></div>
                                    <div className="pt-1">View Services</div>
                                    <div className="pt-1">Customer Invite</div>
                                    <div className="pt-1">Exhibitor Emails</div>
                                    <div className="pt-1">Attendee List</div>
                                </div>
                                <div className="col-sm-3 mb-4">
                                    <div className="pb-1"><b>Help Center</b></div>
                                    <div className="pt-1">FAQ</div>
                                    <div className="pt-1">Technical Support</div>
                                    <div className="pt-1">Event Information</div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )
}


const Exhibitor = () =>{
    return(
        
        <Switch>
                    
            <Route exact path="/exhibitor" render={()=>{
                return(
                    <div className="container">
                        <div className="">
                            <header><img className="img-responsive" src="https://via.placeholder.com/1200x150"/></header>
                            <main>
                                <div className="row">
                                    <div className="col-md-8">
                                    <h2>Welcome to Exhibitor Registration</h2>
                                <p>All Exhibit Staff Members must register their name to the Exhibiting Company's badge list. The Main Contact will not automatically receive a badge so they must also register for an exhibitor badge if they will be an onsite staff member. </p>
                                <p>Please select your Company Name and enter your Company Password located in the confirmation letter sent to the Main Contact. If you have forgotten your password, click on the "Need login information" link below. </p>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="required">Company Name</label>
                                            <select className="form-control">
                                                <option>Please Select</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="required">Password</label>
                                            <input type="password" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <Link to={"/exhibitor/main"} className="btn btn-primary btn-block btn-lg">Login</Link>
                                            <div className="text-center p-2">Forgot Password</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </main>
                            <footer>
                                <div className="row">
                                    <div className="col-md-4 pb-2"><img className="img-responsive" src="https://via.placeholder.com/300x150"/></div>
                                    <div className="col-md-4 pb-2"><img className="img-responsive" src="https://via.placeholder.com/300x150"/></div>
                                    <div className="col-md-4 pb-2"><img className="img-responsive" src="https://via.placeholder.com/300x150"/></div>
                                </div>
                            </footer>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                )
            }} />
            <Route exact path="/exhibitor/main" component={Main} />
        </Switch>

    )
}

export default Exhibitor;
