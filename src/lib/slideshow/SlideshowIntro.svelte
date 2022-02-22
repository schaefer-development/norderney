<script lang="ts">
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	Splide.defaults = {
		type: 'fade'
	};
</script>

<div class="absolute top-0 w-full">
	<Splide
		options={{
			autoplay: true,
			rewind: true,
			type: 'fade',
			speed: 1000,
			fixedHeight: '100vh',
			gap: '1rem',
			cover: true,
			pagination: false,
			arrows: false
		}}
	>
		<SplideSlide>
			<img src="{base}/sunset.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>

		<SplideSlide>
			<img src="{base}/04.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>

		<SplideSlide>
			<img src="{base}/02.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
	</Splide>
</div>
