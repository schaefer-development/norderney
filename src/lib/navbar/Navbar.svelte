<script lang="ts">
	import { base } from '$app/paths';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<header id="header">
	<div class="fixed top-0 z-50 w-full h-12 bg-darkblue grid content-center">
		<div class="menu hidden lg:block ">
			<div class="flex flex-row justify-center">
				<a href="{base}/" class="relative mx-3">
					<span class="menupoint uppercase font-semibold tracking-widest text-white text-sm"
						>Start</span
					>
				</a>
				<a href="{base}/lage" class="relative mx-3">
					<span class="menupoint uppercase font-semibold tracking-widest text-white text-sm"
						>Lage & Ausstattung</span
					>
				</a>
				<a href="{base}/bilder" class="relative mx-3">
					<span class="menupoint uppercase font-semibold tracking-widest text-white text-sm"
						>Bilder</span
					>
				</a>
				<a href="{base}/preise" class="relative mx-3">
					<span class="menupoint uppercase font-semibold tracking-widest text-white text-sm"
						>Preise</span
					>
				</a>
				<a href="{base}/termine" class="relative mx-3">
					<span class="menupoint uppercase font-semiboldd tracking-widest text-white text-sm"
						>Freie Termine</span
					>
				</a>
				<a href="{base}/kontakt" class="relative mx-3">
					<span class="menupoint uppercase font-semibold tracking-widest text-white text-sm"
						>Kontakt</span
					>
				</a>
			</div>
		</div>

		<div class="menu_mobile block lg:hidden mx-auto">
			<button
				on:click={toggleMenu}
				class="text-white hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-darkblue ease-in-out transition-all duration-300"
			>
				<svg
					class="fill-current h-6 w-6 inline"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
				>
				<span class="font-semibold mt-0.5 uppercase tracking-widest inline-block align-middle"
					>Menu</span
				>
			</button>
		</div>
	</div>
</header>

<aside
	id="drawer"
	style="opacity:1; z-index:999;"
	on:click={toggleMenu}
	class="{open
		? 'translate-x-0' // translate-x-0
		: 'translate-x-full'} transform fixed lg:hidden top-0 left-0 w-full h-full overflow-auto ease-in-out transition-all duration-300 "
>
	<!-- styling drawer starts here -->
	<div class="drawer_outer h-screen grid content-center bg-darkblue">
		<div class="drawer_inner mx-12 text-center">
			<button
				class="text-white hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-darkblue ease-in-out transition-all duration-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 inline"
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
				<span class="font-semibold mt-0.5 uppercase tracking-widest inline-block align-middle"
					>Schließen</span
				>
			</button>

			<div class="divider h-1 w-1/3 mx-auto mt-4" />

			<div class="flex flex-col items-center">
				<a
					sveltekit:prefetch
					href="{base}/"
					class="bad-script mt-4 mb-2 text-2xl textlightblue hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-white "
					>Start</a
				>

				<a
					sveltekit:prefetch
					href="{base}/lage"
					class="bad-script my-2 text-2xl text-lightblue hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-white "
					>Lage & Ausstattung</a
				>

				<a
					sveltekit:prefetch
					href="{base}/bilder"
					class="bad-script my-2 mb-2 text-2xl text-lightblue hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-white "
					>Bilder</a
				>

				<a
					sveltekit:prefetch
					href="{base}/preise"
					class="bad-script my-2 mb-2 text-2xl text-lightblue hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-white "
					>Preise</a
				>

				<a
					sveltekit:prefetch
					href="{base}/termine"
					class="bad-script my-2 mb-2 text-2xl text-lightblue hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-white "
					>Freie Termine</a
				>

				<a
					sveltekit:prefetch
					href="{base}/kontakt"
					class="bad-script mt-2 text-2xl text-lightblue hover:text-darkblue-lighter focus:ring-0 focus:outline-none focus:text-white "
					>Kontakt</a
				>
			</div>
		</div>
	</div>
</aside>

<style>
	.divider {
		background-image: url('underline_pattern.svg');
	}

	.menupoint::after {
		/*background-color: #fff;*/
		background-image: url('underline_pattern.svg');
		bottom: 0px;
		content: '';
		display: block;
		height: 2px;
		position: absolute;
		width: 0%;
		transition: all;
		transition-duration: 0.75s;
	}

	.menupoint:hover::after {
		width: 100%;
	}
</style>
