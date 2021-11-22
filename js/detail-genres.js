let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let generoBuscado = queryStringObj.get("genero")
let idGeneroBuscado = queryStringObj.get("idGenero")

let key = "809187852af3a04706d10c0477580eec"

document.querySelector(".search").innerHTML += `${generoBuscado}`;

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=es&with_genres=${idGeneroBuscado}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    
    for (let i = 0; i < 6; i++) {
        document.querySelector(".peliculas-populares").innerHTML += `
        <article class="art-peliculas"> 
            <a href="detail-movie.html?id=${data.results[i].id}">
                <img class= "img-home" src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="caratula">
            </a>
            <h2 class="titulos-inicio" >${data.results[i].original_title}</h2>
        </article>
        `;
    }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=es&with_genres=${idGeneroBuscado}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    
    for (let i = 0; i < 6; i++) {
        document.querySelector(".series-populares").innerHTML += `
        <article class="art-peliculas"> 
            <a href="detail-movie.html?id=${data.results[i].id}">
                <img class= "img-home" src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="caratula">
            </a>
            <h2 class="titulos-inicio" >${data.results[i].original_title}</h2>
        </article>
        `;
    }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })




