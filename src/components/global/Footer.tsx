import React from 'react';
import moment from 'moment';

export function Footer() {
	const thisYear = moment().format('YYYY');
	return (
		<div className="footer bg-dark">
			<div className="container-fluid">
				<div className="row">
					<div className="col text-left">
						&copy; {thisYear} &middot; Except where otherwise noted,
						content on this site is licensed under a{' '}
						<a href="http://creativecommons.org" target="_blank">
							Creative Commons Attribution 4.0 International
							license
						</a>
						.
					</div>
				</div>
			</div>
		</div>
	);
}
