let c = 0;
for (let j = 0; c < 5; j++) {
	if (isHappy(j)) {
		console.log(j);
		c++;
	}
}

function digitSqueredSum(num) {
	let sum = 0;
	for (let i = num; i >= 1; i = Math.floor(i / 10)) {
		sum += (i % 10) * (i % 10);
	}
	return sum;
}
function isHappy(num) {
	let c = [];
	while (num !== 1 && c[num] !== true) {
		c[num] = true;
		num = digitSqueredSum(num);
	}
	return num === 1;
}
