<script lang="ts">
	import CalendarEvent from './CalendarEvent';
	import calendarize from 'calendarize';
	import Arrow from './Arrow.svelte';

	export let events = [];
	const calendarEvents: CalendarEvent[] = events.map((event) => new CalendarEvent(event));

	export let offset = 1; // Monday
	export let today = null; // Date
	// let year = today ? today.getFullYear() : 2022;
	// let month = today ? today.getMonth() : 0;
	let year = 2022;
	let month = 1;

	export let labels = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
	export let months = [
		'Januar',
		'Februar',
		'März',
		'April',
		'Mai',
		'Juni',
		'Juli',
		'August',
		'September',
		'Oktober',
		'November',
		'Dezember'
	];

	$: today_month = today && today.getMonth();
	$: today_year = today && today.getFullYear();
	$: today_day = today && today.getDate();

	let prev = calendarize(new Date(year, month - 1), offset);
	let current = calendarize(new Date(year, month), offset);
	let next = calendarize(new Date(year, month + 1), offset);

	function toPrev() {
		[current, next] = [prev, current];

		if (--month < 0) {
			month = 11;
			year--;
		}

		prev = calendarize(new Date(year, month - 1), offset);
	}

	function toNext() {
		[prev, current] = [current, next];

		if (++month > 11) {
			month = 0;
			year++;
		}

		next = calendarize(new Date(year, month + 1), offset);
	}

	function normalizeDate(day) {
		const normalized = new Date('2022-01-01T00:00:00.000Z');
		normalized.setFullYear(year);
		normalized.setMonth(month);
		normalized.setDate(day);
		return normalized;
	}

	function isToday(day) {
		return today && today_year === year && today_month === month && today_day === day;
	}

	function isStart(date) {
		return calendarEvents.some((event: Event) => event.startsAt(date));
	}
	function isEnd(date) {
		return calendarEvents.some((event: Event) => event.endsAt(date));
	}
	function isBetween(date) {
		return calendarEvents.some((event: Event) => event.contains(date));
	}
</script>

<header class="flex py-4 mx-auto items-center justify-center ">
	<Arrow left on:click={toPrev} />
	<h1 class="grow text-center h1 text-darkblue pb-4">{months[month]} {year}</h1>
	<Arrow on:click={toNext} />
</header>

<div class="grid grid-cols-7 gap-1 text-right">
	{#each labels as txt, idx (txt)}
		<span class="text-center uppercase text-darkblue font-bold text-md lg:text_xl "
			>{labels[(idx + offset) % 7]}</span
		>
	{/each}

	{#each { length: 6 } as w, idxw (idxw)}
		{#if current[idxw]}
			{#each { length: 7 } as d, idxd (idxd)}
				{#if current[idxw][idxd] != 0}
					<span
						class="date date_height"
						class:today={isToday(current[idxw][idxd])}
						class:isStart={isStart(normalizeDate(current[idxw][idxd]))}
						class:isBetween={isBetween(normalizeDate(current[idxw][idxd]))}
						class:isEnd={isEnd(normalizeDate(current[idxw][idxd]))}
					>
						{current[idxw][idxd]}
					</span>
				{:else if idxw < 1}
					<span class="date date_height other">{prev[prev.length - 1][idxd]}</span>
				{:else}
					<span class="date date_height other">{next[0][idxd]}</span>
				{/if}
			{/each}
		{/if}
	{/each}
</div>

<style>
	/* calendar */

	.date.isStart {
		@apply bg-red text-white relative overflow-hidden z-10;
	}

	.date.isStart::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #339933;
		clip-path: polygon(100% 0, 0 0, 0 100%);
		z-index: 1;
	}

	.date.isBetween,
	.date.isStart.isEnd {
		@apply bg-red text-white;
	}

	.date.isEnd {
		@apply bg-green text-white relative;
	}

	.date.isEnd::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #f92200;
		clip-path: polygon(100% 100%, 0 0, 0 100%);
	}

	.date_height {
		aspect-ratio: 1;
	}
	.date {
		@apply border pr-3 text-white bg-green grid content-center text-xl;
	}

	.date.today {
		border: 6px solid #1f3947;
	}

	.date.other {
		@apply bg-white text-black opacity-50;
	}
</style>
