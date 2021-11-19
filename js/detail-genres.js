fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=809187852af3a04706d10c0477580eec`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data.genres.name);
    
        // URGENTE aca tengo que hacer que dependiendo de que genero decidan, aparezca ese 

        for (let i = 0; i < 1; i++){
            document.querySelector('.search').innerHTML += `
            <h1>${data.genres[i].name}</h1>
            `;
        }

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })
