window.addEventListener('load', function(){
//  Manipulando la query 
    let queryString = location.search; 

    let qsToObject = new URLSearchParams(queryString);
  
    let movie_id = qsToObject.get('id');

    console.log(movie_id);
   
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=809187852af3a04706d10c0477580eec`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            for (let i = 0; i < 1; i++){
                document.querySelector('.bloque-pelicula').innerHTML += `
                    <section class="imagen-pelicula"> 
                        <img class="portada-pelicula" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="portada-shrek">  
                    </section>
        
                    <section class="peli">
                        <article>
                            <h1 class="titulo-peli">${data.title}</h1>
                            <p>| Calificacion: ${data.popularity} | Genero: <a href="detail-genres.html">${data.genres.length}</a> | Duracion: ${data.runtime}| <a class= "fav" href="favourite.html"> Agregar a favoritos</a>|</p>
                        </article>
                
                        <article class="bloque-sinopsis-peli">
                            <p class="sinopsis"> ${data.overview}</p>
                        </article>
                    </section>
                `;
            }
        })
        .catch(function(error){
             console.log(error);
        })

    
 // Extra 
 fetch(`https://api.themoviedb.org/3/movie/popular?api_key=809187852af3a04706d10c0477580eec`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    
        console.log(data);
    
     for (let i = 0; i < 6; i++){
         document.querySelector('.peliculas-populares').innerHTML += `
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