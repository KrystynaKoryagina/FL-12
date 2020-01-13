function convert(...args) {
	let result = [];

	for(let value of args) {
		if(typeof value === 'string') {
			result.push(Number(value));
		} else {
			result.push(String(value));
		}
	}

	return result; 
}
//convert('1', 2, 3, '4'); // [1, '2', '3', 4]

function executeforEach(arr, fn) {
	for(let value of arr) {
		fn(value);
	}
}
//executeforEach([1,2,3], function(el) {console.log(el * 2)}); // logs 2 4 6

function mapArray(arr, fn) {
	let result = [];

	executeforEach(arr, value => {
		if( typeof value === 'string' ) {
			value = Number(value);
		}
		result.push(fn(value));
	});

	return result;
}
//mapArray([2, '5', 8], function(el) {return el + 3}); // returns [5, 8, 11]

function filterArray(arr, fn) {
	let result = [];

	executeforEach(arr, value => {
		if( fn(value) ) {
			result.push(value);
		}
	});

	return result;
}
//filterArray([3, 5, 7], function(el) { return el % 2 === 0 }); 
// returns [2, 8]

function flipOver(str) {
	let reverseStr = '';

	for(let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}

	return reverseStr;
}
//flipOver('hey world'); // 'dlrow yeh'

function makeListFromRange(arr) {
	let result = [];

	while(arr[0] <= arr[1]) {
		result.push(arr[0]);
		arr[0]++;
	}

	return result;
}
//makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]

function getArrayOfKeys(arr, prop) {
	let result = [];

	executeforEach(arr, obj => result.push(obj[prop]));

	return result;
}
// const actors = [
// 	{ name: 'tommy', age: 36 },
// 	{ name: 'lee', age: 28 }
// ];
//getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]

function substitute(arr) {
	const num = 30;

	return mapArray(arr, value => value < num ? '*' : value);
}
//substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

function getPastDay(date, day) {
	const currentDay = date.getDate(),
	pastDate = new Date().setDate(currentDay - day);
	
	return new Date(pastDate).getDate();
}
// const date = new Date(2019, 0, 2);
// getPastDay(date, 1); // 1, (1 Jan 2019)
// getPastDay(date, 2); // 31, (31 Dec 2018)
// getPastDay(date, 365); // 2, (2 Jan 2018)

function formatDate(d) {
	const TEN = 10,
	date = new Date(d),
	year = date.getFullYear(),
	month = date.getMonth() + 1,
	day = date.getDate(),
	hour = date.getHours() > TEN ? date.getHours() : `0${date.getHours()}`,
	min = date.getMinutes() > TEN ? date.getMinutes() : `0${date.getMinutes()}`;

	return `${year}/${month}/${day} ${hour}:${min}`;
}
//formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"
//formatDate(new Date()); // "2020/1/7 12:56" // gets current local time
