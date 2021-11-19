window.addEventListener('load', function(){

    let queryString = location.search; 

    let qsToObject = new URLSearchParams(queryString);
  
    let tv_id = qsToObject.get('id');

    console.log(tv_id);

fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=809187852af3a04706d10c0477580eec`)  
    
 .then(function(response){
    return response.json();
 })
 .then(function(data){
    console.log(data);

    for (let i = 0; i < 1; i++){
        document.querySelector('.bloque-serie').innerHTML += `
            <section class="imagen-serie">
                <img class="portada-serie" src="https://image.tmdb.org/t/p/w342${data.poster_path}" alt="foto la casa de papel"> 
            </section>
         
            <section class="serie">
                <article>
                    <h1 class="tituloserie">${data.name}</h1>
                     <p>| Calificacion: ${data.popularity} | Genero: 
                        <a href="detail-genres.html">
                         ${data.genres.length} 
                        </a> | Estreno: ${data.first_air_date}
                        <a href="favourite.html">
                        |<i class="far fa-heart"></i></a>|
                     </p>
                
                </article>
            
             <article class="bloque-sinopsis">
                 <p class="sinopsis">${data.overview}</p>
             </article>
            </section> 
        `;

    }
 })
 .catch(function(error){
    console.log(error);
})
  
 //   Extra
 fetch(`https://api.themoviedb.org/3/tv/popular?api_key=809187852af3a04706d10c0477580eec`)
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
                <h2 class="titulos-inicio" >${data.results[i].original_name}</h2>
                <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
            </article>
         `;
     }

 })
 .catch(function(error){
     console.log(`El error fue: ${error}`);
 })
})