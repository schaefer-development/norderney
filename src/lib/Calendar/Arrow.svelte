<script>
	export let left = false;
</script>

<!--
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	<path fill="#c4d9fd" d="M0 256c0 141.2 114.8 256 256 256V0A256.3 256.3 0 000 256z" />
	<path fill="#c4d9fd" d="M256 0v512c141.2 0 256-114.8 256-256S397.2 0 256 0z" />
	<path
		fill="#5286fa"
		d="M226 115.4a23.3 23.3 0 00-33 33L300.7 256 193 363.7a23.3 23.3 0 1033 32.9l124-124.1a23.3 23.3 0 000-33l-124-124z"
	/></svg
>
-->

<svg
	class="flex-none bg-darkblue-lighter text-white hover:bg-darkblue cursor-pointer w-8 h-8 px-2 py-2  ease-in-out transition-all duration-300"
	class:left
	on:click
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 40 40"
	width="40"
	height="40"
	><path
		fill="currentcolor"
		d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
	/></svg
>

<style>
	.left {
		transform: rotateY(180deg);
	}
</style>
