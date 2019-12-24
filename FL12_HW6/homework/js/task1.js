const a = +prompt('Enter value "a": ');
const b = +prompt('Enter value "b": ');
const c = +prompt('Enter value "c": ');
	
let x1, x2;
	
if(isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
	alert('Invalid input data');
} else {
	const num2 = 2;
	const num4 = 4;
	const d = Math.pow(b, num2) - num4 * a * c;

	if (d === 0) {
		x1 = (-b / num2 * a).toFixed(1);
		console.log(`x = ${x1}`);
	} else if(d > 0) {
		x1 = ((-b + Math.sqrt(d)) / (num2 * a)).toFixed(1);
		x2 = ((-b - Math.sqrt(d)) / (num2 * a)).toFixed(1);
		console.log(`x1 = ${x1} and x2 = ${x2}`);
	} else {
		console.log('No solution'); 
	}
}
