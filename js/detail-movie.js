
//  Manipulando la query 
    let queryString = location.search; 

    let qsToObject = new URLSearchParams(queryString);
  
    let movie_id = qsToObject.get('movie_id');

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
                        <img class="portada-pelicula" src="" alt="portada-shrek">  
                    </section>
        
                    <section class="peli">
                        <article>
                            <h1 class="titulo-peli">Shrek Para Siempre</h1>
                            <p>| Calificacion: 4.8 | Genero: <a href="detail-genres.html">Comedia</a> | Duracion: 1hr 33m | <a href="favourite.html"><i class="far fa-heart"></i></a> </p>
                        </article>
                
                        <article class="bloque-sinopsis-peli">
                            <p class="sinopsis">
                            Instalado en su vida matrimonial y totalmente domesticado, Shrek empieza a extrañar los días en los que él se sentía como un verdadero ogro. Engañado para firmar un contrato con el tortuoso Rumpelstiltskin, él se encuentra a sí mismo en una versión alterna de Muy Muy Lejano, donde los ogros son cazados, Rumpelstiltskin manda, y él y Fiona nunca se conocieron. Shrek debe hallar la forma de cancelar el contrato para restaurar su mundo y reclamar su amor verdadero.
                            </p>
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