<script>
import { store } from '../assets/store';
import AppSelectBox from './AppSelectBox.vue';

export default {
	data() {
		return store;
	},
	components: { AppSelectBox },
	methods: {
		changedTypesFilter() {
			console.log('changed');
		},
	},
};
</script>

<template>
	<header class="container d-flex justify-content-between align-items-center my-3">
		<img
			class="logo"
			src="pokemon.png"
			alt="logo" />

		<AppSelectBox
			:options="pokemons.types"
			default-option="All Pokemon Types"
			@selected-new-option="changedTypesFilter" />
	</header>
</template>

<style scoped>
.logo {
	height: 100px;
}
</style>
