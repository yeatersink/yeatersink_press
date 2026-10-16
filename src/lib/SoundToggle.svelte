<script lang="ts">
	let audio: HTMLAudioElement | undefined = $state();
	let on = $state(false);

	async function toggle() {
		const node = audio;
		if (!node) return;

		if (on) {
			node.pause();
			node.muted = true;
			on = false;
			return;
		}

		node.muted = false;
		node.volume = 0.8;

		try {
			await node.play();
			on = true;
		} catch {
			node.pause();
			node.muted = true;
			on = false;
		}
	}
</script>

<audio bind:this={audio} loop muted preload="none">
	<source src="/middle_eastern_tune.mpeg" type="audio/mpeg" />
</audio>

<button
	class="sound"
	type="button"
	aria-pressed={on}
	aria-label={on ? 'Mute background music' : 'Unmute background music'}
	onclick={toggle}
>
	<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
		<path d="M4 9.2h3.6L13 5.2v13.6l-5.4-4H4z" fill="currentColor" />
		{#if on}
			<path
				d="M16.2 9.1a4.2 4.2 0 0 1 0 5.8M18.6 7a7 7 0 0 1 0 10"
				fill="none"
				stroke="currentColor"
				stroke-width="1.7"
				stroke-linecap="round"
			/>
		{:else}
			<path
				d="M16.2 9.4 21 14.2M21 9.4l-4.8 4.8"
				fill="none"
				stroke="currentColor"
				stroke-width="1.7"
				stroke-linecap="round"
			/>
		{/if}
	</svg>
	<span>{on ? 'Mute' : 'Unmute'}</span>
</button>

<style>
	.sound {
		position: fixed;
		z-index: 6;
		top: 0.85rem;
		right: 1.15rem;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin: 0;
		padding: 0.48rem 0.72rem;
		border: 1px solid rgba(208, 154, 60, 0.9);
		background: rgba(16, 28, 46, 0.94);
		color: var(--cream-text);
		font-family: var(--sans);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		line-height: 1;
		text-transform: uppercase;
		cursor: pointer;
		box-shadow: 0 10px 24px rgba(8, 12, 20, 0.28);
	}

	.sound:hover {
		color: #fff8ee;
		border-color: var(--gold);
	}

	.sound[aria-pressed='true'] {
		background: var(--gold);
		border-color: var(--gold);
		color: var(--navy);
	}

	@media (max-width: 640px) {
		.sound {
			top: 0.72rem;
			right: 0.7rem;
			padding: 0.46rem 0.62rem;
		}
	}

	@media print {
		.sound {
			display: none;
		}
	}
</style>
