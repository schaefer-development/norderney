<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<footer class="z-20 -mt-12">
	<!--- -->

	<div class="beach">
		<svg
			class="wave"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 1600 71.6"
			style="overflow:visible;enable-background:new 0 0 1600 71.6;"
			xml:space="preserve"
		>
			<defs />
			<path
				fill="#1f3947"
				d="M1600,71H0c0,0,0-25,0-71c80,0,196,40,400,40S682,0,800,0s209,40,400,40s265-40,400-40C1600,83,1600,71,1600,71
	z"
			/>
		</svg>
	</div>

	<!-- -->

	<div class="relative w-full bg-no_darkblue ">
		<div class="max-w-screen-xl mx-auto pt-12 pb-20">
			<div class="text-no_lightblue grid grid-cols-2 gap-10">
				<div class="logo col-span-full">
					<div class="w-5/12 lg:w-4/12 mx-auto hover:opacity-60 transition-all duration-300">
						<Logo />
						<div class="bg-no_lightblue h-0.5 w-5/12 mx-auto mt-6" />
					</div>
				</div>
				<div class="col-span-full lg:col-span-1 text-center lg:text-right">
					<a href="{base}/" class="text-sm uppercase tracking-widest block hover:opacity-60 py-1"
						>Start</a
					>
					<a
						href="{base}/lage"
						class="text-sm uppercase tracking-widest block hover:opacity-60 py-1"
						>Lage & Ausbildung</a
					>

					<a
						href="{base}/bilder"
						class="text-sm uppercase tracking-widest block hover:opacity-60 py-1">Bilder</a
					>

					<a
						href="{base}/preise"
						class="text-sm uppercase tracking-widest block hover:opacity-60 py-1">Preise</a
					>

					<a
						href="{base}/termine"
						class="text-sm uppercase tracking-widest block hover:opacity-60 py-1">Termine</a
					>
					<a
						href="{base}/datenschutz"
						class="text-sm uppercase tracking-widest block hover:opacity-60 py-1">Datenschutz</a
					>

					<a
						href="{base}/impressum"
						class="text-sm uppercase tracking-widest block hover:opacity-60 py-1">Impressum</a
					>
				</div>
				<div class="col-span-full lg:col-span-1 text-center lg:text-left">
					<span class="text-sm uppercase tracking-widest block py-1">Dr. Marion Bertgen-Giesen</span
					>
					<span class="text-sm uppercase tracking-widest block  py-1">Telefon: 0228 - 23 03 90</span
					>
					<span class="text-sm uppercase tracking-widest block py-1">Mobil: 0177 - 52 61 436</span>
					<span class="text-sm uppercase tracking-widest block py-1"
						>E-Mail: <a
							href="mailto:m.bertgen@t-online.de"
							class="text-sm uppercase tracking-widest hover:opacity-60 py-1"
							>m.bertgen@t-online.de</a
						></span
					>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	.beach {
		position: relative;
		width: 100%;
		height: 10vw;
		bottom: -1.5vw;
		transform: scaleY(0.75);
	}

	.wave {
		position: absolute;
		left: 0;
		bottom: -0.5vw;
		width: 200%;
		animation: wave linear 10s infinite;
	}

	@keyframes wave {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
