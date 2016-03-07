// function getNewDate(){
// 	return new Date()
// }
 
// var clock = new Date();
// var secs = clock.getSeconds();


// console.log(secs);

// myDate.getSeconds();

var intervalID = window.setInterval(getNewSeconds, 1000);

function getNewSeconds(){
	// console.log(new Date().getSeconds())
}

var intervalID = window.setInterval(getNewMinutes, 60000);

function getNewMinutes() {
// 	console.log(new Date().getMinutes())
}

var intervalID = window.setInterval(getNewHours, 3600000)

function getNewHours() {
	// console.log(new Date().getHours())
}