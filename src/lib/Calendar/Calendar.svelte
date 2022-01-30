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

	export let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	export let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
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
			const normalized = new Date('2022-01-01T00:00:00.000Z')
			normalized.setFullYear(year)
			normalized.setMonth(month)
			normalized.setDate(day)
			return normalized
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

<header>
	<Arrow left on:click={toPrev} />
	<h4>{months[month]} {year}</h4>
	<Arrow on:click={toNext} />
</header>

<div class="month">
	{#each labels as txt, idx (txt)}
		<span class="label">{labels[(idx + offset) % 7]}</span>
	{/each}

	{#each { length: 6 } as w, idxw (idxw)}
		{#if current[idxw]}
			{#each { length: 7 } as d, idxd (idxd)}
				{#if current[idxw][idxd] != 0}
					<span
						class="date"
						class:today={isToday(current[idxw][idxd])}
						class:bg-red-500={isStart(normalizeDate(current[idxw][idxd]))}
						class:bg-green-500={isBetween(normalizeDate(current[idxw][idxd]))}
						class:bg-blue-500={isEnd(normalizeDate(current[idxw][idxd]))}
					>
						{current[idxw][idxd]}
					</span>
				{:else if idxw < 1}
					<span class="date other">{prev[prev.length - 1][idxd]}</span>
				{:else}
					<span class="date other">{next[0][idxd]}</span>
				{/if}
			{/each}
		{/if}
	{/each}
</div>

<style>
	header {
		display: flex;
		margin: 2rem auto;
		align-items: center;
		justify-content: center;
		user-select: none;
	}

	h4 {
		display: block;
		text-align: center;
		text-transform: uppercase;
		font-size: 140%;
		margin: 0 1rem;
	}

	.month {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: right;
		grid-gap: 4px;
	}

	.label {
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		opacity: 0.6;
	}

	.date {
		height: 50px;
		font-size: 16px;
		letter-spacing: -1px;
		border: 1px solid #e6e4e4;
		padding-right: 4px;
		font-weight: 700;
		padding: 0.5rem;
	}

	.date.today {
		color: #5286fa;
		background: #c4d9fd;
		border-color: currentColor;
	}

	.date.other {
		opacity: 0.2;
	}
</style>
