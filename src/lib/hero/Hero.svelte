<script>
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<div class="relative overflow-hidden">
	<div class="relative hero_height">
		<div
			class="bg_layer w-full hero_height bg-cover bg-no_bg_hero"
			style="background-image: url({base}/hero_placeholder.jpg);"
		/>
	</div>
</div>
