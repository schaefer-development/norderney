<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Preise: Am Meer Norderneys</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<div class="main">
	<section class="relative first_section bg-white px-6 lg:px-12 py-6 lg:py-12 edge">
		<h1 class="h1 text-darkblue pb-4">Preise</h1>
		<h2 class="text-center pb-6">Ferienwohnung "am Meer Norderneys"</h2>
		<div class="divider h-1 w-3/12 mx-auto my-10" />

		<div class="grid grid-cols-2 gap-x-12 gap-y-10">
			<h2 class="col-span-2 text-center fontsize_lg ">2022</h2>
			<div class="left text-left sm:text-right col-span-2 sm:col-span-1">
				<!-- -->
				<h3>Nebensaison:</h3>
				3. Januar - 28. Feburar 2022
				<p>85€/ Tag</p>

				<p class="text-red pb-6">
					Sonderpreis vom 9. bis 14. Januar 2022, <br />für 450€ komplett inkl. aller Kosten
				</p>

				<h3>Vorsaison:</h3>
				1. März - 31. März 2022
				<p>90€/ Tag</p>
				<p class="text-red pb-6">
					Sonderpreis 6. bis 12. März 2022, <br />für 550€ komplett inkl. aller Kosten
				</p>

				<h3>Zwischensaison:</h3>
				1. April - 31. Mai 2022
				<p>100€/ Tag</p>

				<p class="text-red pb-6">
					Buchungslücke 8. bis 10. Mai 2022,<br /> 200€ komplett, inkl. aller Kosten.
				</p>

				<h3>Hauptsaison 1:</h3>
				1. Juni - 30. Juni 2022
				<p class="pb-6">110€/ Tag</p>
				<h3>Hauptsaison 2:</h3>
				1. Juli - 31. August 2022
				<p>120€/ Tag</p>
				<!-- -->
			</div>

			<div class="right col-span-2 sm:col-span-1">
				<!-- -->
				<h3>Hauptsaison 3:</h3>
				1. September - 30. September 2022
				<p class="pb-6">110€/ Tag</p>
				<h3>Zwischensaison:</h3>
				1. Oktober - 31. Oktober 2022
				<p class="pb-6">100€/ Tag</p>
				<h3>Nebensaison 1:</h3>
				1. November - 22. Dezember 2022
				<p class="pb-6">85€/ Tag</p>
				<h3>Hauptsaison</h3>
				23. Dezember - 6. Januar 2023
				<p>110€/ Tag</p>
				<!--  -->
			</div>

			<div class="col-span-2">
				<div class="divider h-1 w-3/12 mx-auto my-10" />
				<h2 class="fontsize_lg text-center">2023</h2>
			</div>

			<div class="left text-left sm:text-right col-span-2 sm:col-span-1">
				<!-- -->
				<h3>Nebensaison:</h3>
				3. Januar - 28. Feburar 2022
				<p class="pb-6">90€/ Tag</p>
				<h3>Vorsaison:</h3>
				1. März - 31. März 2022
				<p class="pb-6">95€/ Tag</p>
				<h3>Zwischensaison:</h3>
				1. April - 31. Mai 2022
				<p class="pb-6">105€/ Tag</p>
				<h3>Hauptsaison 1:</h3>
				1. Juni - 30. Juni 2022
				<p class="pb-6">115€/ Tag</p>
				<h3>Hauptsaison 2:</h3>
				1. Juli - 31. August 2022
				<p>125€/ Tag</p>
				<!-- -->
			</div>

			<div class="right col-span-2 sm:col-span-1">
				<!-- -->
				<h3>Hauptsaison 3:</h3>
				1. September - 30. September 2022
				<p class="pb-6">115€/ Tag</p>
				<h3>Zwischensaison:</h3>
				1. Oktober - 31. Oktober 2022
				<p class="pb-6">105€/ Tag</p>
				<h3>Nebensaison 1:</h3>
				1. November - 22. Dezember 2022
				<p class="pb-6">90€/ Tag</p>
				<h3>Hauptsaison</h3>
				23. Dezember - 6. Januar 2023
				<p>115€/ Tag</p>
				<!--  -->
			</div>

			<div class="col-span-2">
				<p class="pb-4">
					Informationen zu den Stornogebühren finden Sie bei Vertragsabschluss auf dem
					Bestätigungsformular. Wir empfehlen in jedem Fall den Abschluss einer
					Reiserücktrittsversicherung. Bei pandemiebedingten Stornierungen werden die geleisteten
					Zahlungen umgehend zurück erstattet oder den Gästen auf Wunsch neue Termine angeboten.
				</p>
				<p>
					Haben wir Ihr Interesse geweckt? Dann schauen Sie in unseren <a
						sveltekit:prefetch
						href="{base}/termine">Belegungskalender</a
					>, ob Ihre Wunschtermine verfügbar sind und schreiben Sie uns gerne eine E-Mail an
					<a href="mailto:m.bertgen@t-online.de">m.bertgen@t-online.de</a> oder rufen einfach an.
				</p>
			</div>
		</div>
	</section>
</div>
