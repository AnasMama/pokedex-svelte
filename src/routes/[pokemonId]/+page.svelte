<script>
	import { pokemon, fetchPokemon } from '../../store/fetchPokemons';
	import { page } from '$app/stores';

	$: fetchPokemon($page.params.pokemonId)
</script>

{#if $pokemon}
<div class="container">
	<h1>
		{$pokemon.id}. {$pokemon.name}	
		</h1>
		<img src={$pokemon.img} alt={$pokemon.name} />
		<div class="stats">
			<h2>Types :</h2>
			<div class="type">
				{#if $pokemon.types}
				{#each $pokemon.types as type}
						<span>{type.type.name}</span>
				{/each}
				{/if}
				
			</div>
    <h2>Height : <strong>{$pokemon.height}</strong>
    </h2><h2>Weight : <strong>{$pokemon.weight}</strong>
    </h2>
</div>
</div>
{:else}
<h1>
	Chargement...
</h1>
{/if}

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}


	span {
		border: 2px solid black;
		padding: 0.5rem;
		border-radius: 1rem;
	}

	.type {
		display: flex;
		justify-content: center;
		gap: 1rem;
		width: 100%;
	}

	.stats {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>