<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import Map from '$lib/map/Map.svelte';
	const mapAttributes = {
		class: '',
		style: 'width: 100%; height: 50vh;'
	};
	export const prerender = true;
</script>

<div class="flex flex-col justify-center">
	<div class="hero">
		<Map {mapAttributes} />
	</div>
	<div class="mx-14 lg:mx-16">
		<div
			class="main max-w-screen-lg mx-auto -mt-12 bg-white px-12 lg:px-20 py-12 lg:py-16 relative z-50"
		>
			<h1 class="text-no_brown text-4xl text-center font-bold ">Preise</h1>
			<h2 class="text-no_brown text-md text-center font-bold tracking-wider uppercase">
				Ferienwohnung "am Meer Norderneys"
			</h2>
			<p class="text-no_darkblue font-bold py-4">
				Sonderpreis vom 9. bis 14. Januar 2022, für 450€ komplett inkl. aller Kosten.<br />
				Sonderpreis 6. bis 12. März 2022, für 550€ komplett inkl. aller Kosten.<br />
				Buchungslücke 8. bis 10. Mai 2022, 200€ komplett, inkl. aller Kosten. <br />
			</p>
			<p class="py-4">
				<span class="font-bold">Nebensaison: 3.1. - 28.2.2022</span><br />85 Euro/ Tag
			</p>
			<p class="py-4"><span class="font-bold">Vorsaison: 1.3. - 31.3.2022</span><br />90€/ Tag</p>
			<p class="py-4">
				<span class="font-bold">Zwischensaison: 1.4. - 31.5.2022</span><br />100€/ Tag
			</p>
			<p class="py-4">
				<span class="font-bold">Hauptsaison 1: 1.6. - 30.6.2022</span><br />110€/Tag
			</p>
			<p class="py-4">
				<span class="font-bold">Hauptsaison 2: 1.7. - 31.8.2022</span><br />120€/Tag
			</p>
			<p class="py-4">
				<span class="font-bold">Hauptsaison 3: 1.9. - 30.9.2022</span><br />110€/Tag
			</p>
			<p class="py-4">
				<span class="font-bold">Zwischensaison: 1.10 - 31.10.2022</span><br />100€/Tag
			</p>
			<p class="py-4">
				<span class="font-bold">Nebensaison 1. 11. - 22.12.2022</span><br />85€/Tag
			</p>
			<p class="py-4"><span class="font-bold">Hauptsaison 23.12. - 6.1.2023</span><br />110€/Tag</p>
			<p class="py-4">
				Informationen zu den Stornogebühren finden Sie bei Vertragsabschluss auf dem
				Bestätigungsformular. Wir empfehlen in jedem Fall den Abschluss einer
				Reiserücktrittsversicherung. Bei pandemiebedingten Stornierungen werden die geleisteten
				Zahlungen umgehend zurück erstattet oder den Gästen auf Wunsch neue Termine angeboten.
			</p>
		</div>
	</div>
</div>

<style>
	.main:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 50px;
		margin-top: -50px;
		background-color: inherit;
		-webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
		clip-path: polygon(100% 0, 0 100%, 100% 100%);
	}
</style>
