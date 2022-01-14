<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import Review from '$lib/review/Review.svelte';
	import Cards from '$lib/cards/Cards.svelte';
</script>

<div class="hero h-50v">
	<div
		class="bg_layer w-full h-50v bg-cover bg-no_bg_hero "
		style="background-image: url({base}/hero_placeholder.jpg)"
	/>
</div>

<div class="main">
	<section class="relative first_section bg-white px-12 py-12 edge">
		<h1>Moin, Moin!</h1>
		<h2>Ankommen und sich wohlfühlen ist das Motto unserer Ferienwohnung „Am Meer Norderneys“!</h2>
		<p>
			In unserer vollständig sanierten und mit neuen Möbeln ausgestatteten Ferienwohnung bieten wir
			Ihnen ganzjährig Vergünstigungen und Sonderkonditionen an. Überzeugen Sie sich gerne selbst
			unter unserer Rubrik "Preise". Wir freuen uns auf Ihre Anfrage und machen Ihnen auch sehr
			gerne ein individuelles Angebot.
		</p>
		<Review />
	</section>

	<section>
		<Cards />
	</section>
</div>
