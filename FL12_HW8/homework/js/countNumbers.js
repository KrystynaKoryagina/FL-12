function makeNumber(str) {
	let result = '';

	for(let i = 0; i < str.length; i++) {
		if(!isNaN(str[i])) {
			result += str[i];
		}
	}
	
	return result;	
}

function countNumbers(str) {
	let result = {};

	const numStr = makeNumber(str);
	const numArr = numStr.split('').sort();
	
	numArr.forEach(num => {
		const numFilter = numArr.filter(item => item === num);
		result[num] = numFilter.length;
	});

	return result;
}

countNumbers('erer384jj4444666888jfd123'); 
countNumbers('jdjjka000466588kkkfs662555'); 
countNumbers(''); 
