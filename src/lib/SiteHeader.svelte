<script lang="ts">
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import { nav } from './site';

	let open = $state(false);
	let menuButton: HTMLButtonElement | undefined = $state();
	let seen = '';

	$effect(() => {
		const path = page.url.pathname;
		if (seen && seen !== path) open = false;
		seen = path;
	});

	async function toggle() {
		open = !open;
		if (!open) return;
		await tick();
		document.querySelector<HTMLAnchorElement>('#site-nav a')?.focus();
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key !== 'Escape' || !open) return;
		open = false;
		menuButton?.focus();
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header class="site-header">
	<div class="bar">
		<a
			class="brand"
			href="/"
			aria-current={page.url.pathname === '/' ? 'page' : undefined}
		>
			yeatersink
		</a>
		<button
			bind:this={menuButton}
			class="menu"
			type="button"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={toggle}
		>
			{open ? 'Close' : 'Menu'}
		</button>
		<nav id="site-nav" class="primary" class:open aria-label="Primary">
			<ul>
				{#each nav as item (item.href)}
					<li>
						<a
							href={item.href}
							aria-current={page.url.pathname === item.href ? 'page' : undefined}
							onclick={() => (open = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 4;
		background: var(--navy-deep);
		border-top: 4px solid var(--gold);
		border-bottom: 1px solid rgba(208, 154, 60, 0.45);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 0.75rem 1.25rem;
		min-height: 3.35rem;
		padding: 0.45rem 8.25rem 0.45rem clamp(1rem, 2.6vw, 2rem);
	}

	.brand {
		flex: 0 0 auto;
		font-family: var(--serif);
		font-weight: 560;
		font-size: 1.4rem;
		letter-spacing: -0.03em;
		line-height: 1;
		text-decoration: none;
		color: var(--cream-text);
		white-space: nowrap;
	}

	.brand:hover,
	.brand[aria-current='page'] {
		color: var(--gold);
	}

	.menu {
		display: none;
		margin-left: auto;
		align-items: center;
		min-height: 2.4rem;
		padding: 0.45rem 0.7rem;
		border: 1px solid rgba(208, 154, 60, 0.9);
		background: transparent;
		color: var(--cream-text);
		font-family: var(--sans);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		line-height: 1;
		text-transform: uppercase;
		cursor: pointer;
	}

	.menu:hover {
		color: #fff8ee;
		border-color: var(--gold);
	}

	.primary ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.15rem 0.95rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.primary a {
		display: inline-flex;
		align-items: center;
		min-height: 2.4rem;
		color: #f0e2cc;
		font-size: 0.92rem;
		font-weight: 600;
		line-height: 1.25;
		text-decoration: none;
	}

	.primary a:hover {
		color: var(--gold);
	}

	.primary a[aria-current='page'] {
		color: var(--gold);
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.28em;
		text-decoration-color: var(--gold);
	}

	@media (max-width: 1120px) {
		.menu {
			display: inline-flex;
		}

		.primary {
			display: none;
			position: absolute;
			z-index: 2;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--navy-deep);
			border-bottom: 1px solid rgba(208, 154, 60, 0.65);
			padding: 0.25rem clamp(1rem, 3vw, 1.5rem) 0.75rem;
			box-shadow: 0 16px 28px rgba(8, 12, 20, 0.28);
		}

		.primary.open {
			display: block;
		}

		.primary ul {
			flex-direction: column;
			align-items: stretch;
			gap: 0;
		}

		.primary a {
			width: 100%;
			min-height: 44px;
			border-bottom: 1px solid var(--rule-light);
		}

		.primary a[aria-current='page'] {
			padding-left: 0.7rem;
			box-shadow: inset 3px 0 0 var(--gold);
		}
	}

	@media (min-width: 1121px) {
		.primary {
			display: block;
			margin-left: auto;
			min-width: 0;
		}
	}

	@media (max-width: 380px) {
		.bar {
			padding-right: 7.5rem;
		}

		.brand {
			font-size: 1.2rem;
		}
	}

	@media print {
		.site-header {
			position: static;
			background: white;
			border-color: #d09a3c;
		}

		.bar {
			padding-right: 0;
		}

		.menu {
			display: none !important;
		}

		.brand,
		.primary a {
			color: black;
		}

		.primary {
			display: block !important;
			position: static !important;
			background: white;
			box-shadow: none;
			padding: 0;
		}

		.primary ul {
			flex-direction: row;
			flex-wrap: wrap;
		}

		.primary a {
			min-height: 0;
			border: 0;
			box-shadow: none;
			padding-left: 0;
		}
	}
</style>
