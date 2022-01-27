<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import '@fontsource/catamaran/600.css';
	import '@fontsource/catamaran/700.css';
	import '@fontsource/bad-script';

	import { page } from '$app/stores';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Index from './index.svelte';
	import Hero from '$lib/hero/Hero.svelte';

	import Map from '$lib/map/Map.svelte';
	const mapAttributes = {
		class: '',
		style: 'width: 100%; height:80vw; max-height:80vh;'
	};
	export const prerender = true;

	import Slideshow from '$lib/slideshow/Slideshow.svelte';

	let y;
	let paraEffect = 0.5;
</script>

<svelte:window bind:scrollY={y} />
<!--<p>{$page.url.pathname}</p>-->

<div class="flex flex-col w-screen justify-between min-h-screen">
	<Header />

	{#if $page.url.pathname == '/lage'}
		<Map {mapAttributes} />
	{:else if $page.url.pathname == '/bilder'}
		<Slideshow />
	{:else}
		<Hero />
	{/if}

	<main
		style="transform: translate(0, {y < 2 ? y * 1 : (-y * paraEffect) / (2 - 1)}px)"
		class="relative pb-12 z-30"
	>
		<slot />
		<!--<div class="coordinates">N53.70985, E7.14347</div>-->
	</main>

	<footer style="margin-top: -{y * paraEffect}px">
		<Footer />
	</footer>
</div>

<style>
	/*
	.coordinates {
		position: absolute;
		z-index: 1;
		right: 5px;
		bottom: 30vw;
		font-size: 3vw;
		transform: rotate(-90deg);
		transform-origin: right bottom;
		color: #9e7548;
		opacity: 0.1;
	}*/
</style>
