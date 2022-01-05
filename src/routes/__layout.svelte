<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>


<div
	class="flex flex-col min-h-screen justify-between"
>
	<Header />
	<main class="mb-auto">
		<slot />
	</main>
	<Footer />
</div>
