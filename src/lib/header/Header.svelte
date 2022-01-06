<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<header class="w-full">
	<!--
	<div
		class="bg_layer w-full h-40v bg-cover bg-no_bg_hero "
		style="background-image: url({base}/hero_placeholder.jpg)"
	/>
-->

	<div class="absolute z-50 top-0 left-0 right-0 w-full max-w-screen-xl mx-auto ">
		<div class="w-8/12 mx-auto text-no_darkblue mt-6">
			<Logo />
		</div>

		<div class="menu text-center flex flex-row justify-center">
			<a
				href="{base}/"
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter "
			>
				Start
			</a>
			<a
				href="{base}/lage"
				class="uppercase font-bold tracking-widest text-no_brown mx-4 hover:text-no_brown-lighter "
			>
				Lage & Ausstattung
			</a>
		</div>
	</div>
</header>
