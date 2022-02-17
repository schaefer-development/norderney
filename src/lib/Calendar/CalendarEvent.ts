export default class CalendarEvent {
	start: Date;
	end: Date;

	constructor(event: { start: { date: string }; end: { date: string } }) {
		this.start = new Date(event.start.date);
		this.end = new Date(event.end.date);
		this.end.setDate(this.end.getDate() - 1);
	}

	startsAt(date: Date): boolean {
		return this.start.getTime() === date.getTime();
	}

	contains(date: Date): boolean {
		return this.start.getTime() < date.getTime() && date.getTime() < this.end.getTime();
	}

	endsAt(date: Date): boolean {
		return this.end.getTime() === date.getTime();
	}
}
