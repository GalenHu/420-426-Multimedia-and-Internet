M.AutoInit();

<<<<<<< HEAD
/******************************* INDEX.HTML **************************************/
=======
const url = "https://api.spacexdata.com/v3/"; //The root of the SpaceX API


const rockets = "https://api.spacexdata.com/v3/rockets";

//Header
>>>>>>> master
const infoLink = "https://api.spacexdata.com/v3/info";	//info
fetch(infoLink)
	.then(response => response.json())
	.then(info => {
		RequestInfo(info)
	})

	.catch(function (error) {
		//If there is any error you will catch them here
		console.log(error);
	});

function RequestInfo(info) {
	//If the request was succesfull then data will have everything you asked for.
<<<<<<< HEAD

	document.getElementById("header_summary").innerHTML = info.summary;
	document.getElementById("founder").innerHTML = info.founder;
    document.getElementById("founded").innerHTML = info.founded;
    document.getElementById("ceo").innerHTML = info.ceo;
    document.getElementById("employees").innerHTML = info.employees;
};
/******************************* INDEX.HTML **************************************/

/******************************* NEXT.HTML **************************************/
=======
	console.log(info)

	document.getElementById("header_summary").innerHTML = info.summary;
	document.getElementById("founder").innerHTML = info.founder;
	document.getElementById("founded").innerHTML = info.founded;
};

//Timer of next lauch
>>>>>>> master
fetch("https://api.spacexdata.com/v3/launches/next") //next lauch
	.then(response_next => response_next.json())
	.then(next => {
		doStuff3(next)
	})

	.catch(function (error) {
		//If there is any error you will catch them here
		console.log(error);
	});

function doStuff3(next) {
	//If the request was succesfull then data will have everything you asked for.
<<<<<<< HEAD

    //countdown
=======
	console.log(next)

>>>>>>> master
	let countDownDate = new Date(next.launch_date_utc).getTime();

	let x = setInterval(function () {

		// Get today's date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		document.getElementById("next_launch_date_utc").innerHTML = days + "Day(s) " + hours + "Hour(s) "
			+ minutes + "Minute(s) " + seconds + "Second(s) ";

		// If the count down is over, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("next_launch_date_utc").innerHTML = "EXPIRED";
		}
	}, 1000);
}

let input = document.getElementById("pastInput");
input.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();


		const pastLauch = "https://api.spacexdata.com/v3/launches/past?limit=";
		fetch(pastLauch + document.getElementById("pastInput").value)
			.then(pastResponse => pastResponse.json())
			.then(past => {
				RequestPast(past)
			})

			.catch(function (error) {
				//If there is any error you will catch them here
				console.log(error);
			});

	}
});

function RequestPast(past) {
	//If the request was succesfull then data will have everything you asked for.
	console.log(past)
	console.log(document.getElementById("pastInput").value);
	
	let pastTable = document.getElementById("pastTable");
	pastTable.innerHTML = '';

	past.forEach(element => {
		let tr = document.createElement('tr')

		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');

		let flightNumber = document.createTextNode(element.flight_number);
		console.log(element.flight_number)
		let lauchDate = document.createTextNode(element.launch_date_utc);
		let missionName = document.createTextNode(element.mission_name);
		let detail = document.createTextNode(element.details);

		td1.appendChild(flightNumber);
		td2.appendChild(lauchDate);
		td3.appendChild(missionName);
		td4.appendChild(detail);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		pastTable.appendChild(tr);
	});
}
