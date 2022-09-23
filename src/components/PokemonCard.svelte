<script>
	export let pokemon; 
</script>

<a href="/{pokemon.id}" class="pokemon-card" >
	<h1>{pokemon.name.toUpperCase()}</h1 >
	<img src={pokemon.img} alt={pokemon.name}>
</a>

<style>
	.pokemon-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: gray 1px 0px 10px;
		padding: 1rem;
		border-radius: 1rem;
		width: 12rem;
		height: 12rem;
		font-size: small;
	}

	.pokemon-card:hover {
		box-shadow: gray 1px 0px 20px;
	}

	a {
	color: black;
	text-decoration: none;
}
</style>