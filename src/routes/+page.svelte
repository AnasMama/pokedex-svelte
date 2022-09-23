<script>
	import { pokemonsList, fetchPokemonsList } from '../store/fetchPokemons';
	import PokemonCard from '../components/PokemonCard.svelte';

	fetchPokemonsList();
	
	let search = "";
	
	$: filteredList = $pokemonsList.filter(pokemon => pokemon.name.includes(search))	
</script>


<label for="search">
	<span>Rechercher :</span>
	<input name="search" type="text" bind:value={search} class="search"/>
</label>

<div class="pokemon-list">
	{#if $pokemonsList.length}
		{#each filteredList as pokemon}	
			<PokemonCard pokemon={pokemon}/>
		{/each}
	{:else}
		<h1>
			Chargement...
		</h1>
	{/if}
</div>


<style>
	.pokemon-list {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		text-align: center;
	}

	label {
		display: flex;
		align-items: center;
		align-self: flex-start;
		gap: 1rem;
		width: 50%;
	}

	label > input {
		width: 20rem;
	}

	.search {
		border-radius: 1rem;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
</style>