import React, { FC } from 'react';

type Person = {
	first: string;
	middle?: string;
	last?: string;
};

const Cards: FC = () => {
	const names: Array<Person> = [
		{ first: 'John', last: 'Lennon' },
		{ first: 'Paul', last: 'McCartney' },
		{ first: 'George', last: 'Harrison' },
		{ first: 'Ringo', last: 'Starr' },
	];

	console.log('names :>> ', names);

	return (
		<div className="row">
			{names.map((name, key) => {
				return (
					<div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={key}>
						<div className="card">
							<div className="card-header">
								<h2>
									{name.first} {name.last}
								</h2>
							</div>
							<div className="card-body">lorem ipsum</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
