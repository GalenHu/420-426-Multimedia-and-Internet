M.AutoInit();

/******************************* INDEX.HTML **************************************/
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

	document.getElementById("header_summary").innerHTML = info.summary;
	document.getElementById("founder").innerHTML = info.founder;
    document.getElementById("founded").innerHTML = info.founded;
    document.getElementById("ceo").innerHTML = info.ceo;
    document.getElementById("employees").innerHTML = info.employees;
};
/******************************* INDEX.HTML **************************************/

/******************************* NEXT.HTML **************************************/
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

    //countdown
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

		// Output the result
		document.getElementById("next_launch_date_utc").innerHTML = days + " : " + hours + " : "
			+ minutes + " : " + seconds;

		// If the count down is over, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("next_launch_date_utc").innerHTML = "EXPIRED";
        }
        
        
    }, 1000);
    //end of countdown

    let timestamp = next.launch_date_unix;
    date = new Date(timestamp * 1000),
    datevalues = [
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate()
    ];
console.log(next.launch_site.site_name_long)
    document.getElementById("date_next_lauch").innerHTML = (`${datevalues[0]}/${datevalues[1]}/${datevalues[2]}`);

    document.getElementById("mission_name").innerHTML = next.mission_name;

    document.getElementById("lauch_location").innerHTML = next.launch_site.site_name_long;
    
}
/******************************* END NEXT.HTML **************************************/

/******************************* PASTLAUCH.HTML **************************************/
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
	console.log(document.getElementById("pastInput").value);
	
    let pastTable = document.getElementById("pastTable");
    console.log(pastTable);
	pastTable.innerHTML = '';

	past.forEach(element => {
		let tr = document.createElement('tr')

		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');

		let flightNumber = document.createTextNode(element.flight_number);
        let timestamp = element.launch_date_unix;
        date = new Date(timestamp * 1000),
        datevalues = [
        date.getFullYear(),
        date.getMonth()+1,
        date.getDate()
        ];

        let lauchDate = document.createTextNode(`${datevalues[0]}/${datevalues[1]}/${datevalues[2]}`);
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
/******************************* END PASTLAUCH.HTML **************************************/