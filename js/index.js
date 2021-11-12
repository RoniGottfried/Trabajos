fetch(`https://api.themoviedb.org/3/movie/76341?api_key=2a48645239a84bc2697fe8c66fc6dc00`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);

        /* for(let i = 0; i < datos; i++){   
            document.querySelector('section').innerHTML += `
                <article>
                    <h3>${datos.data[i].title}</h3>
                    <div><img src="${datos.data[i].images.original.url}" alt="Imagen del GIF"></div>
                    <a href="detalle.html?idGif=${datos.data[i].id}">Ver más información</a>
                </article>`;
        }  */
       /*  document.querySelector('art-genres') */
        /* for(let i = 0; i < datos.data.length; i++){   
            document.querySelector('section').innerHTML += `
                <article>
                    <h3>${datos.data[i].title}</h3>
                    <div><img src="${datos.data[i].images.original.url}" alt="Imagen del GIF"></div>
                    <a href="detalle.html?idGif=${datos.data[i].id}">Ver más información</a>
                </article>
            `;   
        } */

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })



