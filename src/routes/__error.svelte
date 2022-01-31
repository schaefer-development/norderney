<script context="module" lang="ts">
	import { base } from '$app/paths';
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status,
				error
			}
		};
	}
</script>

<script>
	export let title;
	export let status;
	export let error;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="main">
	<section class="relative first_section bg-white px-6 lg:px-12 py-6 lg:py-12 edge">
		<h1 class="no_h2 text-darkblue pb-4">Ups ... Error {status}</h1>
		<h2 class="text-center pb-6">{error.message}</h2>
		<p class="text-center">
			Da ist etwas schief gelaufen – die gewünschte Seite gibt es nicht (mehr).<br />Möchten Sie
			stattdessen zur
			<a href="{base}/termine">Startseite?</a>
		</p>
	</section>
</div>
