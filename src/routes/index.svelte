<script lang="ts">
	import '../app.css';
	import Review from '$lib/review/Review.svelte';
	import Cards from '$lib/cards/Cards.svelte';

	import Hero from '$lib/hero/Hero.svelte';
</script>

<Hero />

<div class="main">
	<section class="relative first_section bg-white px-12 py-12 edge">
		<h1 class="no_h1 text-8xl text-no_darkblue">Mehr Meer sehen!</h1>
		<h2>
			Ankommen und sich wohlfühlen ist das Motto unserer Ferienwohnung „Am Meer Norderneys“! In
			unserer vollständig sanierten und mit neuen Möbeln ausgestatteten Ferienwohnung bieten wir
			Ihnen ganzjährig Vergünstigungen und Sonderkonditionen an. Überzeugen Sie sich gerne selbst
			unter unserer Rubrik "Preise". Wir freuen uns auf Ihre Anfrage und machen Ihnen auch sehr
			gerne ein individuelles Angebot.
		</h2>
		<Review />
	</section>

	<section>
		<Cards />
	</section>
</div>
