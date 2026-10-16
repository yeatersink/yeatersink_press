<script lang="ts">
	import Frame from '#lib/Frame.svelte';
	import Logo from '#lib/Logo.svelte';
	import { achieve, jerusalem, pictures, type Picture } from '#lib/site.ts';

	type Part = {
		id: string;
		numeral: string;
		kicker: string;
		title: string;
		body: string;
		image: Picture;
	};

	const atlas: Picture[] = [pictures.jerusalem, pictures.jericho, pictures.qumran];

	const parts: Part[] = [
		{
			id: 'biblical-judaism',
			numeral: '01',
			kicker: 'The approach',
			title: 'Biblical Judaism',
			body: 'Yeatersink prioritizes Biblical Judaism over the Rabbinic Judaism approach to neo-Biblical interpretation and over the modern Greek philosophical approach to Biblical literature. Read within this framework, the Hebrew Bible and New Testament-era literature hold a consistent meaning across the Testaments.',
			image: pictures.shiloh
		},
		{
			id: 'ancient-languages',
			numeral: '02',
			kicker: 'Context',
			title: 'Ancient languages & early literature',
			body: 'The materials rest on extensive education in Biblical Studies and ancient languages. Biblical literature is read together with extra-Biblical literature, including early Jewish literature, so that genre, wording, and argument are presented from within the literary and contextual environment in which the texts were written. Even with this depth, Yeatersink publishes in an easy-to-understand manner.',
			image: pictures.caves
		},
		{
			id: 'temple-context',
			numeral: '03',
			kicker: 'Jewish theology',
			title: 'First and Second Temple',
			body: 'That education frames First and Second Temple Jewish theology. Biblical passages are interpreted within the worship, hope, and scriptural reasoning of those periods and are kept in that setting as they are explained.',
			image: pictures.pilgrimage
		},
		{
			id: 'new-testament-authors',
			numeral: '04',
			kicker: 'Application',
			title: 'New Testament-era authors',
			body: 'The same frame follows the application of Biblical passages by New Testament-era authors: how a passage is interpreted and how that interpretation is put to use in their own writing. This theological approach to New Testament studies underscores the Apostles’ Doctrine and the preaching of the New Testament Church. Yeatersink seeks to make these resources available, understandable, and presentable, making the Apostles’ Doctrine tangible from across the entire Bible.',
			image: pictures.caesarea
		}
	];
</script>

<svelte:head>
	<title>yeatersink</title>
	<meta
		name="description"
		content="The whole Bible, to the Whole World…. Yeatersink Materials presents literature and resources from within the context of Early Biblical Judaism."
	/>
	<meta property="og:title" content="yeatersink" />
	<meta property="og:description" content="The whole Bible, to the Whole World…." />
	<meta property="og:type" content="website" />
	<meta name="twitter:title" content="yeatersink" />
	<meta name="twitter:description" content="The whole Bible, to the Whole World…." />
</svelte:head>

<div class="page">
	<header class="hero">
		<div class="plate">
			<div class="plate-inner">
				<div class="masthead">
					<span>Yeatersink Materials</span>
					<a class="external" href={achieve}>Achieve Life Services Inc.</a>
				</div>

				<div class="hero-center">
					<h1>
						<Logo size="hero" />
						<span class="sr-only">yeatersink</span>
					</h1>
					<p class="tagline">The whole Bible, to the Whole World….</p>
					<div class="ornament" aria-hidden="true">
						<span></span>
						<svg viewBox="0 0 10 10" width="9" height="9">
							<path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
						</svg>
						<span></span>
					</div>
					<p class="support">
						A publishing imprint of <a class="external" href={achieve}>Achieve Life Services Inc.</a>
					</p>
				</div>

				<a class="descend" href="#materials">
					<span class="descend-line" aria-hidden="true"></span>
					The materials
				</a>
			</div>
		</div>
	</header>

	<section class="atlas" aria-label="Places">
		<div class="atlas-row">
			{#each atlas as place (place.src)}
				<Frame {...place} variant="plate" />
			{/each}
		</div>
	</section>

	<main>
		<section class="intro on-light" id="materials">
			<div class="intro-wrap">
				<header class="intro-head">
					<p class="eyebrow">Yeatersink Materials</p>
					<h2>
						<span>Materials presented from within</span>
						<span>the context of Early Biblical Judaism</span>
					</h2>
				</header>

				<div class="feature-plate center">
					<Frame {...pictures.scrolls} variant="feature" />
				</div>

				<div class="intro-split">
					<div class="intro-meta">
						<p>Hebrew Bible</p>
						<p>New Testament-era literature</p>
						<p>Early Jewish literature</p>
					</div>
					<div class="prose">
						<p class="lede">
							Yeatersink Materials presents literature and resources that do not fit the modern
							Greek philosophical approach to Biblical literature.
						</p>
						<p>
							The imprint prioritizes Biblical Judaism over the Rabbinic Judaism approach to
							neo-Biblical interpretation of both the Hebrew Bible and New Testament-era literature.
						</p>
						<p>
							Extensive education in Biblical Studies, ancient languages, and Biblical and
							extra-Biblical material, including early Jewish literature, frames a clear understanding
							of First and Second Temple Jewish theology. This theological approach to New Testament
							studies underscores the Apostles’ Doctrine and the preaching of the New Testament Church.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section class="reading" aria-labelledby="reading-title">
			<div class="reading-inner">
				<header class="reading-head">
					<p class="eyebrow">The frame</p>
					<h2 id="reading-title">Four parts of the same reading</h2>
					<p class="deck">
						What the materials keep in view while a passage is read, interpreted, and applied.
					</p>
				</header>

				<div class="parts">
					{#each parts as part (part.id)}
						<article id={part.id}>
							<Frame {...part.image} variant="card" />
							<p class="numeral">{part.numeral}</p>
							<p class="kicker">{part.kicker}</p>
							<h3>{part.title}</h3>
							<p class="card-body">{part.body}</p>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="whole on-light">
			<div class="intro-wrap">
				<header class="intro-head">
					<p class="eyebrow">For every reader</p>
					<h2>The Whole Bible to the Whole Church</h2>
				</header>
				<div class="prose with-plate">
					<div class="feature-plate float-end">
						<Frame {...pictures.capernaum} variant="feature" />
					</div>
					<p class="lede">
						Yeatersink Publishing is working to provide materials for a constituency of all ages.
					</p>
					<p>
						From children’s books and games, to material that is intellectually stimulating for
						students of all ages. Be on the lookout for children’s material, youth material, Bible
						study material for personal use, and even for use in home Bible studies.
					</p>
					<p>
						The intent is to provide material that can be returned to again and again to equip all
						for the furtherance of their educational pursuit of the Truth handed down by the authors
						of the whole Bible.
					</p>
					<p>
						<a class="text-link" href="#newsletter">Join the newsletter</a>
						to receive emails about new releases and other valuable information.
					</p>
					<p class="closing">The whole Bible, to the Whole World….</p>
				</div>
				<nav class="contents" aria-label="Yeatersink sections">
					<ul>
						<li><a class="text-link" href="/new-releases">New Releases</a></li>
						<li><a class="text-link" href="/kids-corner">Kids Corner</a></li>
						<li>
							<a class="text-link" href="/for-the-youth-of-tomorrow">For the Youth of Tomorrow</a>
						</li>
						<li>
							<a class="text-link" href="/home-bible-studies">Material for Home Bible Studies</a>
						</li>
						<li><a class="text-link" href="/for-the-intellectuals">For the Intellectuals</a></li>
					</ul>
				</nav>
				<div class="relations">
					<p>
						yeatersink is the publishing arm of
						<a class="external" href={achieve}>Achieve Life Services Inc.</a>
					</p>
					<p>
						<a class="external" href={jerusalem}>Remembering Jerusalem (rememberingjerusalem.org)</a>
						is the hands and feet of
						<a class="external" href={achieve}>Achieve Life Services Inc.</a>
					</p>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	.page {
		position: relative;
	}

	.hero {
		min-height: calc(100svh - 4.6rem);
		display: flex;
		padding: clamp(0.85rem, 1.8vw, 1.35rem);
		background:
			radial-gradient(ellipse 80% 60% at 50% 42%, rgba(36, 58, 88, 0.45), transparent 64%),
			radial-gradient(ellipse 42% 36% at 88% 88%, rgba(208, 154, 60, 0.2), transparent 62%),
			radial-gradient(ellipse 36% 32% at 8% 82%, rgba(110, 75, 52, 0.22), transparent 60%),
			var(--navy);
	}

	.plate {
		flex: 1;
		display: flex;
		border: 1px solid rgba(208, 154, 60, 0.9);
		padding: 6px;
	}

	.plate-inner {
		flex: 1;
		display: flex;
		flex-direction: column;
		border: 1px solid rgba(243, 234, 220, 0.32);
		padding: clamp(1rem, 2vw, 1.65rem) clamp(1.1rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem);
		container-type: inline-size;
	}

	.masthead {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem 1.5rem;
		flex-wrap: wrap;
		padding: 0.15rem 0.15rem 0.95rem;
		border-bottom: 1px solid var(--rule-light);
		color: rgba(246, 239, 228, 0.78);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.hero-center {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: clamp(1.35rem, 4vh, 2.75rem) 0.25rem;
	}

	h1 {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 0;
		line-height: 0;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.tagline {
		margin-top: clamp(1rem, 2.5cqi, 1.35rem);
		font-family: var(--serif);
		font-style: italic;
		font-weight: 500;
		font-size: clamp(1.45rem, 6cqi, 3.15rem);
		line-height: 1.15;
		letter-spacing: -0.02em;
		color: #f3e6d2;
		font-variant-numeric: lining-nums;
	}

	.ornament {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		margin: clamp(1.15rem, 2.4cqi, 1.5rem) 0 clamp(0.95rem, 2cqi, 1.2rem);
		color: var(--brass);
	}

	.ornament span {
		width: clamp(2.25rem, 8cqi, 4.25rem);
		height: 1px;
		background: rgba(243, 234, 220, 0.5);
	}

	.support {
		max-width: 40rem;
		font-family: var(--serif);
		font-size: clamp(1.05rem, 2.3cqi, 1.4rem);
		font-weight: 500;
		line-height: 1.45;
		letter-spacing: 0.005em;
		color: #e6d7c3;
	}

	.descend {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.7rem;
		padding: 0.35rem 0.5rem 0.15rem;
		color: #e6d7c4;
		text-decoration: none;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}

	.descend-line {
		width: 1px;
		height: 2.6rem;
		background: linear-gradient(to bottom, transparent, var(--gold) 78%);
	}

	.descend:hover {
		color: #fff8ee;
	}

	.descend:hover .descend-line {
		background: linear-gradient(to bottom, transparent, var(--brass) 80%);
	}

	.atlas {
		background:
			radial-gradient(ellipse 50% 80% at 50% 100%, rgba(208, 154, 60, 0.08), transparent 60%),
			var(--navy);
		padding-block: clamp(1.75rem, 3.5vw, 2.75rem);
	}

	.atlas-row {
		width: min(34rem, calc(100% - 2 * clamp(1.25rem, 5vw, 4rem)));
		margin-inline: auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.7rem;
	}

	.intro,
	.whole {
		background:
			radial-gradient(ellipse 70% 50% at 0% 0%, rgba(110, 75, 52, 0.07), transparent 52%),
			radial-gradient(ellipse 60% 45% at 100% 100%, rgba(208, 154, 60, 0.08), transparent 55%),
			var(--cream);
		color: var(--ink);
	}

	.intro-wrap,
	.reading-inner {
		width: min(68rem, calc(100% - 2 * clamp(1.25rem, 5vw, 4rem)));
		margin-inline: auto;
	}

	.intro-wrap {
		padding-block: clamp(4.5rem, 9vw, 7rem);
	}

	.feature-plate.center {
		width: clamp(10.5rem, 50%, 34rem);
		margin-inline: auto;
		margin-block: clamp(1.5rem, 3vw, 2.2rem) 0;
	}

	.feature-plate.float-end {
		float: right;
		width: 50%;
		margin: 0.2rem 0 0.85rem 1.5rem;
	}

	.with-plate::after {
		content: '';
		display: block;
		clear: both;
	}

	.eyebrow {
		font-family: var(--sans);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--gold-ink);
	}

	.intro h2,
	.whole h2 {
		max-width: min(100%, 16em);
		margin-top: 0.85rem;
		color: var(--navy);
		font-size: clamp(2.35rem, 5vw, 4.15rem);
		font-weight: 560;
		line-height: 1.02;
		letter-spacing: -0.03em;
	}

	.intro-split {
		display: grid;
		grid-template-columns: minmax(11.5rem, 15rem) minmax(0, 1fr);
		gap: clamp(1.75rem, 4vw, 4rem);
		margin-top: clamp(1.75rem, 3.5vw, 2.6rem);
		padding-top: clamp(1.75rem, 3vw, 2.4rem);
		border-top: 1px solid var(--rule-dark);
	}

	.intro-meta {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		padding-top: 0.35rem;
		color: var(--brown-deep);
		font-size: 1.02rem;
		line-height: 1.45;
	}

	.lede {
		font-family: var(--serif);
		font-size: clamp(1.35rem, 2vw, 1.6rem);
		font-weight: 500;
		line-height: 1.45;
		color: var(--navy);
	}

	.prose p,
	.card-body,
	.deck {
		text-wrap: pretty;
	}

	.prose p + p {
		margin-top: 1.15rem;
	}

	.prose p:not(.lede) {
		max-width: 40rem;
		color: var(--ink-soft);
		font-size: 1.125rem;
		line-height: 1.75;
	}

	.closing {
		font-family: var(--serif);
		font-style: italic;
		font-size: 1.35rem;
		color: var(--navy);
		margin-top: 1.75rem;
	}

	.contents {
		margin-top: clamp(1.75rem, 3.5vw, 2.4rem);
		padding-top: 1.15rem;
		border-top: 1px solid var(--rule-dark);
	}

	.contents ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 0;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.contents li {
		display: flex;
		align-items: center;
	}

	.contents li:not(:last-child)::after {
		content: '·';
		margin-inline: 0.7rem;
		color: var(--gold-ink);
	}

	.contents a {
		font-weight: 600;
		font-size: 1.02rem;
	}

	.reading {
		border-top: 4px solid var(--gold);
		background:
			radial-gradient(ellipse 55% 45% at 100% 0%, rgba(208, 154, 60, 0.16), transparent 58%),
			radial-gradient(ellipse 42% 36% at 0% 100%, rgba(110, 75, 52, 0.18), transparent 55%),
			var(--navy);
		color: var(--cream-text);
	}

	.reading-inner {
		padding-block: clamp(5rem, 10vw, 7.5rem);
	}

	.reading .eyebrow {
		color: var(--brass);
	}

	.reading .eyebrow::after {
		content: '';
		display: block;
		width: 2.4rem;
		height: 2px;
		margin-top: 0.9rem;
		background: var(--gold);
	}

	.reading h2 {
		max-width: min(100%, 17ch);
		margin-top: 1rem;
		color: var(--cream-text);
		font-size: clamp(2rem, 4.2vw, 3.6rem);
		line-height: 1.05;
	}

	.deck {
		max-width: 36rem;
		margin-top: 1.25rem;
		color: #e4d3bc;
		font-size: 1.15rem;
		line-height: 1.6;
	}

	.parts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: clamp(2.5rem, 5vw, 3.75rem);
		border-top: 1px solid var(--rule-light);
		border-left: 1px solid var(--rule-light);
	}

	.parts article {
		padding: clamp(1.5rem, 2.4vw, 2.15rem) clamp(1.25rem, 2.2vw, 1.9rem)
			clamp(1.65rem, 2.6vw, 2.35rem);
		border-right: 1px solid var(--rule-light);
		border-bottom: 1px solid var(--rule-light);
		background: rgba(255, 250, 242, 0.015);
		text-align: center;
		transition: background-color 180ms ease;
	}

	.parts article:hover {
		background: rgba(243, 234, 220, 0.045);
	}

	.numeral {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.7rem;
		font-family: var(--serif);
		font-size: 1.85rem;
		font-weight: 500;
		line-height: 1;
		letter-spacing: 0.02em;
		color: var(--brass);
		font-variant-numeric: lining-nums;
	}

	.numeral::before {
		content: '';
		width: 2rem;
		height: 2px;
		background: var(--gold);
	}

	.kicker {
		margin-top: 1rem;
		color: #e7d4b8;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.parts h3 {
		margin-top: 0.45rem;
		color: var(--cream-text);
		font-size: clamp(1.65rem, 2vw, 2.05rem);
		font-weight: 560;
		line-height: 1.15;
	}

	.card-body {
		margin-top: 0.9rem;
		margin-inline: auto;
		max-width: 38rem;
		color: #eadfce;
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.whole {
		border-top: 1px solid var(--rule-dark);
	}

	.relations {
		margin-top: clamp(2rem, 4vw, 2.75rem);
		padding-top: clamp(1.35rem, 3vw, 1.85rem);
		border-top: 1px solid var(--rule-dark);
		display: grid;
		gap: 0.85rem;
		max-width: 40rem;
	}

	.relations p {
		font-family: var(--serif);
		font-size: clamp(1.2rem, 2vw, 1.4rem);
		font-weight: 500;
		line-height: 1.45;
		color: var(--navy);
	}

	@media (min-width: 801px) {
		.atlas-row {
			border: 1px solid rgba(208, 154, 60, 0.55);
			padding: 0.7rem;
		}

		.intro h2,
		.whole h2 {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
	}

	@media (max-width: 800px) {
		.atlas-row {
			display: flex;
			width: auto;
			margin-inline: 0;
			padding-inline: 1rem;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			gap: 0.7rem;
		}

		.atlas-row > :global(figure) {
			flex: 0 0 min(40vw, 11rem);
			scroll-snap-align: start;
		}

		.intro-split,
		.parts {
			grid-template-columns: 1fr;
		}

		.intro-meta {
			gap: 0.4rem;
			padding-top: 0;
		}
	}

	@media (max-width: 700px) {
		.feature-plate.float-end {
			float: none;
			width: clamp(10.5rem, 50%, 16rem);
			margin: 0 auto 1.15rem;
		}

		.masthead {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.35rem;
			letter-spacing: 0.08em;
			font-size: 0.66rem;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.hero-center {
			animation: rise 0.8s ease both;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(8px);
		}

		to {
			opacity: 1;
			transform: none;
		}
	}

	@media print {
		.descend {
			display: none;
		}

		.hero,
		.reading {
			background: white;
			color: black;
			border-color: #d09a3c;
		}

		h1,
		.tagline,
		.support,
		.reading h2,
		.parts h3,
		.deck,
		.card-body,
		.kicker,
		.numeral,
		.closing,
		.relations p {
			color: black;
		}

		.hero {
			min-height: auto;
		}

		.feature-plate.float-end {
			float: none;
			width: 50%;
			margin: 0 auto 1rem;
		}
	}
</style>
