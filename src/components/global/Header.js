import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/burt.png';

const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<img src={logo} alt="" className="header-logo" />
			<NavLink className="navbar-brand" to="/">
				{props.site}
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#topNavBar"
				aria-controls="topNavBar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="topNavBar">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink className="nav-link" to="/" activeClassName="active" exact={true}>
							Home
						</NavLink>
					</li>					
				</ul>
			</div>
		</nav>
	);
};

export default Header;
