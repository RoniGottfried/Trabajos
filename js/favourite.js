window.addEventListener('load', function(){

    let favoritos = [];
    
    // Recuperar los ids del storage.
    let recuperoStorage = localStorage.getItem('favoritosToString');
    let favoritosToString = JSON.parse(recuperoStorage);


    if (localStorage.getItem('favoritosToString')!=null) {
        
        let favoritosObtenidos = JSON.parse(localStorage.getItem('favoritosToString'));
        console.log(favoritosObtenidos);
       
        for(let i = 0; i < favoritosObtenidos.length; i++){
    
            console.log(favoritosObtenidos[i]);
    
            fetch(`https://api.themoviedb.org/3/movie/${favoritosObtenidos[i]}?api_key=809187852af3a04706d10c0477580eec`)
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                                        
                    document.querySelector('section').innerHTML += `
                        <article>
                            <h3>${datos.data.title}</h3>
                            <div><img src="${datos.data.images.original.url}" alt="Imagen del GIF"></div>
                            <a href="detalle.html?idGif=${datos.data.id}">Ver más información</a>
                        </article>
                    `;
    
                })
                .catch(function(error){
                    console.log(`El error fue: ${error}`);
                })
    
        }
    
    }
        
    // else{

    //     document.querySelector('section').innerHTML += `
    //         <article>
    //             <h3>No has agregado contenido a favoritos</h3>
    //         </article>
    //     `;

    // }
})


    