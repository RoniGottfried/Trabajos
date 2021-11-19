let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get("search")

let key = "809187852af3a04706d10c0477580eec"

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=es`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })








fetch(`https://api.themoviedb.org/3/genre/${busqueda}?api_key=${key}&language=es`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
