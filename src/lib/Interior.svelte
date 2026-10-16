<script lang="ts">
	import type { Snippet } from 'svelte';
	import Frame from './Frame.svelte';
	import type { Picture } from './site';

	let {
		eyebrow,
		title,
		description,
		lede,
		image,
		align = 'right',
		children
	}: {
		eyebrow: string;
		title: string;
		description: string;
		lede: string;
		image: Picture;
		align?: 'left' | 'right';
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>{title} · yeatersink</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="{title} · yeatersink" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="interior">
	<header class="band">
		<div class="band-inner align-{align}">
			<div class="band-copy">
				<p class="eyebrow">{eyebrow}</p>
				<h1>{title}</h1>
				<p class="lede">{lede}</p>
			</div>
			<div class="band-figure">
				<Frame {...image} variant="companion" />
			</div>
		</div>
	</header>
	<div class="sheet on-light">
		<div class="sheet-inner">
			{@render children()}
		</div>
	</div>
</main>

<style>
	.interior {
		background: var(--cream);
		color: var(--ink);
	}

	.band {
		background:
			radial-gradient(ellipse 48% 80% at 100% 0%, rgba(208, 154, 60, 0.14), transparent 56%),
			radial-gradient(ellipse 36% 70% at 0% 100%, rgba(110, 75, 52, 0.18), transparent 58%),
			var(--navy);
		color: var(--cream-text);
	}

	.band-inner,
	.sheet-inner {
		width: min(68rem, calc(100% - 2 * clamp(1.25rem, 5vw, 4rem)));
		margin-inline: auto;
	}

	.band-inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 18rem;
		gap: clamp(1.25rem, 3vw, 2.75rem);
		align-items: center;
		padding-block: clamp(3.25rem, 7vw, 5.15rem);
	}

	.align-left {
		grid-template-columns: 18rem minmax(0, 1fr);
	}

	.align-left .band-copy {
		order: 2;
	}

	.eyebrow {
		font-family: var(--sans);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--brass);
	}

	.eyebrow::after {
		content: '';
		display: block;
		width: 2.4rem;
		height: 2px;
		margin-top: 0.85rem;
		background: var(--gold);
	}

	.band-copy {
		min-width: 0;
	}

	h1 {
		max-width: min(14em, 100%);
		margin-top: 0.8rem;
		color: var(--cream-text);
		font-size: clamp(2.15rem, 4.4vw, 3.45rem);
		line-height: 1.04;
	}

	.lede {
		max-width: min(36rem, 100%);
		margin-top: 1rem;
		font-family: var(--serif);
		font-weight: 500;
		font-size: clamp(1.2rem, 2vw, 1.45rem);
		line-height: 1.45;
		color: #f0e2cc;
	}

	.band-figure {
		width: 18rem;
		justify-self: end;
	}

	.align-left .band-figure {
		justify-self: start;
	}

	.sheet {
		border-top: 4px solid var(--gold);
		background:
			radial-gradient(ellipse 70% 50% at 0% 0%, rgba(110, 75, 52, 0.07), transparent 52%),
			radial-gradient(ellipse 60% 45% at 100% 100%, rgba(208, 154, 60, 0.08), transparent 55%),
			var(--cream);
	}

	.sheet-inner {
		padding-block: clamp(3rem, 6.5vw, 4.85rem);
	}

	.sheet :global(.prose p) {
		max-width: 40rem;
		color: var(--ink-soft);
		font-size: 1.125rem;
		line-height: 1.75;
		text-wrap: pretty;
	}

	.sheet :global(.prose p + p) {
		margin-top: 1.15rem;
	}

	@media (max-width: 720px) {
		.band-inner,
		.align-left {
			grid-template-columns: minmax(0, 1fr);
		}

		.align-left .band-copy,
		.band-copy {
			order: 1;
		}

		.band-figure,
		.align-left .band-figure {
			order: 2;
			width: min(16rem, 62%);
			justify-self: center;
		}
	}

	@media print {
		.band,
		.sheet,
		.interior {
			background: white;
			color: black;
		}

		h1,
		.lede,
		.eyebrow,
		.sheet :global(.prose p) {
			color: black;
		}
	}
</style>
