type Person = {
	first: string;
	middle?: string;
	last?: string;
};
export const Cards = () => {
	const names: Array<Person> = [
		{ first: 'John', last: 'Lennon' },
		{ first: 'Paul', last: 'Macartney' },
		{ first: 'George', last: 'Harrison' },
		{ first: 'Ringo', last: 'Starr' },
	];

	console.log('names :>> ', names);

	return (
		<div className="d-flex">
			{names.map((name, key) => {
				return (
					<div className="col m-1" key={key}>
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
