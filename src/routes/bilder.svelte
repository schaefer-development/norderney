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
			cover: 'true',
			classes: {
				arrows: 'splide__arrows your-class-arrows',
				arrow: 'splide__arrow your-class-arrow',
				prev: 'splide__arrow--prev your-class-prev',
				next: 'splide__arrow--next your-class-next'
			}
		}}
	>
		<SplideSlide>
			<img src="{base}/aus_wohnung01.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_wohnung02.jpg" alt="Ferienwohnung Am Meer Norderneys" />
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
		margin-bottom: -30vh;
	}
</style>
