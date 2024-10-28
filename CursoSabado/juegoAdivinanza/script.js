const uri="https://pokeapi.co/api/v2/pokemon/";
const imagen= document.getElementById("pokemon");
const contenedor= document.getElementById("contenedorRespuestas");
var nombreCorrecto="";
const mensaje= document.getElementById("mensaje");
const aciertosDiv= document.getElementById("aciertos");
const erroresDiv= document.getElementById("errores");
const btnSiguiente= document.getElementById("btnSiguiente");
var aciertos=0;
var errores=0;
var listado=[];
var cantidad=10;

function MantenerEstado()
{
    // localStorage
    let aciertosAcumulados= localStorage.getItem("aciertos");
    if (aciertosAcumulados===null)
    {
        localStorage.setItem("aciertos", aciertos);
    }
    else{
        aciertos= parseInt(aciertosAcumulados);
    }

    let erroresAcumulados= localStorage.getItem("errores");
    if (erroresAcumulados===null)
    {
        localStorage.setItem("errores", errores);
    }
    else{
        errores= parseInt(erroresAcumulados);
    }
    Imprimir();
}

btnSiguiente.addEventListener('click',()=>{
    PrepararJuego();
    btnSiguiente.disabled=true;
});

MantenerEstado();
PrepararJuego();

async function ObtenerPokemon(){
    let id=Math.floor(1+Math.random()*cantidad);
    console.log(id);
    let respuesta= await fetch(uri + `/${id}`);
    let dato= await respuesta.json();
    return dato;
}

async function PrepararJuego(){
    mensaje.textContent="";
    let pokemon="";
    let flag=false;
    while(!flag)
    {
        pokemon= await ObtenerPokemon();
        let repetido=listado.some((x)=>x===pokemon.name);
        flag=!repetido;
    }
    listado.push(pokemon.name);
    let ruta=pokemon.sprites.other.home.front_default;
    imagen.src= ruta;
        nombreCorrecto= pokemon.name;
        let respuestasIncorrectas=[];
        /*for (let i = 0; i < 3; i++) {
            let otroPokemon= await ObtenerPokemon();
            respuestasIncorrectas.push(otroPokemon.name);
            respuestasIncorrectas.find
        }*/
        while (respuestasIncorrectas.length<3)
        {
            let otroPokemon= await ObtenerPokemon();
            let repetido= respuestasIncorrectas.some((x)=>x===otroPokemon.name);
            if (!repetido) respuestasIncorrectas.push(otroPokemon.name);
        }
        const todasRespuestas=[nombreCorrecto,...respuestasIncorrectas];
        todasRespuestas.sort(()=>
            Math.random()-0.5
        );
         CrearRespuestas(todasRespuestas);
}

 function CrearRespuestas(respuestas){
    contenedor.innerHTML="";
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
    BloquearRespuestas();
    if (pokemonSeleccionado===nombreCorrecto)
    {
        aciertos++;
        mensaje.textContent="Respuesta Correcta!";
        mensaje.style.color="green";
    }
    else{
        errores++;
        mensaje.textContent="Respuesta incorrecta";
        mensaje.style.color="red";
    }
    Imprimir();
}

function Imprimir(){
    localStorage.setItem("aciertos", aciertos);
    localStorage.setItem("errores", errores);
    aciertosDiv.textContent=`Total de aciertos ${aciertos}`;
    aciertosDiv.style.color="green";
    erroresDiv.textContent=`Total de errores ${errores}`;
    erroresDiv.style.color="red";
}

function BloquearRespuestas(){
    let botones= document.querySelectorAll(".opcion");
    console.log(botones);
    botones.forEach(btn =>{
        btn.disabled=true;
    });
    
    btnSiguiente.disabled=false;
}