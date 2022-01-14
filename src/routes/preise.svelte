<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
</script>

<div class="hero h-50v">
	<div
		class="bg_layer w-full h-50v bg-cover bg-no_bg_hero "
		style="background-image: url({base}/hero_placeholder.jpg)"
	/>
</div>

<div class="main">
	<section class="relative first_section bg-white px-12 py-12 edge">
		<h1>Preise</h1>
		<h2>Ferienwohnung "am Meer Norderneys"</h2>
		<p class="text-no_darkblue font-bold highlight">
			Sonderpreis vom 9. bis 14. Januar 2022, für 450€ komplett inkl. aller Kosten.<br />
			Sonderpreis 6. bis 12. März 2022, für 550€ komplett inkl. aller Kosten.<br />
			Buchungslücke 8. bis 10. Mai 2022, 200€ komplett, inkl. aller Kosten. <br />
		</p>

		<div class="grid grid-cols-2 gap-12">
			<div class="left col-span-2 lg:col-span-1">
				<!-- -->
				<h3>Nebensaison:</h3>
				3. Januar - 28. Feburar 2022
				<p class="pb-6">85€/ Tag</p>
				<h3>Vorsaison:</h3>
				1. März - 31. März 2022
				<p class="pb-6">90€/ Tag</p>
				<h3>Zwischensaison:</h3>
				1. April - 31. Mai 2022
				<p class="pb-6">100€/ Tag</p>
				<h3>Hauptsaison 1:</h3>
				1. Juni - 30. Juni 2022
				<p class="pb-6">110€/ Tag</p>
				<h3>Hauptsaison 2:</h3>
				1. Juli - 31. August 2022
				<p class="pb-6">120€/ Tag</p>
				<!-- -->
			</div>

			<div class="right col-span-2 lg:col-span-1">
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
				<p class="pb-6">110€/ Tag</p>
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
					Haben wir Ihr Interesse geweckt? Dann schauen Sie in unseren Belegungskalender, ob Ihre
					Wunschtermine verfügbar sind und stellen Sie uns gerne ein Anfrage über das
					Kontaktformular oder rufen einfach an.
				</p>
			</div>
		</div>
	</section>
</div>
