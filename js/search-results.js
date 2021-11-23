// accedo a la query para saber que busco la persona
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get("search")

let titulo = document.querySelector(".series")

// agrego lo que busco la persona a el h1
titulo.innerHTML += `Busquedas encontradas para: ${busqueda}`;

let api = "809187852af3a04706d10c0477580eec";


// primera fila
fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api}&language=es&query=${busqueda}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

    if (data.results == 0 ) {
        titulo.innerHTML = `
            <article class="art-peliculas"> 
                <p>No se encontraron resultados para la busqueda de: ${busqueda}</p>
            </article>
            `;
        document.querySelector(".borrar1").innerHTML = ""
        document.querySelector(".borrar2").innerHTML = ""
    } else{
        for (let i = 0; i < 6; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article class="art-peliculas"> 
                <a href="detail-movie.html?idGenero=${data.results[i].id}">
                    <img class= "img-home" src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="caratula">
                </a>
                <h2 class="titulos-inicio" >${data.results[i].original_title}</h2>
            </article>
            `;
        }
    }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    // segunda fila

    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api}&language=es&query=${busqueda}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        for (let i = 0; i < 6; i++){
            document.querySelector('.series-populares').innerHTML += `
            <article class="art-peliculas"> 
                <a href="detail-movie.html?id=${data.results[i].id}">
                    <img class= "img-home" src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="caratula">
                </a>
                <h2 class="titulos-inicio" >${data.results[i].name}</h2>
            </article>
            `;
        }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

    
    

