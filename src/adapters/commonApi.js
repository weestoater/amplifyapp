export default function getApi(apiUrl) {
	return fetch(apiUrl)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			}
		})
		.catch(() => console.log('An error has occurred'));
}
