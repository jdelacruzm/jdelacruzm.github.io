const gameBoard = document.getElementById('gameBoard'); // Seleccionar el tablero
let flippedCards = []; // Cartas volteadas
let matchedPairs = 0;
const totalPairs = 8; // Total de pares de cartas

// Función para obtener imágenes de Pokémon desde la API
async function fetchPokemon() {
    const pokemonArray = [];
    const pokemonIds = Array.from({ length: 8 }, () => Math.floor(Math.random() * 150) + 1); // 8 IDs aleatorios de Pokémon
    for (let id of pokemonIds) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        pokemonArray.push(data.sprites.front_default); // Guardamos la imagen del Pokémon
    }
    return pokemonArray;
}

// Función para crear las cartas
async function createGameBoard() {
    gameBoard.innerHTML = ''; // Limpiar el tablero

    const pokemonImages = await fetchPokemon(); // Obtener 8 imágenes de Pokémon
    const allCards = [...pokemonImages, ...pokemonImages]; // Duplicamos las imágenes para hacer pares

    // Barajamos las cartas
    allCards.sort(() => 0.5 - Math.random());

    // Creamos cada carta
    allCards.forEach(imageSrc => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${imageSrc}" alt="Pokemon">
            <div class="card-cover"></div>
        `;
        gameBoard.appendChild(card);

        // Añadir evento para voltear la carta
        card.addEventListener('click', () => flipCard(card));
    });
}

// Función para voltear las cartas
function flipCard(card) {
    // Solo permite voltear si no hay más de 2 cartas volteadas y si la carta no está ya volteada
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        // Si hay dos cartas volteadas, verificamos si coinciden
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Función para verificar si las dos cartas volteadas coinciden
function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('img').src;
    const img2 = card2.querySelector('img').src;

    if (img1 === img2) {
        // Si las cartas coinciden
        flippedCards = []; // Limpiar las cartas volteadas
        matchedPairs++;
        if (matchedPairs === totalPairs) {
            setTimeout(() => alert('¡Ganaste! Has encontrado todos los pares.'), 500);
        }
    } else {
        // Si no coinciden, voltear de nuevo después de un tiempo
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

// Función para reiniciar el juego
const resetGameBtn = document.getElementById('resetGame');
resetGameBtn.addEventListener('click', () => {
    matchedPairs = 0;
    flippedCards = [];
    gameBoard.innerHTML = ''; // Limpiar el tablero
    createGameBoard(); // Crear nuevo tablero
});

// Iniciar el juego cuando la página carga
createGameBoard();
