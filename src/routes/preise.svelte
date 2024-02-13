<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Preise: Am Meer Norderneys</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<section>
	<div class="grid grid-cols-2 gap-x-12 gap-y-10">
		<div class="col-span-2">
			<h1 class="col-span-2 h1 text-darkblue pb-4">Preise 2024</h1>
		</div>

		<div class="left text-left sm:text-right col-span-2 sm:col-span-1">
			<!-- -->
			<h3>Nebensaison:</h3>
			1. Januar - 29. Februar 2024
			<p class="pb-6">90€/ Tag</p>
			<h3>Vorsaison:</h3>
			1. März - 31. März 2024
			<p class="pb-6">100€/ Tag</p>
			<h3>Zwischensaison:</h3>
			1. April - 31. Mai 2024
			<p class="pb-6">110€/ Tag</p>
			<h3>Hauptsaison 1:</h3>
			1. Juni - 30. Juni 2024
			<p class="pb-6">120€/ Tag</p>
			<h3>Hauptsaison 2:</h3>
			1. Juli - 31. August 2024
			<p>130€/ Tag</p>
			<!-- -->
		</div>

		<div class="right col-span-2 sm:col-span-1">
			<!-- -->
			<h3>Hauptsaison 3:</h3>
			1. September - 30. September 2024
			<p class="pb-6">120€/ Tag</p>
			<h3>Zwischensaison:</h3>
			1. Oktober - 31. Oktober 2024
			<p class="pb-6">110€/ Tag</p>
			<h3>Nebensaison 1:</h3>
			1. November - 22. Dezember 2024
			<p class="pb-6">90€/ Tag</p>
			<h3>Hauptsaison</h3>
			23. Dezember 2024 - 6. Januar 2025
			<p>125€/ Tag</p>
			<!--  -->
		</div>

		<div class="col-span-2">
			<div class="divider h-1 w-3/12 mx-auto my-16" />
			<h1 class="col-span-2 h1 text-darkblue pb-4">Preise 2025</h1>
		</div>

		<div class="left text-left sm:text-right col-span-2 sm:col-span-1">
			<!-- -->
			<h3>Nebensaison:</h3>
			7. Januar - 28. Februar 2025
			<p class="pb-6">90€/ Tag</p>
			<h3>Vorsaison:</h3>
			1. März - 31. März 2025
			<p class="pb-6">100€/ Tag</p>
			<h3>Zwischensaison:</h3>
			1. April - 31. Mai 2025
			<p class="pb-6">110€/ Tag</p>
			<h3>Hauptsaison 1:</h3>
			1. Juni - 30. Juni 2025
			<p class="pb-6">120€/ Tag</p>
			<h3>Hauptsaison 2:</h3>
			1. Juli - 31. August 2025
			<p>130€/ Tag</p>
			<!-- -->
		</div>

		<div class="right col-span-2 sm:col-span-1">
			<!-- -->
			<h3>Hauptsaison 3:</h3>
			1. September - 30. September 2025
			<p class="pb-6">120€/ Tag</p>
			<h3>Zwischensaison:</h3>
			1. Oktober - 31. Oktober 2025
			<p class="pb-6">110€/ Tag</p>
			<h3>Nebensaison 1:</h3>
			1. November - 22. Dezember 2025
			<p class="pb-6">90€/ Tag</p>
			<h3>Hauptsaison</h3>
			23. Dezember 2025 - 6. Januar 2026
			<p>125€/ Tag</p>
			<!--  -->
		</div>

		<div class="col-span-2">
			<p class="pb-4">
				Buchungen von November bis Februar ab 3 Nächte möglich. Übrige Zeit ab 6 Nächte. Bei
				Buchungslücken Kurzurlaub möglich. Anreise täglich.
			</p>
			<p class="pb-4">
				Kinderbett und Kinderstuhl auf Anfrage, jeweils einmalig 10 Euro.<br />
				Hunde auf Anfrage, einmalig 10 bis 20 Euro.<br />
				Endreinigung, Wäschepakete, Schlüsselübergabe vor Ort, Energiekosten einmalig 100 Euro.<br
				/>
			</p>

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
