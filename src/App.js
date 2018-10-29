import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Admin from './templates/Admin';
import Exhibitor from './templates/Exhibitor';
import './assets/styles/bootstrap.min.css';
import './assets/styles/main.css';

class App extends Component {
	
	render() {
		return (
			<div className="bolt">
				<HashRouter>
					<Switch>
						<Route path={":main?/:sub?"} component={Admin} />
						<Route path={"/exhibitor/:main?/:sub?"} component={Exhibitor} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default App;
