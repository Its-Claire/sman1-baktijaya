<template>
	<div class="stat bg-primary-content rounded-md">
		<div class="stat-title text-gray-800">{{ title }}</div>
		<div class="stat-value">{{ value }}</div>
		<div class="stat-desc text-gray-800">{{ desc }}</div>
	</div>
</template>

<script setup>
const { title, value, desc } = defineProps({
	title: { type: String, required: true },
	value: { type: String, required: true },
	desc: { type: String, default: '' },
})
</script>


