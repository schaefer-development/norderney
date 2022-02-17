import { google } from 'googleapis';

const GOOGLE_APPLICATION_CREDENTIALS = './keyfile.json';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
	const auth = new google.auth.GoogleAuth({
		keyFile: GOOGLE_APPLICATION_CREDENTIALS,
		scopes: SCOPES
	});
	const calendar = google.calendar({
		version: 'v3',
		auth
	});
	const {
		data: { items }
	} = await calendar.events.list({
		calendarId: '2gcn124b628avb36dqq1uu2n0o@group.calendar.google.com'
	});

	const events = items.map(({ start, end }) => ({ start, end }));

	return { body: { events } };
}
