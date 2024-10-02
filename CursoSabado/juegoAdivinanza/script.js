const uri="https://pokeapi.co/api/v2/pokemon/";
const imagen= document.getElementById("pokemon");
const contenedor= document.getElementById("contenedorRespuestas");
var nombreCorrecto="";
const mensaje= document.getElementById("mensaje");

PrepararJuego();

async function ObtenerPokemon(){
    let id=Math.floor(1+Math.random()*151);
    console.log(id);
    let respuesta= await fetch(uri + `/${id}`);
    let dato= await respuesta.json();
    return dato;
}

async function PrepararJuego(){
    let pokemon= await ObtenerPokemon();
    imagen.src= pokemon.sprites.other.dream_world.front_default;
    nombreCorrecto= pokemon.name;
    let respuestasIncorrectas=[];
    for (let i = 0; i < 3; i++) {
        let otroPokemon= await ObtenerPokemon();
        respuestasIncorrectas.push(otroPokemon.name);
    }
    const todasRespuestas=[nombreCorrecto,...respuestasIncorrectas];
    todasRespuestas.sort(()=>
        Math.random()-0.5
    );
     CrearRespuestas(todasRespuestas);
}

 function CrearRespuestas(respuestas){
    for(let i=0;i<respuestas.length;i++){
        const btn= document.createElement('button');
        btn.textContent=respuestas[i];
        btn.classList.add("opcion");
        btn.addEventListener('click', ()=>{
            EvaluarRespuesta(respuestas[i]);
        });
        contenedor.appendChild(btn); 
    }
}

function EvaluarRespuesta(pokemonSeleccionado)
{
    if (pokemonSeleccionado===nombreCorrecto)
    {
        mensaje.textContent="Respuesta Correcta!";
        mensaje.style.color="green";
    }
    else{
        mensaje.textContent="Respuesta incorrecta";
        mensaje.style.color="red";
    }
}