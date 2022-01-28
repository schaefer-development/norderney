<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import '@fontsource/catamaran/600.css';
	import '@fontsource/catamaran/700.css';
	import '@fontsource/bad-script';
	import '../app.css';
	import { page } from '$app/stores';

	import Hero from '$lib/hero/Hero.svelte';

	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import Map from '$lib/map/Map.svelte';
	const mapAttributes = {
		class: '',
		style: 'width: 100%; height:80vw; max-height:80vh;'
	};
	export const prerender = true;

	import Slideshow from '$lib/slideshow/Slideshow.svelte';

	let y;
	let paraEffect = 0.25;
</script>

<svelte:window bind:scrollY={y} />

<!--
{#if $page.url.pathname == '/'}
	<div class="intro absolute w-full h-screen border bg-white" style="z-index:99999">
		sdsdfsd

	</div>
{:else}

<p></p>
{/if}

-->

<div id="page_wrapper" class="relative flex flex-col w-screen justify-between min-h-screen">
	<Header />

	{#if $page.url.pathname == '/lage'}
		<Map {mapAttributes} />
	{:else if $page.url.pathname == '/bilder'}
		<Slideshow />
	{:else}
		<Hero />
	{/if}

	<main
		style="position:relative; transform: translate(0, {y < 2
			? y * 1
			: (-y * paraEffect) / (2 - 1)}px)"
		class="relative pb-12 z-40"
	>
		<slot />
		<div class="coordinates relative z-50 max-w-screen-lg px-4 md:px-8 lg:px-12 mx-auto text-right">
			N53.70985, E7.14347
		</div>
	</main>

	<footer style="margin-top: -{y * paraEffect}px">
		<Footer />
	</footer>
</div>

<style>
	.coordinates {
		font-size: 1vw;
		color: #9e7548;
		opacity: 0.1;
	}
</style>
