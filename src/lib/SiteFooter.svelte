<script lang="ts">
	import Logo from './Logo.svelte';
	import Newsletter from './Newsletter.svelte';
	import { achieve, jerusalem, nav } from './site';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<Newsletter />
	<div class="footer-inner">
		<div class="footer-brand">
			<Logo size="footer" label="yeatersink" />
			<p class="footer-tag">The whole Bible, to the Whole World….</p>
		</div>
		<nav class="footer-nav" aria-label="Footer">
			<ul>
				{#each nav as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>
		<div class="footer-meta">
			<p>
				yeatersink is the publishing arm of
				<a class="external" href={achieve}>Achieve Life Services Inc.</a>
			</p>
			<p>
				<a class="external" href={jerusalem}>Remembering Jerusalem (rememberingjerusalem.org)</a>
				is the hands and feet of
				<a class="external" href={achieve}>Achieve Life Services Inc.</a>
			</p>
			<p class="copyright">© {year} yeatersink</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 4px solid var(--gold);
		background: var(--navy-deep);
		color: var(--cream-text);
	}

	.footer-inner {
		width: min(68rem, calc(100% - 2 * clamp(1.25rem, 5vw, 4rem)));
		margin-inline: auto;
		display: grid;
		grid-template-columns: minmax(14rem, 1.05fr) minmax(12rem, 0.8fr) minmax(16rem, 1.15fr);
		gap: 2rem 2.25rem;
		align-items: start;
		padding-block: clamp(2.25rem, 5vw, 3.5rem);
	}

	.footer-tag {
		margin-top: 0.85rem;
		font-family: var(--serif);
		font-style: italic;
		font-weight: 500;
		font-size: 1.25rem;
		line-height: 1.35;
		color: #f0e2cc;
	}

	.footer-nav ul {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.footer-nav a {
		color: #f0e2cc;
		font-size: 0.98rem;
		font-weight: 600;
		line-height: 1.35;
		text-decoration: none;
	}

	.footer-nav a:hover {
		color: var(--gold);
	}

	.footer-meta {
		color: #ddceb8;
		font-size: 0.98rem;
		line-height: 1.5;
	}

	.footer-meta p + p {
		margin-top: 0.75rem;
	}

	.copyright {
		color: #cbbba4;
		font-size: 0.92rem;
	}

	@media (max-width: 800px) {
		.footer-inner {
			grid-template-columns: 1fr;
		}
	}

	@media print {
		.site-footer {
			background: white;
			color: black;
		}

		.footer-tag,
		.footer-nav a,
		.footer-meta,
		.copyright {
			color: black;
		}
	}
</style>
