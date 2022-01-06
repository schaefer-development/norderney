<script lang="ts">
	import { base } from '$app/paths';
	import '@fontsource/catamaran/400.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Index from './index.svelte';
</script>

<div class="flex flex-col min-h-screen justify-between">
	<Header />



	<main class="mb-auto relative z-10 w-full">
		<slot />
	</main>

	<Footer />
</div>


