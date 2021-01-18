for (let i = 100; i < 1000; i++) {
	if (i === digitCubeSum(i)) {
		console.log(i);
	}
}

function digitCubeSum(num) {
	let sum = 0;
	for (let i = num; i >= 1; i = Math.floor(i / 10)) {
		sum += (i % 10) * (i % 10) * (i % 10);
	}
	return sum;
}
