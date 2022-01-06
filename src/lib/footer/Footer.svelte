<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<footer class="overflow-hidden ">
	<div class="strand border">
		<!--- -->
		<svg
			version="1.1"
			id="wave"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 1600 100"
			style="enable-background:new 0 0 1600 100;"
			xml:space="preserve"
		>
			<path fill="#1f3947">
				<animate
					repeatCount="indefinite"
					attributeName="d"
					dur="15s"
					values="
		
		
					M1610,24.9c-311,0-419.9,63.5-821,63.6c-400,0-510-63.6-799-63.6V110h1620C1610,110,1610,39.6,1610,24.9z;
		
					M1610,89c-311,0-419.9-64.1-821-64c-400,0-510,64-799,64v21h1620C1610,110,1610,103.7,1610,89z;



					M1610,24.9c-311,0-419.9,63.5-821,63.6c-400,0-510-63.6-799-63.6V110h1620C1610,110,1610,39.6,1610,24.9z
"
				/>
			</path>
		</svg>

		<!-- -->
	</div>



	<div class="relative w-full bg-no_darkblue ">
		<div class="max-w-screen-xl mx-auto py-16">
			<div class="text-no_lightblue grid grid-cols-2 gap-10">
				<div class="logo col-span-full">
					<div class="w-6/12 lg:w-4/12 mx-auto">
						<Logo />
						<div class="bg-no_lightblue h-0.5 w-5/12 mx-auto my-2" />
					</div>
				</div>
				<div class="col-span-full lg:col-span-1 text-center lg:text-right">
					<span class="text-sm uppercase tracking-widest">Start</span><br />
					<span class="text-sm uppercase tracking-widest">Lage & Ausstattung</span><br />
					<span class="text-sm uppercase tracking-widest">Bilder</span><br />
					<span class="text-sm uppercase tracking-widest">Preise</span><br />
					<span class="text-sm uppercase tracking-widest">Freie Termine</span><br />
					<span class="text-sm uppercase tracking-widest">Kontakt</span><br />
					<span class="text-sm uppercase tracking-widest">Datenschutz</span><br />
					<span class="text-sm uppercase tracking-widest">Impressum</span><br />
				</div>
				<div class="col-span-full lg:col-span-1 text-center lg:text-left">
					<span class="text-sm uppercase tracking-widest">Dr. Marion Bertgen-Giesen</span><br />
					<span class="text-sm uppercase tracking-widest">Telefon: 0228 - 23 03 90</span><br />
					<span class="text-sm uppercase tracking-widest">Mobil: 0177 - 52 61 436</span><br />
					<span class="text-sm uppercase tracking-widest">E-Mail: info@am-meer-norderney.de</span
					><br />
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.strand {
		width: 100%;
		height: 6vh;
	}
</style>
