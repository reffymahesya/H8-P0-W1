console.log('Counter 1-100')

var i

for (i=0; i<=100; i++){
	if (i%2 == 0){
		console.log('GENAP')
	} else {
		console.log('GANJIL')
	}
}

console.log('Counter Penambahan 2')

var i

for (i=1; i<=100; i+=2){
	if (i%3 == 0){
		console.log(i + ' KELIPATAN 3')
	}
	else {
		console.log(' ')
	}
}

console.log('Counter Penambahan 5')

var i

for (i=1; i<=100; i+=5){
	if (i%6 == 0){
		console.log(i + ' KELIPATAN 6')
	}
	else {
		console.log(' ')
	}
}

console.log('Counter Penambahan 9')

var i

for (i=1; i<=100; i+=9){
	if (i%10 == 0){
		console.log(i + ' KELIPATAN 10')
	}
	else {
		console.log(' ')
	}
}