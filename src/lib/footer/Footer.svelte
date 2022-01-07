<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<footer class=" ">
	<div class="strand grid content-end">
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
					dur="11s"
					values="
					M1610,89c-311,0-419.9-64.1-821-64c-400,0-510,64-799,64v21h1620C1610,110,1610,103.7,1610,89z;
					M1610,79c-311,0-419.9-44.1-821-44C389,35,279,79-10,79v31h1620C1610,110,1610,93.7,1610,79z;

					M1610,45.1c-311,0-419.9,23.6-821,23.7c-400,0-510-23.7-799-23.7V110h1620C1610,110,1610,59.8,1610,45.1z;
					M1610,25.1c-311,0-419.9,63.6-821,63.7c-400,0-510-63.7-799-63.7V110h1620C1610,110,1610,39.8,1610,25.1z;
					M1610,45.1c-311,0-419.9,23.6-821,23.7c-400,0-510-23.7-799-23.7V110h1620C1610,110,1610,59.8,1610,45.1z;

					M1610,79c-311,0-419.9-44.1-821-44C389,35,279,79-10,79v31h1620C1610,110,1610,93.7,1610,79z;
					M1610,89c-311,0-419.9-64.1-821-64c-400,0-510,64-799,64v21h1620C1610,110,1610,103.7,1610,89z"
				/>
			</path>
		</svg>
		<!-- -->
	</div>

	<div class="relative w-full bg-no_darkblue ">
		<div class="max-w-screen-xl mx-auto py-16">
			<div class="text-no_lightblue grid grid-cols-2 gap-10">
				<div class="logo col-span-full">
					<div class="w-5/12 lg:w-4/12 mx-auto">
						<Logo />
						<div class="bg-no_lightblue h-0.5 w-5/12 mx-auto mt-6" />
					</div>
				</div>
				<div class="col-span-full lg:col-span-1 text-center lg:text-right">
					<a href="{base}/" class="text-sm uppercase tracking-widest block hover:text-white"
						>Start</a
					>
					<a href="{base}/lage" class="text-sm uppercase tracking-widest block">Lage & Ausbildung</a
					>
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
					<span class="text-sm uppercase tracking-widest"
						>E-Mail: <a href="mailto:info@am-meer-norderney.de">info@am-meer-norderney.de</a></span
					><br />
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.strand {
		width: 100%;
		height: 100px;
	}
</style>
