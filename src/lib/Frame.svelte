<script lang="ts">
	type Variant = 'plate' | 'feature' | 'card' | 'companion';

	let {
		src,
		alt,
		caption,
		width,
		height,
		variant = 'plate',
		focus = 'center'
	}: {
		src: string;
		alt: string;
		caption: string;
		width: number;
		height: number;
		variant?: Variant;
		focus?: string;
	} = $props();

	const sizes = $derived(
		{
			plate: '(max-width: 800px) 40vw, 11rem',
			feature: '(max-width: 700px) 50vw, 34rem',
			card: '(max-width: 800px) 46vw, 16rem',
			companion: '(max-width: 720px) 62vw, 18rem'
		}[variant]
	);
</script>

<figure class="frame frame-{variant}">
	<img
		{src}
		{alt}
		{width}
		{height}
		{sizes}
		loading="lazy"
		decoding="async"
		fetchpriority="low"
		style="object-position: {focus}"
	/>
	<figcaption>{caption}</figcaption>
</figure>

<style>
	.frame {
		margin: 0;
		width: 100%;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		background: var(--navy-deep);
		box-shadow: 0 0 0 1px rgba(208, 154, 60, 0.72);
	}

	figcaption {
		margin-top: 0.45rem;
		font-family: var(--sans);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		line-height: 1.4;
		text-align: center;
		text-transform: uppercase;
		color: var(--brass);
	}

	.frame-card {
		width: 50%;
		margin-inline: auto;
		margin-bottom: 1.15rem;
	}

	.frame-feature figcaption,
	.frame-companion figcaption {
		color: var(--brass);
	}

	.frame-feature img {
		box-shadow: 0 0 0 1px rgba(138, 94, 24, 0.45);
	}

	.frame-feature figcaption {
		color: var(--gold-ink);
	}

	@media print {
		img {
			box-shadow: none;
		}

		figcaption {
			color: black;
		}
	}
</style>
