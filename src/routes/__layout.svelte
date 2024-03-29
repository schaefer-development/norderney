<script lang="ts">
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
</script>

<svelte:head>
	<meta
		name="description"
		content="Moin! Buchen Sie Ihren Traumurlaub am Meer Norderneys in ihrer gut ausgestatteten Meerblickwohnung direkt an der Promenade."
	/>
	<link rel="apple-touch-icon" sizes="57x57" href="{base}/icons/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="{base}/icons/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="{base}/icons/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="{base}/icons/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="{base}/icons/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="{base}/icons/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="{base}/icons/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="{base}/icons/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/icons/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="{base}/icons/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/icons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="{base}/icons/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/icons/favicon-16x16.png" />
	<link rel="manifest" href="{base}/icons/manifest.json" />
	<meta name="msapplication-TleColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="{base}/icons/ms-icon-144x144.png" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="google-site-verification" content="vx5hgaFBcR4iIDafx_1SJW1d5SPlvec9ZvD9y_PqN6U" />
</svelte:head>

<svelte:window bind:scrollY={y} />

{#if $page.url.pathname == '/'}
	<div id="Intro" class="relative h-auto overflow-hidden flex justify-center">
		<div
			style="opacity:1; z-index:47;"
			class="{open
				? 'h-0 mb-0 z-0' // translate-x-0
				: 'h-100v -mb-12 z-50'} transform relative top-0 left-0 w-full ease-in-out transition-all duration-300"
		/>
		<div class="absolute top-28 left-0 right-0 mx-auto max-w-screen-lg z-40 calc_logo_width">
			<div class="w-10/12 mx-auto">
				<span
					class="text-white focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
				>
					<Logo />
				</span>
			</div>
		</div>
		<div class="absolute w-full h-screen top-0 left-0 bg-darkblue">
			<SlideshowIntro />
		</div>

		<button
			style="z-index:49; bottom:10vh;"
			on:click={toggleIntro}
			class="absolute h1 text-3xl lg:text-5xl bottom-0 bg-darkblue pl-6 lg:p-8 pr-4 lg:pr-6 pt-5 lg:pt7 pb-3 lg:pb-5 mx-auto text-white no-underline hover:bg-lightblue hover:text-darkblue transition duration-300 ease-in-out  mms_button"
		>
			<div class="relative w-auto flex flex-row">
				<span class="pr-2">Mehr Meer sehen</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6 lg:w-8 lg:h-8 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</button>
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

			<div class="absolute top-28 left-0 right-0 mx-auto max-w-screen-lg z-40 calc_logo_width">
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
			<div class="absolute top-28 left-0 right-0 mx-auto max-w-screen-lg z-40 calc_logo_width">
				<div class="w-10/12 mx-auto">
					<a
						sveltekit:prefetch
						href="{base}/"
						class="text-white hover:text-white focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
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

	.mms_button svg {
		animation: arrow ease-in-out 1s infinite;
		transition: all;
		transition-duration: 0.25s;
	}

	@keyframes arrow {
		0% {
			margin-top: -0.2em;
		}
		50% {
			margin-top: 0.15em;
		}
		100% {
			margin-top: -0.2em;
		}
	}
</style>
