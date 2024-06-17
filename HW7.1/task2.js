function testRecursiv(number) {
	console.log(number);

	if (number <= 0) {
		return;
	}

	testRecursiv(number - 1);
}

console.log(testRecursiv(5));
