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

<div class="mx-14 lg:mx-16">
	<div class="main">
		<h1>Preise</h1>
		<h2>Ferienwohnung "am Meer Norderneys"</h2>
		<p class="text-no_darkblue font-bold pb-12">
			Sonderpreis vom 9. bis 14. Januar 2022, für 450€ komplett inkl. aller Kosten.<br />
			Sonderpreis 6. bis 12. März 2022, für 550€ komplett inkl. aller Kosten.<br />
			Buchungslücke 8. bis 10. Mai 2022, 200€ komplett, inkl. aller Kosten. <br />
		</p>

		<div class="grid grid-cols-2 gap-12">
			<div class="left col-span-2 lg:col-span-1">
				<!-- -->
				<h3>Nebensaison:</h3>
				3. 1. - 28. 2. 2022
				<p class="pb-6">85€/ Tag</p>
				<h3>Vorsaison:</h3>
				1.3. - 31.3. 2022
				<p class="pb-6">90€/ Tag</p>
				<h3>Zwischensaison:</h3>
				1.4. - 31.5.2022
				<p class="pb-6">100€/ Tag</p>
				<h3>Hauptsaison 1:</h3>
				1.6. - 30.6.2022
				<p class="pb-6">110€/Tag</p>
				<h3>Hauptsaison 2:</h3>
				1.7. - 31.8.2022
				<p class="pb-6">120€/Tag</p>
				<!-- -->
			</div>

			<div class="right col-span-2 lg:col-span-1">
				<!-- -->
				<h3>Hauptsaison 3:</h3>
				1.9. - 30.9.2022
				<p class="pb-6">110€/Tag</p>
				<h3>Zwischensaison:</h3>
				1.10 - 31.10.2022
				<p class="pb-6">100€/Tag</p>
				<h3>Nebensaison 1:</h3>
				11. - 22.12. 2022
				<p class="pb-6">85€/Tag</p>
				<h3>Hauptsaison</h3>
				23.12. - 6.1.2023
				<p class="pb-6">110€/Tag</p>
				<!--  -->
			</div>
		</div>
	</div>
</div>
