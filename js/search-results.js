// accedo a la query para saber que busco la persona
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get("search")

let titulo = document.querySelector(".search")

// agrego lo que busco la persona a el h1
titulo.innerHTML += `Busquedas encontradas para: ${busqueda}`;

let api = "809187852af3a04706d10c0477580eec";



fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api}&language=es&query=${busqueda}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        for (let i = 0; i < 5; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article class="art-peliculas"> 
                <a href="detail-movie.html?id=${data.results[i].id}">
                    <img class= "img-home" src="https://image.tmdb.org/t/p/w342/${data.results[i].backdrop_path}" alt="caratula">
                </a>
                <h2 class="titulos-inicio" >${data.results[i].name}</h2>
            </article>
            `;
        }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

