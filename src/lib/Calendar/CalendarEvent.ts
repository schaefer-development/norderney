import { DateTime } from 'luxon';

const format = 'yyyy-MM-dd';

type Event = {
	start: { date: string };
	end: { date: string };
};

const isString = (aString: any): aString is string => {
	return typeof aString === 'string' || aString instanceof String;
};

export const isValid = (event: any): event is Event => {
	return isString(event?.start?.date) && isString(event?.end?.date);
};

export default class CalendarEvent {
	start: DateTime;
	end: DateTime;

	constructor(event: Event) {
		this.start = DateTime.fromFormat(event.start.date, format);
		this.end = DateTime.fromFormat(event.end.date, format);
	}

	startsAt(date: DateTime): boolean {
		const limitstart = this.start.minus({ days: 0 });
		return +limitstart === +date;
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
