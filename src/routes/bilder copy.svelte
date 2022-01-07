<script lang="ts">
	import { base } from '$app/paths';
	import Slideshow from '$lib/slideshow/Slideshow.svelte';
</script>

<div class="hero h-50v">
	<div
		class="bg_layer w-full h-50v bg-cover bg-no_bg_hero "
		style="background-image: url({base}/hero_placeholder.jpg)"
	/>
</div>

<div class="mx-14 lg:mx-16">
	<div class="main">
		<Slideshow />
	</div>
</div>
