<template>
	<article class="card bg-primary-content shadow text-gray-800">
		<div class="card-body">
			<h3 class="card-title">{{ title }}</h3>
			<p class="opacity-80">{{ desc }}</p>
			<div class="card-actions justify-end" v-if="badge">
				<div class="badge badge-primary badge-outline">{{ badge }}</div>
			</div>
		</div>
	</article>
</template>

<script setup>
const { title, desc, badge } = defineProps({
	title: { type: String, required: true },
	desc: { type: String, default: '' },
	badge: { type: String, default: '' },
})
</script>


