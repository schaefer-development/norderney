<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import '@fontsource/catamaran/600.css';
	import '@fontsource/catamaran/700.css';
	import '@fontsource/bad-script';

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

	<main class="mb-auto relative z-10 pb-12 w-screen">
		<slot />
		<div class="coordinates">N53.70985, E7.14347</div>
	</main>

	<Footer />
</div>

<style>
	.coordinates {
		position: absolute;
		right: 5px;
		bottom: 30vw;
		font-size: 3vw;
		transform: rotate(-90deg);
		transform-origin: right bottom;
		color: #9e7548;
		opacity: 0.1;
	}
</style>
