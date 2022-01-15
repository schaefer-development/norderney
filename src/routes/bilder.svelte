<script lang="ts">
	import { base } from '$app/paths';
	import '@splidejs/splide/dist/css/splide.min.css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	Splide.defaults = {
		type: 'fade'
	};
</script>

<div class="relative w-full h-90v border-3 push_up_footer">
	<Splide
		options={{
			rewind: true,
			type: 'fade',
			height: '100vh',
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
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_schlafen.jpg" alt="Ferienwohnung Am Meer Norderneys" />
		</SplideSlide>
	</Splide>
</div>

<style>
	.textbox {
		position: absolute;
		width: 90%;
		height: auto;
		left: 0;
		right: 0;
		bottom: 25vh;
		margin: auto;
		padding: 0.5em 1em;
		/*background-color:rgba(31,57,71,0.75);*/
		color: #fff;
		font-family: 'Praise';
		font-weight: normal;
		font-size: 8vw;
		text-align: center;
	}

	.push_up_footer {
		margin-bottom: -10vh;
	}

	.splide__arrows.your-class-arrows {
		border: 1px solid red;
	}
</style>
