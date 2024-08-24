const url="https://pokeapi.co/api/v2/pokemon/";
const contenedor=document.getElementById("pokedex-container");

const obtenerPokemon= async (id)=>{
    let resultado= await fetch(url +'/' + id);
    let dato= await resultado.json();
    console.log(dato);
    crearTarjetaPokemon(dato);
};

const crearTarjetaPokemon= (pokemon)=>{
    let div = document.createElement('div');
    let template = `
        <div>
            <img src="${pokemon.sprites.front_default}" alt="${ pokemon.name }">
            <h3 class="name">${ pokemon.name }</h3>
            <small class="type">Tipo: <span>${ pokemon.types[0].type.name }</span></small>
        </div>
    `;
    div.innerHTML =template;
    contenedor.appendChild(div);
}

for (let i=1;i<=5;i++)
{
    obtenerPokemon(i);
}
