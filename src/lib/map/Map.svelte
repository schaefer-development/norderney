<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import type { IconOptions, LatLngTuple } from 'leaflet';
	export let iconOptions: IconOptions = {
		iconUrl: `${base}/mapmarker.png`,
		iconSize: [64, 80],
		iconAnchor: [32, 80]
	};
	export let layerOptions = [
		'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
		{
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			maxZoom: 19
		}
	];
	export let zoom = 13;
	export let coordinates: LatLngTuple = [53.70985, 7.14347];

	export let mapAttributes = {
		style: 'width: 100%; height: 100%'
	};

	onMount(async () => {
		const L = await import('leaflet');
		const icon = L.icon(iconOptions);
		const map = L.map('map', { scrollWheelZoom: false, zoomControl: false }).setView(
			new L.LatLng(53.716, 7.14347), // new centered!
			zoom
		);

		L.tileLayer.apply(null, layerOptions).addTo(map);
		L.marker(coordinates, { icon }).addTo(map);
		L.control
			.zoom({
				position: 'topleft'
			})
			.addTo(map);

		return () => map && map.remove();
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin=""
	/>
</svelte:head>
<div class="relative">
	<div id="map" {...mapAttributes} class="mod_map z-10" />
</div>
