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
			pagination: false
		}}
	>
		<div class="splide__arrows" slot="before-track">
			<button
				class="splide__arrow splide__arrow--prev custom_arrow custom_arrow_prev"
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
				class="splide__arrow splide__arrow--next custom_arrow custom_arrow_next"
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
			<div class="textbox">
				<span>Das Wohnzimmer:</span>
				Ausgestattet mit einem erklärenden Text kann sich der Besucher einen guten Überblick verschaffen.
			</div>
		</SplideSlide>
		<SplideSlide>
			<img src="{base}/aus_wohnung01.jpg" alt="Ferienwohnung Am Meer Norderneys" />
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
		width: auto;
		max-width: 45%;
		height: auto;
		right: 10vw;
		bottom: 22vh;
		margin: auto;
		padding: 1em 1.75em;
		background-color: #327194;
		/*background-color:rgba(31,57,71,0.9);*/
		color: #fff;
		font-weight: normal;
		font-size: 1.15em;
		text-align: center;
	}

	.textbox:after {
		content: '';
		position: absolute;
		left: 25px;
		bottom: -25px;
		width: 30px;
		height: 30px;
		background-color: inherit;
		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(100% 0, 0 0, 0 100%);
	}

	.textbox span {
		display: block;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-size: 0.8em;
		padding-bottom: 0.2em;
	}

	.push_up_footer {
		margin-bottom: -15vh;
	}
</style>
