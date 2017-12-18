// Math.random()*(max-min)+min

let num = parseInt(Math.random()*(10-1)+1);

console.log(num);

function getRandom(min,max,length){
	let arr = [];
	let hash = {};
	let num ;
	for(let i = 0;i<length;i++) {
		num = parseInt(Math.random()*(max-min)+min);
		arr[i] = num;
	}
	return arr.sort() ;
}

console.log(getRandom(1,10,8));
