window.addEventListener('load', function(){

    let queryString = location.search; 

    let qsToObject = new URLSearchParams(queryString);
  
    let id = qsToObject.get('id');

// series populares 
fetch(`https://api.themoviedb.org/3/tv/popular?api_key=809187852af3a04706d10c0477580eec`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        for (let i = 0; i < 6; i++){
            document.querySelector('.series-populares').innerHTML += `
            <article class="art-peliculas"> 
                   <a href="detail-serie.html?id=${data.results[i].id}">
                        <img class= "img-home" src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="caratula-vis-a-vis">
                   </a>
                   <h2 class="titulos-inicio" >${data.results[i].original_name}</h2>
                   <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
               </article>
            `;
        }

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

// peliculas populares
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        for (let i = 0; i < 6; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article class="art-peliculas"> 
                   <a href="detail-movie.html?id=${data.results[i].id}">
                   <img class= "img-home" src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="caratula-vis-a-vis">
                   </a>
                   <h2 class="titulos-inicio" >${data.results[i].title}</h2>
                   <p>Fecha de estreno: ${data.results[i].release_date}</p>
            </article>
            `;
        }

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

// lo mas visto 
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=809187852af3a04706d10c0477580eec`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        for (let i = 0; i < 6; i++){
            document.querySelector('.lomasvisto-populares').innerHTML += `
            <article class="art-peliculas"> 
                   <a href="detail-serie.html?id=${data.results[i].id}">
                   <img class= "img-home" src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt="caratula-vis-a-vis">
                   </a>
                   <h2 class="titulos-inicio" >${data.results[i].title}</h2>
                   <p>Fecha de estreno: ${data.results[i].release_date}</p>
               </article>
            `;
        }
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
})

