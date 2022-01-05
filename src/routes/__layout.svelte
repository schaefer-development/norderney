<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>


<div class="flex flex-col h-screen justify-between">
<Header />
<main>
	<slot />
</main>

<Footer />
</div>