<script lang="ts">
	import Interior from '#lib/Interior.svelte';
	import { achieve, jerusalem, pictures } from '#lib/site.ts';
</script>

<Interior
	eyebrow="For the household"
	title="Material for Home Bible Studies"
	description="Bible studies from yeatersink for personal reading and for groups that meet in homes."
	lede="Some of the most durable reading of Scripture happens around a table, not in a lecture hall."
	image={pictures.tunnel}
	align="left"
>
	<div class="prose">
		<p>
			Material for Home Bible Studies is for personal reading and for groups that meet in a home. A
			great deal of the Church’s attention to Scripture has been given at that scale: a passage read
			aloud, a question asked, the same text taken up again the next week.
		</p>
		<p>
			Each study will keep the frame of the imprint. Biblical Judaism is preferred to the Rabbinic
			Judaism approach to interpretation. Passages are set in the worship, hope, and scriptural
			reasoning of the First and Second Temple periods, and in the company of the early Jewish
			writings where that reasoning can be seen. Close attention is given to how New Testament-era
			authors interpret a passage, and to how they put that interpretation to use.
		</p>
		<p>
			A specialist’s library is not required. A willingness to follow an argument is. The studies are
			written to be paused over and used again, so that the Apostles’ Doctrine becomes tangible
			across the whole Bible, in words a household can say to one another.
		</p>
		<p>
			The longer form of this reading is in preparation as the series
			<a class="text-link" href="/new-releases">The Apostles Doctrine from the Apostles Bible</a>,
			and will be announced under New Releases.
		</p>
		<p>
			yeatersink is the publishing arm of
			<a class="external" href={achieve}>Achieve Life Services Inc.</a>
		</p>
		<p>
			<a class="external" href={jerusalem}>Remembering Jerusalem (rememberingjerusalem.org)</a>
			is the hands and feet of
			<a class="external" href={achieve}>Achieve Life Services Inc.</a>, and carries this work into
			practice.
		</p>
	</div>
</Interior>
