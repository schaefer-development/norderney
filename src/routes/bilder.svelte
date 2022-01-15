<script lang="ts">
	import { base } from '$app/paths';
	import '@splidejs/splide/dist/css/splide.min.css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>

<div class="realtive test w-full h-100v border-3">
	<Splide
		options={{
			rewind: true,
			width: 1000,
			gap: '1rem'
		}}
	>
		<SplideSlide>
			<img
				src="https://naturschutz.ch/wp-content/uploads/2018/10/cropped-Eichh%C3%B6rnchen--1068x580.jpg"
				alt="Image 1"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				src="https://bilder.t-online.de/b/84/93/82/46/id_84938246/920/tid_da/eichhoernchen-geert-weggen-zeigt-die-welt-der-kleinen-nager-.jpg"
				alt="Image 1"
			/>
		</SplideSlide>
	</Splide>
</div>
<!--

<div class="main">
	<section class="relative first_section bg-white px-12 py-12 edge">
		<h1 class="text-8xl text-no_darkblue">Kieken</h1>
		<Slideshow />
	</section>
</div>
-->
