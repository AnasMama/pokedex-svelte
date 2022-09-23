import { writable } from 'svelte/store';

export const pokemonsList = writable([]);
export const pokemon = writable({});

export const fetchPokemonsList = () => {
	fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
	.then(res => res.json())
	.then(data => pokemonsList.set(data.results.map((pokemon,index) => ({
		id: index+1,
		name: pokemon.name,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
	}))))
	.catch(err => console.error(err))
};


export const fetchPokemon = (id) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	.then(res => res.json())
	.then(data => pokemon.set({
		id: data.id,
		name: data.name,
		weight: data.weight,
		height: data.height,
		sprites: data.sprites,
		types: data.types,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
	}))
};
