const url = "https://api.spacexdata.com/v3/"; //The root of the SpaceX API
const nextLauch = "https://api.spacexdata.com/v3/launches/next";
const pastLauch = "https://api.spacexdata.com/v3/launches/past?limit=3";
const rockets = "https://api.spacexdata.com/v3/rockets";


fetch(url)
    .then(response1 => response1.json())
    .then(data =>{
        doStuff1(data)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff1(data){
    //If the request was succesfull then data will have everything you asked for.
    console.log(data)
}

fetch(nextLauch)
    .then(response2 => response2.json())
    .then(nLauch =>{
        doStuff2(nLauch)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });
function doStuff2(nLauch){
    //If the request was succesfull then data will have everything you asked for.
    console.log(nLauch)

    let next = document.getElementById("next");

    next.innerHTML = nLauch.mission_name;
}

fetch(pastLauch)
    .then(response3 => response3.json())
    .then(pLauch =>{
        doStuff3(pLauch)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff3(pLauch){
    //If the request was succesfull then data will have everything you asked for.
    console.log(pLauch)

    let past = document.getElementById("past");
    past.innerHTML = pLauch[0].flight_number
}


// fetch(rockets)
//     .then(response4 => response4.json())
//     .then(rocket =>{
//         doStuff4(rocket)
//     })

//     .catch(function(error){
//         //If there is any error you will catch them here
//         console.log(error);
//     });

// function doStuff4(rocket){
//     //If the request was succesfull then data will have everything you asked for.
//     console.log(rocket)
// }
