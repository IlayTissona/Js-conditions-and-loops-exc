let stars = "";

for (let i = 0; i < 5; i++) {
	for (let j = 0; j <= i; j++) {
		stars += "* ";
	}
	stars += "\n";
}
console.log(stars);
