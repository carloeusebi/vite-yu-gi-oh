<script>
export default {
	props: {
		options: Array,
	},
	computed: {},
	emits: ['selected-new-option'],
};
</script>

<template>
	<select @change="$emit('selected-new-option')">
		<option
			v-for="option in options"
			:key="option">
			{{ option }}
		</option>
	</select>
</template>

<style scoped></style>
