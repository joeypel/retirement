<script>
	export let value;
	export let text;
	export let step;
</script>

<div class="mb-4">
	<label class="block text-gray-700 text-sm font-bold mb-2" for={text}>
		{text}
	</label>
	<input
		class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
		type="number"
		bind:value
		step={step ?? 1}
	/>
</div>
