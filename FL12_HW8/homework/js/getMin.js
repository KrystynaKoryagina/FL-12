function getMin() {
	let min;
	
	for (let i = 0; i < arguments.length; i++) {
		if (!min) { 
			min = arguments[i];
		} else if (min >= arguments[i]) {
			min = arguments[i];
		}
	}

	return min;
}

getMin(3, 0, -3); 

