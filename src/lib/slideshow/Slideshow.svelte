<script lang="ts">
	import { base } from '$app/paths';
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
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/06.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/06.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/06.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/06.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Balkon</span>
				Überdachter Balkon mit (seitlichem) Meerblick
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/07.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/07.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/07.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/07.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Balkon</span>
				(seitlicher) Meerblick vom Balkon
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/01.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/01.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/01.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/01.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Essecke</span>
				Mit (seitlichem) Meerblick
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/02.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/02.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/02.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/02.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Wohnzimmer</span>
				Wohnbereich mit Sofa
			</div>
		</SplideSlide>

		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/03.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/03.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/03.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/03.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Wohnzimmer</span>
				Wohnbereich mit Sofa
			</div>
		</SplideSlide>

		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/04.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/04.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/04.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/04.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Wohnzimmer</span>
				Mit zusätzlicher Schlafgelegenheit für gemütliche Abende
			</div>
		</SplideSlide>

		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/05.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/05.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/05.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/05.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Wohnzimmer</span>
				Blick in den Wohnbereich
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/11.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/11.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/11.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/11.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Küche</span>
				Küchenzeile mit Spülmaschine, Herd, Mikrowelle/Backofen, Kaffeemaschine
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/08.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/08.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/08.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/08.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Schlafzimmer</span>
				Neben zwei sehr bequemen Betten finden Sie einen zweiten Fernseher
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/09.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/09.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/09.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/09.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Badezimmer</span>
				Frisch renoviert 2021
			</div>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/ausstattung/ausstattung1920-assets/10.jpg"
				srcset="
			{base}/ausstattung/ausstattung780-assets/10.jpg 780w,
			{base}/ausstattung/ausstattung1280-assets/10.jpg 1280w,
			{base}/ausstattung/ausstattung1920-assets/10.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>

			<div class="textbox">
				<span class="font-semibold block tracking-wider pb-1">Diele</span>
				Viel Stauraum für Ihre Garderobe und Schuhe
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
		background-color: rgba(31, 57, 71, 0.5);
		color: #fff;
		font-weight: normal;
		font-size: 1.15em;
		text-align: center;
	}

	.textbox:after {
		content: '';
		position: absolute;
		left: 25px;
		bottom: -30px;
		width: 30px;
		height: 30px;
		background-color: inherit;
		-webkit-clip-path: polygon(100% 0, 0 0, 0 100%);
		clip-path: polygon(100% 0, 0 0, 0 100%);
	}
	.push_up_footer {
		margin-bottom: -15vh;
	}
</style>
