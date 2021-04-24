import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/burt.png';

export function Header(props: any) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to="/" activeClassName="active">
							Home
							<span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/about" activeClassName="active">
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/charts" activeClassName="active">
							Charts
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
