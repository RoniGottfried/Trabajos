window.addEventListener('load', function(){

    let favoritos = [];
    
    if (localStorage.getItem('favoritosToString')!=null) {
        
        favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
        console.log(favoritos);
       
        for(let i = 0; i < favoritos.length; i++){
    
            console.log(favoritos[i]);
    
            fetch(`https://api.themoviedb.org/3/tv/popular${favoritos[i]}?api_key=809187852af3a04706d10c0477580eec`)
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
        
    })


    