<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="-mt-12 pt-12 relative z-50 ">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
		<!-- card -->
		<div class="mod_card overflow-hidden w-full text-white md:mx-0 lg:mx-0">
			<div class="overflow-hidden">
				<img
					class="relative w-full bg-cover"
					src="{base}/ausstattung.jpg"
					alt="Lage & Ausstattung"
				/>
			</div>
			<div class="relative text-center px-4 pt-6 pb-8 bg-darkblue-lighter -mt-1">
				<span class="h1 fontsize_lg block mb-4 text-lightblue px-4">Lage & Ausstattung</span>
				<a
					href="{base}/lage"
					class="bg-darkblue text-sm block w-9/12 py-4 mx-auto uppercase font-bold tracking-widest text-white no-underline hover:bg-lightblue hover:text-darkblue transition duration-300 ease-in-out"
					>Mehr erfahren</a
				>
			</div>
		</div>
		<!-- /card -->

		<!-- card -->
		<div class="mod_card overflow-hidden w-full text-white md:mx-0 lg:mx-0">
			<div class="overflow-hidden">
				<img class="relative w-full bg-cover" src="{base}/lage.jpg" alt="Lage & Ausstattung" />
			</div>
			<div class="relative text-center px-4 pt-6 pb-8 bg-darkblue-lighter -mt-1">
				<span class="h1 fontsize_lg block mb-4 text-lightblue px-4">Bilder</span>

				<a
					href="{base}/bilder"
					class="bg-darkblue text-sm block w-9/12 py-4 mx-auto uppercase font-bold tracking-widest text-white no-underline hover:bg-lightblue hover:text-darkblue transition duration-300 ease-in-out"
					>Mehr erfahren</a
				>
			</div>
		</div>
		<!-- /card -->
	</div>
</div>

<style>
	.mod_card div img {
		transform: scale(1.01);
		transition: all;
		transition-duration: 0.5s;
	}
	.mod_card:hover div img {
		transform: scale(1.1);
	}
</style>
