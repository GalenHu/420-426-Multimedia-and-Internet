//this .js was create because for some reason, when i put this in main.js, it doesnt work
/******************************* ROCKETS.HTML **************************************/

M.AutoInit();

const rocketLink = "https://api.spacexdata.com/v3/rockets";


fetch(rocketLink)
	.then(getRocket => getRocket.json())
	.then(rocket => {
		RequestRocket(rocket)
	})

	.catch(function (error) {
		//If there is any error you will catch them here
		console.log(error);
	});

function RequestRocket(rocket) {
	//If the request was succesfull then data will have everything you asked for.

    let rocketsTable = document.getElementById("rocketsTable");
    console.log("hey");
    console.log(rocket);

    document.getElementById("name1").innerHTML = rocket[0].rocket_name;
    document.getElementById("desc1").innerHTML = rocket[0].description;
    document.getElementById("flight1").innerHTML = rocket[0].first_flight;
    document.getElementById("succ1").innerHTML = "Success Rate: " + rocket[0].success_rate_pct;
    document.getElementById("cost1").innerHTML = "Cost per launch: " + rocket[0].cost_per_launch;
    document.getElementById("wiki1").innerHTML = "Wikipedia: " + rocket[0].wikipedia;

    document.getElementById("name2").innerHTML = rocket[1].rocket_name;
    document.getElementById("desc2").innerHTML = rocket[1].description;
    document.getElementById("flight2").innerHTML = rocket[1].first_flight;
    document.getElementById("succ2").innerHTML = "Success Rate: " + rocket[1].success_rate_pct;
    document.getElementById("cost2").innerHTML = "Cost per launch: " + rocket[1].cost_per_launch;
    document.getElementById("wiki2").innerHTML = "Wikipedia: " + rocket[1].wikipedia;

    document.getElementById("name3").innerHTML = rocket[2].rocket_name;
    document.getElementById("desc3").innerHTML = rocket[2].description;
    document.getElementById("flight3").innerHTML = rocket[2].first_flight;
    document.getElementById("succ3").innerHTML = "Success Rate: " + rocket[2].success_rate_pct;
    document.getElementById("cost3").innerHTML = "Cost per launch: " + rocket[2].cost_per_launch;
    document.getElementById("wiki3").innerHTML = "Wikipedia: " + rocket[2].wikipedia;

    document.getElementById("name4").innerHTML = rocket[3].rocket_name;
    document.getElementById("desc4").innerHTML = rocket[3].description;
    document.getElementById("flight4").innerHTML = rocket[3].first_flight;
    document.getElementById("succ4").innerHTML = "Success Rate: " + rocket[3].success_rate_pct;
    document.getElementById("cost4").innerHTML = "Cost per launch: " + rocket[3].cost_per_launch;
    document.getElementById("wiki4").innerHTML = "Wikipedia: " + rocket[3].wikipedia;

};