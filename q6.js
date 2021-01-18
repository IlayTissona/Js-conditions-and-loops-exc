let mark =
	parseInt(prompt("insert David's mark")) +
	parseInt(prompt("insert Vinoth's mark")) +
	parseInt(prompt("insert Divya's mark")) +
	parseInt(prompt("insert Ishitha's mark")) +
	parseInt(prompt("insert Thomas's mark"));

mark /= 5;
if (mark < 60) {
	alert("F");
} else if (mark < 70) {
	alert("D");
} else if (mark < 80) {
	alert("C");
} else if (mark < 90) {
	alert("B");
} else {
	alert("A");
}
