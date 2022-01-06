<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import Map from '$lib/map/Map.svelte';
	const mapAttributes = {
		class: '',
		style: 'width: 100%; height: 60vh;'
	};
	export const prerender = true;
</script>



<div class="flex flex-col justify-center">
<div class="hero">
	<Map {mapAttributes} />
</div>
<div class="mx-12 lg:mx-16">
    <div class="main max-w-screen-lg mx-auto -mt-12 bg-white px-12 lg:px-20 py-6 lg:py-16 relative z-50">



	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet.
	</p>

	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet.
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
		margin-top: -49px;
		background-color: inherit;
		-webkit-clip-path: polygon(100% 0, 0 100%, 100% 100%);
		clip-path: polygon(100% 0, 0 100%, 100% 100%);
	}
</style>
