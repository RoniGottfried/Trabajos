// Películas Endpoint: https://api.themoviedb.org/3/genre/movie/list   

// Series Endpoint: https://api.themoviedb.org/3/genre/tv/list   

window.addEventListener('load', function(){

// Obteniendo qs

    let queryString = location.search; 

    let qsToObject = new URLSearchParams(queryString);
  
    let id = qsToObject.get('id');
    


// Generos Peliculas
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=809187852af3a04706d10c0477580eec&language=es`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        for (let i = 0; i < 15; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article class="art-peliculas-generos"> 
                <a href="./detail-genres.html?idGenero=${data.genres[i].id}&genero=${data.genres[i].name}" class="titulos-inicio-generos" > ${data.genres[i].name} </a>
            </article>
            `;
    }
        
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })



// Generos-series
fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=809187852af3a04706d10c0477580eec&language=es`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        for (let i = 0; i < 15; i++){
            document.querySelector('.series-populares').innerHTML += `
            <article class="art-series-generos"> 
                <a href="./detail-genres.html" class="titulos-inicio-generos" > ${data.genres[i].name} </a>
            </article>
            `;
        }
        
    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

})

    