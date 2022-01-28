<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="relative overflow-hidden -mt-12">
	<div class="w-full bottom-0 absolute h-10v z-10">
		<div
			class="bg_layer w-full h-10v bg-cover"
			style="background-image: url({base}/wave_border.svg)"
		/>
	</div>

	<div class="relative hero_height">
		<div
			class="bg_layer w-full hero_height bg-cover bg-no_bg_hero"
			style="background-image: url({base}/hero_placeholder.jpg);"
		/>
	</div>
</div>
