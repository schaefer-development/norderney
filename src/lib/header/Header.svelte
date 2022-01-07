<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<header class="">
	<div class="absolute z-50 top-0 left-0 right-0 w-full max-w-screen-xl mx-auto ">
		<div class="w-7/12 mx-auto text-no_darkblue mt-6">
			<Logo />
		</div>

		<div class="menu hidden lg:block">
			<div class="flex flex-row justify-center">
				<a href="{base}/" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-sm "
						>Start</span
					>
				</a>
				<a href="{base}/lage" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-sm"
						>Lage & Ausstattung</span
					>
				</a>
				<a href="{base}/bilder" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-sm"
						>Bilder</span
					>
				</a>
				<a href="{base}/preise" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-sm"
						>Preise</span
					>
				</a>
				<a href="{base}/termine" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-sm"
						>Freie Termine</span
					>
				</a>
				<a href="{base}/kontakt" class="relative mx-3">
					<span class="menupoint uppercase font-bold tracking-widest text-no_darkblue text-sm"
						>Kontakt</span
					>
				</a>
			</div>
		</div>

		<div class="menu_mobile block lg:hidden">
			<button
				on:click={toggleMenu}
				class="flex items-center px-2 py-2 mx-auto focus:border-0 text-no_darkblue tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent "
			>
				<svg class="fill-current h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
				>
				<span class="text-xl font-bold px-2">Menu</span>
			</button>
		</div>
	</div>
</header>

<aside
	id="drawer"
	style="opacity:0.98;"
	on:click={toggleMenu}
	class="{open
		? 'translate-x-0'
		: 'translate-x-full'} transform block absolute right-0 lg:hidden bg-no_darkblue w-7/12 h-full shadow-xl overflow-auto ease-in-out transition-all duration-300 z-50"
>
	<div class="flex flex-col flex-wrap px-6 py-4 mx-auto w-full menu_points">
		<div class="flex justify-center w-full block">
			<button
				class="flex items-center px-2 py-2 focus:border-0 text-white tracking-wider hover:text-ti_blue_accent focus:ring-0 focus:outline-none focus:text-ti_blue_accent "
			>
				<span class="text-xl px-2">Menu schliessen</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-current h-8 w-8"
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
			</button>
		</div>

		<div class="flex flex-col text-center items-center ">
			<a
				sveltekit:prefetch
				href="{base}/"
				class="mt-8 mb-2 text-white uppercase uppercase font-bold tracking-widest hover:text-ti_blue_accent text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-white"
				>Start</a
			>

			<a
				sveltekit:prefetch
				href="{base}/lage"
				class="my-2 text-white uppercase uppercase font-bold tracking-widest hover:text-ti_blue_accent text-base md:text-xl lg:text-2xl focus:ring-0 focus:outline-none focus:text-white"
				>Lage & Ausstattung</a
			>
		</div>
	</div>
</aside>

<style>
	.menu_open {
		margin-right: 0;
	}

	.menu_closed {
		margin-right: -100vw;
	}

	.menupoint::after {
		background-color: #1f3947;
		bottom: -4px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.25s;
	}

	.menupoint_underline::after {
		background-color: #1f3947;
		bottom: -4px;
		content: '';
		display: block;
		height: 3px;
		position: absolute;
		width: 100%;
		transition: all;
		transition-duration: 0.25s;
	}
	.menupoint:hover::after {
		width: 100%;
	}
</style>
