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

	<div class="main">
		<section class="relative first_section bg-white px-12 py-12 edge">
			<h1>Kaiserstraße 17, 26548 Norderney</h1>
			<h2>
				Direkt an der Promenade, im Haus Nordseeblick A in der zweiten Etage, mit seitlichem
				Meerblick. Das Haus hat einen Aufzug und alle Zugänge sind behindertengerecht ausgestattet.
				Das Stadtzentrum mit allen Geschäften ist von hier aus in zwei Minuten zu erreichen, noch
				schneller sind Sie am Meer.
			</h2>

			<h2>
				Die Ferienwohnung "Am Meer Norderneys" (ca. 44qm) verfügt über die folgende Ausstattung:
			</h2>

			<div class="grid grid-cols-2 gap-12 pt-10">
				<div class="left col-span-2 md:col-span-1">
					<h3>Einbauküche</h3>

					<ul>
						<li>Spülmaschine</li>
						<li>Kühlschrank mit Gefrierfach</li>
						<li>Mikrowellen-Backofenkombination</li>
						<li>Ceranfeld mit 4 Kochplatten</li>
						<li>übliche Küchengeräte (z.B. Toaster, Wasserkocher)</li>
					</ul>
					<h3>Wohnbereich</h3>
					<ul>
						<li>Fernseher (Flat-TV mit Festplattenrecorder zum Aufzeichnen)</li>
						<li>
							bequemes Schlafsofa mit Lattenrost und Federkernmatratze (Liegefläche:160cmx200cm)
						</li>
						<li>gemütliche Essecke mit Buchen-Vollholzmöbeln und Meerblick</li>
					</ul>

					<h3>Schlafzimmer</h3>
					<ul>
						<li>weiterer Flat-TV</li>
						<li>
							zwei seperaten Komfort-Einzelbetten, allergikergeeignet, Vita_Med Holzrahmen und
							Bonnelli-Federkernmatratze, Härte 3
						</li>
						<li>Meerblick vom Bett aus</li>
					</ul>
				</div>

				<div class="right col-span-2 md:col-span-1">
					<h3>Diele</h3>
					<ul>
						<li>modernisiert mit viel Stauraum für Schuhe, Jacken etc.</li>
					</ul>
					<h3>Bad (weiß gefliest)</h3>

					<ul>
						<li>Dusche</li>
						<li>WC</li>
						<li>Handtuchheizkörper</li>
					</ul>
					Überdachte Terrasse mit seitlichem Meerblick
				</div>
			</div>
		</section>
	</div>
</div>
