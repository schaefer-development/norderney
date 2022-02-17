<script lang="ts">
	import '@fontsource/catamaran/400.css';
	import '@fontsource/catamaran/600.css';
	import '@fontsource/catamaran/700.css';
	import '@fontsource/bad-script';
	import '../app.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	import Hero from '$lib/hero/Hero.svelte';
	import Logo from '$lib/logo/Logo.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import Map from '$lib/map/Map.svelte';
	const mapAttributes = {
		class: '',
		style: 'width: 100%; height:80vw; max-height:80vh;'
	};
	export const prerender = true;
	import SlideshowIntro from '$lib/slideshow/SlideshowIntro.svelte';
	import Slideshow from '$lib/slideshow/Slideshow.svelte';

	let y;
	let introHeight;

	let paraEffect = 0.5;

	let open = false;
	const toggleIntro = () => {
		open = !open;
	};

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:window bind:scrollY={y} />

{#if $page.url.pathname == '/'}
	<div id="Intro" class="relative h-auto overflow-hidden">
		<button
			style="z-index:49; bottom:18vh;"
			on:click={toggleIntro}
			class="absolute left-0 right-0 mx-auto bottom-0 bg-darkblue text-sm px-4 py-4 mx-auto uppercase font-bold tracking-widest text-white no-underline hover:bg-lightblue hover:text-darkblue transition duration-300 ease-in-out"
		>
			Start
		</button>

		<div
			style="opacity:1; z-index:47;"
			class="{open
				? 'h-0 mb-0' // translate-x-0
				: 'h-100v -mb-12'} transform relative top-0 left-0 w-full ease-in-out transition-all duration-300 "
		/>

		<div
			class="absolute w-full h-screen top-0 left-0 border-2 bg-darkblue grid content-center text-center"
		>
			<SlideshowIntro />
			<h2 class="relative h1 text-8xl text-white w-auto mx-auto" style="z-index:48;">
				Mehr Meer sehen
			</h2>
		</div>
	</div>
{/if}

<div class="relative flex flex-col min-h-screen justify-between z-50">
	<header id="startpoint">
		<Navbar />
	</header>
	<main class="mb-auto">
		{#if $page.url.pathname == '/bilder'}
			<!-- start page bilder -->
			<Slideshow />
			<!-- end page bilder -->
		{:else if $page.url.pathname == '/lage'}
			<!-- start page lage -->

			<div class="absolute top-20 left-0 right-0 mx-auto max-w-screen-lg z-40 calc_logo_width">
				<div class="w-10/12 mx-auto">
					<a
						sveltekit:prefetch
						href="{base}/"
						class="text-darkblue focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
					>
						<Logo />
					</a>
				</div>
			</div>
			<Map {mapAttributes} />
			<div class="main_content px-4 lg:px10 pb-10 -mt-10">
				<div
					class="relative w-full max-w-screen-lg bg-white z-30 px-4 md:px-8 lg:px-12 py-6 lg:py-12 mx-auto edge"
				>
					<slot />
				</div>
			</div>
			<!-- end page lage -->
		{:else}
			<!-- start page default -->
			<div class="absolute top-20 left-0 right-0 mx-auto max-w-screen-lg z-40 calc_logo_width">
				<div class="w-10/12 mx-auto">
					<a
						sveltekit:prefetch
						href="{base}/"
						class="text-darkblue focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
					>
						<Logo />
					</a>
				</div>
			</div>
			<Hero />
			<div class="main_content px-4 lg:px10 pb-10 -mt-10">
				<div
					class="relative w-full max-w-screen-lg bg-white z-30 px-4 md:px-8 lg:px-12 py-6 lg:py-12 mx-auto edge"
				>
					<slot />
				</div>
			</div>
			<!-- end page default -->
		{/if}
	</main>
	<Footer />
</div>

<style>
	.calc_logo_width {
		width: calc(100% - 8em);
	}
</style>
