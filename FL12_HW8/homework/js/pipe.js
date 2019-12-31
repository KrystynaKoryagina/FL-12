function addOne(x) {
	return x + 1;
}
  
function pipe(...args) {
	return args.reduce((num, func) => func(num));
}

pipe(1, addOne);
pipe(1, addOne, addOne);
  