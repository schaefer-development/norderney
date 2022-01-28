<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import Review from '$lib/review/Review.svelte';
	import Cards from '$lib/cards/Cards.svelte';
</script>

<svelte:head>
	<title>Am Meer Norderneys – Mehr Meer sehen!</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<div class="main">
	<section class="relative first_section bg-white px-6 lg:px-12 py-6 lg:py-16 edge">
		<h1 class="h1 text-no_darkblue pb-4">Mehr Meer sehen!</h1>
		<h2>
			Ankommen und sich wohlfühlen ist das Motto unserer Ferienwohnung „Am Meer Norderneys“! In
			unserer vollständig sanierten und mit neuen Möbeln ausgestatteten Ferienwohnung bieten wir
			Ihnen ganzjährig <a sveltekit:prefetch href="{base}/preise"
				>Vergünstigungen und Sonderkonditionen</a
			>
			an.
		</h2>
		<h2>
			Wir freuen uns auf Ihre Anfrage und machen Ihnen auch sehr gerne ein individuelles Angebot.
		</h2>
		<Review />
	</section>

	<section>
		<Cards />
	</section>
</div>
