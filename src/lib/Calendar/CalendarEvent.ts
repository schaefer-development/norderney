import { DateTime } from 'luxon';

const format = 'yyyy-MM-dd';

export default class CalendarEvent {
	start: DateTime;
	end: DateTime;

	constructor(event: { start: { date: string }; end: { date: string } }) {
		this.start = DateTime.fromFormat(event.start.date, format);
		this.end = DateTime.fromFormat(event.end.date, format);
	}

	startsAt(date: DateTime): boolean {
		return +this.start === +date;
	}

	contains(date: DateTime): boolean {
		return this.start < date && date < this.end;
	}

	endsAt(date: DateTime): boolean {
		// For events spanning multiple whole days, Google sets the end to midnight
		// on the following day
		const limit = this.end.minus({ days: 1 });
		return +limit === +date;
	}
}
