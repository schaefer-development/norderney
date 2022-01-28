<script lang="ts">
	import { base } from '$app/paths';
	import '@splidejs/splide/dist/css/splide.min.css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	Splide.defaults = {
		type: 'fade'
	};
</script>

<div class="relative w-full h-100v push_up_footer">
	<Splide
		options={{
			rewind: true,
			type: 'fade',
			fixedHeight: '100vh',
			gap: '1rem',
			cover: true,
			pagination: false,
		}}
	>

  <div class="splide__arrows" slot="before-track">
		<button class="splide__arrow splide__arrow--prev" type="button" aria-controls="splide01-track" aria-label="Go to last slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path fill="red" d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button><button class="splide__arrow splide__arrow--next" type="button" aria-controls="splide01-track" aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>
	</div>

		<SplideSlide>
			<img src="{base}/aus_wohnung02.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_wohnung01.jpg" alt="Ferienwohnung Am Meer Norderneys" />
			<div class="textbox">
				Bei Bedarf kann hier auch noch optionaler, bzw. erklärender Text zu einem einzelnen Bild
				stehen.
			</div>
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_schlafen.jpg" alt="Ferienwohnung Am Meer Norderneys" />
			<div class="textbox">
				Diese Slideshow ist natürlich nicht vollständig, sondern wird final noch entsprechend
				erweitert.
			</div>
		</SplideSlide>
	</Splide>
</div>

<style>
	.textbox {
		position: absolute;
		width: 45%;
		height: auto;
		left: 0;
		bottom: 33vh;
		margin: auto;
		padding: 1em 2em;
		background-color: rgba(255, 255, 255, 0.9);
		/*background-color:rgba(31,57,71,0.9);*/
		color: rgba(31, 57, 71, 1);
		font-weight: normal;
		font-size: 1.2em;
		text-align: center;
	}

	.textbox:after {
		content: '';
		position: absolute;
		right: -40px;
		top: 0;
		width: 40px;
		height: 50px;
		background-color: inherit;
		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(100% 0, 0 0, 0 100%);
	}

	.push_up_footer {
		margin-bottom: -23vh;
	}
</style>
