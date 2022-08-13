<script lang="ts">
	import { DateTime } from 'luxon';
	import CalendarEvent, { isValid } from './CalendarEvent';
	import calendarize from 'calendarize';
	import Arrow from './Arrow.svelte';

	export let events = [];
	const calendarEvents: CalendarEvent[] = events
		.filter(isValid)
		.map((event) => new CalendarEvent(event));

	export let offset = 1; // Monday
	export let today = null; // Date
	let year = today ? today.getFullYear() : 2022;
	let month = today ? today.getMonth() : 0;

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

	function createDate(day) {
		return DateTime.fromObject({ year, month: month + 1, day });
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

<div class="grid grid-cols-7 gap-1">
	{#each labels as txt, idx (txt)}
		<span class="text-center uppercase text-darkblue font-bold text-md lg:text-xl "
			>{labels[(idx + offset) % 7]}</span
		>
	{/each}

	{#each { length: 6 } as w, idxw (idxw)}
		{#if current[idxw]}
			{#each { length: 7 } as d, idxd (idxd)}
				{#if current[idxw][idxd] != 0}
					<span
						class="date date_height relative border w-full grid content-center text-center text-xl"
						class:today={isToday(current[idxw][idxd])}
						class:isStart={isStart(createDate(current[idxw][idxd]))}
						class:isBetween={isBetween(createDate(current[idxw][idxd]))}
						class:isEnd={isEnd(createDate(current[idxw][idxd]))}
					>
						<div class="label">{current[idxw][idxd]}</div>
					</span>
				{:else if idxw < 1}
					<span
						class="date date_height other relative border w-full grid content-center text-center text-xl"
						>{prev[prev.length - 1][idxd]}</span
					>
				{:else}
					<span
						class="date date_height other relative border w-full grid content-center text-center text-xl"
						>{next[0][idxd]}</span
					>
				{/if}
			{/each}
		{/if}
	{/each}
</div>

<style>
	/* calendar */
	.date_height {
		aspect-ratio: 1;
	}

	.date.other {
		@apply bg-white text-black opacity-50;
	}

	.date {
		@apply bg-green text-white relative;
	}

	.date .label {
		@apply relative z-10;
	}

	.date .label {
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
	}

	.date.isStart {
		@apply bg-green overflow-hidden;
	}

	.date.isBetween {
		@apply bg-red;
	}

	.date.isEnd {
		@apply bg-red overflow-hidden;
	}

	.date.isStart::before,
	.date.isEnd::before {
		content: '';
		position: absolute;
		width: 101%;
		height: 101%;
		clip-path: polygon(100% 0, 0% 100%, 100% 100%);
		z-index: 1;
	}

	.date.isStart::before {
		@apply bg-red;
	}

	.date.isEnd::before {
		@apply bg-green;
	}

	.isEnd.isStart::before {
		/* overlapping events */
		content: '';
		display: none;
	}

	.date.today {
		border: 6px solid #1f3947;
	}
</style>
