<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<header class="">
	<div class="absolute z-50 top-0 left-0 right-0 w-full max-w-screen-xl mx-auto ">
		<div class="w-7/12 mx-auto mt-6">
			<a
				sveltekit:prefetch
				href="{base}/"
				class="text-no_darkblue hover:opacity-80 focus:ring-0 focus:outline-none focus:text-white transition-all duration-300"
				><Logo /></a
			>
		</div>

		<div class="menu hidden lg:block">
			<div class="flex flex-row justify-center">
				<a href="{base}/" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-base "
						>Start</span
					>
				</a>
				<a href="{base}/lage" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-base"
						>Lage & Ausstattung</span
					>
				</a>
				<a href="{base}/bilder" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-base"
						>Bilder</span
					>
				</a>
				<a href="{base}/preise" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-base"
						>Preise</span
					>
				</a>
				<a href="{base}/termine" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-base"
						>Freie Termine</span
					>
				</a>
				<a href="{base}/kontakt" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-base"
						>Kontakt</span
					>
				</a>
			</div>
		</div>

		<div class="menu_mobile block lg:hidden">
			<button
				on:click={toggleMenu}
				class="flex items-center px-2 py-2 mx-auto focus:border-0 text-no_darkblue hover:opacity-80 focus:ring-0 focus:outline-none focus:text-no_darkblue ease-in-out transition-all duration-300"
			>
				<svg
					class="fill-current h-10 w-10 flex items-center"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
				>
				<span class="text-xl font-bold uppercase tracking-wider px-2">Menu</span>
			</button>
		</div>
	</div>
</header>

<aside
	id="drawer"
	style="opacity:1;"
	on:click={toggleMenu}
	class="{open
		? 'translate-x-0' // translate-x-0
		: 'translate-x-full'} transform block lg:hidden bg-no_darkblue top-0 left-0 w-full fixed h-full overflow-auto z-50 ease-in-out transition-all duration-300 "
>
	<div class="flex flex-col flex-wrap px-6 py-4 mx-auto w-full menu_points">
		<div class="flex justify-center w-full block">
			<button
				class="flex items-center px-2 py-2 focus:border-0 text-white hover:opacity-60 focus:ring-0 focus:outline-none focus:text-ti_blue_accent "
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current h-10 w-10 flex items-center"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
				<span class="text-xl uppercase px-2 tracking-wider -mb-1 outer_glow">Schließen</span>
			</button>
		</div>
		<div class="bg-no_lightblue h-0.5 w-3/12 mx-auto mt-4" />

		<div class="flex flex-col items-center">
			<a
				sveltekit:prefetch
				href="{base}/"
				class="mt-8 mb-2 uppercase tracking-widest text-no_lightblue text-base hover:opacity-60 focus:ring-0 focus:outline-none focus:text-white "
				>Start</a
			>

			<a
				sveltekit:prefetch
				href="{base}/lage"
				class="my-2 uppercase tracking-widest text-no_lightblue text-base hover:opacity-60 focus:ring-0 focus:outline-none focus:text-white "
				>Lage & Ausstattung</a
			>

			<a
				sveltekit:prefetch
				href="{base}/bilder"
				class="my-2 uppercase tracking-widest text-no_lightblue text-base hover:opacity-60 focus:ring-0 focus:outline-none focus:text-white "
				>Bilder</a
			>

			<a
				sveltekit:prefetch
				href="{base}/preise"
				class="my-2 uppercase tracking-widest text-no_lightblue text-base hover:opacity-60 focus:ring-0 focus:outline-none focus:text-white "
				>Preise</a
			>

			<a
				sveltekit:prefetch
				href="{base}/termine"
				class="my-2 uppercase tracking-widest text-no_lightblue text-base hover:opacity-60 focus:ring-0 focus:outline-none focus:text-white "
				>Freie Termine</a
			>

			<a
				sveltekit:prefetch
				href="{base}/kontakt"
				class="my-2 uppercase tracking-widest text-no_lightblue text-base hover:opacity-60 focus:ring-0 focus:outline-none focus:text-white"
				>Kontakt</a
			>
		</div>
	</div>
</aside>

<style>
	.menupoint {
		text-shadow: 0 0 2px #fff, 0 0 4px #fff;
	}
	.menupoint::after {
		background-color: #1f3947;
		bottom: -2px;
		content: '';
		display: block;
		height: 4px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.menupoint:hover::after {
		width: 100%;
	}
</style>
