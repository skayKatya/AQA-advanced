2.1;
let starships = [];

async () => {
	let data = await fetch('https://swapi.dev/api/planets/');
	let body = await data.json();
};
