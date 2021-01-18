let max = parseInt(prompt("insert number"));

for (let i = 0; i < 4; i++) {
	let temp = parseInt(prompt("insert number"));
	max = temp > max ? temp : max;
}

alert(max);
