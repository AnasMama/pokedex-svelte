<script>
  import NavBar from "../components/NavBar.svelte";
    import "../app.css";
</script>
<NavBar/>
<main>
    <slot />
</main>

<style>
    main {
        width: 60%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: 700;
		gap: 4rem;
		text-transform: uppercase;
	}
</style>