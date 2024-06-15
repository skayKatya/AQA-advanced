let planets = [];

for (let i = 1; i < 10; i++) {
	fetch(`https://swapi.dev/api/planets/${i}`)
		.then((res) => res.json())
		.then((json) => console.log(json.name));
}
