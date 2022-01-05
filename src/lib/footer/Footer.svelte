<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/logo/Logo.svelte';
</script>

<footer class="bg-no_darkblue">
	<div class="wave w-full border h-12"></div>
	<div class="max-w-screen-2xl mx-auto">
		<div class="text-no_lightblue grid grid-cols-2 gap-x-12">
			<div class="logo col-span-full">
				<div class="w-10/12 md:w-8/12 lg:w-4/12 pb-4 mx-auto">
					<Logo />
					<div class="bg-no_lightblue h-0.5 w-5/12 mx-auto my-2"></div>
				</div>
			</div>
			<div class="col-span-full lg:col-span-1 text-center lg:text-right pb-8">
				<span class="text-sm uppercase tracking-widest">Start</span><br>
				<span class="text-sm uppercase tracking-widest">Lage & Ausstattung</span><br>
				<span class="text-sm uppercase tracking-widest">Bilder</span><br>
				<span class="text-sm uppercase tracking-widest">Preise</span><br>
				<span class="text-sm uppercase tracking-widest">Freie Termine</span><br>
				<span class="text-sm uppercase tracking-widest">Kontakt</span><br>
				<span class="text-sm uppercase tracking-widest">Datenschutz</span><br>
				<span class="text-sm uppercase tracking-widest">Impressum</span><br>
			</div>
			<div class="col-span-full lg:col-span-1 text-center lg:text-left pb-8">
				<span class="text-sm uppercase tracking-widest">Dr. Marion Bertgen-Giesen</span><br>
				<span class="text-sm uppercase tracking-widest">Telefon: 0228 - 23 03 90</span><br>
				<span class="text-sm uppercase tracking-widest">Mobil:  0177 - 52 61 436</span><br>
				<span class="text-sm uppercase tracking-widest">E-Mail: info@am-meer-norderney.de</span><br>

			</div>
		</div>
	</div>
</footer>
