<script lang="ts">
	import Interior from '#lib/Interior.svelte';
	import { pictures } from '#lib/site.ts';
</script>

<Interior
	eyebrow="Forthcoming"
	title="New Releases"
	description="Forthcoming titles from yeatersink, including the series The Apostles Doctrine from the Apostles Bible."
	lede="Yeatersink is preparing its first series for readers who want the Apostles’ Doctrine traced through the whole Bible."
	image={pictures.jerusalem}
>
	<section class="series" aria-labelledby="series-title">
		<div class="series-frame">
			<p class="coming">Coming soon</p>
			<h2 id="series-title">The Apostles Doctrine from the Apostles Bible</h2>
			<div class="series-copy">
				<p>
					The Apostles Doctrine from the Apostles Bible is the forthcoming series from yeatersink.
					It reads the Apostles’ Doctrine from the Bible the apostles received and preached.
				</p>
				<p>
					Each volume follows one strand of that teaching through the Hebrew Bible, and through the
					early Jewish literature that shares its language and its hope, then into the New Testament
					writings, where the strand is interpreted and put to use.
				</p>
				<p>
					The frame is the frame of the imprint. Biblical Judaism is preferred to the Rabbinic
					Judaism approach to neo-Biblical interpretation, and to the modern Greek philosophical
					approach to Biblical literature. A reader should be able to see the doctrine in the wording
					of both Testaments, understand it, and return to it.
				</p>
			</div>
		</div>
	</section>
	<div class="prose">
		<p>
			Further titles will be announced on this page as they are prepared.
			<a class="text-link" href="#newsletter">Join the newsletter</a>
			to receive emails about new releases and other valuable information.
		</p>
		<p>
			The same reading will appear, at other depths, in
			<a class="text-link" href="/kids-corner">Kids Corner</a>,
			<a class="text-link" href="/for-the-youth-of-tomorrow">For the Youth of Tomorrow</a>,
			<a class="text-link" href="/home-bible-studies">Material for Home Bible Studies</a>,
			and
			<a class="text-link" href="/for-the-intellectuals">For the Intellectuals</a>.
		</p>
	</div>
</Interior>

<style>
	.series {
		background: var(--navy);
		color: var(--cream-text);
		border: 1px solid rgba(208, 154, 60, 0.9);
		padding: 6px;
	}

	.series-frame {
		border: 1px solid rgba(243, 234, 220, 0.32);
		padding: clamp(1.35rem, 3vw, 2.35rem);
	}

	.coming {
		display: inline-block;
		margin-bottom: 0.9rem;
		padding: 0.32rem 0.55rem;
		background: var(--gold);
		color: var(--navy);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		line-height: 1;
		text-transform: uppercase;
	}

	h2 {
		max-width: 16em;
		color: var(--cream-text);
		font-size: clamp(1.85rem, 3.4vw, 2.7rem);
		line-height: 1.08;
	}

	.series-copy {
		max-width: 40rem;
		margin-top: 1.15rem;
	}

	.series-copy p {
		color: #eadfce;
		font-size: 1.075rem;
		line-height: 1.7;
	}

	.series-copy p + p {
		margin-top: 1rem;
	}

	:global(.sheet) .prose {
		margin-top: clamp(1.75rem, 4vw, 2.6rem);
	}

	@media print {
		.series,
		.series-frame {
			background: white;
			color: black;
		}

		h2,
		.series-copy p,
		.coming {
			color: black;
			background: white;
		}
	}
</style>
