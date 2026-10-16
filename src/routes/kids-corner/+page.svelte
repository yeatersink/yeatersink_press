<script lang="ts">
	import Interior from '#lib/Interior.svelte';
	import { pictures } from '#lib/site.ts';
</script>

<Interior
	eyebrow="For children"
	title="Kids Corner"
	description="Children’s books, games, and other yeatersink materials that lead young readers toward the whole Bible."
	lede="The whole Bible is also for the youngest readers."
	image={pictures.capernaum}
	align="left"
>
	<div class="prose">
		<p>
			Yeatersink is preparing books, games, and other material for children. They are written so that
			a child can follow the people, the places, and the teaching of the Bible in plain words. A
			child should not be handed a thinner idea that will later have to be unlearned.
		</p>
		<p>
			The frame does not change for a younger reader. The Hebrew Bible and the New Testament-era
			writings are read together, as Biblical Judaism reads them. What changes is the length, the
			pace, and the care taken to be clear.
		</p>
		<p>
			These pages are for the home. They are meant to be read aloud, looked at, played with, and
			returned to. They do not replace the Bible. They lead toward it, and they are written to sit
			honestly beside the
			<a class="text-link" href="/for-the-youth-of-tomorrow">studies for youth</a>
			and the
			<a class="text-link" href="/home-bible-studies">material for home Bible studies</a>
			when a child is ready for more.
		</p>
	</div>
</Interior>
