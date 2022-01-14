<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import '@fontsource/catamaran/600.css';
	import '@fontsource/catamaran/700.css';
	import '@fontsource/praise';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Index from './index.svelte';
</script>

<svelte:head>
	<title>Am Meer Norderneys</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<div class="flex flex-col min-h-screen justify-between w-screen overflow-hidden">
	<Header />

	<main class="mb-auto relative z-10 w-screen">
		<slot />
	</main>

	<Footer />
</div>
