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
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/02.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/02.jpg 780w,
			{base}/impressionen/impressionen1280-assets/02.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/02.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>

		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/03.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/03.jpg 780w,
			{base}/impressionen/impressionen1280-assets/03.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/03.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/04.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/04.jpg 780w,
			{base}/impressionen/impressionen1280-assets/04.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/04.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/05.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/05.jpg 780w,
			{base}/impressionen/impressionen1280-assets/05.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/05.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/06.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/06.jpg 780w,
			{base}/impressionen/impressionen1280-assets/06.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/06.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/07.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/07.jpg 780w,
			{base}/impressionen/impressionen1280-assets/07.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/07.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/08.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/08.jpg 780w,
			{base}/impressionen/impressionen1280-assets/08.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/08.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
		<SplideSlide>
			<img
				class="object-cover hero_height"
				src="{base}/impressionen/impressionen1920-assets/09.jpg"
				srcset="
			{base}/impressionen/impressionen780-assets/09.jpg 780w,
			{base}/impressionen/impressionen1280-assets/09.jpg 1280w,
			{base}/impressionen/impressionen1920-assets/09.jpg 1920w"
				sizes="(min-width: 1600px) 1600px, (min-width: 1400px) 1400px, (min-width:1000px) 1000px, 100vw"
				alt="Ferienwohnung Am Meer Norderney"
			/>
		</SplideSlide>
	</Splide>
</div>
