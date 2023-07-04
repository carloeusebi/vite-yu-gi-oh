<script>
export default {
	data() {
		return {
			searchWord: '',
		};
	},
	props: {
		classes: String,
		placeholder: {
			type: String,
			default: 'Search..',
		},
	},
	emits: ['search'],
};
</script>

<template>
	<form
		@submit.prevent="$emit('search', searchWord)"
		:class="classes">
		<input
			class="w-100"
			type="search"
			v-model="searchWord"
			:placeholder="placeholder" />
	</form>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

input {
	padding: 0.5rem;
	border: 0.5rem solid $pokemons-yellow;
}
</style>
