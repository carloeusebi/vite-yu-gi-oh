<script>
import { store } from '../assets/store';
import AppSelectBox from './AppSelectBox.vue';

export default {
	data() {
		return store;
	},
	components: { AppSelectBox },
	emits: ['selected-type-filter'],
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
			@selected-new-option="$emit('selected-type-filter', $event)" />
	</header>
</template>

<style scoped>
.logo {
	height: 100px;
}
</style>
