const users = [
	{ name: 'Kate', email: 'kate@gmail.com', age: 20 },
	{ name: 'Natali', email: 'natali@gmail.com', age: 30 },
	{ name: 'Alex', email: 'alex@gmail.com', age: 40 },
];

for (const { name, email, age } of users) {
	console.log(`${name} is ${age} years, ${email}`);
}
