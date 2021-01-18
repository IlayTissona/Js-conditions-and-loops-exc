let num1 = parseInt(prompt("insert first number"));
let num2 = parseInt(prompt("insert second number"));
let num3 = parseInt(prompt("insert third number"));
if (num1 > num2) {
	if (num2 > num3) {
		alert(num1 + "," + num2 + "," + num3);
	} else if (num3 > num1) {
		alert(num3 + "," + num1 + "," + num2);
	} else {
		alert(num1 + "," + num3 + "," + num2);
	}
} else {
	if (num1 > num3) {
		alert(num2 + "," + num1 + "," + num3);
	} else if (num3 > num2) {
		alert(num3 + "," + num2 + "," + num1);
	} else {
		alert(num2 + "," + num3 + "," + num1);
	}
}
