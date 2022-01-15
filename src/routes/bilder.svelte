<script lang="ts">
	import Slideshow from '$lib/slideshow/Slideshow.svelte';
	import Hero from '$lib/hero/Hero.svelte';
</script>

<Hero />

<div class="main">
	<section class="relative first_section bg-white px-12 py-12 edge">
		<h1 class="text-8xl text-no_darkblue">Kieken</h1>
		<Slideshow />
	</section>
</div>
