<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import '@fontsource/catamaran/600.css';
	import '@fontsource/catamaran/700.css';
	import '@fontsource/bad-script';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Index from './index.svelte';
	import Hero from '$lib/hero/Hero.svelte';

	let y;
	let paraEffect = 0.5;
</script>

<svelte:window bind:scrollY={y} />

<div class="flex flex-col w-screen justify-between min-h-screen">
	<Header />

	<Hero />

	<main
		style="transform: translate(0, {y < 2 ? y * 1 : (-y * paraEffect) / (2 - 1)}px)"
		class="relative pb-12"
	>
		<slot />
	</main>

	<footer style="margin-top: -{y * paraEffect}px">
		<Footer />
	</footer>
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
