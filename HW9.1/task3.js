let car1 = {
	brand: 'Toyota',
	model: 'Camry',
	year: 2024,
};

let car2 = {
	brand: 'Cupra',
	model: 'Leon',
	owner: 'Kate',
};

let car3 = { ...car1, ...car2 };

console.log(car3);
