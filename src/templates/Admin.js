import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Content from '../components/Content';
import Plugins from '../views/Plugins';
import Design from '../views/Design';
import Contact from '../views/registration/Contact';
import Payment from '../views/registration/Payment';
import Demographics from '../views/registration/Demographics';
import ItemSelection from '../views/registration/ItemSelection';
import PricingSetup from '../views/registration/PricingSetup';
import PricingDiscounts from '../views/registration/PricingDiscounts';
import EventInformation from '../views/setup/EventInformation';
import Pages from '../views/setup/Pages';
import RegistrationCategory from '../views/setup/RegistrationCategory';
import Emails from '../views/registration/Emails';
import Analytics from '../views/registration/Analytics';
import Preview from '../views/Preview';
import Faq from '../views/registration/Faq';
import Manage from '../views/exhibitors/Manage';
import Categories from '../views/exhibitors/Categories';


const routes = [
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-cogs"></i> Setup</React.Fragment>,
		"completed": true,
		"routes": [
			{
				"display": "Event Information",
				"path": "/event/event-information",
				"completed": false,
				"component": EventInformation
			},	
			{
				"display": "Features",
				"path": "/event/pages",
				"completed": false,
				"component": Pages,
			}
		]
	},
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-address-card"></i> Registration</React.Fragment>,
		"completed": true,
		"routes": [
			{
				"display": "Categories",
				"path": "/event/categories",
				"completed": false,
				"component": RegistrationCategory,
			},
			{
				"display": "Contact Information",
				"path": "/registration/contact",
				"complete": false,
				"component": Contact
			},
			{
				"display": "Demographics",
				"path": "/registration/demographics",
				"complete": false,
				"component": Demographics
			},
			{
				"display": "Emails",
				"path": "/registration/emails",
				"complete": false,
				"component": Emails
			},
			{
				"display": "Analytics",
				"path": "/registration/analytics",
				"complete": false,
				"component": Analytics
			},
			{
				"display": "FAQ",
				"path": "/registration/faq",
				"complete": false,
				"component": Faq
			},
			
		]
	},
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-user-tie"></i> Exhibitors</React.Fragment>,
		"routes": [
			{
				"display": "Manage",
				"path": "/exhibitor/manage",
				"complete": false,
				"component": Manage
			},
		]
	},
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-dollar-sign"></i> Pricing</React.Fragment>,
		"complete": false,
		"routes": [
			{
				"display": "Items",
				"path": "/registration/items",
				"complete": false,
				"component": ItemSelection
			},
			{
				"display": "Setup",
				"path": "/pricing/setup",
				"complete": false,
				"component": PricingSetup
			},
			{
				"display": "Discounts",
				"path": "/pricing/discounts",
				"complete": false,
				"component": PricingDiscounts
			},
			{
				"display": "Payment",
				"path": "/registration/payment",
				"complete": false,
				"component": Payment
			},
		]
	},
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-plug"></i> Plugins</React.Fragment>,
		"path": "/plugins",
		"complete": false,
		"component": Plugins,
		"routes": []
	},
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-crop"></i> Design</React.Fragment>,
		"path": "/design",
		"complete": false,
		"component": Design,
		"routes": []
	}, 
	{
		"display": <React.Fragment><i className="sidenav-menu-icon fas fa-desktop"></i> Preview</React.Fragment>,
		"path": "/preview",
		"complete": false,
		"component": Preview,
		"routes": []
	},
	
]




    const closeAll = () => {
        const subMenuItems = document.querySelectorAll(".sidenav-submenu");

        for (var i = 0; i < subMenuItems.length; i++) {
            subMenuItems[i].classList.remove("toggle")
        }
    }

    const toggleSub = (e) => {
        const target = e.target;
        const sibling = e.target.nextSibling;

        const subMenuItems = document.querySelectorAll(".sidenav-menu > li > a");

        for (var i = 0; i < subMenuItems.length; i++) {
            subMenuItems[i].parentElement.classList.remove("active")
        }

        target.parentElement.classList.toggle("active");

        closeAll();
        if( sibling ){
            sibling.classList.toggle("toggle");
        }
        
	}

class NewTemplate extends Component {
	
	componentDidMount() {
		const elToggle = document.getElementsByClassName("sidenav-toggle");
		const elBolt = document.getElementsByClassName("bolt");
		const elContent = document.getElementsByClassName("page-body");
		const toggle = elToggle[0];
		const bolt = elBolt[0];
		const content = elContent[0];

		toggle.addEventListener("click", function(){
			bolt.classList.toggle("mobile-active")
		})

		content.addEventListener("click", function(){
			bolt.classList.remove("mobile-active");
		})
	}

	render() {

		const { location } = this.props;

		return (
            <React.Fragment>
                <div className="bolt-sidenav">
                    <div className="sidenav-header">
                        <div className="sidenav-header-title">Master Medical 2018</div>
                        <div className="sidenav-header-code">TEST0718</div>
                        <div className="sidenav-header-user">mscott</div>
                        <div className="sidenav-status">Development</div>
					</div>
					


					<div className="sidenav-body">




						<ul className="sidenav-menu">
							{routes.map((route,i) => {

								const statusClass = route.completed ? "text-success" : " text-muted";

								return(
									<li key={i}>
										<Link 
											to={route.path || "#"}
											onClick={toggleSub}
										>
											{route.display}  <i className={"sidenav-status-icon fas fa-circle " + statusClass}></i>

										</Link>
										{route.routes.length > 0 && 
											<ul className={"sidenav-submenu"}>
												{route.routes.map((route,i) => {
													return(
														<li key={i}  className={ route.path === location.pathname ? "active" : "" } >
															<Link to={route.path || "#"}>{route.display}</Link>
														</li>
													)
												})}
											</ul>
										}
									</li>
								)
							})}
                            
                        </ul>
					</div>
					<div className="sidenav-footer">
                        
					</div>
                </div>
                <div className="bolt-content">
                    <div className="page-header">
                        <div className="sidenav-toggle"><i className="fas fa-bars fa-2x text-muted"></i></div>
                        <ul className="page-header-links">
                            <li><i className="fas fa-home"></i>&nbsp;Home</li>
                            <li><i className="fas fa-code"></i>&nbsp;Admin</li>
                            <li><i className="fas fa-chart-bar"></i>&nbsp;Reports</li>
                            <li><i className="fas fa-question-circle"></i>&nbsp;Help</li>
                        </ul>
                    </div>
					<div className="page-body">
						<Content routes={routes} {...this.props}/>
					</div>
                    <div className="page-footer"></div>
                </div>
            </React.Fragment>
		);
	}
}




export default NewTemplate;
