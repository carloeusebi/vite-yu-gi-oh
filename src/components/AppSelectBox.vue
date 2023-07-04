<script>
export default {
	props: {
		options: Array,
	},
};
</script>

<template>
	<select>
		<option
			v-for="option in options"
			:key="option">
			{{ option }}
		</option>
	</select>
</template>

<style scoped></style>
