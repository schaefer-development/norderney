<script lang="ts">
	import { base } from '$app/paths';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	Splide.defaults = {
		type: 'fade'
	};
</script>

<div class="relative w-full">
	<Splide
		options={{
			autoplay: true,
			rewind: true,
			type: 'fade',
			speed: 2000,
			fixedHeight: '100vh',
			gap: '1rem',
			cover: true,
			pagination: false
		}}
	>
		<div class="splide__arrows" slot="before-track">
			<button
				class="splide__arrow splide__arrow--prev opacity-100 bg-darkblue-lighter text-white w-14 lg:w-20 h-14 lg:h-20 rounded-none left-0 hover:bg-darkblue hover:opacity-100 ease-in-out transition-all duration-300"
				type="button"
				aria-controls="splide01-track"
				aria-label="Go to last slide"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
					><path
						fill="currentcolor"
						d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
					/></svg
				>
			</button>

			<button
				class="splide__arrow splide__arrow--next opacity-100 bg-darkblue-lighter text-white w-14 lg:w-20 h-14 lg:h-20 rounded-none right-0 hover:bg-darkblue hover:opacity-100 ease-in-out transition-all duration-300"
				type="button"
				aria-controls="splide01-track"
				aria-label="Next slide"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"
					><path
						fill="currentcolor"
						d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
					/></svg
				></button
			>
		</div>

		<SplideSlide>
			<img src="{base}/aus_wohnung02.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_wohnung01.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_schlafen.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
	</Splide>
</div>
