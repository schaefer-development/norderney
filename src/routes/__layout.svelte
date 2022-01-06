<script lang="ts">
	import { base } from '$app/paths';
	import '@fontsource/catamaran/400.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import Index from './index.svelte';
</script>

<div class="flex flex-col min-h-screen justify-between">
	<Header />



	<div class="mx-4 md:mx-10">
	<main class="mb-auto relative z-10 bg-white w-full max-w-screen-lg mx-auto -mt-12 mb-12 px-10 pt-4 pb-16">
		<slot />
	</main>
</div>
	<Footer />
</div>


<style>
main:after{
	content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 50px;
	margin-top: -50px;
	background-color: inherit;
	-webkit-clip-path: polygon(100% 0,0 100%,100% 100%);
	clip-path: polygon(100% 0,0 100%,100% 100%);
}


</style>