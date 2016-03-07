// function getNewDate(){
// 	return new Date()
// }
 
// var clock = new Date();
// var secs = clock.getSeconds();


// console.log(secs);

// myDate.getSeconds();

// var intervalID = window.setInterval(getNewSeconds, 1000);

// function getNewSeconds(){
// 	return (new Date().getSeconds())
// }

// var intervalID = window.setInterval(getNewMinutes, 60000);

// function getNewMinutes() {
// 	return (new Date().getMinutes())
// }

// var intervalID = window.setInterval(getNewHours, 3600000)

// function getNewHours() {
// 	return (new Date().getHours())
// }

// var clock1 = document.querySelector(".clock1");
// clock1.innerHTML = (getNewHours) + ":" + (getNewMinutes) + ":" + (getNewSeconds);


function getNewTime() {

	var hours = new Date().getHours()
	var minutes = (new Date().getMinutes() < 10) ? "0" + new Date().getMinutes() : new Date().getMinutes();
	var seconds = (new Date().getSeconds() < 10) ? "0" + new Date().getSeconds() : new Date().getSeconds();
	hours = (hours >= 12) ? hours - 12 : hours;
	hours = (hours < 10) ? "0" + hours : hours;
	var theCurrentTime = hours + ":" + minutes + ":" + seconds;
	var theCurrentTimeColorful = "#" + hours + minutes + seconds;


	var clock1 = document.querySelector(".clock1");
	var clock2 = document.querySelector(".clock2");

	clock1.innerHTML = theCurrentTime; 
	clock2.innerHTML = theCurrentTimeColorful;
	clock2.style.backgroundColor = theCurrentTimeColorful;

}
	window.setInterval(getNewTime, 1000);





