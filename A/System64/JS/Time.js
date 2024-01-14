function UpdateTime() {
	let dateObj = new Date();
	let dayz = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let monthz = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	let mothz = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let dayVal = dayz[dateObj.getDay()];
	let dateVal = dateObj.getDate();
	let yearVal = dateObj.getFullYear();
	let secVal = dateObj.getSeconds();
	let minVal = dateObj.getMinutes();
	let hourVal = dateObj.getHours();
	let cHour = hourVal;
	let monthVal = monthz[dateObj.getMonth()];
	let mothVal = mothz[dateObj.getMonth()];
	let unitVal = hourVal >= 12 ? 'PM' : 'AM';
	let u = document.getElementById("time2");
	let v = document.getElementById("time");
	let d = document.getElementById("greeting");
	let a = document.getElementById("unit");
	let x = document.getElementById("full");
	let time = document.getElementById("time");

	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	minVal = checkTime(minVal);
	hourVal = checkTime(hourVal);

	if (hourVal <= 12) {
		d.innerHTML = ('Good Morning!');
	} else if (hourVal <= 17) {
		d.innerHTML = ('Good Afternoon!');
	} else if (hourVal <= 25) {
		d.innerHTML = ('Good Night!');
	}

	if (cHour >= 13 && cHour <= 24) {
		cHour = String(((cHour - 1) % 12) + 1);
	}

	if (cHour >= 0 && cHour <= 9) {
		cHour = cHour.toString().padStart(2, '0')
	}

	if (secVal >= 0 && secVal <= 9) {
		secVal = secVal.toString().padStart(2, '0');
	}

	if (cHour === "00") {
		cHour = "12";
	}

	a.innerHTML = unitVal;
	u.innerHTML = cHour + ":" + minVal + ":" + secVal;
	x.innerHTML = dayVal + "," + mothVal + " " + dateVal + "," + yearVal;
	v.innerHTML = cHour + ':' + minVal + "<span style='font-size:5px;'>" + unitVal + "</span>" + '<br>' + monthVal + "/" + dateVal + "/" + yearVal;

	time.setAttribute('title', `${cHour + ":" + minVal + " " + unitVal}\n${dayVal + ", " + mothVal + " " + dateVal + ", " + yearVal}`)
}


UpdateTime();
setInterval(UpdateTime, 1000);
//# sourceURL=MagnusWare