<script lang="ts">
	import { base } from '$app/paths';
	import '@fontsource/catamaran/400.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Index from './index.svelte';
</script>

<div class="absolute flex flex-col min-h-screen justify-between w-screen overflow-hidden">
	<Header />

	<main class="mb-auto relative z-10 w-screen">
		<slot />
	</main>

	<Footer />
</div>
