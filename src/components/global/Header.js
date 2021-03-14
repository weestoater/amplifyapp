import React from 'react';
import logo from '../../assets/img/burt.png';

export function Header(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<img src={logo} alt="" className="header-logo" />
			<a className="navbar-brand" href="#">
				{props.site}
			</a>
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
					<li className="nav-item active">
						<a className="nav-link" href="/">
							Home
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Plans
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
