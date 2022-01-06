<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<footer class="overflow-hidden mt-6 lg:mt-16">



	<div class="strand border">



	</div>

	<!--

	<div class="relative w-full border h-10v ">
		<div class="shore  border ">
			<div class="ocean border">
				<div class="wave" />
			</div>
		</div>
	</div>

	-->

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

	.strand{
		width:100%;
		height:100px;
	}

.shore {
		position:relative;
		width: 100%;
		height: 10vh;
	}

	.ocean {
		height: 10vh;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;

	}

	.wave {
		background: url('../static/wave.svg') repeat-x;
		background-size:contain;
		position: absolute;
		z-index:9999;
		width: 6400px;
		height: 198px;
		animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, swell 7s ease -1.25s infinite;;
		transform: translate3d(0, 0, 0);
		border:1px solid blue;

	}


	@keyframes wave {
		0% {
			margin-left: 0;
		}
		100% {
			margin-left: -1600px;
		}
	}

	@keyframes swell {
		0%,
		100% {
			transform: translate3d(0, 0, 0); /* 0, -50px, 0 */
		}
		50% {
			transform: translate3d(0, 0, 0);
		}
	}
</style>
