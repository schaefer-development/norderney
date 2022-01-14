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

<div class="main">
	<section class="relative first_section bg-white px-12 py-12 edge">
		<Slideshow />
	</section>
</div>
