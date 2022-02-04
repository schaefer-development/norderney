<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Kontakt: Am Meer Norderneys</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<div class="main">
	<section class="relative first_section bg-white px-6 lg:px-12 py-6 lg:py-12 edge">
		<h2 class="pb-2">
			Möchten Sie uns eine Anfrage für einen bestimmten Zeitraum senden oder haben Sie noch weitere
			Fragen zu unserer Ferienwohnung "Am Meer Norderneys"? <br />Dann prüfen Sie unseren

			<a sveltekit:prefetch href="{base}/termine">Belegungskalender</a>

			und
			<a href="mailto:m.bertgen@t-online.de">schreiben Sie uns!</a> <br />Wir geben gerne Auskunft
			und freuen uns auf Ihren Besuch auf Norderney!
		</h2>

		<h1 class="h1 text-darkblue pt-8 pb-4">Kontakt Vermietung</h1>

		<p class="text-center">
			Dr. Marion Bertgen-Giesen<br />

			Telefon: 0228 - 23 03 90<br />

			Handy: 0177 - 52 61 436<br />

			E-Mail:
			<a href="mailto:m.bertgen@t-online.de">m.bertgen@t-online.de</a>
		</p>
	</section>
</div>
