import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Connect, type PreviewServer, type ViteDevServer } from 'vite';

const audioFile = '/middle_eastern_tune.mpeg';

function yeatersinkAudioMime() {
	const fix: Connect.NextHandleFunction = (req, res, next) => {
		const path = req.url?.split('?')[0] ?? '';
		if (path === audioFile) {
			const setHeader = res.setHeader.bind(res);
			res.setHeader = (name, value) => {
				if (String(name).toLowerCase() === 'content-type') {
					return setHeader(name, 'audio/mpeg');
				}
				return setHeader(name, value);
			};
		}
		next();
	};

	return {
		name: 'yeatersink-audio-mime',
		configureServer(server: ViteDevServer) {
			server.middlewares.use(fix);
		},
		configurePreviewServer(server: PreviewServer) {
			server.middlewares.use(fix);
		}
	};
}

export default defineConfig({
	plugins: [
		yeatersinkAudioMime(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter()
		})
	]
});
