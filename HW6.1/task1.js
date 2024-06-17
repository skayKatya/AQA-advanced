function rectangle(width, height) {
	let area = width * height;
	return area;
}

console.log(rectangle(5, 10));

//////////

const rectangle1 = function (width, height) {
	return width * height;
};

console.log(rectangle1(5, 10));

/////////

const rectangle2 = (width, height) => {
	return width * height;
};

console.log(rectangle2(5, 10));
