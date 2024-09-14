// Referencia al contenedor del tablero
const tablero = document.getElementById('gato-tablero');
const ganadorTexto = document.getElementById('ganador');
let jugadorActual = 'X';
let tableroEstado = ['', '', '', '', '', '', '', '', ''];
let juegoTerminado = false;

// Combinaciones ganadoras
const combinacionesGanadoras = [
    { "descripcion": "Fila superior", "indices": [0, 1, 2] },
    { "descripcion": "Fila central", "indices": [3, 4, 5] },
    { "descripcion": "Fila inferior", "indices": [6, 7, 8] },
    { "descripcion": "Columna izquierda", "indices": [0, 3, 6] },
    { "descripcion": "Columna central", "indices": [1, 4, 7] },
    { "descripcion": "Columna derecha", "indices": [2, 5, 8] },
    { "descripcion": "Diagonal principal", "indices": [0, 4, 8] },
    { "descripcion": "Diagonal secundaria", "indices": [2, 4, 6] }
];


// Función para generar el tablero de forma dinámica
function generarTablero() {
    let contenido = '';
    for (let i = 0; i < 9; i++) {
        contenido += `<div class="gato-celda" data-index="${i}"></div>`;
    }
    tablero.innerHTML = contenido;
}

// Llamada a la función para crear el tablero
generarTablero();

// Añadir el evento de clic a las celdas
tablero.addEventListener('click', function(event) {
    if (juegoTerminado) return;
    const celda = event.target;
    const index = celda.getAttribute('data-index');

    // Verificar que la celda está vacía antes de realizar la jugada
    if (tableroEstado[index] === '') {
        tableroEstado[index] = jugadorActual;
        celda.textContent = jugadorActual;

        // Verificar si hay un ganador
        if (verificarGanador()) {
            ganadorTexto.textContent = `¡El jugador ${jugadorActual} ha ganado!`;
            juegoTerminado = true;
        } else if (tableroEstado.every(celda => celda !== '')) {
            ganadorTexto.textContent = '¡Empate!';
            juegoTerminado = true;
        } else {
            // Cambiar de jugador
            jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        }
    }
});

// Función para verificar si hay un ganador sin usar some
function verificarGanador() {
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const combinacion = combinacionesGanadoras[i].indices;
        const [a, b, c] = combinacion;

        if (tableroEstado[a] === jugadorActual && 
            tableroEstado[a] === tableroEstado[b] && 
            tableroEstado[a] === tableroEstado[c]) {
            return true; // Hay un ganador
        }
    }
    return false; // No hay ganador
}
