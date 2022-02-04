<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const url = '/termine.json';
		const res = await fetch(url);

		if (res.ok) {
			const { events } = await res.json();
			return {
				props: {
					events
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import '../app.css';

	import Calendar from '$lib/Calendar/Calendar.svelte';
	const today = new Date();
	export let events = [];
</script>

<svelte:head>
	<title>Termine: Am Meer Norderneys</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="de" />
</svelte:head>

<div class="main">
	<section class="relative first_section bg-white px-6 lg:px-12 py-6 lg:py-12 edge">
		<h2>
			Möchten Sie unsere Ferienwohnung "Am Meer Norderneys" besuchen und ein paar Tage am Meer
			entspannen? Dann prüfen Sie bitte die Verfügbarkeit in unserem Belegungskalender und schreiben
			Sie uns eine Anfrage via E-Mail an <a href="mailto:m.bertgen@t-online.de"
				>m.bertgen@t-online.de</a
			> mit Ihren Wunschdaten.
		</h2>

		<div class="divider h-1 w-3/12 mx-auto my-10" />
		<Calendar {today} {events} />
	</section>
</div>
