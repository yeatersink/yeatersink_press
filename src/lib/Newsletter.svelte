<script lang="ts">
	import { tick } from 'svelte';

	let email = $state('');
	let message = $state('');
	let statusEl: HTMLParagraphElement | undefined = $state();

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget;
		if (!(form instanceof HTMLFormElement)) return;

		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		email = '';
		message = 'Thank you. You will hear from yeatersink about new releases and other news.';
		await tick();
		statusEl?.focus();
	}
</script>

<section class="newsletter" id="newsletter" aria-labelledby="newsletter-title">
	<div class="inner">
		<div class="copy">
			<p class="eyebrow">Correspondence</p>
			<h2 id="newsletter-title">Newsletter</h2>
			<p id="newsletter-lede">
				Receive emails about new releases and other valuable information from yeatersink.
			</p>
		</div>
		<form onsubmit={submit}>
			<label for="newsletter-email">Email address</label>
			<div class="row">
				<input
					id="newsletter-email"
					name="email"
					type="email"
					inputmode="email"
					autocomplete="email"
					placeholder="name@example.com"
					required
					bind:value={email}
					aria-describedby="newsletter-lede"
				/>
				<button type="submit">Subscribe</button>
			</div>
			<div aria-live="polite" aria-atomic="true">
				{#if message}
					<p class="status" tabindex="-1" bind:this={statusEl}>{message}</p>
				{/if}
			</div>
		</form>
	</div>
</section>

<style>
	.newsletter {
		scroll-margin-top: 5.5rem;
		background:
			radial-gradient(ellipse 50% 80% at 100% 0%, rgba(208, 154, 60, 0.12), transparent 58%),
			var(--navy);
		color: var(--cream-text);
		border-bottom: 1px solid rgba(208, 154, 60, 0.35);
	}

	.inner {
		width: min(68rem, calc(100% - 2 * clamp(1.25rem, 5vw, 4rem)));
		margin-inline: auto;
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);
		gap: 1.25rem 2.5rem;
		align-items: end;
		padding-block: clamp(2.15rem, 4.5vw, 3.15rem);
	}

	.eyebrow {
		font-family: var(--sans);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--brass);
	}

	.eyebrow::after {
		content: '';
		display: block;
		width: 2.2rem;
		height: 2px;
		margin-top: 0.7rem;
		background: var(--gold);
	}

	h2 {
		margin-top: 0.75rem;
		color: var(--cream-text);
		font-size: clamp(1.85rem, 3vw, 2.45rem);
	}

	.copy p:last-child {
		max-width: 36rem;
		margin-top: 0.75rem;
		color: #eadfce;
		font-size: 1.05rem;
		line-height: 1.6;
	}

	label {
		display: block;
		margin-bottom: 0.4rem;
		color: #f0e2cc;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	input {
		flex: 1 1 14rem;
		min-width: 0;
		min-height: 44px;
		padding: 0.6rem 0.75rem;
		border: 1px solid rgba(208, 154, 60, 0.9);
		background: var(--cream);
		color: var(--ink);
		font: inherit;
		font-size: 1rem;
	}

	input::placeholder {
		color: #7a624c;
		opacity: 1;
	}

	button {
		min-height: 44px;
		padding: 0.65rem 1.15rem;
		border: 1px solid var(--gold);
		background: var(--gold);
		color: var(--navy);
		font-family: var(--sans);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		cursor: pointer;
	}

	button:hover {
		background: var(--brass);
		border-color: var(--brass);
	}

	.status {
		margin-top: 0.75rem;
		max-width: 28rem;
		color: #f0e2cc;
		font-family: var(--serif);
		font-size: 1.05rem;
		line-height: 1.45;
	}

	.status:focus {
		outline: none;
	}

	@media (max-width: 760px) {
		.inner {
			grid-template-columns: 1fr;
		}

		button {
			width: 100%;
		}
	}

	@media print {
		form {
			display: none;
		}

		.newsletter,
		h2,
		.copy p:last-child,
		.eyebrow {
			background: white;
			color: black;
		}
	}
</style>
