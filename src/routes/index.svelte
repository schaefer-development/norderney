<script lang="ts">
	import { base } from '$app/paths';
	import Review from '$lib/review/Review.svelte';
	import Cards from '$lib/cards/Cards.svelte';
</script>

<svelte:head>
	<title>Am Meer Norderneys – Mehr Meer sehen!</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<section>
	<h1 class="h1 text-darkblue pb-4">Moin Moin!</h1>
	<h2>
		Ankommen und sich wohlfühlen ist das Motto unserer Ferienwohnung „Am Meer Norderneys“! In
		unserer vollständig sanierten und mit neuen Möbeln ausgestatteten Ferienwohnung bieten wir Ihnen
		ganzjährig <a sveltekit:prefetch href="{base}/preise">Vergünstigungen und Sonderkonditionen</a>
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
