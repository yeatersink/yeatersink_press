<script lang="ts">
	import { onMount } from 'svelte';

	type Size = 'hero' | 'footer';

	let {
		size = 'hero',
		label = ''
	}: {
		size?: Size;
		label?: string;
	} = $props();

	const mp4 = '/yeatersink_logo.mp4';
	const poster = '/yeatersink_logo.jpeg';

	let video: HTMLVideoElement | undefined = $state();

	onMount(() => {
		const node = video;
		if (!node) return;

		node.muted = true;

		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

		const sync = () => {
			if (motion.matches) {
				node.pause();
				return;
			}

			void node.play().catch(() => {});
		};

		sync();
		motion.addEventListener('change', sync);

		return () => motion.removeEventListener('change', sync);
	});
</script>

<span
	class="logo logo-{size}"
	role={label ? 'img' : undefined}
	aria-label={label || undefined}
	aria-hidden={label ? undefined : 'true'}
>
	<img class="logo-still" src={poster} alt="" width="1600" height="900" />
	<video
		bind:this={video}
		class="logo-video"
		autoplay
		loop
		muted
		playsinline
		{poster}
		preload="metadata"
		width="1024"
		height="576"
		disablepictureinpicture
		disableremoteplayback
		aria-hidden="true"
	>
		<source src={mp4} type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
		<img src={poster} alt="" width="1600" height="900" />
	</video>
</span>

<style>
	.logo {
		position: relative;
		display: block;
		line-height: 0;
		box-shadow:
			0 0 0 1px rgba(212, 180, 131, 0.4),
			0 14px 32px rgba(8, 12, 20, 0.3);
	}

	.logo-hero {
		width: min(40rem, 88%, calc(38svh * 1024 / 576));
	}

	.logo-footer {
		width: min(16rem, 72vw);
	}

	.logo-still,
	.logo-video {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: contain;
		background: transparent;
		border: 0;
	}

	.logo-video {
		position: absolute;
		inset: 0;
		height: 100%;
		pointer-events: none;
	}

	.logo-video::-webkit-media-controls,
	.logo-video::-webkit-media-controls-enclosure,
	.logo-video::-webkit-media-controls-panel {
		display: none !important;
	}

	@media (prefers-reduced-motion: reduce) {
		.logo-video {
			display: none;
		}
	}

	@media print {
		.logo {
			box-shadow: none;
		}

		.logo-video {
			display: none;
		}
	}
</style>
