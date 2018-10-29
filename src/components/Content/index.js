import React from 'react';
import {  Route } from 'react-router-dom';

import DemographicsEdit from './../../views/registration/DemographicsEdit';
import ItemSelectionEdit from '../../views/registration/ItemSelectionEdit';
import EmailsEdit from '../../views/registration/EmailsEdit';

const Content = (props) => {
	const { routes } = props;

	return (
		<div className="content">
			<div className="view">
				{routes.map((route,i) => {
					return(
						<React.Fragment key={i}>
							<Route path={route.path} component={route.component} />

							{ route.routes.map((route,i) => {
								return(
									<Route
										exact
										key={i}
										path={route.path}
										component={route.component}
									/>
								)
							}) }
							
						</React.Fragment>
					)
				})}
				<Route
					exact
					path={"/registration/demographics/edit"}
					component={DemographicsEdit}
				/>

				<Route
					exact
					path={"/registration/items/edit"}
					component={ItemSelectionEdit}
				/>
				<Route
					exact
					path={"/registration/emails/edit"}
					component={EmailsEdit}
				/>
			</div>
		</div>
	);
}

export default Content;
