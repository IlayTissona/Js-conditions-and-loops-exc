let sum = 0;
let num = 0;
let five = 0;
for (let co = 0; five < 5 && co < 1000; co++) {
	num = co;
	let c = [];
	while (num !== 1 && c[num] !== true) {
		c[num] = true;
		sum = 0;
		for (let i = num; i >= 1; i = Math.floor(i / 10)) {
			sum += (i % 10) * (i % 10);
		}
		num = sum;
	}
	if (num === 1) {
		console.log(co);
		five++;
	}
}
