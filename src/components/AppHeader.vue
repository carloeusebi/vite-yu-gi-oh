<script>
import { store } from '../assets/store';
import AppSelectBox from './AppSelectBox.vue';
import AppSearchBar from './AppSearchBar.vue';

export default {
	data() {
		return store;
	},
	components: { AppSelectBox, AppSearchBar },
	emits: ['selected-type-filter', 'search'],
};
</script>

<template>
	<header class="container d-flex justify-content-between align-items-center my-3">
		<img
			class="logo"
			src="pokemon.png"
			alt="logo" />
		<AppSearchBar
			classes="flex-grow-1 mx-5"
			placeholder="Search a pokemon!"
			@search="$emit('search', $event)" />

		<AppSelectBox
			:options="pokemons.types"
			default-option="All Pokemon Types"
			@selected-new-option="$emit('selected-type-filter', $event)" />
	</header>
</template>

<style scoped>
.logo {
	height: 100px;
}
</style>
