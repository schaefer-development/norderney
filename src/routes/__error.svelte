<script context="module">
	import '../app.css';
	import Hero from '$lib/hero/Hero.svelte';
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<Hero />

<div class="main">
	<section class="relative first_section bg-white px-6 lg:px-12 py-6 lg:py-12 edge">
		<h1 class="no_h2 text-no_darkblue">{title}</h1>
	</section>
</div>
