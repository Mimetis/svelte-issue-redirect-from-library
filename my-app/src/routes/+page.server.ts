import { redirectFromMyLibrary } from '../lib/server/auth';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const url = data.get('url');
		if (typeof url !== 'string') throw new Error('Invalid URL');

		await redirectFromMyLibrary(url);
	}
} satisfies Actions;
