<script lang="ts">
	import { DateTime } from 'luxon';
	import CalendarEvent from './CalendarEvent';
	import calendarize from 'calendarize';
	import Arrow from './Arrow.svelte';

	export let events = [];
	const calendarEvents: CalendarEvent[] = events.map((event) => new CalendarEvent(event));

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
						class="date date_height relative border w-full grid content-center text-center text-lg lg:text-xl"
						class:today={isToday(current[idxw][idxd])}
						class:isStart={isStart(createDate(current[idxw][idxd]))}
						class:isBetween={isBetween(createDate(current[idxw][idxd]))}
						class:isEnd={isEnd(createDate(current[idxw][idxd]))}
					>
						{current[idxw][idxd]}
					</span>
				{:else if idxw < 1}
					<span
						class="date date_height other relative border w-full grid content-center text-center text-lg lg:text-xl"
						>{prev[prev.length - 1][idxd]}</span
					>
				{:else}
					<span
						class="date date_height other relative border w-full grid content-center text-center text-lg lg:text-xl"
						>{next[0][idxd]}</span
					>
				{/if}
			{/each}
		{/if}
	{/each}
</div>

<style>
	/* calendar */

	.date.isStart::before,
	.date.isStart::after,
	.date.isBetween::before,
	.date.isEnd::before,
	.date.isEnd::after,
	.date::before {
		content: '';
		position: absolute;
		height: 12%;
		bottom: 0;
	}

	.date.isStart::before {
		@apply w-6/12 left-0 bg-green rounded-r-full;
	}

	.date.isStart::after {
		@apply w-6/12 right-0 bg-red rounded-l-full;
	}

	.date.isBetween::before {
		@apply w-full left-0 bg-red;
	}

	.date.isEnd::before {
		@apply w-6/12 left-0 bg-red  rounded-r-full;
	}
	.date.isEnd::after {
		@apply w-6/12 right-0 bg-green  rounded-l-full;
	}

	.date_height {
		aspect-ratio: 1;
	}
	.date {
	}

	.date {
		@apply bg-gray-50;
	}

	.date::before {
		@apply w-full left-0 bg-green;
	}

	.date.today {
		@apply bg-darkblue-lighter text-white;
	}

	.date.other {
		@apply bg-white text-black opacity-50;
	}

	.date.other:before {
		@apply hidden;
	}
</style>
