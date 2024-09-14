const tablero= document.getElementById("tablero");
const ganador_texto= document.getElementById("ganador");
CrearTablero();
var jugadorActual="X";
var tableroEstado=['','','','','','','','',''];
var juegoTerminado=false;

const combinacionesGanadoras=[
    {"Descripcion":"fila superior", "indices":[0,1,2]},
    {"Descripcion":"fila central", "indices":[3,4,5]},
    {"Descripcion":"fila central", "indices":[6,7,8]},
    {"Descripcion":"Diagonal izquierda", "indices":[0,4,8]},
    {"Descripcion":"Diagonal derecha", "indices":[2,4,6]},
    {"Descripcion":"horizontal derecha", "indices":[0,3,6]},
    {"Descripcion":"horizontal centro", "indices":[1,4,7]},
    {"Descripcion":"horizontal centro", "indices":[2,5,8]}
];

tablero.addEventListener('click',(event)=>{
    if (juegoTerminado) return;
    let celda= event.target;
    let indice= celda.getAttribute('data-index');
    if (tableroEstado[indice]=='')
    {
        celda.textContent=jugadorActual;
        tableroEstado[indice]=jugadorActual;
        console.log(tableroEstado);
        if (VerificarGanador())
        {
            ganador_texto.textContent=
            `El jugador ${jugadorActual} ha ganado`;
            juegoTerminado=true;
        }
        if (jugadorActual=="X") jugadorActual="O";
        else jugadorActual="X";
    }
});

function CrearTablero(){
    let cuadro='';
    for(let i=0; i<9;i++)
    {
        let cuadroIndividual=`<div class='celda'
                                data-index=${i}>
                             </div>`;
        cuadro=cuadro+cuadroIndividual;
    }
    tablero.innerHTML=cuadro;
}

function VerificarGanador(){
    for(let i=0; i<combinacionesGanadoras.length;i++)
    {
        let combinacion=combinacionesGanadoras[i].indices;
        let [a,b,c]=combinacion;
        if (tableroEstado[a]===jugadorActual &&
            tableroEstado[b]===tableroEstado[a] &&
            tableroEstado[c]===tableroEstado[a])
            {
                PintarCeldas([a,b,c]);
                return true;
            }
    }
}

function PintarCeldas(indices)
{
    indices.forEach(index => {
        const celdaGanadora= document.querySelector(
            `.celda[data-index='${index}']`
        );
        celdaGanadora.style.backgroundColor='green';
    });
}