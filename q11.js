function greatestCommonDivisor(num1, num2) {
	let answer = 1;
	for (let i = 1; i < num1 && i < num2; i++) {
		if (num1 % i === 0 && num2 % i === 0 && i > answer) {
			answer = i;
		}
	}
	return answer;
}

console.log(greatestCommonDivisor(1029, 1071));
