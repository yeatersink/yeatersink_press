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

	let video: HTMLVideoElement | undefined = $state();

	onMount(() => {
		const node = video;
		if (!node) return;

		node.muted = true;

		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

		const sync = () => {
			if (motion.matches) {
				node.pause();
				try {
					node.currentTime = 0;
				} catch {
					// Metadata may not be ready yet. The paused frame is enough.
				}
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
	<video
		bind:this={video}
		class="logo-video"
		autoplay
		loop
		muted
		playsinline
		preload="auto"
		width="1024"
		height="576"
		disablepictureinpicture
		disableremoteplayback
		aria-hidden="true"
	>
		<source src={mp4} type="video/mp4" />
		yeatersink
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

	.logo-video {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: contain;
		background: var(--navy-deep);
		border: 0;
		pointer-events: none;
	}

	.logo-video::-webkit-media-controls,
	.logo-video::-webkit-media-controls-enclosure,
	.logo-video::-webkit-media-controls-panel {
		display: none !important;
	}

	@media print {
		.logo {
			box-shadow: none;
		}
	}
</style>
