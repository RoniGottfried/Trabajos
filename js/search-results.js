
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

queryStringObj.get('search');





fetch(`https://api.themoviedb.org/3/tv/popular?api_key=809187852af3a04706d10c0477580eec`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        // URGENTE ver como hacer para que dependiendo de que busquen, aparezca por el input

        
        
        
        for (let i = 0; i < 6; i++){
            document.querySelector('.peliculas-populares').innerHTML += `
            <article class="art-peliculas"> 
                   <p>${data.genres[i].name}</p>
               </article>
            `;
        }

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

