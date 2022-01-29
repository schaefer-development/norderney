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

	import Slideshow from '$lib/slideshow/Slideshow.svelte';

	let y;
	let paraEffect = 0.5;

	let open_intro = false;
	const toggleIntro = () => {
		open_intro = !open_intro;
	};
</script>

<svelte:window bind:scrollY={y} />

{#if $page.url.pathname == '/'}
	<div class="w-full h-12 border" />
{:else}
	<p />
{/if}

<div class="relative flex flex-col w-screen justify-between min-h-screen">
	<Navbar />

	<div
		class="relative parallax top-12"
		style="transform: translate(0, {y < 2 ? y * 1 : y * paraEffect}px)"
	>
		{#if $page.url.pathname == '/lage'}
			<div
				class="absolute z-40 left-0 right-0 w-full max-w-screen-xl mx-auto"
				style="top:calc(1rem + 1vw);"
			>
				<div class="w-7/12 mx-auto">
					<a
						sveltekit:prefetch
						href="{base}/"
						class="text-no_darkblue focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
					>
						<Logo />
					</a>
				</div>
			</div>
			<Map {mapAttributes} />
		{:else if $page.url.pathname == '/bilder'}
			<Slideshow />
		{:else}
			<div
				class="absolute z-40 left-0 right-0 w-full max-w-screen-xl mx-auto"
				style="top:calc(1rem + 1vw);"
			>
				<div class="w-7/12 mx-auto">
					<a
						sveltekit:prefetch
						href="{base}/"
						class="text-no_darkblue focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
					>
						<Logo />
					</a>
				</div>
			</div>

			<Hero />
		{/if}
	</div>

	<main style="position:relative; " id="main" class="relative pb-12 z-40">
		<slot />
	</main>

	<Footer />
</div>
