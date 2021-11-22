let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get()

let key = "809187852af3a04706d10c0477580eec"

document.querySelector(".search").innerHTML += `${busqueda}`;

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=es&with_genres=${busqueda}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        document.querySelector(".search").innerHTML += `hola`;

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })





