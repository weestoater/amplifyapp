import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/burt.png';

export function Header(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<img src={logo} alt="" className="header-logo" />
			<Link className="navbar-brand" to="/">
				{props.site}
			</Link>
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
						<Link className="nav-link" to="/">
							Home
							<span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/about">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
