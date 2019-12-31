function makeNumber(str) {
	let result = '';
	
	for(let i = 0; i < str.length; i++) {
		if(!isNaN(str[i])) {
			result += str[i];
		}
	}
	
	return result;	
}

makeNumber('erer384jjjfd123'); 
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 
