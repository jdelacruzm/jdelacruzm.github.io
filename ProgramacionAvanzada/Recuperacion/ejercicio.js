const rutaImagen='https://image.tmdb.org/t/p/w1280';
const apiConsulta='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&include_adult=false&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=';
const contenedor= document.getElementById('contenedor');
var peliculaCorrecta=[];
var listadoPeliculas=[];
 
DevolverPeliculas();
 
async function DevolverPeliculas()
{
    let listaRandom= Math.floor(Math.random()*20)+1;
    let query= await fetch(apiConsulta+listaRandom);
    let data= await query.json();
    console.log(data);
    await MostrarResultados(data.results);
}
 
function MostrarResultados(peliculas)
{
    listadoPeliculas=peliculas;
    let peliculaSeleccionada= Math.floor(Math.random()*20)+1;
        let peliculaCorrecta=peliculas[peliculaSeleccionada];
        let div= document.createElement('div');
        div.innerHTML=`<img src='${rutaImagen +peliculaCorrecta.poster_path }'/>`;
        contenedor.appendChild(div);
}

function GenerarRespuestaas(){
    
}
