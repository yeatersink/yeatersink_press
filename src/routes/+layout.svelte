<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import SiteFooter from '#lib/SiteFooter.svelte';
	import SiteHeader from '#lib/SiteHeader.svelte';
	import SoundToggle from '#lib/SoundToggle.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#101c2e" />
</svelte:head>

<a class="skip" href="#content">Skip to content</a>
<SiteHeader />
<SoundToggle />
<div id="content" tabindex="-1">
	{@render children()}
</div>
<SiteFooter />

<style>
	.skip {
		position: absolute;
		left: 1rem;
		top: 1rem;
		z-index: 7;
		transform: translateY(-160%);
		background: var(--cream);
		color: var(--navy);
		padding: 0.55rem 0.9rem;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
	}

	.skip:focus {
		transform: none;
	}

	#content:focus {
		outline: none;
	}

	@media print {
		.skip {
			display: none;
		}
	}
</style>
