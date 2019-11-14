M.AutoInit();

const url = "https://api.spacexdata.com/v3/"; //The root of the SpaceX API


const rockets = "https://api.spacexdata.com/v3/rockets";

//Header
const infoLink = "https://api.spacexdata.com/v3/info";	//info
 fetch(infoLink)
			.then(response => response.json())
			.then(info =>{
					RequestInfo(info)
			})

			.catch(function(error){
					//If there is any error you will catch them here
					console.log(error);
			});

	function RequestInfo(info){
			//If the request was succesfull then data will have everything you asked for.
			console.log(info)
			
			document.getElementById("header_summary").innerHTML = info.summary;
			document.getElementById("founder").innerHTML = info.founder;
			document.getElementById("founded").innerHTML = info.founded;
	};

	//Timer of next lauch
fetch("https://api.spacexdata.com/v3/launches/next") //next lauch
    .then(response_next => response_next.json())
    .then(next =>{
        doStuff3(next)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff3(next){
    //If the request was succesfull then data will have everything you asked for.
    console.log(next)

	let countDownDate = new Date(next.launch_date_utc).getTime();

	let x = setInterval(function() {

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

const pastLauch = "https://api.spacexdata.com/v3/launches/past?limit=3";
fetch(pastLauch)
			.then(pastResponse => pastResponse.json())
			.then(past =>{
					RequestPast(past)
			})

			.catch(function(error){
					//If there is any error you will catch them here
					console.log(error);
			});

	function RequestPast(past){
			//If the request was succesfull then data will have everything you asked for.
			console.log(past)
			
			// document.getElementById("header_summary").innerHTML = info.summary;
			// document.getElementById("founder").innerHTML = info.founder;
			// document.getElementById("founded").innerHTML = info.founded;
	};