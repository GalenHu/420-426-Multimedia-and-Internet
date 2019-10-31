const url = "https://api.spacexdata.com/v3/"; //The root of the SpaceX API
const nextLauch = "https://api.spacexdata.com/v3/launches/next";
const pastLauch = "https://api.spacexdata.com/v3/launches/past?limit=3";
const rockets = "https://api.spacexdata.com/v3/rockets";


fetch(url)
    .then(response => response.json())
    .then(data =>{
        doStuff(data)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff(data){
    //If the request was succesfull then data will have everything you asked for.
    console.log(data)
}

fetch(nextLauch)
    .then(response => response.json())
    .then(data =>{
        doStuff(data)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff(data){
    //If the request was succesfull then data will have everything you asked for.
    console.log(data)
}

fetch(pastLauch)
    .then(response => response.json())
    .then(data =>{
        doStuff(data)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff(data){
    //If the request was succesfull then data will have everything you asked for.
    console.log(data)
}


fetch(rockets)
    .then(response => response.json())
    .then(data =>{
        doStuff(data)
    })

    .catch(function(error){
        //If there is any error you will catch them here
        console.log(error);
    });

function doStuff(data){
    //If the request was succesfull then data will have everything you asked for.
    console.log(data)
}
