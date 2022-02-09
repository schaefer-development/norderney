import { google } from 'googleapis';
import fs from 'fs'
import { GOOGLE_KEYFILE } from '$lib/env';

const GOOGLE_KEYFILE_PATH = './keyfile.json'
fs.writeFileSync(GOOGLE_KEYFILE_PATH, Buffer.from(GOOGLE_KEYFILE, 'base64').toString())


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
	const auth = new google.auth.GoogleAuth({
		keyFile: GOOGLE_KEYFILE_PATH,
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
