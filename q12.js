let sum = 0;
for (i = 1; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		//didn't get if they asked for 3 OR 5 or 3 AND 5, so change the || operator if you did
		sum += i;
		console.log(i);
	}
}
console.log(sum);
