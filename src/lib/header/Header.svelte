<script lang="ts">
	import Logo from '$lib/logo/Logo.svelte';
</script>

<header class="absolute w-full">
	<div class="relative z-50 flex flex-col justify-center">


		<div class="w-10/12 md:w-8/12 lg:w-5/12 mx-auto text-no_darkblue">
			<Logo />
		</div>


		<div class="menu text-center flex flex-row justify-center">
			<div
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter"
			>
				Start
			</div>
			<div
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter"
			>
				Lage & Ausstattung
			</div>
			<div
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter"
			>
				Bilder
			</div>
			<div
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter"
			>
				Preise
			</div>
			<div
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter"
			>
				Freie Termine
			</div>
			<div
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter"
			>
				Kontakt
			</div>
		</div>
	</div>

	<!--

	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>


		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		
	</div>-->
</header>
